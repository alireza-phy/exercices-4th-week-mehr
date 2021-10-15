//
// // =========== spread operator ==============
//
// const arr1 = [0,1,2]
// const arr2 = [3,4,5]
// const arr3 = [...arr1,'a','b',...arr2]
// const arr4 = [...arr3]
//
// // console.log(arr3)
// // console.log(arr4)
//
// // دستور آخری شبیه کلون کردن می مونه
//
// // ================ joining arrays ==============
// const joinedResult = arr3.join(' - ')
//
// console.log(joinedResult)
// console.log(typeof joinedResult)
//
//
// const hello = 'hello world'
// const arrHello = hello.split(' ')
//
// console.log(arrHello)
// console.log(typeof arrHello)
//
//
// const newArr = joinedResult.split(' - ')
// console.log(newArr)
//
// // برای تعریف ماتریس باید آرایه تو آرایه تعریف کنیم
// // مثلا یه ماتریس داریم شکل زیر می تونیم اینجوری تعریفش کنیم:
//
// // * |  0  2  |
// // * |  8  5  |
//
// const matrix0 =[ [0,2],[8,5] ]
// const matrix1 =[ [0,2],[8,5] ]
//
// // برای سورت کردن مقادیر:
//
// const names = ['alireza', 'mammad' , 'farzin','arash']
// names.sort();
// console.log(names);

// let arr = [32, 54, 2, 0, 12]

// arr.sort(function (a,b) {
//     if (a>b) {
//         return 1
//     }else if (b>a) {
//         return -1
//     } else {
//         return 0
//     }
//     }
// );
// console.log(arr);

//
// let arr2 = [32, 54, 2, 0, 12]
// arr2.sort(function (a,b) {
//         if (a>b) {
//             return 1
//         }
//         if (b>a) {
//             return -1
//         }
//             return 0
//     }
// );
// console.log(arr2);
//
// let arr3 = [32, 54, 2, 0, 12]
// arr3.sort((a,b) => a - b)
// console.log(arr3);

//
// const students = [
//     {name: 'ali', average: 17},
//     {name: 'alireza', average: 17.24},
//     {name: 'mamad', average: 18.24},
// ]
//
// // به صورت نزولی
//
// students.sort((a,b) => {
//     return a.average - b.average
//     })
//
// console.log(students)
//
// // به صورت صعودی
//
// students.sort((a,b) => {
//     return b.average - a.average
// })
//
// console.log(students)


// ================ testing arrays element ==================

// const arr = [-5, -3, +1, -7]
// const allIsPositive = arr.every(item => item > 0)
// const someIsPositive = arr.some(item => item > 0)
//
// console.log(allIsPositive)
// console.log(someIsPositive)


// یه جور دیگه برا دیدن خروجی که کجا کات میشه
//
// const allIsPositive = arr.every(item => {
//     console.log(item)
//     return item > 0
// })

// console.log(allIsPositive)
//
// const someIsPositive = arr.some(item => {
//     console.log(item)
//    return item > 0
// })

// console.log(someIsPositive)


// ========== filterring ==============
//
// const arr2 = [-5, -3, +1, +7]
// const filteredList = arr2.filter(value => value > 0)
// console.log(filteredList)


// =============== maping ==================

// const arr = [-5, -3, +1, +7]
// const items = arr.map(item => {
//     let obj = {key: item }
//     return obj
//     })
// console.log(items)

// ================ chainable methods ================
// مرحله به مرحله زنجیرها رو اضافه و حذف کن نتیجه رو چک کن

//
// const arr = [-5, 0, 6, 9, -7, 2, 5]
// const items = arr
//     .filter(n => n > 0)
//     .map(n => ({value: n}))
//     .filter(obj => obj.value > 2)
//     .sort((a,b) => a.value - b.value)
//
// console.log(items)
//


// ============== reduce method ==============

// function calc(prevVal, currentVal) {
//     return prevVal + currentVal
// }
//
//
// const arr = ['1', '1', '0', '1']
//
// const reduceResult = arr.reduce(calc,10)
//
// console.log(reduceResult);

// اون مقدار 10 که گذاشتیم دیفالتیه که میذاریم به عنوان مقدار اولیه پریو ولیو . اگه ندیمش دیفالت میاد همون ارایه اولو میذاره
// اگه بزاریم میاد این عدد رو به عنوان اولین ولیوو در نظر میگیره و جمع می کنه با بعدی و الی آخر


// تمرین اول : ماکزیمم و مینیمم یه آرایه رو بگیره و بریزه داخل یه آرایه دیگه
//
//
// const arr = [-5, 0, 6, 9, -7, 2, 5]
//
// function max(prevVal, currentVal) {
//     if (prevVal > currentVal) {
//         return prevVal
//     }
//     return currentVal
// }

// function min(prevVal, currentVal) {
//     if (prevVal > currentVal) {
//         return currentVal
//     }
//     return prevVal
// }

// const maximum = arr.reduce(max)
// const minimum = arr.reduce(min)

// const arr1 = [minimum, maximum]
//
// console.log(arr1)


// این اولین تمرینی بود که خودم نوشتم سر کلاس و درست بود :* :$
// الان ذوق مرگم


// تمرین دوم که جواب نداد


//
//
//
// const arr2 = [1, 0, 2, 1, 1, 2, 1]
// let count = 1;
// const arr3 = new Object();
//
// function iterrate(prevVal, currentVal) {
//     if (prevVal = currentVal) {
//         count = count++
//         return count
//     }
// }
//
// const val1 = arr2.reduce(iterrate);
//
// console.log(val1)
//

// مال فاطمه

// function iterateElement(myArray) {
//     let result = {}
//     for (let item of myArray) {
//         console.log(item)
//         if (result[item]) {
//
//             result[item]++
//             console.log(result)
//         }
//         else {
//             result[item] = 1
//             console.log(result)
//         }
//
//     }
//
//     return result
// }
//
// const arr = [1, 0, 2, 1, 2, 2, 1, 0]
// console.log(iterateElement(arr))


// دو خط کد مهم
//
// const a = [-5, 0, 2, 9, -7, 2, -5]
// for (let i in a) console.log(i)
// for (let i of a) console.log(i)
//

// تمرین یکی دیگه از بچه ها
//
// function repeatCounter(arr) {
//     let obj = {}
//     for (let i = 0 ; i < arr.length; i++) {
//         let tmpcount = 0;
//         let tmp = arr [i];
//         if (obj.includes(tmp)) {
//             continue;
//         }
//         for (let j = 0 ; j <= arr.length; j++) {
//             if (temp === arr[j]) {
//                 tmpcount++ ;
//             }
//         }
//         obj[] =
//     }
//     return obj
// }
//
// const a = [-5, 0, 2, 9, -7, 2, -5]

// جواب خانم حیدری که بهترین جواب بود
//
// function count(arr) {
//     let obj = {}
//     for (let i of arr) {
//         if (i in obj) obj[i]++;
//         else obj[i] = 1 ;
//     }
//     return obj;
// }
//
// const arr = [-5, 0, 2, 9, -7, 2, -5]
// console.log(count(arr))


// const myarr = [2, 1, 2, 0, 1, 1, 2, 0, 2 , 2]
//
// const getOccurrences = (arr) => {
//     return arr.reduce((prev,current) => {
//             if (!prev[current]) {
//                 prev[current] = 1
//             } else {
//                 prev[current] = prev[current] + 1
//             }
//             return prev
//         }
//     , {})
// }
//
// console.log(getOccurrences(myarr))
//
//

