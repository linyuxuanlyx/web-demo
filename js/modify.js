// JSON: JavaScript Object Notation（JavaScript 对象标记法）。
// JSON 是一种存储和交换数据的语法。
// JSON 是通过 JavaScript 对象标记法书写的文本。
// JSON 属于文本，并且我们能够把任何 JavaScript 对象转换为 JSON，然后将 JSON 发送到服务器。
// 我们也能把从服务器接收到的任何 JSON 转换为 JavaScript 对象
// localStorage特性，这个特性主要是用来作为本地存储来使用的
function save(obj) {
	localStorage.setItem('obj', JSON.stringify(obj))
}
// localStorage.getItem(key):获取指定key本地存储的值
// localStorage.setItem(key,value)：将value存储到key字段
// 三元表达式
function getData() {
	return localStorage.getItem('obj') ? JSON.parse(localStorage.getItem('obj')) : {
		idnumber:'',
		username: '',
		bedroom_name: '',
		gender:'',
		birthday:'',
		phone_number: '',
		email: ''
	}
}
// disabled禁用按钮
function changeState(bool) {
	idnumber.disabled=bool
	username.disabled = bool
	bedroom_name.disabled = bool
	gender.disabled=bool
	birthday.disabled=bool
	phone_number.disabled = bool
	email.disabled = bool
}
// let调用 显示信息
function init() {
	let info = getData()
	idnumber.value=info.idnumber
	username.value = info.username
	bedroom_name.value = info.bedroom_name
	gender.value=info.gender
	birthday.value = info.birthday
	phone_number.value = info.phone_number
	email.value = info.email
	
}
// 点击保存按钮保存
init()
saves.addEventListener('click', e => {
	let info = {
		idnumber:idnumber.value,
		username: username.value,
		bedroom_name: bedroom_name.value,
		gender: gender.value,
		birthday:birthday.value,
		phone_number: phone_number.value,
		email: email.value,
	}
	// 判断邮箱
	if( !(info.email + '').match(/^[^@]+@[\da-zA-Z_]+\.[\da-zA-Z]+$/) ) return alert('邮箱格式不正确')
	if( !(info.phone_number + '').match(/^1[3-9]\d{9}$/) ) return alert('电话号码格式不正确')
	alert('保存成功')
	// 调用
	save(info)
	changeState(true)
})
// 修改信息 禁用状态变成非禁用状态
change.addEventListener('click', e => {
	changeState(false)
})
