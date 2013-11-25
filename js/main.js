$(document).ready(function(){

	// Mask
	$('#phone').mask('(00) 0000-0000');

	// Form Validator
	$("#contact").validate({
		rules: {
			name: "required",
			email: {
				required: true,
				email: true
			}
		},
		messages: {
			name: "Digite seu Nome",
			email: {
				required: "Digite seu E-Mail",
				email: "E-Mail inválido"
			}
		},
		submitHandler: function(form) 
		{
			form.submit();
		}
	});
});

$(window).load(function(){
    $(".crop").fullscreenBackground();
});