
// // //Return promise
// // function returnPromise(a) {
// //     return new Promise((resolve, reject) => {
// //         if (a % 2 ==0 ) {
// //             resolve ('Chẵn')
// //         } else{
// //             reject ('Lẻ')
// //         }
// //     })
// // }

// // // returnPromise(4)
// // // .then( result => console.log(result))
// // // .catch(result => console.log(result))

// // //Flat array
// // // arr = [1, [2,3], [4,[5,6]]]
// // // function flattern(arr) {
// // //     let result = []
// // //     arr.forEach((item) => {
// // //         if(Array.isArray(item)) {
// // //             flattern(item)
// // //         } else {
// // //             return result.concat(item)
// // //         }
// // //         console.log(result)
// // //     })
// // // }
// // // flattern(arr)
// // // console.log(arr)

// // // find second number
// // // arr  = [1, 7,7, 7 ,3 ,2, 2 ,4, 4, 5, 6 ,6 ,  6]

// // // arr.sort((a,b) => b - a)
// // // // console.log(arr)
// // // function find(arr){
// // //     for(var i = 0; i < arr.length; i++) {
// // //         let result = []
// // //         if (arr[i+1] < arr[i]){
// // //             let result = []
// // //             for( var j = 0; j < arr.length - i; j++) {
// // //                 if(arr[j] === arr[i+1]) {
// // //                     result.push(arr[j])
// // //                 } 
// // //             }
// // //         return result
// // //         }
// // //     }
// // // }
// // // console.log(find(arr))

// // ////////
// // function bark() {
// //     console.log("Woof!");
// //   }
  
// //   bark.animal = "dog"
// //   console.log(bark)

// //////////// find item

// // array = [1, 3, 5, 6]
// // function search(arr, x) {
// //     let pos = 0
// //     for (let i = 0; i < arr.length; i++) {
// //         if ( arr[i] === x) {
// //             return `number at: ${pos}, value: ${arr[i]}`
// //         }
// //         pos++
// //     }
// //     return "Khong ton tai"
// // }


// // console.log(search(array, 3))

// ///////////////////flattern 

// // array = [1, [2,3], [7,[4,5,6]]]


// // function flattern(arr) {
// //     let result = []
// //     for (let i = 0; i < arr.length; i++) {
// //         if(Array.isArray(arr[i])){
// //             result = result.concat(flattern(arr[i]))
// //         } else{
// //         result = result.concat(arr[i])}
// //     }
// //     return result
// // }
// // console.log(flattern(array))

// // ////// minus and /

// // function div(a,b) {
// //     array = []
// //     return array = [a/b, a%b]
// // }

// // console.log(div(5,2))

// //////////////freq

// let string = 'aabbcccd'

// function freq(str) {
//     let result = ''
//     let numb = 0
//     for (let i = 0; i < str.length; i++) {
//         numb ++
//         if(str[i] != str[i+1]){
//             result = `${result}${numb}${str[i]}`
            
//             numb = 0
//         }
//     }
//     return result
// }
// console.log(freq(string))

///////////// reverse

// let string = 'abcxyz123'
// console.log(string.split("").reverse().join(""))
/////////////// map
array = [1, 2 , 3]
array.forEach((value) => {
    value*value
    console.log(array)
})