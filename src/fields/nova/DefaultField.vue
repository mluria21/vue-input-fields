<template>
  <div class="w-full">
        <div class="flex border-b border-40">
            <div class="px-8 py-6 w-1/5">
                <label :for="field.attr.id" class="inline-block text-80 pt-2 leading-tight">
                    {{field.label}}
                    <span v-if="required" class="text-danger">*</span>
                </label>
            </div> 

            <div class="py-6 px-8 w-1/2" :class="fieldClasses">
                <slot name="field"/>
            </div>
            <slot/>
        </div>
  </div>
</template>

<script>
export default {
    props:{
        field:Object,
        fieldClasses:String
    },

    computed:{
        required(){
            let nested = [{name:[{name:'hello'}]}]
            console.log(nested.flat());
            return this.field.rules.filter(rule => rule.callback.name == 'required').length >= 1
        }
    }
    
}
</script>

<style>

</style>