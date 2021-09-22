//принимает два аргуента
function printMyFullName(firstname, secondname) {
    // интерполяция объединение строк в одну константу
    const fullname = `${firstname} ${secondname}`;
// возвращает
    return fullname;
  }
  // выводит
  console.log(printMyFullName('into', 'code'));
  
  
  function getSumOfFirstAndLastElement(arr) {
      // условие длина массива меньше двух
    if(arr.length < 2) {
        //возвращает если длина массива меньше двух
      return 'леее, минимум два элемента нужно жи есть';
     //иначе
    } else {
        // убирает последний элемент в массиве
      const lastIndex = arr.length - 1;
      //возврат
      return arr[0] + arr[lastIndex];
    }
  }
