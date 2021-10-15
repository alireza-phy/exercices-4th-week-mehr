// const mycar = {
//     color: 'blue',
//     brand: 'BMW',
//     model: '2015',
//     move: function (d) {
//         console.log("moving %ss meter", d)
//         return true
//     }
// }
// mycar.move(10)
// console.log(mycar.move(10))
//
// const mycar2 = {
//     color: 'white',
//     brand: 'Pride',
//     model: '2020',
//     move: function (d) {
//         console.log("moving %ss meter", d)
//         return 'done'
//     }
// }
// console.log(mycar2.move(6))
// console.log(mycar2.color)


// avoid the duplicate

// function creatCar(color, brand, model) {
//     return {
//         color: color,
//         brand: brand,
//         model: model,
//         move: function (d) {
//             console.log("moving %ss meter...", d)
//         }
//     }
// }
//
// const newcar =creatCar('red','saipa', '1398')
// const newcar2 =creatCar('yellow','Iran khodro','1395')
//
// console.log(newcar.move(10))
// !!constructor function


// function Car(color, brand, model) {
//     this.color = color ;
//     this.brand = brand ;
//     this.model = model;
//     this.move = function (d) {
//         console.log("moving %ss meter", d)
//     }
// }
//
// const newCar =new Car('white', 'mercedes', '2019')
// console.log(newCar.move(10))
//
//
// function creatCar(color, brand, model) {
//     return {
//         color,
//         brand,
//         model,
//         move: function (d) {
//             console.log("moving %ss meter...", d)
//         }
//     }
// }

// console.log(creatCar('red','saipa',1390))

//
// const student = {
//     firstname: "alireza",
//     lastname: 'abbasi',
//     id: '2353646',
// }
// console.log(student)
// student['firstname']= 'mammad'
// student.lastname = 'golabi'
// console.log(student)

// خود کانست رو نمیتونی عوض کنی چون ثابته اما مقادیر پروپرتی هاشو می تونیم تغییر بدیم. هم برا آبجکت و هم برا آرایه این امکان پذیره

// const myarray = ['item1' , 2 , 3 , 4]
// console.log (myarray)
// myarray[0]=1
// console.log (myarray)
// myarray.push(5)
// console.log (myarray)


// finished


// پاک کردن و اضافه کردن یک پراپرتی به یک ابحکت

// student ['age'] = 25 ;
// console.log(student)
// delete student.lastname
// console.log(student)


// finished
//
//
// const student = {
//     firstname : "alireza" ,
//     lastname : 'abbasi' ,
//     id : 2353646 ,
// }
//
// console.log(student.constructor)
//
//
// const someobj = new object()


//
// const somestring = 'hello'
// const somestring1 = new string("hi")

// نشون میده که هر چی ما تعریف می کنیم داخل جاوا اسکریپت به صورت یه آبجکت تعریف میشه
// کانستراکتور چیزیه که داخل اون ابجکت وجود داره و داره میسازدش وقتی دستور کانستراکتور رو داریم داخل کانسول لوگ میدیم مشخص میکنه که اون کانستراکتوری که داره اون ابجکت رو میسازه نوعش چیه
// مثال دیگه:
//
// function Car(color, brand, model) {
//     this.color = color;
//     this.brand = brand;
//     this.model = model;
//     this.move = function (d) {
//         console.log("moving %ss meter", d)
//     }
// }

// console.log(Car.constructor)
// console.log(creatCar.constructor)

// !!finished

//
// const Car2 = new Function('color','brand', 'model', `this.color = color ;
//     this.brand = brand ;
//     this.model = model;
//     this.move = function (d) {
//         console.log("moving %ss meter", d)}`)
//
// console.log(Car2.constructor)
//
//
// const Car2 = new Car2('white', 'mercedes',2019)
// console.log(Car2.move(20))
//
//
// !! has a problem??

// Car.call({},'white', 'mercedes',2019)
//
// Car.apply({},['white', 'mercedes',2019])
//
//
// در بالا {} داره آبجکت خالی رو برامون می سازه و وبعدش داریم مقادیر رو بهش پاس میدیم
// اگه به جای {} عبارت null بزاریم، میاد پیش فرض ست می کنه
// عموما از این دو تا استفاده نمیشه


// !! values vs refrences types

// let value1 = 5 ;
// let value2 = value1 ;
// value1 = 10 ;
//
// console.log('value1',value1)
// console.log('value2',value2)
//
// // ------------
//
// let obj1 = {conter: 5}
// let obj2 = obj1
// obj1.conter = 10
//
// console.log(obj1)
// console.log(obj2)

// !! مثال دیگه

// let counter = 0 ;
// function count(counter) {
//     counter++;
//     return counter ;
// }
// count(counter)
//
// console.log(counter)
//


// const obj = {
//     fname: 'alireza',
//     lname: 'abbasi',
//     id: 22452958,
//     nickname: 'ali',
// }

// console.log(Object.keys(obj))

// for (let key in obj) {
//     console.log(key, obj[key])
// }
//
// for (let key of Object.keys(obj)) {
//     console.log(key, obj[key])
// }

// for (let entry of Object.entries(obj)) {
//
//     console.log(entry)
//
//
//     console.log(entry[0], entry[1])
// }

// const newObj = new Object(value:'') ....   جا موندم نفهمیدم چی شد

//
// console.log('lname' in obj)
// console.log('Lname' in obj)
// console.log('lname0' in obj)

// چک کردن این که ببینیم یه چیزی تو آبجکت هس یا نه

// console.log(obj['lname'])
// console.log(!!obj['lname'])

// این دستور دومی داره به من میگه که یه چیزی وجود داره اما مقدار داره یا نه
// با دستورای پایین مقایسه کن

// console.log(obj['Lname'])
// console.log(!!obj['Lname'])


// !!finished
//

// درس جدید :

// const obj = {
//     fname: 'alireza',
//     lname: 'abbasi',
//     id: 22452958,
//     nickname: 'ali',
// }
//
// const obj2 = obj;
// obj.lname = 'mojahed'
// obj2.fname = 'mojtaba'
//
// console.log(obj)
// console.log(obj2)
//
// میخوایم
// مقادیر
// اینا
// متفاوت
// بشه
//
//
// const oldobject = {
//     fname: 'alireza',
//     lname: 'abbasi',
//     id: 22452958,
//     nickname: 'ali',
// }
// می
// خوایم
// مقدارا
// یکی
// باشن
// اما
// ادرسا
// یکی
// نباشن
//
// const newobject = {}
// newobject['lname'] = oldobject ['lname']
// newobject['fname'] = oldobject ['fname']
// newobject['id'] = oldobject ['id']
// newobject['nickname'] = oldobject ['nickname']
//
// or
//
//
// const newobject = {}
//
// for (let key in oldobject) {
//     newobject[key] = oldobject [key]
// }
//
//
// or
//
// const newobject = {}
//
// Object.assign(newobject, oldobject)
//
// console.log(newobject)
// console.log(newobject === oldobject)
//
// const srcobj = {
//     city: 'esf',
// }
//
// const newobject = {}
// Object.assign(newobject, oldobject, srcobj)
//
// دستور اخیر میاد دو تا ابجکت آخر رو میریزه تو اولی
//
//
// const newobj = {...oldobject}
//
//
// console.log(newobj)
// console.log(newobj === oldobject)


// =================== garbage collector ==================

// =================== math in JS ==================

// console.log(Math)
//
// حتما باید با M بزرگ باشه
// اگه کوچیک بزنی نمیاره

// =================== string in JS ==================

// const somestring = 'hello'
// const somestring2 = new String()
// console.log(somestring.substring())

// کدهای دو بخش قبلی رو استاد نوشتن قرار شد پوش کنن تو گیت هاب. خیلی مهم نیست

// =================== Template ==================

// const str = 'slm b hame'

// اگه بخوایم مثلا از کوتیشن استفاده کنیم داخل پراپرتی مون باید از علامت \ استفاده کنیم
// لیستش با عنوان special charracter         or       escape sequence   سرچ شود

// اگه از `` استفاده کنیم همونایی که بغل دکمه 1 هست . دیگه می تونیم داخلش راحت از کاراکترهای خاص استفاده کنیم
//
// const name = 'ali' ;
//
// function bye() {
//     return "bye"
// }
//
// const str2 = `slm ${name}
// chetori? ${5 + 3}
// ${bye()}`
//
// console.log(str2)
//

// const str = 'slm ' + name + "\nchetori?" ;



// ================== تمرین ================

//
//
// const food = {
//     name: 'pizza',
//     type: 'fastfood',
//     price: '3$',
//     deliverytime: '20 min',
//     rate: '4 star',
//     comment: function (author, date, rate, text) {
//         return {
//             author,
//             date,
//             rate,
//             text,
//         }
//     }
//
//     isReady: false,
//
//
// console.log(food.comment('ali'))
//
//
//
// function food(name, type, price, delivertime ) {
//     this.name = name;
//     this.type = type;
//     this.price = price;
//     this.deliverytime = deliverytime;
//     this.rate = rate;
//     this.comment = [];
//     this.isReady = false;
// }
//
// function Comment (author, text) {
//     return {
//         this.author = author ;
//         this.date = new Date();
//         this.rate = [];
//         this.text = text;
//     }
// }
//
// console.log(food('pizza','fastfood','3$','20min'))
//
//
//
