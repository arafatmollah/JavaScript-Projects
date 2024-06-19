let generate;
let successMessage = document.getElementById('otp-validation-success');
let failMessage = document.getElementById('otp-validation-fail')

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
}


function validation(){
    let typeNumber = "";
    const field = document.getElementById('input-field');
    [...field.children].forEach((element) =>{
       typeNumber = typeNumber + element.value;
    })
    console.log(typeNumber)

    let result = (generate === parseInt(typeNumber, 10));

    if(result){
        successMessage.innerText = 'Your Otp is matched'
        successMessage.classList.remove=(failMessage)
    }
    else{
        failMessage.innerText = 'Your otp matched failed'
    }
}


function init(){
    console.log('JavaScript Added')
    tackleInput()
    setTimeout(generateOtp,2000);
    
}

init();