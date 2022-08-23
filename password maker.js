 
//generate otp
function MakeRandom(a,b){
   return  Math.floor(Math.random()*(b-a+1))+a;
}


let pass=''


MakeRandom(97,122);
for(let i=0;i<8;i++){
    if (Math.random()*62<10){
        pass+=MakeRandom(0,10);
    }
    if(Math.random()<.5){
    pass+=String.fromCharCode(MakeRandom(97,122));
    }else{
    pass+=String.fromCharCode(MakeRandom(67,90));
    }
    
}
    console.log(pass);

 