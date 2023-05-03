// Будильник-колыбельная

class AlarmClock {
   constructor() {
      this.alarmCollection = []
      this.intervalId = null
   }

   addClock(time, callback) {

      if (!time || !callback) {
         throw new Error('Отсутствуют обязательные аргументы')
      }
      if (this.alarmCollection.some(time => time)) {
         console.warn('Уже присутствует звонок на это же время')
      }

      this.alarmCollection.push({ time, canCall: true, callback })
   }

   removeClock(time) {
      //const newAlarms = this.alarmCollection.filter(item => item.time !== time)
      this.alarmCollection = this.alarmCollection.filter(item => item.time !== time)
   }

   getCurrentFormattedTime() {
      const timeNow = new Date();
      const hours = timeNow.getHours().toString();
      const minutes = timeNow.getMinutes().toString();
      let resultTime = "";
      if (minutes.length < 2) {
         resultTime = hours + ":" + 0 + minutes;
      } else if (minutes.length >= 2) {
         resultTime = hours + ":" + minutes;
      }
      return resultTime
   }

   start() {
      if (this.intervalId !== null) {
         return
      }

      this.intervalId = setInterval(
         () => {
            this.alarmCollection.forEach(
               (alarm) => {
                  if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall === true) {
                     alarm.canCall = false
                     alarm.callback()
                  }
               }
            )
         }
         , 1000)
   }

   stop() {
      clearInterval(this.intervalId)
      this.intervalId = null
   }

   resetAllCalls() {
      this.alarmCollection.forEach((alarm) => alarm.canCall = true)
   }

   clearAlarms() {
      this.stop()
      this.alarmCollection = []
   }
}