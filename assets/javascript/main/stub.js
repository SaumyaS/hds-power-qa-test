$(document).ready(function() {
	$("#mw_cartContainer").on("click",function(){
		url = $("#image-cart").attr("href");
		// alert(url);
		location.href = url;
	});
});

	$(".cart-toggle .cart-count").DOMNodeAppear(function(){
		var cartNumber = $(".cart-toggle .cart-count").text();
		// alert(cartNumber);

		if(cartNumber === 0){
			$(".Icons-cart-indicator").hide();
		}
		else if(cartNumber > 0){
			$(".Icons-cart-indicator").show();
			$(".mw_itemNumber").text(cartNumber);
		}
	});