const addBtn = document.querySelector(".add-btn");
let count = 1;

addBtn.onclick = () => {
	const inputName = document.querySelector("#input-name");
	const inputNameValue = inputName.value;
	const inputAge = document.querySelector("#input-age");
	const inputAgeValue = inputAge.value;
	const inputAddress = document.querySelector("#input-address");
	const inputAddressValue = inputAddress.value;

	const table = document.querySelector(".table");

	table.innerHTML += `
        <tr>
            <th>${count}</th>
            <th>${inputNameValue}</th>
            <th>${inputAgeValue}</th>
            <th>${inputAddressValue}</th>
        </tr>
    `;

	count++;

	inputName.value = "";
	inputAge.value = "";
	inputAddress.value = "";
};
