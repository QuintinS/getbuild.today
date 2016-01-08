if ( $.cookie("BuildGiftModalDismissed") === undefined ) {
	// console.log("Show Modal");
	setTimeout(
		function(){
			GiftModal.create();
			GiftModal.addEventListeners();
		}, 4000);
}