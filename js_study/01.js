// 변수 선언: 'let'과 'const' 키워드의 차이점을 설명합니다.
// 'let'은 값을 재할당할 수 있는 변수를 선언할 때 사용합니다.
let name = "이동윤";
console.log("hello js");
console.log(name);
name = "삼동윤";
console.log(name);

// 'const'는 한 번 할당하면 값을 변경할 수 없는 상수를 선언할 때 사용합니다.
const age = 32;
console.log(age);
// age = 33; // 이 줄을 실행하면 'const'로 선언된 상수는 재할당이 불가능하므로 오류(TypeError)가 발생합니다.
// console.log(age);

/** 연산자 */
// 동등 연산자(==)와 일치 연산자(===)의 차이점을 설명합니다.
// == (동등 연산자): 값만 비교하며, 필요한 경우 암시적 타입 변환(Type Coercion)을 수행합니다.
let data1 = 10;
let data2 = "10";
let result1 = data1 == data2; // data2('10')가 숫자로 변환되어 data1(10)과 비교됩니다. 결과는 true.
console.log(result1);

// === (일치 연산자): 값과 **타입**을 모두 엄격하게 비교합니다. 타입이 다르면 바로 false를 반환합니다.
let result2 = data1 === data2; // data1(number)과 data2(string)는 타입이 다르므로 false.
console.log(result2);

// typeof 연산자: 변수의 데이터 타입을 확인합니다.
console.log(typeof data1, typeof data2); // data1은 number, data2는 string으로 출력됩니다.

// 문자열 연결과 숫자 출력의 차이를 보여줍니다.
console.log("1" + "2"); // 두 문자열 "1"과 "2"를 연결하여 "12"를 출력합니다.
console.log(1, 2); // 숫자 1과 2를 각각 출력합니다.

/* not연산 활용법 */
// 논리 부정(NOT) 연산자(!)와 자바스크립트의 Truthy/Falsy 값을 설명합니다.
// Truthy 값은 불리언 컨텍스트에서 true로 평가되는 값이고, Falsy 값은 false로 평가되는 값입니다.
// Falsy 값의 예: false, 0, -0, "", null, undefined, NaN
console.log(!1); // 1(Truthy)에 !를 적용하여 false를 반환합니다.
console.log(!0); // 0(Falsy)에 !를 적용하여 true를 반환합니다.
console.log(!"a"); // "a"(Truthy)에 !를 적용하여 false를 반환합니다.
console.log(!""); // ""(Falsy)에 !를 적용하여 true를 반환합니다.
console.log(!null); // null(Falsy)에 !를 적용하여 true를 반환합니다.
console.log(!!null); // !null(true)에 !를 다시 적용하여 false를 반환합니다. (Falsy 값을 명시적으로 Boolean 타입으로 변환하는 일반적인 방법)

console.log("".length > 0); // 빈 문자열의 길이는 0이므로 false.
console.log(!!"" === false); // !!""는 false이므로 false === false는 true.

let data = {
	name: "이동윤",
	age: 27,
};

// 조건문
if (!data) {
	console.log("사용자 정보가 없습니다.");
} else if (data.name === "삼동윤") {
	console.log("사용자이름이 일치합니다.");
} else if (data.age === 27) {
	console.log("사용자이름은 일치하지 않지만 나이는 일치합니다.");
} else {
	console.log("사용자가 일치하지 않습니다.");
}

// 반복문
// 초기화 (let i = 0;), 조건 (i < 10;), 증감 (i++)의 세 부분으로 구성됩니다.
for (let i = 0; i < 10; i++) {
	console.log(i);
}
