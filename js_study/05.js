/**
 * javascript class
 */

// 클래스(Class)
class Student {
	// 'Student'라는 이름의 클래스를 정의합니다.
	name; // 클래스 속성(property)을 선언합니다.
	age; // 클래스 속성을 선언합니다.

	constructor(name, age) {
		// 생성자(constructor): 클래스의 인스턴스를 생성할 때 호출되는 특별한 메서드입니다.
		this.name = name; // 전달받은 'name' 매개변수를 현재 객체(this)의 'name' 속성에 할당합니다.
		this.age = age; // 전달받은 'age' 매개변수를 현재 객체(this)의 'age' 속성에 할당합니다.
	}
}

// 클래스 인스턴스 생성: 'new' 키워드를 사용하여 클래스의 새로운 객체(인스턴스)를 만듭니다.
const newStudent1 = new Student("이동윤", 27); // 'Student' 클래스의 새 인스턴스를 생성하고 '이동윤'과 27을 전달합니다.
console.log(newStudent1); // 생성된 'newStudent1' 객체 전체를 출력합니다. { name: '이동윤', age: 27 }
console.log(newStudent1.name); // 'newStudent1' 객체의 'name' 속성("이동윤")을 출력합니다.
