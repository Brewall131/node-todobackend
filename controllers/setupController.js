var Todos = require ('../models/todomodel')

module.exports = function(app) {
	app.get('/api/setupTodos', function (req, res){

		//seed database
		var starterTodos = [
			{
				username: 'test',
				todo: 'Buy Milk',
				isDone: false,
				hasAttachment: false

			},
			{
				username: 'test',
				todo: 'Dog Food',
				isDone: false,
				hasAttachment: false
			},
			{
				username: 'test',
				todo: 'clean guinea cage',
				isDone: false,
				hasAttachment: false
			}
		];

		Todos.create(starterTodos, function(err, results){
			res.send(results);
		});
	});
}