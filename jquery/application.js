jQuery(document).ready(function(){
	$("#important").text("The following is important!");
	var first = $(".tasks > li").first()[0].childNodes[0].nodeValue;
	var last = $(".tasks > li").last()[0].childNodes[0].nodeValue;
	var second = $(".tasks > li").first().next()[0].childNodes[0].nodeValue;
	var second_last = $(".tasks > li").last().prev()[0].childNodes[0].nodeValue;
	$("#traverse").append($("<p id='first'>"+`First element: \"${first}\"`+"</p>"));
	$("#traverse").append($("<p id='last'>"+`Last: \"${last}\"`+"</p>"));
	$("#traverse").append($("<p>"+`One after first: \"${second}\"`+"</p>"));
	$("#traverse").append($("<p>"+`Second last: \"${second_last}\"`+"</p>"));

	$('#todo').on('click', 'button', function() {
		var task = $('<li>Wash the dishes</li>');
   		$('.tasks').append(task);
   		var last = $(".tasks > li").last()[0].childNodes[0].nodeValue;
   		$("#traverse").find("#last").text(`Last: \"${last}\"`);
   		$(this).remove();
   	});


   	$('.tour').on('click', 'button', function() {
    var tour = $(this).closest('.tour');
    var discount = tour.data('discount');
    var message = $('<span>Call 1-555-jquery-air for a $' + discount + ' discount.</span>');
    tour.append(message);
    $(this).remove();
  });
});