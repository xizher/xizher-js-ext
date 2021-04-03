/* eslint-disable no-undef */
import $ext from '../../dist'

test('format() can run', () => {
  const date = new Date()
  const year = $ext(date).format('yyyy')
  const month = $ext(date).format('M')
  const d = $ext(date).format('d')
  const h = $ext(date).format('h')
  const m = $ext(date).format('m')
  const s = $ext(date).format('s')
  expect(year).toBe(date.getFullYear().toString())
  expect(month).toBe((date.getMonth() + 1).toString())
  expect(d).toBe(date.getDate().toString())
  expect(h).toBe(date.getHours().toString())
  expect(m).toBe(date.getMinutes().toString())
  expect(s).toBe(date.getSeconds().toString())
})

test('getMonth() can run', () => {
  const date = new Date()
  const month = $ext(date).getMonth()
  expect(month).toBe(date.getMonth() + 1)
})

test('getNextDate() can run', () => {
  const date = new Date('2021/2/28')
  const dateExt = $ext(date)
  expect(dateExt.getNextDate(1).getMonth() + 1).toBe(3)
  expect(dateExt.getNextDate(-1).getDate()).toBe(27)
})
