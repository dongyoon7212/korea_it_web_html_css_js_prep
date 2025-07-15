// 객체(Object)의 정의, 속성 접근, 속성 수정, 메서드 추가 및 반복문 활용을 설명합니다.
const student = {
	// 'student'라는 이름의 객체를 정의합니다. 객체는 키-값 쌍의 집합입니다.
	name: "이동윤", // 'name'이라는 키에 "이동윤"이라는 문자열 값을 할당합니다.
	age: 27, // 'age'라는 키에 27이라는 숫자 값을 할당합니다.
};

console.log(student);
console.log(student.name);
console.log(student.age);
console.log(student["name"]);
console.log(student["age"]);
const a = "name";
const b = "age";
console.log(student[a]);
console.log(student[b]);

student[a] = "삼동윤";
console.log(student);
student.name = "사동윤";
console.log(student);

// 객체에 함수(메서드)를 추가하는 방법입니다.
student.printName = () => console.log("이름:", student.name); // 'printName'이라는 새로운 속성에 화살표 함수를 할당합니다.
student.printName(); // 'printName' 메서드를 호출하여 "이름: 사동윤"을 출력합니다.

const loginButton = {
	text: "로그인",
	value: "test",
	onclick: () => {
		// 'onclick'이라는 속성에 함수를 할당하여 클릭 이벤트 핸들러처럼 사용합니다.
		console.log(loginButton.text); // 이 함수가 호출될 때 'loginButton' 객체의 'text' 속성 값을 출력합니다.
	},
};

loginButton.onclick(); // 'loginButton' 객체의 'onclick' 메서드를 호출하여 "로그인"을 출력합니다.
loginButton.onclick = () => {
	// 'onclick' 메서드를 새로운 함수로 재할당합니다.
	console.log("로그인 버튼을 클릭하였습니다.");
};
loginButton.onclick(); // 재할당된 'onclick' 메서드를 호출하여 "로그인 버튼을 클릭하였습니다."를 출력합니다.

console.log(typeof loginButton); // 'loginButton'의 타입이 'object'임을 출력합니다.

// Object.keys(), Object.values(), Object.entries() 메서드를 사용하여 객체의 속성을 순회하는 방법을 설명합니다.
const loginButtonKeys = Object.keys(loginButton); // Object.keys()는 객체의 모든 열거 가능한 속성 이름(키)을 문자열 배열로 반환합니다.
// loginButtonKeys = ["text", "value", "onclick"]; // 반환되는 배열의 예시
console.log(loginButtonKeys);
for (let i = 0; i < loginButtonKeys.length; i++) {
	// 키 배열을 순회하여 각 키에 해당하는 값을 출력합니다.
	const keyName = loginButtonKeys[i];
	console.log(loginButton[keyName]); // 대괄호 표기법을 사용하여 동적으로 속성 값에 접근합니다.
}

const loginButtonValues = Object.values(loginButton); // Object.values()는 객체의 모든 열거 가능한 속성 값들을 배열로 반환합니다.
console.log(loginButtonValues);
for (let i = 0; i < loginButtonValues.length; i++) {
	// 값 배열을 순회하여 각 값을 출력합니다.
	console.log(loginButtonValues[i]);
}

const loginButtonEntries = Object.entries(loginButton); // Object.entries()는 객체의 모든 열거 가능한 [key, value] 쌍을 배열로 반환합니다.
console.log(loginButtonEntries); // [['text', '로그인'], ['value', 'test'], ['onclick', [Function (anonymous)]]]와 같은 배열이 출력됩니다.
for (let i = 0; i < loginButtonEntries.length; i++) {
	// 엔트리 배열을 순회하여 각 키-값 쌍을 출력합니다.
	const entry = loginButtonEntries[i];
	const key = entry[0]; // 엔트리의 첫 번째 요소는 키입니다.
	const value = entry[1]; // 엔트리의 두 번째 요소는 값입니다.
	console.log(entry, key, value);
}

for (let entry of loginButtonEntries) {
	// for...of 루프를 사용하여 엔트리 배열을 순회하는 더 간결한 방법입니다.
	const key = entry[0];
	const value = entry[1];
	console.log(entry, key, value);
}

// 함수 자체를 변수에 할당하거나 객체 속성으로 할당했을 때의 참조를 보여줍니다.
const fx11 = () => {
	// 빈 화살표 함수를 'fx11' 상수에 할당합니다.
};
console.log(fx11); // 함수 정의 자체가 출력됩니다. (함수 본문 등)

let fx12 = () => {
	// 빈 화살표 함수를 'fx12' 변수에 할당합니다.
};
console.log(fx12); // 함수 정의 자체가 출력됩니다.

fx12 = () => {}; // 'fx12' 변수에 새로운 빈 화살표 함수를 재할당합니다.
console.log(fx12); // 새로 재할당된 함수 정의 자체가 출력됩니다.

const obj = {
	fx: () => {}, // 객체 'obj'의 'fx' 속성에 빈 화살표 함수를 할당합니다.
};
console.log(obj); // 객체 'obj'를 출력합니다.

obj.fx = () => {}; // 'obj' 객체의 'fx' 속성에 새로운 빈 화살표 함수를 재할당합니다.
console.log(obj); // 재할당된 'obj' 객체를 출력합니다.

console.log(() => {}); // 즉석에서 정의된 빈 화살표 함수를 직접 콘솔에 출력합니다.

//일반 함수처럼 이름을 명시한 것이 아니라 익명 함수 또는 화살표 함수로 정의 되었기 때문에 anonymous이다.
//일반 변수에 할당한 함수는 눈에는 변수명이 함수명처럼 보이지만 사실상 함수이름은 없다.