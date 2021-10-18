// !=================== Alireza Abbasi ==================!


// !=================== an exercise from the previous class ==================!

// با استفاده از ردیوس تابعی بنویسید که تعداد المان های یک آرایه را مشخص کند

let Arr = [1,2,3,4,4,3,2,1,1,3,4,5,2,5,3,2,1,4,2,1,1]
let map = Arr.reduce(function (previous, current) {
    previous[current] = (previous[current] || 0) + 1 ;
    return previous;
    }, {});

console.log(map);

// !=================== 1st exercise ==================!

// // لینک تمرین
//  https://quera.ir/problemset/9774/

// //  first method ===========>>

function getNum(num) {
    if (typeof(num)!=="number") return console.log("please input an integer");

    let arr1 = num.toString().split('');

    for (let i = 0; i < arr1.length; i++) {
        console.log(" %s :", arr1[i] , copuNumber(arr1[i]))
    }
}

function copuNumber(number) {
    let result = 0;
    for (let i = 0; i < number; i++)
        result += ((10 ** i) * number)
    return result
}

getNum(7569)


// //  second method - better answer =========>

const printNumbers = (input) => {
    if (typeof(input)!=="number") return "please input an integer";

    if (!input && input !== 0) {
        return ''
    }
    input = input.toString()
    let arrInput = input.split('')

    let result = '';
    arrInput.map (num => {
        result +=  num + ': ';

        // or we can write:     result += `${num}:`

        for (let i = 0; i < num; i++)
            result += num;
    result += '\n'
})
return result
}
console.log(printNumbers(32406))



//               !=================== 2nd exercise ==================!

// // برنامه ای بنویسید که دو استرینگ که اولی بزرگتر از دومی است را از ورودی بگیرد، باهم مقایسه کند و بگوید استرینگ دوم از کدام کاراکتر استرینگ اول شروع می شود.

// //  first method ===========>>

const includeString = (str1, str2) => {

    if (typeof str1 == 'string' && typeof str2 == 'string') {
        if (str1.length > str2.length) {

            for (let i = 0; i <= str1.length - str2.length; i++) {

                for (let j = 0; j < str2.length; j++) {

                    if (str1[i + j] !== str2[j]) {
                        break;
                    }
                    if (j === str2.length - 1) {
                        return i
                    }
                }
            }
            return 'your second string is not in first string'
        }
        return 'length of the second string must be less than first one'
    }
    return 'please input two strings'
}

console.log(includeString('hello everyone', 'one'))


// //  second method - better method ===========>>

function subString(str1, str2) {
    if (typeof str1 !== 'string' || typeof str2 !== 'string')
        return "you should input two strings"
    if (str2.length > str1.length)
        return "length of the first string must be more than the second one"
    for (let i = 0; i < str1.length - str2.length + 1; i++) {
        for (let j = 0; j < str2.length; j++) {
            if (str1[i + j] !== str2[j]) {
                break;
            }
            if (j == str2.length - 1) {
                return i;
            }
        }
    }
    return 'your second string is not in first string';

}
console.log(subString('hello to everyone', 'one'))


//               !=================== 3rd exercise ==================!

// // لینک تمرین
// https://quera.ir/problemset/591/


function sqrPrint(n) {
    if (n > 10) {
        return console.log("input number must be less than 10");
    }
    if(typeof(n) !== 'number') return console.log("please enter an integer")
    let result = ''
    for (let i = 0; i < n; i++) {
        if (i === 0 || i === n - 1) result = " *   ".repeat(n)
        else result = " *   " + "     ".repeat(n - 2) + " *"
        console.log(result)
    }
}

sqrPrint(10)



// //               !=================== 4th exercise ==================!

// // تابعی تعریف کنید که یک المان از یک آرایه را به اندازه ی دلخواه جابجا کند
//
function move(arr, index, offset) {

    if (typeof(index) !== 'number' || typeof(offset) !== 'number' || toString.call(arr) !== "[object Array]")
        return console.log("type of your inputs are wrong")

    if (index + offset < 0 || index + offset >= arr.length || index < 0)
        return console.log("your input for offset or index is out of range")

    let a = arr.splice(index, 1)[0];
    arr.splice(index + offset, 0, a)
    console.log(arr)
}

move([1, 2, 3, 4, 5, 6, 7], 2, -2)

// //               !=================== 5th exercise ==================!

// تابعی بنویسید که کاراکترهای یک استرینگ را معکوس کند

//  first method  =========>

function rev(str) {
    if (typeof(str) !== 'string')
        return console.log('please enter a string')

    if (str.length === 0) {
        return ''
    }
    return str[str.length-1] + rev(str.substring(0, str.length-1))
}

console.log(rev('AlirezA'))


// //  second method - better answer =========>

function rev (str) {

    return str ? rev(str.substr(1)) + str[0] : str ;
}

console.log(rev('AlirezA'))

// //               !=================== 6th exercise ==================!

// تابعی بنویسید که در یک استرینگ کاراکترهای تکراری کنار همدیگر را حذف کند

// //  first method  =========>

function neighbor(str) {
        if (typeof(str) !== 'string')
        return 'please enter a string'
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if ((str[i]) !== (str[i + 1])) {
            result += str[i];
        }
    }
    return result;
}

console.log(neighbor('abbaassccddddfffaa'))


// //  second method - better answer =========>

const removeAdjacentDuplicates = (str) => {
    if (typeof(str) !== 'string')
        return 'please enter a string'
    let res = ''
    let lastChar = ''
    for (let char of str) {
        if (lastChar !== char) {
            res += char
            lastChar = char
        }
    }
    return res;
}

console.log(removeAdjacentDuplicates('abbaassccddddfffaa'))