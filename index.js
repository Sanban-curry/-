'user strict'
const gu= document.getElementById('1');
const choki= document.getElementById('2');
const pa= document.getElementById('3');
const mnt= document.getElementById('0');

const psb =['グー！！','チョキ！！','パー！！'];
const n = Math.floor(Math.random()*psb.length); //n=0がグー、1がチョキ、2がパー
const dst =psb[n];

function restart1(){
  mnt.classList.remove('aiko');
  mnt.textContent='あいこで...';
  const dst = psb[Math.floor(Math.random()*psb.length)];
}
function restart2(){
  mnt.classList.remove('kachi');
  mnt.textContent='じゃんけん...';
  const dst = psb[Math.floor(Math.random()*psb.length)];
}
function restart3(){
  mnt.classList.remove('make');
  mnt.textContent='じゃんけん...';
  const dst = psb[Math.floor(Math.random()*psb.length)];
}


gu.addEventListener('click',()=>{
   mnt.textContent= dst;
     if(n===0){
     setTimeout(function(){
      mnt.textContent='あいこ！！';
      mnt.classList.add('aiko');
      setTimeout(restart1,800);
     },600);
    }else if(n===1){
     setTimeout(function(){
      mnt.textContent='あなたの勝ち！！';
      mnt.classList.add('kachi');
      setTimeout(restart2,800);
     },600);
     
   }else {
     setTimeout(function(){
      mnt.textContent='あなたの負け！！';
      mnt.classList.add('make');
      setTimeout(restart3,800);
     },600);
   }
});

    
 choki.addEventListener('click',()=>{
   mnt.textContent= dst;
     if(n===1){
     setTimeout(function(){
      mnt.textContent='あいこ！！';
      mnt.classList.add('aiko');
      setTimeout(restart1,800);
     },600);
    }else if(n===2){
     setTimeout(function(){
      mnt.textContent='あなたの勝ち！！';
      mnt.classList.add('kachi');
      setTimeout(restart2,800);
     },600);
     
   }else {
     setTimeout(function(){
      mnt.textContent='あなたの負け！！';
      mnt.classList.add('make');
      setTimeout(restart3,800);
     },600);
   };
});
    
 pa.addEventListener('click',()=>{
   mnt.textContent= dst;
     if(n===2){
     setTimeout(function(){
      mnt.textContent='あいこ！！';
      mnt.classList.add('aiko');
      setTimeout(restart1,800);
     },600);
    }else if(n===0){
     setTimeout(function(){
      mnt.textContent='あなたの勝ち！！';
      mnt.classList.add('kachi');
      setTimeout(restart2,800);
     },600);
     
   }else {
     setTimeout(function(){
      mnt.textContent='あなたの負け！！';
      mnt.classList.add('make');
      setTimeout(restart3,800);
     },600);
    
   };



 });
