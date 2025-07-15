/**
 * 비구조할당(구조분해 - Destructuring Assignment)
 * 배열이나 객체의 속성을 해체하여 개별 변수에 할당하는 편리한 문법입니다.
 */

const student = {
	name: "이동윤", // 이름 속성
	age: 27, // 나이 속성
	address: "부산 사하구", // 주소 속성
};

// 객체 비구조 할당을 사용하지 않은 일반적인 방식
const studentName = student.name;
const studentAge = student.age;

// 객체 비구조 할당: 객체의 속성을 풀어서 새로운 변수로 선언합니다.
// name: studentName2는 'name' 속성을 'studentName2'라는 새 변수 이름으로 할당한다는 의미입니다.
const { name: studentName2, age: studentAge2 } = student;
console.log(studentName); // "이동윤"
console.log(studentAge); // 27
console.log(studentName2); // "이동윤"
console.log(studentAge2); // 27

// 함수의 매개변수에서 객체 비구조 할당 사용: 함수 호출 시 전달된 객체에서 필요한 속성만 추출하여 매개변수로 사용합니다.
// address: addr은 'address' 속성을 'addr'이라는 이름으로 할당합니다.
function printStudentInfo({ name, address: addr, age }) {
	console.log(name); // "이동윤"
	console.log(addr); // "부산 사하구"
	console.log(age); // 27
}
printStudentInfo(student); // 'student' 객체를 함수에 전달하여 비구조 할당을 사용합니다.

/**객체 구조분해할 때 주의할 점 */
// 객체의 속성명이 같을 때, 충돌을 피하기 위해 비구조 할당 시 변수 이름을 변경해야 합니다.
const s1 = {
	name: "이동윤",
	age: 27,
};

const s2 = {
	name: "삼동윤", // 다른 객체이지만 속성명이 'name'으로 동일합니다.
	age: 28, // 다른 객체이지만 속성명이 'age'로 동일합니다.
};
const { name: n1, age: a1 } = s1; // s1의 name을 n1으로, age를 a1으로 할당
const { name: n2, age: a2 } = s2; // s2의 name을 n2으로, age를 a2으로 할당
// 이렇게 변수명을 다르게 지정하면 충돌 없이 사용할 수 있습니다.

// 배열 비구조 할당: 배열의 요소를 순서대로 새로운 변수에 할당합니다.
const numbers = [1, 2, 3, 4, 5];
const [num1, num2, num3] = numbers; // 배열의 첫 세 요소를 각각 num1, num2, num3에 할당합니다.
console.log(num1); // 1
console.log(num2); // 2
console.log(num3); // 3

// React의 useState 훅과 유사한 배열 비구조 할당의 실용적인 예시를 보여줍니다.
const useState = (data) => {
	const dataState = {
		data: data,
		setData: (d) => {
			// 데이터를 설정하는 함수를 반환합니다.
			console.log(d, "데이터 set");
		},
	};
	return [dataState.data, dataState.setData]; // 데이터와 데이터를 변경하는 함수를 배열 형태로 반환합니다.
};

// useState 함수가 반환하는 배열을 비구조 할당으로 받아서 'userData'와 'setUserData' 변수로 바로 사용할 수 있습니다.
const [userData, setUserData] = useState({
	username: "test",
	password: "1234",
});
console.log(userData); // {username: "test", password: "1234"}
setUserData({ username: "test2", password: "5678" }); // "test2", "5678" 데이터 set
