//q1
var ab=document.getElementById("text")
console.log(ab.innerText)




//q2

var a2=document.getElementsByTagName("p")

console.log(a2[1].innerText)


//q3

var a3=document.getElementsByClassName("box")
console.log(a3[0].innerText)




//q4
var a4=document.getElementById("q4")

 a4.addEventListener('click',()=>{
    a4.innerHTML="Hello World"
 })

//q5


 function q5()
 {
    var qq5=document.getElementsByTagName("h4")
      console.log( qq5.innerHTML="welcome to elavation academy")
 }
 

//q6

 

 var a6=document.getElementById("heading")
 a6.addEventListener('click',()=>{
    a6.style.color="red"
 })
//q7

let a7 =document.querySelector(".parent");
let count=true;
function changeDirection()
 {
     if(count)
      {
      a7.style.display="block";
       count=false  ;
      }
      else {
        a7.style.display="flex"  ;
       count=true;
      }
 }

 //q8
  //diffrence between window vs document

 //q9
 let display=document.querySelectorAll("h1");
display[2].addEventListener('click',()=> {
    function startClock()
    {
     let time= new Date();
     let hrs=time.getHours();
     let min=time.getMinutes();
     let secs=time.getSeconds();
     console.log(`time:${hrs}:${min}:${secs}`);
    
     let ampm="AM";
     if(hrs>12)
     {
         hrs=hrs-12;
         ampm="PM"
     }
     display[3].innerHTML=` time:${hrs}:${min}:${secs}:${ampm}`
    }
    setInterval(()=>{
         startClock();
    },1500)
})

//q10

         let initialscore=100
         let highscore=null;
         let randomnumber = generateRandomInteger(100);
         function reloadgame(){
             document.getElementById('guessid').value="";
             document.querySelector('.score').textContent=100
             document.querySelector('#sc').textContent="Start guessing..."
             document.body.style.backgroundColor="#222";
             document.querySelector('.number').style.height="12rem"
             document.querySelector('.number').textContent="?";
              randomnumber = generateRandomInteger(100);
         }
         
         function generateRandomInteger(max) {
             return Math.floor(Math.random() * max) + 1;
         }
           
             
           
           function maincheck(){
                   
                let inputnumber= document.querySelector('#guessid').value
            
         
             if(initialscore!==0){
                if(inputnumber>randomnumber ){
                document.querySelector('.message').textContent="Your Guess Is High"
                    initialscore--
                  document.querySelector('.score').textContent=initialscore
                }
                else if(inputnumber<randomnumber){
                 document.querySelector('.message').textContent="Your Guess Is Low"
                 initialscore--
                 document.querySelector('.score').textContent=initialscore
                }
                else{
         
                 document.querySelector('.message').textContent="You Won "
                 document.body.style.backgroundColor="green";
                 initialscore--
                 document.querySelector('.score').textContent=initialscore
                 document.querySelector('.number').textContent=randomnumber;
                 document.querySelector('.number').style.height="10rem"
                  highscore=initialscore
                   document.querySelector('.highscore').textContent=highscore
                  // document.querySelector('.check').style.visibility="hidden" 
                 
                      
                 
                }
             } else{
                 document.querySelector('.message').textContent="Game Over 🙂 🙂 your score is 0"
                 
             }
                
            }
         