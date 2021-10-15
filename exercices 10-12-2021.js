//                   !=================== Alireza Abbasi ==================!


//                    !=================== 1st exercise ==================!

// تمرین اول : ماکزیمم و مینیمم یه آرایه رو بگیره و بریزه داخل یه آرایه دیگه

const arr = [-5, 0, 6, 9, -7, 2, 5]

function max(prevVal, currentVal) {
    if (prevVal > currentVal) {
        return prevVal
    }
    return currentVal
}

function min(prevVal, currentVal) {
    if (prevVal > currentVal) {
        return currentVal
    }
    return prevVal
}

const maximum = arr.reduce(max)
const minimum = arr.reduce(min)

const arr1 = [minimum, maximum]

console.log(arr1)


 //                   !=================== 2nd exercise ==================!

// تابعی بنویسید که یک آرایه را از ورودی بگیرد و در یک آبجکت تعداد المان های آن را به صورت جداگانه مشخص کند


//  first method ===========>>

function iterateElement(myArray) {
    let result = {}
    for (let item of myArray) {
        if (result[item]) {

            result[item]++
        }
        else {
            result[item] = 1
        }
    }
    return result
}

console.log(iterateElement([1, 0, 1, 2, 1, 0, 2, 1, 2, 2, 1, 0]))


//  second method : the better one ===========>>

const getOccurrences = (arr) => {
    return arr.reduce((prev,current) => {
            if (!prev[current]) {
                prev[current] = 1
            } else {
                prev[current] = prev[current] + 1
            }
            return prev
        }
    , {})
}
console.log(getOccurrences([2, 1, 2, 0, 1, 1, 2, 0, 3, 2]))