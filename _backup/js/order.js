var GoToSite = function(n) {
		var url = $(n.currentTarget).attr("data-siteaddress");
		var win = window.open(url, '_blank');
		win.focus();
	},

	OpenRefundModal = function() {
		$("#buildModal").buildModal({
			action: "show",
			contentURL: "/includes/buildmodal-include-refundpolicy.html"
		})
	},
	OpenTermsModal = function() {
		$("#buildModal").buildModal({
			action: "show",
			contentURL: "/includes/buildmodal-include-termsconditions.html"
		})
	},
	OpenPrivacyModal = function() {
		$("#buildModal").buildModal({
			action: "show",
			contentURL: "/includes/buildmodal-include-privacypolicy.html"
		})
	};

$("#GoToSite").on("click", GoToSite);
$("#FooterLinkRefund").on("click", OpenRefundModal);
$("#FooterLinkTerms").on("click", OpenTermsModal);
$("#FooterLinkPrivacy").on("click", OpenPrivacyModal);