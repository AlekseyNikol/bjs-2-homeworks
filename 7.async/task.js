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
      //console.log(this.alarmCollection[0].time)
      if (this.alarmCollection.some(item => item.time === time)) {
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
      console.log(timeNow)
      const hours = timeNow.getHours().toString();
      const minutes = timeNow.getMinutes().toString();
      let resultTime = timeNow.toLocaleTimeString("ru-Ru", {
         hour: "2-digit",
         minute: "2-digit",
      });
      console.log(new Date())
      // if (minutes.length < 2) {
      //    resultTime = 0 + hours + ":" + 0 + minutes;
      // } else if (minutes.length >= 2) {
      //    resultTime = hours + ":" + minutes;
      // }

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

