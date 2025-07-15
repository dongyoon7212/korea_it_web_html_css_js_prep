// Promise와 async/await의 다양한 사용 패턴을 비교하여 설명합니다.

// Promise를 반환하는 함수 정의 (주석 처리됨)
// function getData1() {
//     return new Promise();
// }

// async 함수 정의 (주석 처리됨)
// async function getData2() {

// }

// 위 함수들을 Promise 체인으로 사용하는 예시 (주석 처리됨)
// getData1().then();
// getData2().then();

// then 실행 함수로 값 넘기는 방법: Promise의 resolve 또는 async 함수의 return 값을 then 체인으로 전달합니다.
function getData3() {
	return new Promise((rs, rj) => {
		rs("데이터"); // Promise를 성공 상태로 만들고 "데이터" 문자열을 전달합니다.
	});
}

async function getData4() {
	return "데이터"; // async 함수는 반환하는 값을 Promise.resolve로 감싸서 반환합니다.
}

getData3().then((r) => console.log(r)); // getData3이 resolve한 "데이터"를 받아 출력합니다.
getData4().then((r) => console.log(r)); // getData4가 반환한 "데이터"를 받아 출력합니다.

// catch 실행 함수의 매개변수로 값 넘기는 방법: Promise의 reject 또는 async 함수의 throw 값을 catch 체인으로 전달합니다.
function getData5(isError) {
	return new Promise((rs, rj) => {
		if (isError) {
			// 'isError'가 true면
			rj(new Error("오류!")); // Promise를 실패 상태로 만들고 Error 객체를 전달합니다.
			return; // 함수를 종료하여 rs("데이터")가 호출되지 않도록 합니다.
		}
		rs("데이터"); // 'isError'가 false면 "데이터"를 성공적으로 전달합니다.
	});
}

async function getData6(isError) {
	if (isError) throw new Error("오류!"); // 'isError'가 true면 오류를 발생시킵니다 (Promise가 reject됨).
	return "데이터"; // 'isError'가 false면 "데이터"를 반환합니다 (Promise가 resolve됨).
}

// 오류가 발생하도록 호출하고 catch로 처리합니다.
getData5(true)
	.then((r) => console.log(r))
	.catch((e) => console.error(e)); // getData5가 reject한 Error 객체를 catch로 받아 출력합니다.
getData6(true)
	.then((r) => console.log(r))
	.catch((e) => console.error(e)); // getData6가 던진 Error 객체를 catch로 받아 출력합니다.

// await으로 then 또는 catch 처리 방법: async 함수 내에서 await를 사용하여 Promise의 결과를 동기적으로 얻거나 오류를 처리합니다.
// (참고: 아래 await 호출은 최상위 레벨 await이므로 Node.js 14+ 또는 ES Module 환경에서만 가능합니다.)
console.log(await getData3()); // getData3의 resolve 값을 기다려 바로 받아 출력합니다. ("데이터")
console.log(await getData4()); // getData4의 return 값을 기다려 바로 받아 출력합니다. ("데이터")

try {
	// getData5가 성공하는 경우를 가정하고 호출합니다.
	console.log(await getData5()); // getData5의 resolve 값을 기다려 바로 받아 출력합니다.
} catch (error) {
	// 오류가 발생하면 이 catch 블록이 실행됩니다.
	console.error(error);
}

try {
	// getData6가 성공하는 경우를 가정하고 호출합니다.
	console.log(await getData6()); // getData6의 return 값을 기다려 바로 받아 출력합니다.
} catch (error) {
	// 오류가 발생하면 이 catch 블록이 실행됩니다.
	console.error(error);
}

// async 함수 내에서 try-catch와 await를 함께 사용하여 비동기 오류를 처리하는 일반적인 패턴입니다.
async function fx() {
	try {
		console.log(await getData5()); // getData5를 호출하고 성공/실패 여부에 따라 다음 코드를 진행합니다.
	} catch (error) {
		console.error(error); // getData5가 reject되면 여기서 오류를 잡습니다.
	}
}
