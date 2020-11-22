let saludar = function(){
    console.log("Saludar");
}

saludar();
/*
const mayor = function (nums){
let may=0;
for(let i=0;i<nums.length;i++){
    return nums[i] > may ? may = nums[i];
    }
}

let nums=[1,2,3,4,5]
console.log(mayor);
*/

const mayor = function(a,b){
    return a > b ? a : b;
}
console.log(mayor(mayor(mayor(1,2),mayor(3,4)),5));
