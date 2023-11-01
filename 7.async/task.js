const callback = f => f;

class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	addClock(alarmTime, callback) {
		if (typeof alarmTime !== 'string' || typeof callback !== 'function') {
			throw new Error('Отсутствуют обязательные аргументы');
		};

		if (this.alarmCollection.some((alarm) => alarm.time === alarmTime)) {
			console.warn('Уже присутствует звонок на это же время');
		};

		let newAlarm = {
			callback: callback,
			time: alarmTime,
			canCall: true,
		}

		this.alarmCollection.push(newAlarm);
	}

	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter((alarm) => alarm.time !== time);
	}

	getCurrentFormattedTime() {
		return new Date().toLocaleTimeString('ru-Ru', {
			hour: "2-digit",
			minute: "2-digit",
		});
	}

	start() {
		if (this.intervalId !== null) {
			return;
		};

		this.intervalId = setInterval(() => {
			this.alarmCollection.forEach((alarm) => {
				if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall === true) {
					alarm.canCall = false;
					alarm.callback();
				}
			})
		}, 1000);
	}

	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}

	resetAllCalls() {
		this.alarmCollection.forEach((alarm) => {
			alarm.canCall = true;
		});
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}