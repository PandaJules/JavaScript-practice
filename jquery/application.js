jQuery(document).ready(function(){
	$("#important").text("The following is important!");
	var first = $(".tasks > li").first()[0].childNodes[0].nodeValue;
	var last = $(".tasks > li").last()[0].childNodes[0].nodeValue;
	var second = $(".tasks > li").first().next()[0].childNodes[0].nodeValue;
	var second_last = $(".tasks > li").last().prev()[0].childNodes[0].nodeValue;
	document.getElementById("traverse").innerHTML = `First element: \"${first}\"<br>\
													Last: \"${last}\"<br>\
													One after first: \"${second}\"<br>\
													Second last: \"${second_last}\"`;
	$('button').on('click', function() {
		var task = $('<li>Wash the dishes</li>');
   		$('.tasks').append(task);
   		$('button').remove();
   	});
});