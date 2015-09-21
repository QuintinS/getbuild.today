var templateXMLURL = "xml/templatelist.xml";
var templateIDArray = [];
var templatesTotal = 0;
var templatesLoaded = 0;

var spinnerVisible = false;

function loadTemplates(numberOfTemplates) {

	var myTemplateIDArray = templateIDArray.splice(0, numberOfTemplates); // The template ID array
	var myTemplateID = []; // The template currently being printed.
	var loops = myTemplateIDArray.length;

	if (templatesLoaded < templatesTotal) {

		$(myTemplateIDArray).each(function(i1,e1){
			
			$('#template-list').append(
				printTemplate(myTemplateIDArray[i1])
			);

			if (loops == i1 + 1) {
				hideLoadingSpinner();
			}

		});

		showLoadingSpinner();

	} else {
		// console.log("All templates loaded.");
	}

}

function printTemplate(templateID) {

	// This function prints a new template HTML snippet and adds it to the template list.

	var myTemplateID = 0;
	var myTemplateHTML = "";

	myTemplateID = templateID;
	templatesLoaded++;

	myTemplateHTML = "\
	\
		<div id='template-thumbnail-" + templatesLoaded + "' class='template-thumbnail'>\
			<a href='#_' >\
				<img onload='$(this).fadeIn();' class='template-image' onclick='templatePreview(" + myTemplateID + ")' src='./images/templates/thumbnails/" + myTemplateID + ".jpg'  />\
			</a>\
			<div class='overlay'>\
				<a class='b2t-button preview' href='#_' onclick='templatePreview(" + myTemplateID + ")'><span class='glyphicon glyphicon-zoom-in'></span><span class='text'>Preview</span></a>\
				<a class='b2t-button select' href='#_' onclick='templateChoose(" + myTemplateID + ")'><span class='glyphicon glyphicon-ok-circle'></span><span class='text'>Choose this Template</span></a>\
			</div>\
		</div>\
	\
	";

	return myTemplateHTML;
	
}

function xmlLoaded(data) {

	console.log("xmlLoaded()");
	
	parseXML(data);	
	
}

function checkToScroll(elem) {

	console.log("checkToScroll()");

	var docViewTop = $(window).scrollTop();
    var docViewBottom = $(window).scrollTop() + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom) && (elemBottom <= docViewBottom) &&  (elemTop >= docViewTop));

}

function showLoadingSpinner() {
	if (spinnerVisible == false) {
		$("#loading-div").fadeIn(200);
		spinnerVisible = true;
	}
}

function hideLoadingSpinner() {
	if (spinnerVisible == true) {
		$("#loading-div").fadeOut(200);
		spinnerVisible = false;
	}
}

function parseXML(data) {

	console.log("parseXML()");

	var loops = $(data).find("template-id").length;

	templatesTotal = loops;

	$(data).find("template-id").each(function(i2,e2) {

		templateIDArray.push($(e2).text());

		// console.log(i2);
		// console.log("Template ID 				= " + templateIDArray.length);
		// console.log("Loop Index 				= " + i2);

		if( loops == (i2 + 1) ) {
			// console.log("Done parsing XML!");
			// console.log(templateIDArray);

			loadTemplates(27);

		}

	})

}

$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
       if (templatesLoaded < templatesTotal) {
       		showLoadingSpinner();
			loadTemplates(9);
	   } else {
	   	hideLoadingSpinner();
	   }
   }
});

$(document).ready(function() {

	// LOAD XML - Get the XML file containing the template IDS.
	$.get( templateXMLURL, function(data) {
			xmlLoaded(data);
		}
	);

})



function templatePreview(templateID) {

	/* 	---------------------------------------------------
		This function previews the template inside a modal. 
		---------------------------------------------------  */


	// Path to preview image.
	var myTemplatePreviewURL = "images/templates/previews/" + templateID + ".jpg";

	if ( templateID == undefined || templateID == null || templateID == 0) {
		console.log("templatePreview(): ERROR: Missing argument. Requires Template ID.");
		return false;
	}

	else

	{

		console.log("templatePreview(" + templateID + ")");

		$("#preview-modal").attr("data-templateid", templateID);
		$("#demo-overlay").attr("data-templateid", templateID);

		clearDemoiFrame();
		
		//Load the template's preview JPEG into the modal.
		$("#preview-image").attr('src', myTemplatePreviewURL);

		$('#preview-modal').modal();


	}

	

}

function templateChoose(templateID) {

	// var myTemplateID = templateID.handleObj.data;

	/* 	---------------------------------------------------
		This function receives a template ID, and passes it
		to the next page. 
		---------------------------------------------------  */

	// console.log("templateChoose()");

	if ( templateID == undefined || templateID == null || templateID == 0) {
		console.log("templateChoose(): ERROR: Missing argument. Requires Template ID.");
		showWarningModal();
		return false;
	}

	showLoadingModal();

	$("#step1form #templateID").val(templateID);

	//Code to pass template ID to next page:
	$("#step1form").submit();

};

function templateDemo(templateID) {

	/* 	---------------------------------------------------
		This function receives a template ID, then opens an
		overlay window to display that template's demo in an
		iFrame.
		---------------------------------------------------  */

	var myTemplateID = templateID;

	console.log("templateDemo(" + myTemplateID + ")");

	//Replace the URL of the demo iFrame and refresh the iFrame.
	$("#demo-iframe").attr('src', 'http://getbuild.today/Content/Templates/' + myTemplateID + '/site/');

	//Trigger the Demo Overlay
	showDemoOverlay();

}

function closePreviewModal() {

	//Close the Preview Modal.
	$("#preview-modal").modal('hide');

}



function clearDemoiFrame() {

	//Replace the URL of the demo iFrame with a blank page.
	$("#demo-iframe").attr('src', '#_');

}

function gotoNextStep() {
	window.location.replace("step_2.asp");
}


var OnClickPreviewChoose = function(event) {

	console.log("OnClickPreviewChoose()");

	var myTemplateID = $("#preview-modal").attr("data-templateid");
	templateChoose(myTemplateID);

};

var OnClickPreviewDemo = function(event) {

	console.log("OnClickPreviewDemo()");

	var myTemplateID = $("#preview-modal").attr("data-templateid");
	templateDemo(myTemplateID);

};

var OnClickDemoChoose = function(event) {

	console.log("OnClickDemoChoose()");

	var myTemplateID = $("#demo-overlay").attr("data-templateid");
	templateChoose(myTemplateID);

};


$("#preview-modal").on("click", "#buttonChoose", OnClickPreviewChoose);
$("#preview-modal").on("click", "#buttonDemo", OnClickPreviewDemo);

$("#demo-overlay").on("click", "#buttonDemoChoose", OnClickDemoChoose);

//Assign the event listener for the "Demo" button.



/* 	------------------------------------------------
	Overlay Page
	------------------------------------------------ */


function showDemoOverlay() {

	console.log("showDemoOverlay()")

	$("#demo-overlay").removeClass("hidden").fadeIn(400);
	// .fadeIn(400)

}

function hideDemoOverlay() {

	console.log("hideDemoOverlay()")

	$("#demo-overlay").fadeOut(400).addClass("hidden");
	// .fadeOut(400)

	clearDemoiFrame();

}