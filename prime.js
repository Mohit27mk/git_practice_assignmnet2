fuction checkPrime(num){
 for(let i=2;i<num;i++){
   if(num%i==0){
          return false;
}
}
return true;

}
let ans=checkPrime(13);
if(ans==true){
console.log("Prime Number);
}else{
console.log("Prime Not Number);
}