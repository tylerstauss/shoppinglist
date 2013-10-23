if (!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g, '');
  };
}
 

 function addItem(){
	var newItem = $('#item').val().trim();
	$('#list').prepend('<li class="unchecked">' + newItem + '</li>');
	}
	




	$(document).on('click', "li.unchecked", function(){
		$(this).toggleClass("checked");
});
	$(document).on('dblclick', "li.unchecked", function(){
		$(this).remove();
});

















	/* 

	$('#list li').click(function(){
		$(this).toggleClass("checked");
	})
	*/