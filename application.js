if (!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g, '');
  };
}
 
 $(function() {

        $('#item').keypress(function(event) {
            if (event.which == 13) {
                addItem();
                //return false; only if needed
            }
        });
    });

 function addItem(){
	var newItem = document.getElementById('item').value;
	//$('#item').val().trim();
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