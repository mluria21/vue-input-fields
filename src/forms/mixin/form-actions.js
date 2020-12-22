const formActions ={
    methods:{
        touchForm(form) {
            Object.values(form).forEach(field=> field.touch())
        },
        
        appendForm(form) {
            let payload = {}
            Object.values(form).forEach(field=>{
                payload = {...payload,...field.fill()}
            })
            return payload
        },

        fillForm(form){
            Object.values(form).forEach(field=>{
                field.value = form[field.name]
            })
        },

        clearForm(form){
            Object.values(form).forEach(field=>{
                field.clear()
            })
        }
    }
}

export default formActions