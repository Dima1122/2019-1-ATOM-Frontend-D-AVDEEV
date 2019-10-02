/*
 * Функция `convertBytesToHuman` должна принимать
 * аргумент `bytes` только числового типа.
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */

function convertBytesToHuman(bytes) {
  var names = ['kb','Mb' ,'Gb', 'Tb'];
  if (bytes === parseInt(bytes,10)){
    if (bytes >= 0){
      var i;
      for (i = 0; i < names.length; i++){
        bytes = bytes / 1024;
        if (bytes < 1024){
          return bytes.toFixed(2) + names[i];
        }
      }
      return bytes.toFixed(2) + name[i];
    }
    return false;
  }
  return false;
}

export default convertBytesToHuman