const myArray = ['🍎','🍍','🍉','🍌','🥝']

let x = "🍉"
const arrayLen = myArray.length;

const arrayCont = myArray.includes(x)

const arrayInd = myArray.indexOf(x)

const before = myArray[arrayInd - 1]
const after = myArray[arrayInd + 1]

const firstFruit = myArray.shift()
const lastFruit = myArray.pop() //or myArray[arrayLen - 1] can get the last element too

console.log(`First item: ${firstFruit} & Last item: ${lastFruit}`)


if(arrayCont){
    console.log(`Your item is ${x}, the item before is ${before} and the item after is ${after}`)
    console.log(`Your array length is ${arrayLen} and it contain ${x} at position ${arrayInd}`)
} else {
    console.log(`Your array length is ${arrayLen} and it does not contain ${x} `)
}



/*Note array
(1) tidak semestinya arrayBuah[0] 1,2,3,4,...
boleh juga arrayBuah[nenas]="🍍"

(2) jika tak mahu array original berubah jika yg copy diubah:-
yg salah : arrayOri = ['','','']; 
arrayCopy = arrayOri
yg betul : 
1. arrayCopy = [...arrayOri] <--script operator
2. arrayCopy = arrayOri.slice()
3. arrayCopy = Array.from(arrayOri)
4. JSON.parse(JSON.stringify(arrayOri)

(3) cara gabungkan array :-
array1.concat(array2)

*/


const mixArray = ['🍌',10, {tomato : function() {console.log("ini tomato")}},['eat','food']] // string,number,object,array

console.log(mixArray[3]) // output: ['eat','food']
console.log(mixArray[3][1]) // output: food
console.log(mixArray[2]) // output: tomato
console.log(mixArray[2].tomato) // output: f() {console.log("ini tomato")}
mixArray[2].tomato()

//below is to get the list of element in array (list of)
for(list of mixArray) console.log(list)
//below is to get the list of index in array (list in)
for(list in mixArray) console.log(list)


mixArray.map((value,index) => console.log(index,value))


//Below is an example of datas from API

const datas = [
    {
        "name": "Daus",
        "stack": "js react",
        "age": 30
    },
    {
        "name": "Fitri",
        "stack": "html",
        "age": 25
    },
    {
        "name": "DausFit",
        "stack": "css",
        "age": 27
    },
    {
        "name": "FFitri",
        "stack": "python",
        "age": 31
    },

]


datas.map((values,index) => {
    console.log(values)
}) //semua data dimunculkan

datas.map((values,index) => {
    console.log(values.name)
}) //data nama sj dimunculkan

datas.map((values,index) => {
    console.log(values.name, values.stack)
}) //data nama dan stack sj dimunculkan

datas.sort((a,b) => b.age - a.age).map(values => console.log(values)) //sort in decreasing order
datas.sort((a,b) => a.age - b.age).map(values => console.log(values)) //sort in increasing order

datas.filter((x) => x.age > 30).map((values) => console.log(values)) //filter person who age more than 30 only


//filter whos age below 30 and sort in increasing order
datas
.sort((a,b) => a.age-b.age)
.filter((x) => x.age < 30)
.map((values) => console.log(values))