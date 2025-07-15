// Promise와 async/await를 사용하여 비동기 작업을 동기 코드처럼 다루는 방법을 설명합니다.
const userList = [
	// 사용자 목록을 배열로 정의합니다.
	{ id: 1, username: "aaa" },
	{ id: 2, username: "bbb" },
	{ id: 3, username: "ccc" },
	{ id: 4, username: "ddd" },
];

function findUserById(id) {
	// 주어진 id로 사용자 목록에서 사용자를 찾는 동기 함수입니다.
	return userList.find((user) => user.id === id);
}

// Promise를 반환하는 함수: 비동기 작업의 성공/실패를 나타냅니다.
function getUserById(id) {
	return new Promise((rs, rj) => {
		// rs: resolve 함수, rj: reject 함수
		const foundUser = findUserById(id); // 사용자를 찾습니다.
		if (!!foundUser) {
			// 사용자가 존재하면
			rs(foundUser); // Promise를 성공 상태로 만들고 찾은 사용자를 전달합니다.
		} else {
			// 사용자가 없으면
			rj(new Error("해당 id의 사용자를 찾을 수 없습니다.")); // Promise를 실패 상태로 만들고 오류를 전달합니다.
		}
	});
}

// await 키워드의 사용 (Top-level await - 최상위 await): 모듈의 최상위 레벨에서 await를 직접 사용할 수 있습니다.
// 'await'은 Promise가 resolve될 때까지 기다렸다가 그 결과를 변수에 할당합니다.
// 이 코드는 Node.js 14 이상 또는 모던 브라우저의 ES Module 환경에서만 직접 실행 가능합니다.
// 그렇지 않으면 'await은 async 함수 내에서만 유효합니다'라는 오류가 발생합니다.
// let user1 = await getUserById(1); // getUserById(1) Promise가 완료될 때까지 기다렸다가 결과를 user1에 할당합니다.
// console.log("!!!!!", user1); // '!!!!!'와 함께 찾은 사용자 객체가 출력됩니다.

// Promise를 변수에 할당한 후 비동기로 실행되므로, 즉시 다음 코드가 실행됩니다.
let user2 = getUserById(1); // Promise 객체 자체가 user2에 할당됩니다. 아직 결과가 아님.
console.log("!!!!!", user2); // '!!!!!'와 함께 Promise 객체 (pending 상태)가 출력됩니다.

// Promise 체인을 이용한 비동기 결과 처리
getUserById(1) // id가 1인 사용자를 조회합니다. (성공)
	.then((result) => (user1 = result)) // 성공하면 결과를 user1에 할당합니다. (콜백은 비동기로 실행)
	.catch((error) => console.error(error)); // 오류 발생 시 콘솔에 오류를 출력합니다.

getUserById(5) // id가 5인 사용자를 조회합니다. (실패)
	.then((result) => console.log(result)) // 실패했으므로 이 then 블록은 실행되지 않습니다.
	.catch((error) => console.error(error)); // 오류가 발생하여 "Error: 해당 id의 사용자를 찾을 수 없습니다."가 출력됩니다.

// async/await를 사용한 비동기 함수 정의: Promise를 더 동기 코드처럼 보이게 작성할 수 있습니다.
async function getUserById2(id) {
	// 'async' 키워드는 이 함수가 Promise를 반환한다는 것을 나타냅니다.
	const foundUser = findUserById(id); // 동기 함수 호출
	if (!foundUser) {
		// 사용자가 없으면
		throw new Error("해당 id의 사용자를 찾을 수 없습니다."); // 오류를 던집니다. 이는 Promise의 reject와 동일하게 동작합니다.
	}
	return foundUser; // 사용자를 반환합니다. 이는 Promise의 resolve와 동일하게 동작합니다.
}

// async 함수 호출 및 결과 처리 (then/catch 체인 사용)
getUserById2(2) // id가 2인 사용자를 조회합니다. (성공)
	.then((result) => console.log(result)) // 성공하면 결과를 출력합니다.
	.catch((error) => console.error(error)); // 오류 발생 시 콘솔에 오류를 출력합니다.

getUserById2(6) // id가 6인 사용자를 조회합니다. (실패)
	.then((result) => console.log(result)) // 실패했으므로 이 then 블록은 실행되지 않습니다.
	.catch((error) => console.error(error)); // 오류가 발생하여 "Error: 해당 id의 사용자를 찾을 수 없습니다."가 출력됩니다.
