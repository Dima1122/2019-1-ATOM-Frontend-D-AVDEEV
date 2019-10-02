import convertBytesToHuman from "./convertBytesToHuman.js"
/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== 1,
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === 5
 */


test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman(-1)).toBe(false)
  expect(convertBytesToHuman("abcd")).toBe(false)
  expect(convertBytesToHuman(true)).toBe(false)
  expect(convertBytesToHuman(false)).toBe(false)
  expect(convertBytesToHuman(null)).toBe(false)
  expect(convertBytesToHuman(undefined)).toBe(false)
});

test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(1024)).toBe('1.00kb')
  expect(convertBytesToHuman(5242880)).toBe('5.00Mb')
  expect(convertBytesToHuman(1524)).toBe('1.49kb')
  expect(convertBytesToHuman(1073741824)).toBe('1.00Gb')
});

// другая группа проверок
