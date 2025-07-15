/**
 * 자바스크립트 함수
 */

// 일반함수 정의
function 함수명(매개변수1, 매개변수2) {
	let 리턴데이터 = null; // 함수 내부에서 사용할 변수를 선언합니다.
	console.log(매개변수1);
	console.log(매개변수2);
	console.log("함수호출");
	return 리턴데이터; // 'return' 키워드를 사용하여 함수의 실행 결과를 반환합니다. 명시하지 않으면 undefined가 반환됩니다.
}

const 리턴값 = 함수명(); // 함수명()을 호출하고 반환된 값을 '리턴값' 상수에 저장합니다. 매개변수를 전달하지 않았으므로 undefined가 전달됩니다.
console.log(리턴값); // '리턴값' (undefined)을 콘솔에 출력합니다.
const 함수명2 = 함수명; // 함수 자체를 다른 변수에 할당할 수 있습니다.
const 리턴값2 = 함수명2(10, 20); // 함수명2를 호출하고 10과 20을 매개변수로 전달합니다.
console.log(리턴값2); // '리턴값2' (undefined)을 콘솔에 출력합니다.
const 리턴값3 = 함수명2(10); // 함수명2를 호출하고 10만 매개변수로 전달합니다. 매개변수2는 undefined가 됩니다.
console.log(리턴값3); // '리턴값3' (undefined)을 콘솔에 출력합니다.

// 익명함수: 이름이 없는 함수로, 주로 변수에 할당하거나 다른 함수의 인수로 사용됩니다.
const 함수명3 = function (매개변수1, 매개변수2) {
	// '함수명3'이라는 상수에 익명 함수를 할당합니다.
	let 리턴데이터 = null;
	console.log(매개변수1);
	console.log(매개변수2);
	console.log("함수호출");
	return 리턴데이터; //리턴이 필요할 때 명시하면됨.
};

// 화살표함수 (Arrow Function): ES6에서 도입된 간결한 함수 표현 방식입니다.
/**
 * 1. 매개변수가 하나면 ()괄호 생략 가능
 * 2. 실행문이 한줄이면 {}괄호 생략 가능
 * 3. {} 생략시 값만 입력하면 return값이됨.
 * 즉, {}생략을 안하고 return하려면 return키워드 명시해야함
 */
const 함수명4 = (매개변수1, 매개변수2) => {
	// '함수명4'라는 상수에 화살표 함수를 할당합니다.
	let 리턴데이터 = null;
	console.log(매개변수1);
	console.log(매개변수2);
	console.log("함수호출");
	return 리턴데이터;
};

// 화살표 함수의 간결한 문법 예시
// function fx1() {
//     console.log("fx1호출");
// }
const fx1 = () => console.log("fx1호출"); // 매개변수 없고 실행문이 한 줄인 경우: 괄호 생략 가능.
const fx2 = (n) => console.log(n, "출력"); // 매개변수가 하나인 경우: 매개변수 괄호 생략 가능.
const fx3 = (n) => n + 1; // 실행문이 한 줄이고 값을 바로 반환하는 경우: 중괄호와 return 키워드 생략 가능.
const fx4 = (n) => {
	// 중괄호를 생략하지 않으면 return 키워드를 명시해야 합니다.
	console.log(n, "출력");
	return n + 1;
};
const fx5 = (a, b) => a * b; // 여러 매개변수가 있는 경우: 매개변수 괄호 생략 불가.
fx1(); // fx1 함수를 호출합니다.
console.log(fx3(10)); // fx3 함수를 호출하고 반환된 값(11)을 출력합니다.

function a() {
	// 아무것도 하지 않는 빈 함수입니다.
}
const consoleResult = console.log(); // console.log()는 undefined를 반환합니다. (콘솔에 아무것도 출력하지 않고 호출될 경우)
console.log(consoleResult); // undefined가 출력됩니다.

console.log("----------------------------");
const 리턴값4 = 함수명; // 함수명 자체를 '리턴값4'에 할당합니다. (호출한 것이 아님)
console.log("텍스트", 리턴값4()); // '리턴값4'에 할당된 함수를 호출하고, 반환값(undefined)과 함께 "텍스트"를 출력합니다.

// 함수를 변수에 할당하고, 그 함수를 다른 함수의 인자로 전달하는 예시 (고차 함수)
const aa = () => {
	// 'aa'라는 이름의 화살표 함수를 정의합니다.
	console.log("aa함수 호출");
	return "aa함수 리턴값"; // 문자열을 반환합니다.
};

const bb = (fxx) => {
	// 'bb'라는 이름의 화살표 함수를 정의하고 'fxx'라는 매개변수를 받습니다.
	console.log("bb함수 호출");
	return fxx; // 전달받은 함수 'fxx' 자체를 반환합니다.
};

const aaa = (fxx, fxx2) => {
	// 'aaa'라는 이름의 화살표 함수를 정의하고 두 개의 함수 'fxx', 'fxx2'를 매개변수로 받습니다.
	console.log("aaa함수 호출");
	console.log(fxx()); // fxx 함수를 호출하고 그 결과를 출력합니다.
	console.log(fxx2()); // fxx2 함수를 호출하고 그 결과를 출력합니다.
	return "aaa함수 리턴값"; // 문자열을 반환합니다.
};

// 함수 'bb'의 반환값(함수 'aa')을 다시 'aaa' 함수의 매개변수로 전달하는 복잡한 함수 호출 예시입니다.
console.log(aaa(bb(aa), bb(aa)));

// bb함수 호출 (첫 번째 bb(aa))

// bb함수 호출 (두 번째 bb(aa))

// aaa함수 호출 (aaa 함수 내부)

// aa함수 호출 (fxx() 호출 결과)

// aa함수 리턴값 (fxx() 호출 결과)

// aa함수 호출 (fxx2() 호출 결과)

// aa함수 리턴값 (fxx2() 호출 결과)

// aaa함수 리턴값 (최종 console.log())
