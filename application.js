if (!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g, '');
  };
}
 
 $(function() {
        $('#item').keypress(function(event) {
            if (event.which == 13) {
                addItem();
            }
        });
    });

 function addItem(){
	var newItem = document.getElementById('item').value;
	//$('#item').val().trim();
	$('#list').prepend('<span class="x-away"><img src="images/closeButton1.png" title="remove item" alt="remove item"> <li class="unchecked">' + newItem + '</li></span>');

	//$('item').value() = '';
	}

	$(document).on('click', "li.unchecked", function(){
		$(this).toggleClass("checked");
		//$('.x-away img').closest.toggleClass('hidden');
});
	$(document).on('click', "img", function(){
		$(this).closest('span').remove();
});

















	/* 

	$('#list li').click(function(){
		$(this).toggleClass("checked");
	})
	*/