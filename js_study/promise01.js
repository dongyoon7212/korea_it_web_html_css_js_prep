//promise는 기본적으로 비동기처리에 사용되는 자바스크립트 객체

//promise라는 상자가 있다 친다 이때 상자에는 텅텅 비어있음
//언젠가는 결과물로 상자가 채워지는데 이때는 비동기작업이 완료될때이다.
//비동기가 완료 전까지는 상자에는 대기라는 딱지가 붙어있고 비동기를 성공적으로 마쳤다면 성공 실패했다면 실패딱지가 붙어있을거다
//처음 promise작업이 시작될때는 비어있다가 promise작업이 성공했을때는 상자에 결과물로 채워질것이다 실패했다면 작업중에 발생한 에러가 들어있다

//promise객체는 state와 result라는 두가지 속성을 가지고 있다
//promise는 state 3가지가 있음
// 1. 대기(pending): 초기 상태, 비동기 작업이 아직 완료되지 않음
//    --result => undefined
// 2. 이행(fulfilled): 비동기 작업이 성공적으로 완료됨
//	  --result => 성공적으로 완료된 결과값
// 3. 거부(rejected): 비동기 작업이 실패함
//	  --result => 실패한 이유(에러)

// const promise = new Promise(() => { //promise의 인자로 함수를 전달받는데 이것은 executor라고 한다 객체 생성과 동시에 즉시 실행됨
// 	setTimeout(() => {
// 		const data = { name: "이동윤" };
// 		console.log("네트워크 요청 성공");
// 	}, 2000);
// });

//excutor의 인자인 resolve는 비동기 작업이 성공했을때 호출하는 함수
//excutor의 인자인 reject는 비동기 작업이 실패했을때 호출
// const promise = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		const data = { name: "이동윤" };
// 		if (data) {
// 			console.log("네트워크 요청 성공");
// 			resolve(data); //resolve의 인자로는 비동기작업의 결과물을 넣어주면 된다.
// 		} else {
// 			reject(new Error("네트워크 문제가 발생함")); //reject의 인자로는 에러 객체를 넣어준다.
// 		}
// 	}, 2000);
// });

// console.log(promise); //promise는 대기 상태

// setTimeout(() => {
// 	console.log(promise);
// }, 3000);

function getData() {
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			// const data = { name: "이동윤" };
			const data = null;
			if (data) {
				console.log("네트워크 요청 성공");
				resolve(data); //resolve의 인자로는 비동기작업의 결과물을 넣어주면 된다.
			} else {
				reject(new Error("네트워크 문제가 발생함")); //reject의 인자로는 에러 객체를 넣어준다.
			}
		}, 1000);
	});
	return promise;
}

//then, catch, finally
const promise = getData();

// setTimeout(() => {
// 	console.log(promise);
// }, 3000);

promise
	.then((data) => {
		//결과값을 매개변수로 받아옴
		//then은 promise가 이행(fulfilled)되었을 때 호출되는 콜백 함수
		// console.log(data);
		const name = data.name;
		console.log(`이름은 ${name}입니다.`);
	})
	.catch((error) => {
		//인자로 error 객체를 받아옴
		// console.log(error);
		console.log("멋들어지게 에러 처리함");
	})
	.finally(() => {
		//finally는 성공/실패 여부와 상관없이 항상 호출되는 콜백 함수
		console.log("마무리작업");
	});
