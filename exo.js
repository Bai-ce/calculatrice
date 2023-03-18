let total = 0;

function addiction(x){
    total+=x;

}

function soustraction(x){
    total -= x;
    return total;
}

function multiplication(x){
   if(total===0)
   {return total= x}
   else{
    total *= x;
    return total;
       }
}

function division(x){

    if (total===0){
       return (total = x);   
    }
    if (x !== 0)
    {
        total /= x;
    return total;
}


}

const buttons = document.querySelectorAll(".btn")
const result = document.getElementById("result")

buttons.forEach(button => {
    button.addEventListener("click",(e)=>{
     result.textContent += e.target.id   
    })
    
});
equal.addEventListener("click",()=>{
    result.textContent = eval(result.textContent)
})

clear.addEventListener("click",()=>{
    result.textContent = ""
})

