// setTimeout(() => console.log(1), 3000); // 3초 후 1 출력
// setTimeout(() => console.log(2), 2000); // 2초 후 2 출력
// setTimeout(() => console.log(3), 1000); // 1초 후 3 출력

// Promise의 기본 실행 순서를 이해하는 데 도움이 되는 예시 (주석 처리됨)
// new Promise((resolve) => {
//     console.log("프로미스1 실행"); // Promise 생성자는 즉시 실행됩니다.
//     resolve(); // Promise를 성공 상태로 만듭니다.
// })
// .then(() => console.log("프로미스1 then 실행")) // resolve() 호출 후 마이크로태스크 큐에 추가되어 실행됩니다.
// .then(() => console.log("프로미스1 then 실행2")); // 이전 then이 완료된 후 실행됩니다.

// new Promise((resolve) => {
//     console.log("프로미스2 실행"); // Promise 생성자는 즉시 실행됩니다.
//     resolve();
// })
// .then(() => console.log("프로미스2 then 실행")); // resolve() 호출 후 마이크로태스크 큐에 추가되어 실행됩니다.

/**
 * Promise (비동기 객체)
 * 비동기 작업의 최종 완료 또는 실패를 나타내는 객체입니다.
 * 비동기 작업의 결과를 다루고, 여러 비동기 작업을 순차적으로 연결하는 데 사용됩니다.
 */

// Promise의 resolve와 reject, 그리고 then과 catch 체인을 설명합니다.
function thenFx1(result) {
	// Promise가 성공했을 때 호출될 첫 번째 then 핸들러입니다.
	console.log(3); // thenFx1이 실행됨을 알립니다.
	console.log("thenFx1(result):", result); // 이전 Promise에서 전달된 결과를 출력합니다.
	return 200; // 다음 then 핸들러로 전달될 값을 반환합니다.
}
function thenFx2(result) {
	// Promise 체인의 두 번째 then 핸들러입니다.
	console.log(4); // thenFx2가 실행됨을 알립니다.
	console.log("thenFx2(result):", result); // 이전 then 핸들러에서 전달된 결과를 출력합니다.
}
function promiseFx(resolve, reject) {
	// Promise 생성자에 전달되는 실행자(executor) 함수입니다.
	console.log(2); // Promise 생성자 내부가 실행됨을 알립니다.
	// resolve(100); // Promise를 성공 상태로 만들고 100이라는 값을 전달합니다.
	reject(new Error("오류발생!!")); // Promise를 실패 상태로 만들고 Error 객체를 전달합니다.
}

console.log(1); // 동기 코드 1
const p1 = new Promise(promiseFx); // Promise p1을 생성합니다. promiseFx가 즉시 실행됩니다.
console.log("-1-"); // Promise 생성 후 바로 실행되는 동기 코드입니다.
const p2 = p1.then(thenFx1); // p1이 resolve되면 thenFx1을 실행하도록 예약합니다.
console.log("-2-"); // then은 비동기로 예약되므로 바로 다음 동기 코드가 실행됩니다.
const p3 = p2.then(thenFx2); // p2가 resolve되면 thenFx2를 실행하도록 예약합니다.
console.log("-3-"); // then은 비동기로 예약되므로 바로 다음 동기 코드가 실행됩니다.
// p1이 reject되었으므로 then 체인은 건너뛰고 가장 가까운 catch로 이동합니다.
const e1 = p3.catch((error) => console.error(error)); // p3 체인에서 발생한 오류를 잡아서 처리합니다. (p1에서 reject되었으므로 바로 이 catch로 옵니다)
console.log("-4-"); // catch도 비동기로 예약되므로 바로 다음 동기 코드가 실행됩니다.

// 동일한 Promise 동작의 반복 예시입니다.
const p4 = new Promise(promiseFx);
console.log("-5-");
const p5 = p4.then(thenFx1);
console.log("-6-");
const p6 = p5.then(thenFx2);
console.log("-7-");
const e2 = p6.catch((error) => console.error(error));
