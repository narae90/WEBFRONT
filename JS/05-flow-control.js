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

