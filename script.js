/* Exercise 1: Wish list */
function addToList(item) {
	$("#items").append("<li>" + item + "<span class='label pending'>Pending</span></li>")
}

$(document).on('click', '#add-to-list', function() {
	addToList($("#item").val());
	$("#item").val("");
	$( "#item" ).focus();
	updateTotal();
});

$(document).on('click', '.pending', function() {
	var li_node = $(this).parent();
	li_node.append("<span class='label success'>Done!</span>");
	$(this).remove();
	li_node.addClass('completed');
	updateTotal();
});

function updateTotal() {
	var pendingItems = $(".pending").length;
	var completedItems = $(".completed").length;
	$(".total").text('Pending: ' + pendingItems + ' Completed: ' + completedItems);
}