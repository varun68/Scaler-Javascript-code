//loops are statements that we can use to control the flow of  program and to do some repeatative 

var a='Hello world'

for(var i=0; i<=10; i++){
    console.log(a)
}


//you have an Array and you have to square each element of that array

var num=[2,3,4,5,6,7,8]

var squaredArr=[]

for(var i=0;i<num.length;i++){
    squaredArr.push(num[i]*num[i])
}

console.log(squaredArr);