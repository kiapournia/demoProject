


let a=(Math.floor(Math.random()*25)+97);
password=''
for(i=0;i<8;i++) {
    b=(String.fromCharCode(a=(Math.floor(Math.random()*25)+97)));
    password+=b;
}

let Num=Math.floor(Math.random()*10);
number='';
for (i=0;i<2;i++) {
    Num=Math.floor(Math.random()*10);
    number+=Num;
}
console.log(number+password+number);