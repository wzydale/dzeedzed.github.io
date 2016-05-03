var Course {
	$content: $('#content'),
	$form: $('form'),
	subject: '',
	number: '',
};

$(document).ready(function(){
	Course.$form.on('submit', function(e) {
		e.preventDefault();

		// Do more stuff
		$.ajax({
			url: "https://api.uwaterloo.ca/v2/courses/" + 
			Course.subject + "/" + Course.number +
			".json?key=3a018130b88c880512c1c67c336d5a07",

			datatType: 'JSONP'
		})
		.done(function(response) {
			var response = response.results[0];
    		console.log(response);
		})
		.fail(function(data) {

		});
	});
});
