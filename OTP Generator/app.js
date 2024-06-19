let generate;
let successMessage = document.getElementById('otp-validation-success');
let failMessage = document.getElementById('otp-timing')
let otpExpire = document.getElementById('otp-expire')


function otpManage(){
    let timeout = 15000;
    let interval = 1000;
    let slice = timeout/interval;

    setInterval(function (){
        otpExpire.innerText = `Time will expire in ${slice}`
        slice = slice-1;
    },interval)

    setTimeout(function (){
        otpExpire.innerText = `OTP Expire`;
        clearInterval(otpManage)
        generateOtp();
    }, timeout)

}


function tackleInput(){
    const input = document.getElementById('input-field');
    input.addEventListener('input', function(e){
        let target = e.target;
        let value = target.value;

        if(isNaN(value)){
            target.value= "";
            return;
        }
        
        let nextElement = target.nextElementSibling;
        if(nextElement){
            nextElement.focus();
        }
        validation()
    })  
    
   
}

function generateOtp(){
    
    generate = Math.floor(1000+Math.random()*9000)
    let generatedOtp = document.getElementById('generated-otp');
    generatedOtp.innerText = generate

    otpManage()
}


function validation(){
    let typeNumber = "";
    const field = document.getElementById('input-field');
    [...field.children].forEach((element) =>{
       typeNumber = typeNumber + element.value;
    })

    let result = (generate === parseInt(typeNumber, 10));

    if(result){
        successMessage.innerText = 'Your Otp is matched'
        successMessage.classList.remove("fail");
        successMessage.classList.add("success")
        
        // successMessage.classList.remove=(failMessage)
    }
    else{
        successMessage.innerText = 'Your otp matched failed'
        successMessage.classList.remove('success');
        successMessage.classList.add('fail')
        
    }
}





function init(){
    console.log('JavaScript Added')
    tackleInput()
    setTimeout(generateOtp,2000);
    
}

init();