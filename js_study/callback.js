//콜백함수
//다른 함수의 인자로 전달되는 함수

//비동기콜백
//비동기 콜백은 비동기 작업이 완료된 후에 호출되는 콜백 함수입니다.
function getData() {
	setTimeout(() => {
		//서버통신을 흉내
		console.log("서버에서 데이터를 받아왔어요");
	}, 2000);
}
function getData(callback) {
	setTimeout(() => {
		//서버통신을 흉내
		console.log("서버에서 데이터를 받아왔어요");
		callback({ name: "이동윤" }); //데이터를 받아온 후에 콜백함수를 호출
	}, 2000);
}

getData();
console.log("받아온 데이터를 후처리..."); //getData함수가 끝나기전에 먼저 실행됨

// 그래서 비동기 콜백함수를 적용
getData((data) => {
	console.log(data.name); //서버에서 데이터를 받아온 후에 실행됨
});

//예를 들어 쇼핑몰
//로그인
function login(username, callback) {
	setTimeout(() => {
		callback(username); //로그인 후에 콜백함수 호출
	}, 1000);
}

//장바구니에 추가
function addToCart(product, callback) {
	setTimeout(() => {
		callback(product);
	}, 1000);
}

//결제하기
function checkout(cardNumber, product, callback) {
	setTimeout(() => {
		callback(cardNumber, product);
	}, 1000);
}

login("이동윤", (username) => {
	console.log(`${username}님이 로그인했습니다.`);
	addToCart("감자", (product) => {
		console.log(`${product}가 장바구니에 추가되었습니다.`);
		checkout("1234-5678-9012-3456", product, (cardNumber, product) => {
			console.log(
				`${product}에 대한 결제가 완료되었습니다. 카드번호: ${cardNumber}`
			);
		});
	});
});

//위처럼 콜백함수가 계속 중첩되면 콜백지옥이 발생된다.