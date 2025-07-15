/**
 * 배열(Array)
 */

// 배열 생성 방법 두 가지를 설명합니다.
const arr1 = []; // 배열 리터럴([])을 사용하여 빈 배열을 생성하는 가장 일반적인 방법입니다.
const arr2 = new Array(); // 'Array' 생성자 함수를 사용하여 빈 배열을 생성합니다. (일반적으로 잘 사용되지 않습니다.)

// 배열에 요소 추가: 'push()' 메서드를 사용하여 배열의 끝에 요소를 추가합니다.
arr1.push(10);
arr1.push(20);
arr1.push(30);
arr1.push(40);
console.log(arr1); // [10, 20, 30, 40]이 출력됩니다.

arr2.push(10);
arr2.push(20);
arr2.push(30);
arr2.push(40);
console.log(arr2); // [10, 20, 30, 40]이 출력됩니다.

// 배열과 객체의 참조 비교: 자바스크립트에서 객체(배열 포함)는 참조 타입입니다.
// === (일치 연산자)는 객체의 경우 메모리 주소(참조)가 같은지를 비교합니다.
console.log(arr1 === arr2); // arr1과 arr2는 내용이 같더라도 서로 다른 메모리 공간에 있는 별개의 객체이므로 false가 출력됩니다.

const obj1 = { key1: "value1", key2: "value2" };
const obj2 = { key1: "value1", key2: "value2" };
console.log(obj1 === obj2); // obj1과 obj2도 내용이 같더라도 별개의 객체이므로 false가 출력됩니다.

/** JSON (JavaScript Object Notation) */
// 자바스크립트 객체/배열과 JSON 문자열 간의 변환을 설명합니다.
// JSON.stringify(): 자바스크립트 객체 또는 배열을 JSON 형식의 문자열로 변환합니다.
// JSON.parse(): JSON 문자열을 자바스크립트 객체 또는 배열로 변환합니다.

const json1 = JSON.stringify(arr1); // arr1 배열을 JSON 문자열로 변환합니다.
const json2 = JSON.stringify(arr2); // arr2 배열을 JSON 문자열로 변환합니다.
console.log(json1); // "[10,20,30,40]" (문자열)이 출력됩니다.
console.log(json2); // "[10,20,30,40]" (문자열)이 출력됩니다.
console.log(json1 === json2); // JSON 문자열은 값이 같으면 동일하다고 판단하므로 true가 출력됩니다.

const json3 = JSON.stringify(obj1); // obj1 객체를 JSON 문자열로 변환합니다.
const json4 = JSON.stringify(obj2); // obj2 객체를 JSON 문자열로 변환합니다.
console.log(json3); // "{"key1":"value1","key2":"value2"}" (문자열)이 출력됩니다.
console.log(json4); // "{"key1":"value1","key2":"value2"}" (문자열)이 출력됩니다.
console.log(json3 === json4); // JSON 문자열은 값이 같으면 동일하다고 판단하므로 true가 출력됩니다.

/**
 * 배열의 기본 내장 함수 (Array Methods)
 * 배열을 다루는 데 유용한 다양한 내장 함수들을 설명합니다.
 */

const names = ["이동윤", "삼동윤", "사동윤"];
// 값 추가: push()
names.push("오동윤"); // 배열의 끝에 '오동윤'을 추가합니다.
console.log(names); // ['이동윤', '삼동윤', '사동윤', '오동윤']

//const가 재할당을 금지하는 것이지, 참조하는 객체(배열 포함)의 내용 변경까지 막는 것은 아닙니다.

// 값 제거: pop() - 배열의 마지막 요소를 제거하고 그 요소를 반환합니다.
console.log(names.pop()); // '오동윤'을 제거하고 '오동윤'을 출력합니다. names는 ['이동윤', '삼동윤', '사동윤']이 됩니다.

// 값 수정/삽입/제거: splice(시작 인덱스, 제거할 개수, 추가할 요소...)
names.splice(1, 0, "육동윤"); // 인덱스 1 위치에 '육동윤'을 삽입하고 아무것도 제거하지 않습니다.
console.log(names); // ['이동윤', '육동윤', '삼동윤', '사동윤']

// 값 찾기: find() - 주어진 테스트 함수를 만족하는 배열의 첫 번째 요소를 반환합니다.
const findFx = (n) => n === "육동윤"; // '육동윤'과 값이 같은지 테스트하는 함수를 정의합니다.
const foundName = names.find(findFx); // names 배열에서 '육동윤'을 찾습니다. 없으므로 undefined 반환.
console.log(foundName); // undefined가 출력됩니다.

const students = [
	// 객체로 이루어진 배열을 정의합니다.
	{ name: "이동윤", age: 27 },
	{ name: "삼동윤", age: 28 },
	{ name: "사동윤", age: 27 },
	{ name: "오동윤", age: 28 },
	{ name: "오동윤", age: 27 },
];
console.log(students.find((s) => s.name === "삼동윤")); // 이름이 '이동이'인 첫 번째 객체를 찾아 출력합니다.

// 값 존재 유무: includes() - 배열에 특정 값이 포함되어 있는지 boolean 값으로 반환합니다.
console.log(names.includes("육동윤")); // names 배열에 '육동윤'이 포함되어 있으므로 true를 출력합니다.

// 필터링: filter() - 주어진 테스트 함수를 통과하는 모든 요소로 새로운 배열을 만듭니다. (원본 배열 변경 안함)
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.filter((n) => n % 2 === 0)); // 짝수만 필터링하여 [2, 4]를 반환합니다.
console.log(students); // 원본 students 배열은 변경되지 않았습니다.
console.log(students.filter((student) => student.age === 27)); // 나이가 27인 학생들만 필터링하여 새로운 배열을 반환합니다.
// students.stream().filter(student -> student.getAge() == 32).collect(Collectors.toList()); // 자바(Java)의 스트림 API 예시 주석입니다.

// 값 변환: map() - 배열의 모든 요소에 대해 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다. (원본 배열 변경 안함)
console.log(numbers.map((n) => n * 10)); // numbers 배열의 각 요소에 10을 곱하여 [10, 20, 30, 40, 50]을 반환합니다.
console.log(
	students.map((student) => {
		// students 배열의 각 요소를 변환합니다.
		if (student.age === 27) {
			// 나이가 27인 학생은 이름만 있는 새로운 객체로 변환합니다.
			return {
				name: student.name,
			};
		}
		return student; // 그렇지 않으면 원래 객체를 반환합니다.
	})
);

// map 함수의 동작 원리를 직접 구현한 예시입니다.
function map(array, fx) {
	const newArray = [];
	for (let i = 0; i < array.length; i++) {
		newArray.push(fx(array[i]));
	}
	return newArray;
}
console.log(
	map(students, (student) => {
		if (student.age === 27) {
			return {
				name: student.name,
			};
		}
		return student;
	})
);

// filter 함수의 동작 원리를 직접 구현한 예시입니다.
const filter = (array, fx) => {
	const newArray = [];
	for (let i = 0; i < array.length; i++) {
		if (fx(array[i])) {
			newArray.push(array[i]);
		}
	}
	return newArray;
};

console.log(filter(students, (student) => student.age === 28)); // 나이가 28인 학생들만 필터링하여 새로운 배열을 반환합니다.
