
function expandCards() {
	var $grid = $('.grid').masonry({
		itemSelector: '.grid-item'
	});

	$('.card').each(function () {
		if (this.offsetHeight < this.scrollHeight) {
			$(this).addClass("card-overflow");

			$(this).click(function () {
				console.log("clicked");
				console.log($grid);

				if ($(this).parent().hasClass("grid-item--expand") == false) {
					$(".grid-item--expand").removeClass("grid-item--expand");
					$(this).parent().toggleClass("grid-item--expand");
				}
				else {
					$(this).parent().toggleClass("grid-item--expand");
				}



				$grid.masonry();
			});
		} else {
			$(this).removeClass("card-overflow");
		}
	});
}

$(window).resize(function() {
	expandCards();
});

$(document).ready(function() {
	expandCards();
});
