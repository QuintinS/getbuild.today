var GoToSite = function(event) {
	var mySiteAddress = $(event.currentTarget).attr("data-siteaddress");
	window.location.replace(mySiteAddress);
};

var OpenRefundModal = function() {
	$('#buildModal').buildModal({action: 'show', contentURL: '/includes/buildmodal-include-refundpolicy.html'})
};

var OpenTermsModal = function() {
	$('#buildModal').buildModal({action: 'show', contentURL: '/includes/buildmodal-include-termsconditions.html'})
};

var OpenPrivacyModal = function() {
	$('#buildModal').buildModal({action: 'show', contentURL: '/includes/buildmodal-include-privacypolicy.html'})
};


$("#GoToSite").on("click", GoToSite);

$("#FooterLinkRefund").on("click", OpenRefundModal);
$("#FooterLinkTerms").on("click", OpenTermsModal);
$("#FooterLinkPrivacy").on("click", OpenPrivacyModal);