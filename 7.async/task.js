class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error("Отсутствуют обязательные параметры");
    };
    if (this.alarmCollection.some(clock => clock.time === time)) {
      console.warn("Уже присутствует звонок на это же время");
    }
    this.alarmCollection.push({time, callback, canCall: true});
  }

  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(item => item.time !== time);
  }

  getCurrentFormattedTime() {
    const currentDate = new Date();
    return currentDate.toLocaleTimeString("ru-RU", {hour: "2-digit", minute: "2-digit"});
  }

  start() {
    if(this.intervalId) {
      return;
    }

    this.intervalId = setTimeout(() => {
      this.alarmCollection.forEach(clock => {
        if(clock.time === this.getCurrentFormattedTime() && clock.canCall) {
          clock.canCall = false;
          clock.callback();
        }
      })
    }, 1000)
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach((clock) => clock.canCall = true);
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}