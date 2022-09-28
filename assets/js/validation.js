const name =document.getElementById("name")
const email =document.getElementById("email")
const errorElement=document.getElementById('error')


form.addEventListner(submit,(e)=>{
    let messages=[]
    if(name.value ==''|| name.value==null){
        messages.push('Name is required')
    }
})
form.addEventListner(submit,(e)=>{
    let messages=[]
    if(email.value ==''|| email.value==null){
        messages.push('email is required')
    }
})
