let arr = [1,2,3,4,5,6,8];

function doubled(arr) {
for(let i = 0; i < arr.length; i++) {
    arr[i] = arr[i]*2;
}
}

doubled(arr);
console.log(arr); 