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
		newTodo: {
			task: '',
			done: false
		}
	},
	methods: {
		deleteTodo(index) {
			this.todoArr.splice(index, 1);
		},
		addTodo() {
			if (this.newTodo.trim() != '') {
				this.todoArr.unshift(this.newTodo.task.trim());
				this.newTodo.task = ''
			}
		}
	}
});