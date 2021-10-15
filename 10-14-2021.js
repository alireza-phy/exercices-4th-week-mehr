// // ================= functions ===============
//
// function writemessage0(message) {
//     console.log('logging the message by function declaration..')
//     console.log('message: %s', message)
// }
//
// const  writemessage1 = function (message) {
//     console.log('logging the message by function expression...')
//     console.log('message: %s', message)
// }
//
// function log (message) {
//     console.log('logging the message by function expression by named function...')
//     console.log('message: %s', message)
// }
//
// const  writemessage2 = log
//
//
// writemessage0('hello')
// writemessage1('hello')
// writemessage2('hello')
// console.log('hello')
//
//
// function writemessage4 =(message) => ('message: %s', message)
// }

// انجین جاوااسکریپت میاد فانکشن ها رو می بره بالای فایل قرار میده و ترتیبش مهم نیست.
//     اما اگه به حالت اکسپرشن بنویسیم اینطوری نیست


// https://quera.ir/problemset/9774/
//

//
// function getNum(num) {
//     let arr1 = num.toString().split('');
//
//     for (let i = 0; i < arr1.length; i++) {
//         console.log(copuNumber(arr1[i]))
//     }
//     return "END"
// }
//
// function copuNumber(number) {
//         let result = 0;
//     for (let i = 0; i < number; i++)
//         result += ((10 ** i) * number)
//     return result
// }
//
// console.log(getNum(1253))
//

//
//
// const printNumbers = (input) => {
//     if (!input && input !== 0) {
//         return ''
//     }
//     input = input.toString()
//     let arrInput = input.split('')
//
//     let result = '';
//     arrInput.map (num => {
//         // result +=  num +: ' ':
//         result += `${num}:`
//         for (let i = 0; i < num; i++)
//
//             result += num;
//
//     result += '\n'
// })
// return result
// }
//
// console.log(printNumbers(5421))
//
//
//
//

//
// const includeString = (str1, str2) => {
//     if (typeof str1 == 'string' && typeof str2 == 'string') {
//         if (str1.length > str2.length) {
//
//             for (let i = 0; i <= str1.length - str2.length; i++) {
//
//                 for (let j = 0; j < str2.length; j++) {
//
//                     if (str1[i + j] !== str2[j]) {
//                         break;
//                     }
//                     if (j === str2.length - 1) {
//                         return i
//                     }
//                 }
//             }
//         }
//     }
//     return -1
// }
//
// console.log(includeString('sssalam', 'ala'))


// function sqrPrint(n) {
//             if (n > 10) {
//                 return -1
//             }
//             let result = ''
//                 for (let i = 0; i <= n; i++) {
//                            result[i] === '*'
//                             result += `${i}:`
//                 }
//
// }


// https://quera.ir/problemset/591/

// فاطمه انجام داد


//
//
// // arr = [1,2,3,4,5,6,7]
//
//
// function move(arr,x,l) {
//     if ( x+l < 0 || x+l >= arr.length)
//         return false
//
// let a = arr.splice(x, 1)[0];
// arr.splice(x + l, 0, a)
// //     return arr
// }
//
// // console.log(move(2,4))
//
// console.log(move([1,2,3,4,5,6,7],2,-2))
//
//
// function reverse(arr) {
//     let l = arr.length-1
//     if (i = 0; i < l ;i++) {
//
//         let a = arr.splice(l)[0];
//         arr.splice(i, a)
//         arr.splice(l-i, 0, a)
//     }
//
//     return reverse(arr)
// }
//
// console.log(reverse([1,2,3,4,5]))
//


//
// کد استاد
// function rev(str) {
//     if (str.length===0) {
//         return ''
//     }
//     return str[str.length-1] + rev(str.substring(0, str.length-1))
// }
//
// console.log(rev([1,2,3,4]))
// جواب نداد
//
//

// کد خودم که جواب نداد
// function remove (str) {
//     l = str.toString()
//     for (i=0;i<l.length;i++)
//         if (str[i] === str [i+1]) {
//             str.substring(i, 1)
//         }
//     return str
// }
//
// console.log(remove('aaalls'))


function neighbor(str) {
    let result = ''
    let l = str.toString()


    for (let i = 0; i < l.length; i++)
        if (str[i] === str [i + 1]) {
            console.log( str.substring(0, i) + str.substring(i + 1, l.length) )
            // console.log(str[i])
        }
    return result
}

console.log(neighbor('aaabbbcc'))
