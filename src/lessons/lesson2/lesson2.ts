console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0


// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9

/*function curry(f: (a: number, b: number) => number) {
    return function (a: number) {
        return function (b: number) {
            return f(a, b);
        };
    };
}

function sum(a: number, b: number) {
    return a + b;
}

let curriedSum = curry(sum);

console.log(curriedSum(3)(6))*/

// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

/*const makeCounter = () => {
    let count = 0
    return () => console.log(++count)
}

const counter = makeCounter();
counter(); // 1
counter(); // 2
const counter2 = makeCounter();
counter2(); // 1
counter(); // 3*/


// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

/*const makeCounter2 = (start: number) => {
    let count = start
    return {

        increase() {
            console.log(++count)
        },
        decrease() {
            console.log(--count)
        },
        reset() {
            console.log(count=0)
        },
        set() {
            console.log(count=start)
        },
    }
}

const counterObj = makeCounter2(2);
counterObj.increase(); // 3
counterObj.reset()// 0
const counterObj2 = makeCounter2(3);
counterObj2.increase(); // 4
counterObj2.set(); // 3
counterObj.decrease() //-1*/

// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore


// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

//1)
/*const sumTo = (n: number) => {
    let sum = 0

    if(n!==0){
        sum = n + sumTo(n-1)
    }

    return sum
}

console.log(sumTo(5))*/

//2)

/*const factorial = (n: number)=> {
    let result = 1
    if(n!==1 && n!==0){
        result = n * factorial(n-1)
    }

    return result
}

console.log(factorial(5))*/

//3)

/*const fib = (n: number) => {

    let result = 1

    if(n!==1 && n!==2){
        result = fib(n-1) + fib(n-2)
    }

    return result
}

console.log(fib(7))*/

//4)

/*let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

const printList = (obj: any) => {

    console.log(obj.value)
    if (obj.next) {
        printList(obj.next)
    }

}

const printListReverse = (obj: any) => {

    if (obj.next) {
        printListReverse(obj.next)
    }
    console.log(obj.value)

}

printListReverse(list)*/

// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

/*const flat = (arr: Array<any>) => {
    let result:any = []

    arr.forEach((el) => {
            Array.isArray(el)? result = [...result, ...flat(el)] : result.push(el)
        }
    )

    return result
}

console.log(flat([0, 1, 2, [3, 4], 5, [[6,[7,8]],9]]))*/

// just a plug
export default () => {
};