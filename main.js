//Destructuring là cú pháp cho phép bạn gán nhanh các biến bằng các thuộc tính của object hoặc array. 
//Destructuring sẽ làm code của bạn trông dễ đọc và clean hơn rất nhiều.

const user = {
  name: 'Duoc',
  age: 24,
  sex: 'male'
}
// Thay vì viết dài dòng như thế này
// const name = user.name
// const age = user.age
// const sex = user.sex
// Dùng Destructuring làm code ngắn gọn hơn nhiều
const { name, age, sex } = user
console.log(name) // Duoc
console.log(age) // 24
console.log(sex) // male

//tương tự với Array
const list = [
  1,
  function (a, b) {
    return a + b
  }
]
const [value, func] = list
func(1, 2) // 3

//Đối với object thì khi bạn không muốn gán với thuộc tính nào thì chỉ cần không quy định trong dấu {}. Còn với array, bạn chỉ cần để trống nó. 
//Ví dụ bạn không cần dùng giá trị index = 0 của list

const list = [
  1,
  function (a, b) {
    return a + b
  }
]
const [, func] = list

//Ngoài ra ta có thể gán giá trị mặc định nếu có một thuộc tính không tồn tại hoặc value nó là undefined

const user = {
  name: 'Duoc',
  age: 24,
  sex: 'male'
}
const { name, height = 180 } = user
console.log(height) // 180

//Sử dụng ở function

const handle = ({ a, b = 0, c }) => {
  return a + b + c
}
handle({ a: 1, b: 2, c: 3 }) // 6

//Spread Syntax

//Spread syntax hay còn gọi là cú pháp dấu ba chấm (three dots) là cú pháp giúp ta “phân rã” array và object thành các thuộc tính riêng biệt. 
//Thường được áp dụng để shallow copy hay merge object.

// shallow copy

const user = {
  name: 'Duoc',
  age: 24,
  ability: ['coding']
}
const cloneUser = { ...user }// shallow copy

//Merge object

const user = {
  name: 'Duoc',
  age: 24,
  ability: ['coding']
}
const info = {address: 'Vietnam'}
const mergedUser = { ...user, ...info } // {name: "Duoc", age: 24, ability: Array(1), address: "Vietnam"}// merge object

//Thêm thuộc tính

const user = {
  name: 'Duoc',
  age: 24,
  ability: ['coding']
}
// Thêm thuộc tính ability vào userPlus
// Nếu user đã có ability thì nó sẽ bị ghi đè
const userPlus = { ...user, ability: ['sing'] } // {name: "Duoc", age: 24, ability: ['sing']}

//Tương tự với Array

// merge array
const list1 = [1, 2, 3, 4]
const list2 = [5, 6, 7, 8]
const list3 = [...list1, ...list2]
// shallow copy array
const cloneList1 = [...list1]
// shallow copy và add 1 phần từ vào cuối
const list4 = [...list1, 5]
// shallow copy và add 1 phần tử vào đầu
const list5 = [0, ...list1]

//Rest Parameter
//Rest Parameter cũng áp dụng dấu ba chấm như spread syntax, thường xuất hiện ở tham số function dùng để xác định các phần tử “còn lại”.

//Ở function.

const handle = (a, b, ...c) => {
  return c
}
handle(1, 2, 3, 4, 5, 6) // [3,4,5,6]

//Kết hợp rest parameter với destructuring

const handle = ({ a, b, ...c }) => {
  return c
}
handle({ a: 1, b: 2, c: 3, d: 4, e: 5 }) // {c: 3, d: 4, e: 5}

//Cũng có thể áp dụng với array

const handle = ([a, b, ...c]) => {
  return c
}
handle([1, 2, 3, 4, 5]) // [3, 4, 5]

//Đôi khi không cần phải xuất hiện ở function

const cake = {
  name: 'Banh Qui',
  price: 200,
  quantity: 100
}
const { name, ...other } = cake
console.log(other) // {price: 200, quantity: 100}
//Tóm lại
//Destructuring, Rest Parameters và Spread Syntax là những thứ thường xuyên được dùng trong JS, 
//  hy vọng qua những dòng code ngắn gọn của mình có thể giúp bạn hiểu nhanh được các khái niệm này.
//Nếu chưa học thì có thể bạn sẽ thấy nó không liên quan nhưng thật ra thì chúng luôn hỗ trợ nhau :mrgreen:
