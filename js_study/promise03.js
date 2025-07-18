//로그인
function login(username) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (username) {
				resolve(username); // 로그인 성공 시 사용자 이름을 resolve
			} else {
				reject(new Error("로그인 실패: 사용자 이름이 필요합니다.")); // 로그인 실패 시 에러를 reject
			}
		}, 1000);
	});
}

//장바구니에 추가
function addToCart(product) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (product) {
				resolve(product); // 장바구니에 추가 성공 시 제품 이름을 resolve
			} else {
				reject(new Error("장바구니 추가 실패: 제품이 필요합니다.")); // 실패 시 에러를 reject
			}
		}, 1000);
	});
}

//결제하기
function checkout(cardNumber, product) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (cardNumber && product) {
				resolve(product); // 결제 성공 시 카드 번호와 제품 정보를 resolve
			} else {
				reject(new Error("결제 실패: 카드 번호와 제품이 필요합니다.")); // 실패 시 에러를 reject
			}
		}, 1000);
	});
}

// login("이동윤", (username) => {
// 	console.log(`${username}님이 로그인했습니다.`);
// 	addToCart("감자", (product) => {
// 		console.log(`${product}가 장바구니에 추가되었습니다.`);
// 		checkout("1234-5678-9012-3456", product, (cardNumber, product) => {
// 			console.log(
// 				`${product}에 대한 결제가 완료되었습니다. 카드번호: ${cardNumber}`
// 			);
// 		});
// 	});
// });

login("이동윤")
	.then((username) => {
		console.log(`${username}님이 로그인했습니다.`);
		return addToCart("감자");
	})
	.then((product) => {
		console.log(`${product}가 장바구니에 추가되었습니다.`);
		return checkout("1234-5678-9012-3456", product);
	})
	.then((product) => {
		console.log(`${product}에 대한 결제가 완료되었습니다.`);
	})
	.catch((error) => {
		console.error(error.message); // 에러가 발생하면 콘솔에 에러 메시지를 출력합니다.
	});
