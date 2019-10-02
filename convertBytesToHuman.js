/*
 * Функция `convertBytesToHuman` должна принимать
 * аргумент `bytes` только числового типа.
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */
import Math;

function convertBytesToHuman(bytes) {
  var names = ['b', 'kb', 'Gb', 'Tb'];
  if (bytes === parseInt(data,10){
    if (bytes >= 0){
      var i;
      for (i = 0; i < names.length; i++){
        if (bytes /1024 < 1024){
          return bytes.toFixed(2) + name[i]
        }
        bytes = bytes / 1024;
      }
      return bytes.toFixed(2) + name[i]
    }
    return false
  }
  return false
}
