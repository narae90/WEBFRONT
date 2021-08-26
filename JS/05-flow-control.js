//? 연습문제 1
//? 구구단 출력 (2단부터 9단까지)
//? (for문, while문 두가지 만들기)

console.log("-----구구단-----for문");

for(let i=2; i<=9; i++){
    for(let j=1; j<=9; j++){
    console.log(i, "*", j, "=", (i*j));
    }
};

console.log("-----구구단-----for문2");
for (let dan = 2; dan <= 9; dan++) {
    //  단 루프
    console.log(dan + "단");
    for (let num = 1; num <= 9; num++) {
        console.log(`${dan} * ${num} = ${dan * num}`);
    }
    console.log();
}

console.log("-----구구단-----while문");

let a = 2;
while(a <= 9){
    let b = 1;
    while (b <= 9) {
        console.log(a, "*", b, "=", (a*b));
        b++;
    }
    a++;
};

console.log("-----구구단-----while문2");
let dan = 2;
while(dan <= 9 ){
    //* 단루프
    let num =1;
    console.log(dan + "단");
    while(num <= 9){
        console.log('${dan}*${num} = ${dan * num}');
        num++;
    }
    console.log();
    dan++;
}

//? 연습문제 2
//? (for문, while문 두가지 만들기)
//? *****
//? ****
//? ***
//? **
//? *
console.log("-----별찍기-----for문");

for(let i = 0; i<5; i++){
    console.log("*".repeat(5-i))
};
console.log("-----별찍기-----for문2");

for(let count = 5; count >= 1; count--){
    let star = "";
    for(let col = 1; col <= count; col++){
        star += "*";
    }
    console.log(ster);
}

console.log("-----별찍기-----while문");

let count = 5;
while (count > 0) {
    let star ="";
    let col = 1;
    while (col <= count) {
        star += "*";
        col++;
    }
    console.log(star);
    count--;
    
}


//? ES6 : for ... in
//? 객체의 속성(프로퍼티)를 순회

let obj ={
    name = "홍길동",
    age: 28,
    job: "도적",
    gender: "남성"
}

console.log("==== for ...in");
for(let key in obj){
    //* for ...in : 객체의 속성을 순회
    console.log(key, "->", Obj[key]);
}

const srr = [5, 1, 4, 3, 2, 9, 8, 0];
for(let key in arr){
    console.log(key);
}

console.log("=== for ... of");
for (let value of arr){
    //* for ... of : 반복 가능 객체에서 요소를 하나씩
    console.log(value);
}

//? for ...of는 순회 객체(배열 등) 에서만 사용
//* for(let value of obj){
//*    console.log(value);
//* } -> Error : obj는 순회객체 아님 

//? 주의 : for ...in과 for ...of를 구분해서 사용
