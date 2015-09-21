/*	========================================
	GetBuild.Today
	======================================== */
var GiftModal = {
    create: function() {
        console.log("GiftModal.create()");
        $("body").prepend(GiftModal.print());
    },
    remove: function() {
        // $("body").find("#GiftModal").remove();
        $("#GiftModal").fadeOut(500, function() {
            $(this).remove();
        });
    },
    show: function() {
        $("#GiftModal").fadeIn(500);
    },
    hide: function() {
        $("#GiftModal").fadeOut(500);
    },
    addEventListeners: function() {
        $("#GiftModalDismissButton").on("click", onClickGiftModalDismissButton);
        $("#GiftModalStartButton").on("click", onClickGiftModalStartButton);
        $("#GiftModalOverlayBackground").on("click", onClickGiftModalOverlayBackground);
    },
    print: function() {
        var returnHTML = "";
        returnHTML += '<div id="GiftModal" class="GiftModal">';
        returnHTML += '<div class="container ModalContent animated fadeInDown">';
        returnHTML += '<div class="row header">';
        returnHTML += '<div class="col-sm-12">';
        returnHTML += "<h2>From us to you &mdash; an extra six months free!</h2>";
        returnHTML += "</div>			";
        returnHTML += "</div>";
        returnHTML += '<div class="row illustrations">';
        returnHTML += '<div class="col-sm-5">';
        returnHTML += '<div id="GiftModalImageSubscription" class="illustration GiftModalImageSubscription">';
        returnHTML += '<img src="/images/giftmodal/giftmodal-subscription.png" alt="Subscription">';
        returnHTML += "</div>";
        returnHTML += '<div class="caption hidden-xs">';
        returnHTML += "<span><strong>Build 1 Year Subscription</strong></span><br>";
        returnHTML += '<span class="title"><strong>$12.50 / Month</strong></span><br>';
        returnHTML += "<span>(Hosting Included)</span><br>";
        returnHTML += "</div>";
        returnHTML += "</div>";
        returnHTML += '<div class="col-sm-2">';
        returnHTML += '<div id="GiftModalImagePlus" class="image GiftModalImagePlus hidden-xs">';
        returnHTML += '<img src="/images/giftmodal/giftmodal-plus.png" alt="Plus">';
        returnHTML += "</div>";
        returnHTML += "</div>";
        returnHTML += '<div class="col-sm-5">';
        returnHTML += '<div id="GiftModalImageSixMonths" class="illustration hidden-xs GiftModalImageSixMonths">';
        returnHTML += '<img src="/images/giftmodal/giftmodal-sixmonths.png" alt="Six Months">';
        returnHTML += "</div>";
        returnHTML += '<div class="caption">';
        returnHTML += '<span class="title"><strong>An Extra Six Months Free</strong></span><br>';
        // returnHTML += 					'<span><bold>(You only pay for six months.)</bold></span><br>';
        returnHTML += "</div>";
        returnHTML += "</div>";
        returnHTML += "</div>";
        returnHTML += '<div class="row content">';
        returnHTML += '<div class="col-sm-12">';
        returnHTML += "<p><strong>Build</strong> is a super easy to use, feature-rich and affordable website builder. You get free, fully featured E-Commerce and a payment gateway, and hosting included.</p>";
        returnHTML += "<p>You can sign up today for a no-risk free trial. If you like what you see, you can sign up for a year’s subscription and get <strong>an extra six months absolutely free!</strong></p>";
        returnHTML += "</div>";
        returnHTML += "</div>";
        returnHTML += '<div class="row actions">';
        returnHTML += '<div class="col-sm-12">';
        returnHTML += '<a href="javascript:;" class="btn btn-primary btn-extended" id="GiftModalStartButton">';
        returnHTML += '<span class="btn-extended-icon">';
        returnHTML += '<span class="glyphicon glyphicon-time"></span>';
        returnHTML += "</span>";
        returnHTML += '<span class="btn-extended-text">';
        returnHTML += '<span class="btn-extended-heading">Build a Website Now!</span>';
        returnHTML += '<span class="btn-extended-message">It’s fast, easy and free to try.</span>	';
        returnHTML += "</span>";
        returnHTML += "</a>";
        returnHTML += '<a href="javascript:;" class="btn btn-default btn-extended" id="GiftModalDismissButton">';
        returnHTML += '<span class="btn-extended-icon">';
        returnHTML += '<span class="glyphicon glyphicon-ok"></span>';
        returnHTML += "</span>";
        returnHTML += '<span class="btn-extended-text">';
        returnHTML += '<span class="btn-extended-heading">Not for now, thanks!</span>';
        returnHTML += '<span class="btn-extended-message">I\'d like to look around first.</span>	';
        returnHTML += "</span>";
        returnHTML += "</a>";
        returnHTML += "</div>";
        returnHTML += "</div>";
        returnHTML += "</div>";
        returnHTML += '<div class="OverlayBackground animated fadeIn" id="GiftModalOverlayBackground"></div>';
        returnHTML += "</div>";
        return returnHTML;
    }
};

var onClickGiftModalDismissButton = function(event) {
    $.cookie("BuildGiftModalDismissed", "true");
    GiftModal.remove();
};

var onClickGiftModalStartButton = function(event) {
    window.location.href = "/getstarted";
};

var onClickGiftModalOverlayBackground = function(event) {
    GiftModal.remove();
};

if ($.cookie("BuildGiftModalDismissed") === undefined) {
    // console.log("Show Modal");
    setTimeout(function() {
        GiftModal.create();
        GiftModal.addEventListeners();
    }, 4e3);
}