// !=================== Alireza Abbasi ==================!


// !=================== write a function input two array and ignore the items of second array from first one then log the first array ==================!

// ================ first method : with iterate loop ==========

function Minus(arr1, arr2) {
    let l = arr1.length
    if (toString.call(arr1) !== "[object Array]" || toString.call(arr2) !== "[object Array]")
        return (console.log('please input two array'))
    for (let i = 0; i < arr2.length; i++) {
        for (let j = 0; j < l; j++) {
            if (arr2[i] === arr1[j]) {
                arr1.splice(j, 1)
                break
            }
        }
    }
    console.log(arr1)
}

Minus([1, 2, 3, 4, 5, 6, 'a', 'b'], ['a', 1])

// ================ second method : with includes ==========


function Minus(arr1, arr2) {
    if (toString.call(arr1) !== "[object Array]" || toString.call(arr2) !== "[object Array]")
        return (console.log('please input two array'))
    for (let item of arr2) {
        if (arr1.includes(item))
            arr1.splice(arr1.indexOf(item), 1)
    }
    console.log(arr1)
}

Minus([1, 2, 3, 4, 5, 6, 'a', 'b'], ['a', 1, 4, 6])

// ================ third method : with map ==========

function Minus(arr1, arr2) {
    if (toString.call(arr1) !== "[object Array]" || toString.call(arr2) !== "[object Array]")
        return (console.log('please input two array'))
    arr2.map(item => {
        if (arr1.includes(item))
            arr1.splice(arr1.indexOf(item), 1)
    })
    console.log(arr1)
}

Minus([1, 2, 3, 4, 5, 6, 'a'], {a: "a", b: "b"})