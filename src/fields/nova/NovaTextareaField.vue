<template>
  <DefaultField :field="field" :fieldClasses="fieldClasses">
    <template slot="field">
      <div class="relative">
    
        <textarea
          :type="$attrs.type || 'text'"
          class="w-full form-input form-input-bordered"
          :class="[{'border-danger':field.errors.length},inputClasses]"
          v-model="field.value" 
          @input="input"
          @blur="blur"
          @keydown="keydown"
          @keyup="keyup"
          v-bind="$attrs"
        ></textarea>
       
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
    }
}
</script>

<style>

</style>