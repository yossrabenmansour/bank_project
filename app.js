"use strict"

const account1 = {
    owner : "Mark Shmedtman" , 
    movements : [200,450,-400,3000,-650,-130,70,1300] ,
    interestRate : 1.2 , 
    pin : 1111
}


const account2 = {
    owner : "jessica davis" , 
    movements : [5000,3400,-150,-790,-3210,1000,8500,-30] ,
    interestRate : 1.5 , 
    pin : 2222
}

const account3 = {
    owner : "Park Thomas Williams" , 
    movements : [200,-200,340,-300,-20,50,400,-460,100,-400] ,
    interestRate : 0.7 , 
    pin : 3333
}

const account4 = {
    owner : "Sarah Smith" , 
    movements : [430,1000,700,50,90] ,
    interestRate : 1 , 
    pin : 4444
}


const accounts = [account1 , account2 ,account3 ,account4]
//import elements 
const movementsContainer=document.querySelector(".left")
const current=document.querySelector('.amount')
const inComes =document.querySelector('.mov-average-in')
const outAmount=document.querySelector('.mov-average-out')
const interest=document.querySelector('.mov-average-interest')

const displayMovement= function (arr){
    movementsContainer.innerHTML=""

    arr.forEach((mov ,i) => {
     let type =   mov>0 ? "deposit"   : "withdraw" 
        
        let html=  `<div class="${type}-container">
            <div class="${type}-info">
              <span class="${type}"> ${i+1} ${type}</span>
     
            </div>
            <p class="${type}-amount">
             ${mov} <i class="fa-solid fa-euro-sign"></i>
            </p>
          </div>
             <hr />`
        movementsContainer.insertAdjacentHTML("afterbegin",html)
    });
}

displayMovement(account1.movements);


///the current amount 
const displayCurrent= function (arr){
 let sumCurrent= arr.reduce((acc,mov)=> acc+mov,0 )
 current.textContent=`${sumCurrent} €  `///update ui 
}

displayCurrent(account1.movements)

/// display summary ::

const displaySummary=function(accountMovement){
    let inc = accountMovement
    .filter((mov)=> mov>0)
    .reduce((acc,mov)=>acc+mov,0)
///// display ui :: 
    inComes.textContent=`${inc} €`

    let outC=accountMovement
    .filter((mov)=>mov<0) 
    .reduce((acc,mov)=>acc+mov)
 ///// display ui :: 
    outAmount.textContent=`${outC} €`

     const intresetc = accountMovement.filter((mov)=> mov > 0)
    .map((deposit)=> (deposit*1.2)/100).filter((ele)=> ele > 1).reduce((acc,mov)=>acc+mov ,0)
   
   ///// display ui :: 
   
   interest.textContent = `${intresetc} €`

}

displaySummary(account1.movements)