// Задание 1

function parseCount(num) {
   const parsed = Number.parseFloat(num)
   if (Number.isNaN(parsed)) {
      throw new Error('Невалидное значение');
   }
   return parsed
}

function validateCount(num) {
   try {
      return parseCount(num)
   } catch (error) {
      return error
   }
}


