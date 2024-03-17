// for of statement creates a loop itereating over iterable objects
//including built-in string, array , arraylike objects like nodelist and map and set

var scores = [60,90,80,75]

//syntax

for(var score of scores){
    console.log(score)
}

//method entries()

let colors=['Blue','Red','White']

for(var[index,color] of colors.entries()){
    console.log(index+'->'+color)
}


var str = 'Scaler'
for(var c of str){
    console.log(c)
}