<template>
  <DefaultField :field="field" fieldClasses="flex items-center">
    <template slot="field">
      <input
        v-bind="$attrs"
        type="checkbox"
        class="checkbox"
        :checked="field.value"
        @input="input"
        @change="change"
        v-model="field.value"
      />
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
      field:Object
    },

    methods: {
       input(e){
            //this.$emit('input',e.target.checked)
            this.field.setFormat('input')
            this.field.validate('input')   
        },

        change(){
            //this.$emit('change',e.target.checked)
            this.field.setFormat('change')
            this.field.validate('change')
        }
    },
}
</script>

<style>

</style>