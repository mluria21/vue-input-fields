<template>
  <DefaultField :field="field" :fieldClasses="fieldClasses">
    <template slot="field">
      <select
        v-bind="$attrs"
        @input="input"
        @blur="blur"
        @change="change"
        v-model="field.value"
        class="w-full form-control form-select"
        :class="{'border-danger':field.errors.length}"
      >
          <option value="">-</option>
          <option 
          v-for="(option,index) in field.options"
          :key="index"
          :value="option.value">{{option.label}}</option>
      </select>
      <small v-if="field.errors.length" class="text-danger italic">{{field.errors[0]}}</small>
    </template>
  </DefaultField>         
</template>

<script>
import DefaultField from './DefaultField.vue'
export default {
    components:{DefaultField},

    inheritAttrs :false,

    props:{
      field:Object,
      inputClasses:String,
      fieldClasses:String
    },

    methods:{
      input(e){
            //this.$emit('input',e.target.value)
            this.field.setFormat('input')
            this.field.validate('input')    
        },

        change(e){
            //this.$emit('change',e.target.value)
            this.field.setFormat('input')
            this.field.validate('input')    
        },

        blur(){
            this.field.setFormat('blur')
            this.field.validate('blur')  
        }
    }
}
</script>

<style>

</style>