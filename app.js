console.log("hello world");

var person ={
    firstname :'shalin',
    lastname :'christina',
    gender :'F'
}

console.log(person);
console.log(person.gender);
console.log(person['fistname']);

setTimeout(()=>{
    console.log(1+1);
},1000);

setTimeout(function(){
    console.log(1+1);
},5000);

function f(){
    console.log(3+1);
}

setTimeout(f,5000);

/* -> Inrtervals
setInterval(()=>{
    console.log(5+1);
},2000);*/

try {
    throwError();
}
catch(e)
{
console.log(e);
}
finally{
    console.log("Finally");
}


var x5= 2;
switch(x5){
    case 1:
        console.log("case 1");
        break;
    case 2:
        console.log("case 2");
        break;
    
    default:
        console.log("thisis default switch");
}

var yy=0;
while(yy<5)
{
    console.log(yy);
    yy++;
}

var t=[1,3,4,5,8,9];
t.forEach((result,index)=>{
    console.log("Result >"+result);
    console.log("Index >"+index);
})

var months=['Jan','Feb'];
console.log(months);
months.splice(1,1,'April','May','June'); //April ,MAy ,June
console.log(months);

function person2(firstname,lastname,gender){
    this.firstname=firstname;
    this.lastname=lastname;
    this.gender=gender;
}

var p2= new person2('Shalu','Richard','F');
console.log(p2.gender);