var app = new Vue({
	el: "#app",
	data: {
		title: "Aditya's Birthday in:",
		bod: "",
		days: "",
		hours: "",
		minutes: "",
		seconds: "",
	},
	methods: {
		countdown: function () {
			const second = 1000;
			const minute = second * 60;
			const hour = minute * 60;
			const day = hour * 24;

			let that = this;

			let current = new Date().getTime();
			let bod = new Date("21 Juni " + new Date().getFullYear()).getTime();

			let year =
				(bod - current) / day < 0
					? new Date().getFullYear() + 1
					: new Date().getFullYear();

			let nextBod = "21 Juni " + year;
			that.bod = nextBod;
			let countDown = new Date(nextBod).getTime();

			setInterval(function () {
				let now = new Date().getTime();
				let distance = countDown - now;

				that.days = Math.floor(distance / day);
				that.hours = Math.floor((distance % day) / hour);
				that.minutes = Math.floor((distance % hour) / minute);
				that.seconds = Math.floor((distance % minute) / second);
			}, second);
		},
	},
	beforeMount() {
		this.countdown();
	},
});
