/**
 * 단축 평가 논리 연산 (Short-circuit Evaluation)
 * 논리 연산자 (&&, ||)가 피연산자를 평가하는 방식을 설명합니다.
 */
const name = "이동윤"; // 'name' 변수에 Truthy 값인 '이동윤'을 할당합니다.

console.log(!!name && !!"김준이"); // '!!name'은 true, '!!'김준이'도 true이므로 true && true 결과인 true를 반환합니다.
// && (AND) 연산:
// && 연산 -> 앞의 값이 true일 때 뒤의 값을 리턴, false일 때 false리턴
// - 첫 번째 피연산자가 Truthy 값인 경우, 두 번째 피연산자의 값을 반환합니다.
// - 첫 번째 피연산자가 Falsy 값인 경우, 첫 번째 피연산자의 값을 즉시 반환하고 뒤의 피연산자는 평가하지 않습니다.
console.log(false && 10); // false가 Falsy이므로, 뒤의 10은 평가되지 않고 false를 반환합니다.
console.log(true && 10); // true가 Truthy이므로, 뒤의 10을 평가하여 10을 반환합니다. (추가 예시)

// || (OR) 연산:
// || 연산 -> 앞의 값이 false일 때 뒤의 값을 리턴, true일 때 true리턴
// - 첫 번째 피연산자가 Falsy 값인 경우, 두 번째 피연산자의 값을 반환합니다.
// - 첫 번째 피연산자가 Truthy 값인 경우, 첫 번째 피연산자의 값을 즉시 반환하고 뒤의 피연산자는 평가하지 않습니다.
console.log(false || 10); // false가 Falsy이므로, 뒤의 10을 평가하여 10을 반환합니다.
console.log(true || 10); // true가 Truthy이므로, 뒤의 10은 평가되지 않고 true를 반환합니다. (추가 예시)

// nullish 병합 연산자 (Nullish Coalescing Operator) - '??'
// ?? 연산 -> 앞의 값이 null 또는 undefined 가 아니면 앞의 값, 그 외에는 뒤의 값
// ?? 연산: 왼쪽 피연산자가 null 또는 undefined일 경우에만 오른쪽 피연산자를 반환합니다.
//          그 외의 Falsy 값(0, '', false 등)에 대해서는 왼쪽 피연산자 자신을 반환합니다.
console.log(null ?? 100); // null이므로 오른쪽 피연산자 100을 반환합니다.
console.log(undefined ?? 100); // undefined이므로 오른쪽 피연산자 100을 반환합니다.
console.log(20 ?? 100); // 20은 null이나 undefined가 아니므로 왼쪽 피연산자 20을 반환합니다.
console.log(0 ?? 100); // 0은 null이나 undefined가 아니므로 왼쪽 피연산자 0을 반환합니다. (추가 예시)
console.log("" ?? 100); // 빈 문자열은 null이나 undefined가 아니므로 왼쪽 피연산자 ''를 반환합니다. (추가 예시)
