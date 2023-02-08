const student = {
	name: "Touhid",
	id: 24,
	address: "jsr",
	isSingle: false,
	friends: ["apu", "mamun", "sakib"],
	car: {
		brand: "tesla",
		price: 500000,
		model: "3xr",
		manufacturer: {
			brand: "tesla",
			ceo: "elon musk",
		},
	},
	movies: [
		{ name: "hero", year: 2015 },
		{ name: "zero", year: 2018 },
	],
	act: function () {
		console.log("function");
	},
};

console.log(student.friends[0]);
console.log(student.car);
console.log(student.act);
student.act();
