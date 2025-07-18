// Promise를 사용하여 비동기 백엔드 요청을 시뮬레이션하고, 성공/실패 시의 흐름을 처리하는 방법을 설명합니다.
function requestBackend(isOk) {
	// 백엔드 통신을 시뮬레이션하는 함수입니다.
	if (isOk) {
		// 'isOk'가 true면 성공 응답을 반환합니다.
		return { status: 200, body: "정상적인데이터응답!" };
	}
	return { status: 400, body: "오류데이터응답!" }; // 'isOk'가 false면 오류 응답을 반환합니다.
}

// // Promise p1: 백엔드 요청이 실패하는 경우 (false)
const p1 = new Promise((resolve, reject) => {
	// 새로운 Promise를 생성합니다.
	console.log("p1 프로미스 생성"); // Promise 생성자는 즉시 실행됩니다.
	const { status, body } = requestBackend(true); // 백엔드 요청을 호출합니다. (실패 시나리오)
	if (status === 200) {
		resolve(body); // 상태가 200이면 Promise를 성공 상태로 만들고 데이터를 전달합니다.
	} else if (status === 400) {
		reject(new Error(body)); // 상태가 400이면 Promise를 실패 상태로 만들고 Error 객체를 전달합니다.
	}
});

p1.catch((responseBody) => {
	// p1이 reject되었으므로 catch 블록이 실행됩니다.
	console.log("p1:", responseBody); // 'Error: 오류데이터응답!'이 출력됩니다.
	return "p1 리턴값!!"; // catch 블록에서 값을 반환하면, 이어지는 then 블록으로 그 값이 전달됩니다.
})
	.then((result) => {
		// catch에서 값이 반환되었기 때문에 이 then 블록이 실행됩니다.
		console.log("p1-2:", result); // "p1-2: p1 리턴값!!"이 출력됩니다.
		return "p1-2 리턴값!!"; // 다음 then 블록으로 값을 전달합니다.
	})
	.then((result) => {
		// 이전 then에서 값이 반환되었기 때문에 이 then 블록이 실행됩니다.
		console.log("p1-3:", result); // "p1-3: p1-2 리턴값!!"이 출력됩니다.
	})
	.catch((error) => {
		// 이 catch 블록은 이전 then/catch에서 오류가 발생했을 때만 잡습니다. (여기서는 실행되지 않음)
		console.log("p1:", error);
	});

// Promise p2: 백엔드 요청이 실패하는 경우 (false) - 오류 처리에 초점
const p2 = new Promise((resolve, reject) => {
	console.log("p2 프로미스 생성");
	const { status, body } = requestBackend(true);
	if (status === 200) {
		resolve(body);
	} else if (status === 400) {
		reject(new Error(body)); // 실패 상태로 만듭니다.
	}
});

p2.then((responseBody) => {
	// p2가 reject되었으므로 이 then 블록은 건너뛰어집니다.
	console.log("p2:", responseBody);
}).catch((error) => {
	// p2가 reject되었으므로 이 catch 블록이 실행됩니다.
	console.error("p2:", error); // "p2: Error: 오류데이터응답!"이 출력됩니다.
});

// // Promise p3: 백엔드 요청이 성공하는 경우 (true)
const p3 = new Promise((resolve, reject) => {
	console.log("p3 프로미스 생성");
	const { status, body } = requestBackend(true); // 백엔드 요청을 호출합니다. (성공 시나리오)
	if (status === 200) {
		resolve(body); // 성공 상태로 만듭니다.
	} else if (status === 400) {
		reject(new Error(body));
	}
});

p3.then((responseBody) => {
	// p3가 resolve되었으므로 이 then 블록이 실행됩니다.
	console.log("p3:", responseBody); // "p3: 정상적인데이터응답!"이 출력됩니다.
}).catch((error) => {
	// p3가 resolve되었으므로 이 catch 블록은 실행되지 않습니다.
	console.error("p3:", error);
});
