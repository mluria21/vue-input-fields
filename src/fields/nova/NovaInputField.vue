<template>
  <DefaultField :field="field" :fieldClasses="fieldClasses">
    <template slot="field">
      <div class="relative flex">
        <div v-if="mixed && mixed.position == 'left'">
            <span class="-mr-1 flex items-center bg-30 rounded-r-none px-3 whitespace-no-wrap text-sm form-control form-input-bordered"
            >{{mixed.text}}</span>
          </div>
        <input
          :type="$attrs.type || 'text'"
          class="w-full form-control form-input form-input-bordered"
          :class="{'border-danger':field.errors.length}"
          v-model="field.value" 
          @input="input"
          @blur="blur"
          @keydown="keydown"
          @keyup="keyup"
          v-bind="$attrs"
          :style="inputStyle" 
        />
        <button 
          v-if="inlineBtn"
          class="text-primary font-bold cursor-pointer absolute text-sm focus:outline-none active:outline-none focus:shadow-outline active:shadow-outline"
          style="top: 30%;right: 2%;"
          type="button"
          @click="$emit('click')"
          >{{inlineBtn}}</button>
          <div v-if="mixed && mixed.position == 'right'">
            <span class="-ml-1 flex items-center bg-30 rounded-l-none px-3 whitespace-no-wrap text-sm form-control form-input-bordered"
            >{{mixed.text}}</span>
          </div>
      </div>
      <small v-if="field.errors.length" class="text-danger italic">{{field.errors[0]}}</small>
    </template>
  </DefaultField>
</template>

<script>
import DefaultField from './DefaultField'
export default {
    components:{DefaultField},
    
    inheritAttrs :false,

    props:{
      field:Object,
      inputClasses:String,
      fieldClasses:String,
      inlineBtn:String,
      mixed:Object
    },

    methods:{
        input(e){
            //this.$emit('input',e.target.value)
            this.field.setFormat('input',e)
            this.field.validate('input')    
        },

        blur(e){
            this.field.setFormat('blur',e)
            this.field.validate('blur') 
            this.field.markAsDirty()
        },

        keydown(e){
            this.field.setFormat('keydown',e)
            this.field.validate('keydown')
        },

        keyup(e){
            this.field.setFormat('keyup',e)
            this.field.validate('keyup')
        }
    },

    computed:{
      inputStyle(){
        if(this.mixed){
          return this.mixed.position == 'right' ? 
            'border-top-right-radius: 0px;border-bottom-right-radius: 0px;'
            :'border-top-left-radius: 0px;border-bottom-left-radius: 0px;'
        }
      }
    }
}
</script>

<style>

</style>