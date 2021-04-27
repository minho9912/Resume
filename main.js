//무명 함수
let foo = setInterval(() => {
  console.log("출력합니다.");
}, 1000);

//ClearInterval
//4초 때에 사라지는것이기에 3번까지만 출력됨
setTimeout(function () {
  clearInterval(foo);
}, 4000);

//익명함수와 선언적함수
// bar는 20이 출력됨
let bar;
bar = 10;
bar = 20;
console.log(bar);

//코드 5-19
//함수일 경우에도 한번이상 초기화되면 맨 마지막에 선언된것이 실행된다
// let fooo;
// fooo = function () {
//   console.log("첫번째함수");
// };
// fooo = () => {
//   console.log("두번째함수");
// };

// fooo();

//코드 5-20
//객체에 선언되어있는 함수가 출력 우선순위가 더높다
fooo = function () {
  console.log("첫번째 함수");
};
function fooo() {
  console.log("두번째 함수");
}

fooo();

//익명함수와 화살표함수(this)
(function () {
  console.log(this);
})();
(() => {
  console.log(this);
})();

//배열
let array = ["사과", "바나나", "망고", "딸기"];
console.log(array[0]);

//객체선언
let product = {
  제품명: "7D 건조 망고",
  가격: "10000원",
  원산지: "대한민국",
};
console.log(product.가격);

//for in 반복문으로 배열 받아오기
let array2 = ["사과1", "바나나1", "망고1", "딸기1"];
for (let arr123 in array2) {
  console.log("array2: " + array2[arr123]);
}

//객체의 속성
let object = {
  number: 273,
  string: "Rinlant",
  array: [1, 2, 3, 4, 5],
};

//객체의 속성중 함수(this)
let number = 2223;
let object2 = {
  number: 273,
  string: "Rinlant",
  array: [1, 2, 3, 4, 5],
  ascz12: function () {
    console.log(this.string + " " + this.number);
  },
};
