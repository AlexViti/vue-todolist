class Todo {
	constructor(task) {
		this.task = task;
		this.done = false;
	}
}

const app = new Vue({
	el: '#root',
	data: {
		todoArr: [
			{
				task: 'Fare i compiti',
				done: false
			},
			{
				task: 'Fare la spesa',
				done: false
			},
			{
				task: 'Fare il bucato',
				done: false
			}
		],
		newTodo: ''
	},
	methods: {
		deleteTodo(index) {
			this.todoArr.splice(index, 1);
		},
		addTodo() {
			if (this.newTodo.trim() != '') {
				this.todoArr.unshift(new Todo(this.newTodo.trim()));
			}
			this.newTodo = '';
		}
	}
});