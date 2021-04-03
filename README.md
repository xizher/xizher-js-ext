# @xizher/js-ext
## 安装

```bash
npm install @xizher/js-ext
```

## 接口文档

| 成员                                 | 说明                     |
| ------------------------------------ | ------------------------ |
| $ext(arg0: number).divide()          | 整除                     |
| $ext(arg0: number).floor()           | 向下取整                 |
| $ext(arg0: number).ceil()            | 向上取整                 |
| $ext(arg0: number).abs()             | 绝对值                   |
| $ext(arg0: number).round()           | 保留位                   |
| $ext(arg0: number).toDate()          | 转化为日期对象           |
| $ext(arg0: number).toDateFormat()    | 转化为日期格式化字符串   |
| $ext(arg0: number).toCashString()    | 转化为现金字符串         |
| $ext(arg0: number).toChineseString() | 转化为中文数字字符串     |
| $ext(arg0: Date).format()            | 日期格式化字符串         |
| $ext(arg0: Date).getNextDate()       | 获取前后日期             |
| $ext(arg0: Date).getMonth()          | 获取月份                 |
| $ext(arg0: string).trimAll()         | 清空所有空格             |
| $ext(arg0: string).toDate()          | 转化为日期对象           |
| $ext(arg0: string).toDateFormat()    | 转化为日期格式化字符串   |
| $ext(arg0: Array).insert()           | 插入对象                 |
| $ext(arg0: Array).removeIndex()      | 移除指定位置的对象       |
| $ext(arg0: Array).removeValue()      | 移除指定的对象           |
| $ext(arg0: Array).unique()           | 去重处理                 |
| $ext(arg0: Array).getUnique()        | 获取唯一值               |
| $ext(arg0: Array).equal()            | 数组间是否相等           |
| $ext(arg0: Array).findItem()         | 查找符合条件的第一个对象 |
| $ext(arg0: Array).findItems()        | 查找符合条件的所有对象   |
| $ext(arg0: Array).propToArr()        | 对象属性转数组           |
| $ext(arg0: Array).last()             | 数据的最后一位           |

## 使用样例

```javascript
/* eslint-disable no-undef */
import $ext from '../../dist'

test('trimAll() can run', () => {
  const str = '  tes  test  '
  const newStr = $ext(str).trimAll()
  expect(newStr).toBe('testest')
})

test('toDate() can run', () => {
  const dateStr = '2020/1/1'
  const date = $ext(dateStr).toDate()
  expect(date.getFullYear()).toBe(2020)
})

test('toDateFormat() can run', () => {
  const dateStr = '2020/1/1'
  const year = $ext(dateStr).toDateFormat('yyyy')
  expect(year).toBe('2020')
})

```
```javascript
/* eslint-disable no-undef */
import $ext from '../../dist'

test('insert() can run', () => {
  const arr = [1, 0, 2]
  $ext(arr).insert(3, 9)
  expect(arr[3]).toBe(9)
  $ext(arr).insert(0, -1)
  expect(arr[0]).toBe(-1)
})

test('removeIndex() can run', () => {
  const arr = [1, 0, 2]
  $ext(arr).removeIndex(2)
  expect(arr.length).toBe(2)
  const v = $ext(arr).removeIndex(0, true)
  expect(v).toBe(1)
})

test('clear() can run', () => {
  const arr = [1, 0, 2]
  $ext(arr).clear()
  expect(arr.length).toBe(0)
})

test('reset() can run', () => {
  const arr = [1, 0, 2]
  $ext(arr).reset(3, 3, 3, 3)
  expect(arr.length).toBe(4)
})

test('removeValue() can run', () => {
  const arr = [1, 0, 2, 0, 2]
  $ext(arr).removeValue(0)
  expect(arr.length).toBe(4)
  $ext(arr).removeValue(2, true)
  expect(arr.length).toBe(2)
})

test('unique() can run', () => {
  const arr = [1, 0, 2, 0, 2]
  $ext(arr).unique(0)
  expect(arr.length).toBe(3)
})

test('getUnique() can run', () => {
  const arr = [1, 0, 2, 0, 2]
  const newArr = $ext(arr).getUnique(0)
  expect(arr.length).toBe(5)
  expect(newArr.length).toBe(3)
})

test('unique() can run', () => {
  const arr = [1, 0, 2, 0, 2]
  const arr2 = [1, 0, 2, 0, 2]
  const b = $ext(arr).equal(arr2)
  expect(b).toBe(true)
})

test('findItem() can run', () => {
  const arr = [{ a: 1, b: 2 }, { a: 2, b: 3 }]
  const ret = $ext(arr).findItem('a', 1)
  expect(ret.a).toBe(1)
  expect(ret.b).toBe(2)
})

test('findItems() can run', () => {
  const arr = [{ a: 1, b: 2 }, { a: 2, b: 3 }, { a: 2, b: 4 }]
  const ret = $ext(arr).findItems('a', 2)
  expect(ret.length).toBe(2)
  expect(ret[0].b).toBe(3)
  expect(ret[1].b).toBe(4)
})

test('propToArr() can run', () => {
  const arr = [{ a: 1, b: 2 }, { a: 2, b: 3 }, { a: 2, b: 4 }]
  const ret = $ext(arr).propToArr('a')
  expect(ret.length).toBe(3)
  expect(ret[0]).toBe(1)
  expect(ret[1]).toBe(2)
  expect(ret[2]).toBe(2)
})

test('last() can run', () => {
  const arr = [1, 0, 2, 0, 2]
  const last = $ext(arr).last()
  expect(last).toBe(2)
})

```
```javascript
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

```
```javascript
/* eslint-disable no-undef */
import $ext from '../../dist'

test('divide() can run', () => {
  const num = 7
  expect($ext(num).divide(3)).toBe(2)
})

test('floor() can run', () => {
  const num = 7.9
  expect($ext(num).floor()).toBe(7)
})

test('ceil() can run', () => {
  const num = 7.1
  expect($ext(num).ceil()).toBe(8)
})

test('abs() can run', () => {
  const num = -7.1
  expect($ext(num).abs()).toBe(7.1)
})

test('round() can run', () => {
  expect($ext(7.4).round()).toBe(7)
  expect($ext(7.5).round()).toBe(8)
  expect($ext(7.5).round(-1)).toBe(10)
  expect($ext(7.54).round(1)).toBe(7.5)
})

test('toDate() can run', () => {
  expect($ext(0).toDate().getFullYear()).toBe(1970)
})

test('toDateFormat() can run', () => {
  expect($ext(0).toDateFormat('yyyy')).toBe('1970')
})

test('toCashString() can run', () => {
  expect($ext(100000000).toCashString()).toBe('100,000,000')
})

test('toDateFormat() can run', () => {
  expect($ext(100000000).toChineseString()).toBe('一亿')
})

```
