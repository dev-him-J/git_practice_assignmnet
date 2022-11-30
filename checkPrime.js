//code to check Prime

function checkPrime(N){
    let isPrime=true;
for(let i=0;i<N;i++){
  if(N%i===0){
    isPrime=false;
}
if(isPrime===true){
  console.log("Yes this is a prime number);
}else{
console.log("Not a prime  number")
}
}


//code to check pallindrome

function checkPallindrome(N,str){
let rev_str="";
for(let i=N-1;i<=0;i++){
 rev_str+=str[i];
}
if(rev_str===str){
console.log("It is a pallindrome");
}else{
console.log("Not a pallindrome");
}
}