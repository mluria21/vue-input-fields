<template>
  <div class="modal-editor" v-if="showModal" @click.self.stop="close()">
        <div class="box-wrapper" style="width:800px;">
            <div class="bg-white rounded-lg shadow-lg overflow-hidden w-full">
                <div>
                    <h2 class="border-b border-40 py-6 px-6 text-90 font-normal text-xl">
                    {{config.title}}
                    </h2>
                </div>

                <template
                    v-for="(header,key) in fields"
                >

                    <div 
                        v-show="key !== 'no-header'" 
                        :key="key"
                        style="height:65px" class="bg-30 px-6 py-3 flex"
                    >
                        <div class="flex items-center mr-auto">
                            {{key}}
                        </div>
                    </div>  

                    <component
                        v-for="(field,index) in header"
                        :key="`${index}_${key}`"
                        :is="field.component"
                        :field="field"
                        v-bind="field.attr"
                        fieldClasses="w-3/4"
                        autocomplete="nope"
                    />

                </template>

                <div class="bg-30 px-6 py-3 flex">
                    <div class="flex items-center ml-auto">
                        <button @click.prevent.stop="close()" type="button" class="btn btn-link dim cursor-pointer text-80 ml-auto mr-6">Cancel</button>
                        
                        <NovaProgressButton
                        @click.prevent.stop="submit()"
                        type="button"
                        :disabled="submitted"
                        :processing="submitted"
                        >
                        {{config.title}}
                        </NovaProgressButton>
                    </div>
                </div>
            </div>
        </div>      
    </div>
</template>

<script>
import NovaInputField from '../../fields/nova/NovaInputField.vue'
import NovaCheckboxField from '../../fields/nova/NovaCheckboxField.vue'
import NovaProgressButton from '../../fields/nova/NovaProgressButton.vue'
import NovaSelectField from '../../fields/nova/NovaSelectField.vue'
export default {
    components:{
        NovaInputField,
        NovaCheckboxField,
        NovaSelectField,
        NovaProgressButton
    },

    data(){
        return{
            fields:{},
            modalResolver:null,
            modalRejecter:null,
            showModal:false,
            config:null,
            submitted:false
        }
    },

    methods:{
        open(config){
            return new Promise((resolve,reject)=>{
                this.modalResolver = resolve
                this.modalRejecter = reject

                this.config = config
                this.fields = config.fields// JSON.parse(JSON.stringify(config.fields))
                this.showModal = true
            })
        },

        close(){
            this.config = null
            this.showModal = false
            this.modalRejecter()
        },

        async submit(){
            Object.values(this.fields).flat().forEach(field=> field.touch())
            if(Object.values(this.fields).flat().some(field => !field.isValid))return

            let payload = {}
            Object.values(this.fields).flat().forEach(field => {
                payload = {...payload,...field.fill()}
            })

            if(this.config.callback){
                try {
                    this.submitted = true
                    await this.config.callback(payload)
                    this.modalResolver(payload)
                    this.config = null
                    this.showModal = false
                    this.submitted = false
                } catch (error) {
                    this.submitted = false
                    console.log(error);
                    if(error.response && error.response.status == 422){
                        Object.values(error.response.data.errors).forEach(error =>{
                            this.$toasted.show(
                                error,
                                { type: 'error' }
                            )
                        })
                        
                    }else{
                        this.$toasted.show(
                            'There was an error submitting the form',
                            { type: 'error' }
                        )
                    }
                }
            }else{
                this.modalResolver(payload)
                this.config = null
                this.showModal = false
                this.submitted = false
            } 
        },

        handleKeydown(e){
            if(e.key == 'Escape')this.close()
        },
    },

    mounted(){
        window.addEventListener('keydown',this.handleKeydown)
    },

    beforeDestroy(){
        window.removeEventListener('keydown',this.handleKeydown)
    }
}
</script>

<style scoped>
.modal-editor {
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    justify-content: center;
    padding-top: 50;
    background-color: rgba(179, 185, 191, 0.8);
    z-index: 100;
    padding: 50px 0;
}
.box-wrapper{
    height: 100%;
    overflow: auto;
    width: 650px;
}
</style>