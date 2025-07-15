// REST 문법과 Spread 문법을 설명합니다.
const student = {
	name: "이동윤",
	age: 27,
	address: "부산 사하구",
	phone: "010-9988-1916",
};

// 비구조 할당 (복습): 객체에서 원하는 속성만 추출하여 변수로 선언합니다.
const { name, address } = student;
console.log(name, address); // 이동윤 부산 사하구

// REST 문법 (Rest parameters): 나머지 속성들을 새로운 객체 또는 배열로 묶을 때 사용합니다.
// 객체에서 'age', 'phone' 속성을 제외한 나머지 속성들을 'a'라는 새로운 객체로 묶습니다.
const { age, phone, ...a } = student;
console.log(age, phone, a); // 27 010-9988-1916 { name: '이동윤', address: '부산 사하구' }

const numbers = [1, 2, 3, 4];
// 배열에서 첫 두 요소를 'n1', 'n2'에 할당하고, 나머지 요소들을 'ns'라는 새로운 배열로 묶습니다.
const [n1, n2, ...ns] = numbers;
console.log(n1, n2, ns); // 1 2 [3, 4]

// 객체 Spread 문법: 기존 객체의 모든 속성을 새로운 객체에 복사하거나, 새로운 속성을 추가할 때 사용합니다.
const newStudent = {
	...student, // 'student' 객체의 모든 속성을 여기에 복사합니다.
	gender: "남", // 'gender'라는 새로운 속성을 추가합니다.
};
console.log(newStudent); // { name: '이동윤', age: 27, address: '부산 사하구', phone: '010-9988-1916', gender: '남' }

// 배열 Spread 문법: 기존 배열의 모든 요소를 새로운 배열에 복사하거나, 새로운 요소를 추가할 때 사용합니다.
const newNumbers = [...numbers, 5, 6]; // 'numbers' 배열의 모든 요소를 여기에 복사하고, 5와 6을 추가합니다.
console.log(newNumbers); // [1, 2, 3, 4, 5, 6]

// 참조 복사와 스프레드 문법을 통한 복사의 차이점을 이해하는 데 도움이 되는 예시입니다.
const newNumbers2 = numbers; // 'newNumbers2'는 'numbers'와 같은 배열을 참조합니다. (깊은 복사가 아님)

let names = []; // 빈 배열을 선언합니다.

// 함수를 사용하여 배열에 이름을 추가하는 예시 (Spread 문법 활용)
function addName(name) {
	names = [...names, name]; // 기존 'names' 배열의 요소를 복사하고 새로운 'name'을 추가하여 'names'를 재할당합니다.
}
addName("이동윤");
addName("이동이");
console.log(names); // ['이동윤', '이동이']

let obj = {
	// 객체를 선언합니다.
	data1: "data1",
	data2: "data2",
};

// 함수를 사용하여 객체에 속성을 추가하는 예시 (Spread 문법 활용)
function addProps(props) {
	obj = {
		// 기존 'obj' 객체의 속성을 복사하고, 'props' 객체의 속성들을 추가하여 'obj'를 재할당합니다.
		...obj,
		...props,
	};
}
addProps({ data3: "data3", data4: "data4" }); // 'data3'과 'data4' 속성을 가진 객체를 전달합니다.
console.log(obj); // { data1: 'data1', data2: 'data2', data3: 'data3', data4: 'data4' }
