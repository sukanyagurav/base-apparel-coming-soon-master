const input = document.querySelector('#email');
const form = document.getElementById('form');
const error = document.querySelector('.error');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const email=input.value;
    const emailPattern=/^([a-zA-Z0-9\.-]+)@([a-zA-z0-9-]+)(\.[a-z]{2,18})(\.[a-z]{2,8})?$/
    error.classList.remove('success')
   
    if(email===''){
        errorMessage('Field is empty!');
    }
    else if(!email.match(emailPattern)){

        errorMessage('Please provide a valid email!');
    }
    else{
        error.classList.remove('errorShow');
        error.classList.add('success')
        error.innerHTML='We have send an email';
        setTimeout(()=>{
            
            error.innerHTML='';
            input.value='';
            error.classList.remove('succes')
        },2500)
      
     
    }
})
function errorMessage(msg){
   
    error.classList.add('errorShow');
    error.innerHTML=msg;
    input.getAnimations().forEach((anim)=>{
        anim.cancel();
        anim.play();
    })
    document.querySelector('.btn').getAnimations().forEach((anim)=>{
        anim.cancel();
        anim.play();
    })
}