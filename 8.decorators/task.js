//Задача № 1
function cachingDecoratorNew(func) {
   let cache = [];

   function wrapper(...args) {
      const hach = md5(args);
      let objectInCache = cache.find((item) => item.hach === hach);
      if (objectInCache) {
         console.log('Из кэша: ' + objectInCache.value)
         return 'Из кэша: ' + objectInCache.value;
      }

      let result = func(...args);
      const cacheResult = {
         hach,
         value: result
      };

      cache.push(cacheResult)
      if (cache.length > 5) {
         cache.shift()
      }

      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;
   }
   return wrapper;
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
   let timeoutId = null;
   function wrapper(...args) {
      wrapper.allCount += 1;
      if (timeoutId) {
         clearTimeout(timeoutId)
      }
      if (wrapper.count === 0) {
         wrapper.count += 1;
         func(...args)
      }

      timeoutId = setTimeout(() => {
         console.log('count', wrapper.count)
         timeoutId = null;
         wrapper.count += 1;
         func(...args)
      }, delay)
   }

   wrapper.count = 0;
   wrapper.allCount = 0;

   return wrapper
}
