/**
 * async(비동기 함수 정의 키워드), await(비동기 함수 동기 호출 키워드)
 * 'await' 키워드는 'async' 함수 안에서만 사용 가능합니다. (단, 모듈의 최상위 레벨 호출은 가능)
 */

// async 함수 정의 방식 1: function 키워드 앞에 async를 붙입니다.
async function fx1(isOk) {
	// 'fx1' 함수는 비동기 함수이며 항상 Promise를 반환합니다.
	console.log("fx1호출"); // 함수 호출 시 즉시 실행되는 부분입니다.
	if (!isOk) throw new Error("오류 발생!"); // 'isOk'가 false면 오류를 발생시킵니다 (Promise가 reject됨).
	return "정상 리턴"; // 'isOk'가 true면 값을 반환합니다 (Promise가 resolve됨).
}

// async 함수 정의 방식 2: 화살표 함수 앞에 async를 붙입니다.
const fx2 = async (isOk) => {
	// 'fx2' 함수도 비동기 함수이며 항상 Promise를 반환합니다.
	console.log("fx2호출");
	if (!isOk) throw new Error("오류 발생!");
	return "정상 리턴";
};

// async 함수 내에서 await를 사용하는 예시
async function main() {
	// 'main' 함수는 async 함수이므로 내부에서 await를 사용할 수 있습니다.
	let r1 = null;

	// Promise 체인(.then(), .catch())을 사용하여 비동기 함수의 결과를 처리하는 방법입니다.
	fx1(false) // 'fx1'을 호출하고, 'isOk'가 false이므로 Promise는 reject됩니다.
		.then((result) => (r1 = result)) // reject되었으므로 이 then 블록은 건너뜁니다.
		.then(() => console.log(r1)) // 위 then이 건너뛰어졌으므로 이 then 블록도 실행되지 않습니다.
		.catch((error) => console.error(error)); // fx1에서 발생한 오류를 잡아 콘솔에 출력합니다.

	// try-catch 블록과 await를 사용하여 비동기 함수의 결과를 동기 코드처럼 처리하는 방법입니다.
	try {
		// 비동기 작업 중 발생할 수 있는 오류를 잡기 위해 try 블록을 사용합니다.
		let r2 = await fx1(false); // 'fx1'을 호출하고 Promise가 완료될 때까지 기다립니다.
		// 'isOk'가 false이므로 이 부분에서 오류가 발생하고 catch 블록으로 넘어갑니다.
		console.log(r2); // 이 코드는 오류 발생으로 인해 실행되지 않습니다.
	} catch (error) {
		// fx1에서 발생한 오류를 잡아 'error' 변수에 할당합니다.
		console.error(error); // 오류를 콘솔에 출력합니다.
	}
}

main(); // 'main' 비동기 함수를 호출합니다.
