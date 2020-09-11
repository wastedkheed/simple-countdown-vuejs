var app = new Vue({
	el: "#app",
	data: {
		title: "Aditya's Birthday in:",
		date: "",
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

			let date = new Date();
			this.date = date.toDateString();

			let that = this;
			let current = date.getTime();
			let thisYear = date.getFullYear();
			let bod = new Date("21 Juni " + thisYear).getTime();
			let year = (bod - current) / day < 0 ? thisYear + 1 : thisYear;
			let countDown = new Date("21 Juni " + year).getTime();

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
