//
// const myArr = [0, 1, 2, 4]
// console.log(myArr)
//
// // =========== add some items to end of an array
//
// myArr.push(5, 6)
// console.log(myArr)
//
// // =========== add some items to start of an array
//
// const myArr2 = [0, 1, 2, 4]
// myArr2.unshift(-2, -1)
// console.log(myArr2)
//

// const myArr3 = [0, 1, 2, 4]
// myArr3.splice(2, 0, 'a','b')
// console.log(myArr3)


//
// // ========= checkout where an item is in array
//
// const myArr = [0, 1, 2, 4]
//
// console.log(myArr.indexOf(4))
// console.log(myArr.indexOf(6) !== -1)
// console.log(myArr.indexOf(2) !== -1)
//
//
// const myArr2 = [0, 1, 2, 3, 4, 2]
//
// console.log(myArr2.indexOf(2))
// console.log(myArr2.lastIndexOf(2))
//

// // ========= checkout an item from a special position index

//
// const charArr = ['a', 'b', 'c', 'a', 'x', 'c', 'a']
//
// console.log(charArr.indexOf('a',2))
// console.log(charArr.lastIndexOf('a',2))
//
// // ========= checkout an item exist or not
//
// console.log(charArr.includes('a'))
// console.log(charArr.includes('y'))

// // ========= for objects
//
// const objArr = [
//     {id: 1, name: 'alireza'},
//     {id: 2, name: 'ali'},
//     ]
//
// console.log(objArr.indexOf({id: 1, name: 'alireza'}))
// console.log(objArr.includes({id: 1, name: 'alireza'}))
//
// // وقتی شما آکلاد باز می کنی داری یه آدرس جدید تعریف می کنی به خاطر همین وقتی داخل کنسول لاگ آکلاد باز می کنی چون آدرس جدید داده، نمی تونه اون آیتم قبلی رو پیدا کنه
// // برای آبجکت ها می تونیم به صورت زیر عمل کنیم
//
// const std1 = {id: 1, name: 'alireza'};
// const objArr2 = [
//     std1,
//     {id: 2, name: 'ali'},
// ]
//
// console.log(objArr2.indexOf(std1))
// console.log(objArr2.includes(std1))
//
// // // برای فایند کردن از فانکشن فایند استفاده می کنیم. به صورت زیر:
// //
//
//     const objArr = [
//         {id: 1, name: 'alireza'},
//         {id: 2, name: 'ali'},
//         {id: 3, name: 'ali'},
//     ]
//
// const foundItem = objArr.find(function (element) {
//     return element.name === 'ali';
//     })
// console.log(foundItem)
//
//
// const foundItem2 = objArr.find(function (element) {
//     return element.name === 'ali' && element.id === 3;
// })
// console.log(foundItem2)
//
//
// const foundItem3 = objArr.find(function (element) {
//     return element.name === 'ali' && element.id === 4;
// })
// console.log(foundItem3)
//
// // در بالا حالت های مختلف رو نشون دادیم

// می تونیم تابع مون رو به صورت زیر بنویسیم. دو تا حالت گفته شده.
    // اگه اروو فانکشنی خواستیم بنویسیم وقتی یه پارامتر داریم می تونیم پرانتز رو نذاریم. اگه هم خط کدمون یه دونه است می تونیم ریترن و آکلاد رو حذف کنیم.
//
// const foundItem3 = objArr.find((element) =>  {
//     return element.name === 'ali' && element.id === 4;
// })
//
// const foundItem3 = objArr.find(element => element.name === 'ali' && element.id === 4)
//

// const arrowfunction = (param1, param2) => {
//     console.log(param1, param2)
// }
//
// arrowfunction('slm', 'be hame')
//
//
// مثلا تابع زیر رو به دو روش  مختلف تعریف کردیم
//
//
// function somefunc(param1) {
//     console.log(param1)
// }
//
//
// const somefunc1 = param1 => console.log(param1)
//
// somefunc1(1)

// removing an element from an array

// const arr = [1, 2, 3, 4, 5]

// const lastItem = arr.pop();
// console.log(arr)
// console.log(lastItem)
//
// const firstItem = arr.shift();
// console.log(arr)
// console.log(firstItem)

// const someMidleItems = arr.splice(2,2);
// console.log(arr)
// console.log(someMidleItems)

// نکته تو پرانتز
// ctrl + click ---------------->   میره توی داکیومنت

 // ================== ampty an array ==============
//
// let arr1 = [1, 2, 3, 4, 5]
// let arr2 = arr1
//
// console.log(arr1)
//
// // جدا جدا دستورای زیر رو اضافه کن و کنسلو لاگ شو ببین
//
// // arr1 = []
//
// // arr1.length = 0
//
// // arr.splice(0,arr1.length)
//
// // while (arr1.length > 0) {
// //     arr1.pop()
// // }
//
// console.log(arr1)
// console.log(arr2)
//
// // بهترین راهی که داریم همون راه دومه

// ================== slicing/combining arrays ==============

// const arr1 = [0, 1, 2];
// const arr2 = [3, 4, 5];
//
// const arr3 = arr1.concat(arr2)
// console.log(arr1)
// console.log(arr2)
// console.log(arr3)
//
//
// const arr4 = arr3.slice(2, 5)
// console.log(arr4)
// const arr5 = arr3.slice(2)
// console.log(arr5)
// const arr6 = arr3.slice()
// console.log(arr6)



//
// // ========== exersice 1 =================
//
// let arr1 = []
//
// function exmpl(a,b) {
//     let x = Math.abs(b-a)
//     let arr1 = []
//     for (let i = a+1; i < b; i++) {
//         if (x % i === 0) {
//            arr1.push(i)
//         }
//     }
//     return arr1
// }
// console.log(exmpl(1,25))


// ========== exersice 2 =================

