// Incremental Value
let sum = 0;
for (let i = 1; i <= 5; i++) {
	sum = sum + i;
}
console.log(sum);

// Decremental Value
let sum = 0;
for (let i = 5; i >= 1; i--) {
	sum = sum + i;
}
console.log(sum);

// Function can call inside the function
function sum(i) {
	if (i === 1) {
		return 1;
	}
	console.log(i);
	return i + sum(i - 1);
}

sum(5);
