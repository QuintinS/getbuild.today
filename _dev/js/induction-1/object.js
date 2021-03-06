
var Step1 = {

	templates : [],
	templatesXML : undefined,
	templatesLoaded : 0,
	templatesTotal : 0,
	currentTemplateID : "",

	loadTemplates : function(numberOfTemplates) {

		var myTemplates = Step1.templates.splice(0, numberOfTemplates);
		var myTotalTemplates = Step1.templates.length;

		if (Step1.templatesLoaded < Step1.templatesTotal) {

			$(Step1.templatesXML).each(function(i,e){
				
				$('#template-list').append(
					// Step1.printTemplate(Step1.templates[i])
				);

				if (myTotalTemplates == i + 1) {
					hideLoadingSpinner();
				}

			});

		} 

	},

	getTemplatesXML : function() {

		$.ajax({

			url: "xml/Templates.xml",

			success: function(data){

				Step1.templatesXML = data;
				Step1.templatesTotal = $(Step1.templatesXML).find("template").length;
				Step1.prepareTemplateArray(Step1.templatesXML);
				Step1.loadTemplates(27);

			}

		});

	},

	prepareTemplateArray : function(templatesXML) {

		if ((templatesXML === undefined) && (typeof templatesXML === "object")) {
			throw "ArgumentError: Must specify 'templatesXML' as object.";
		}

		$(templatesXML).find("template").each(function(){
			
			Step1.addTemplate($(this));

		});

	},

	addTemplate : function(template) {

		var myTemplateID = $(template).find("template-id").text();
		var myTemplateName = $(template).find("template-name").text();
		var myTemplateTags = $(template).find("template-tags");
		var myTemplateNumber = $("#templates-container > div").length + 1;

		var myTemplateOptions = {
			templateNumber : myTemplateNumber,
			templateID : myTemplateID,
			templateName : myTemplateName,
		};

		// console.log(myTemplateOptions);

		var myTemplateHTML = Step1.printTemplate(myTemplateOptions);

		$("#templates-container").append(myTemplateHTML);

		var myDOMElement = $("#templates-container").find("#template-" + myTemplateNumber);
		myDOMElement.on("load", Step1.onTemplateImageLoaded);

	},

	printTemplate : function(options) {

		// This function prints a new template HTML snippet and adds it to the template list.

		if (options === undefined) {
			throw "ArgumentError: must specify 'options'.";
		}

		if ((options.templateNumber === undefined) || (typeof options.templateNumber !== "number")) {
			throw "ArgumentError: must specify 'options.templateNumber' as Number.";
		}

		if ((options.templateID === undefined) || (typeof options.templateID !== "string")) {
			throw "ArgumentError: must specify 'options.templateID' as String.";
		}

		if ((options.templateName === undefined) || (typeof options.templateName !== "string")) {
			throw "ArgumentError: must specify 'options.templateName' as String.";
		}

		// var myTemplateNumber = 0;
		// var myTemplateName = "Shevas";
		// var myTemplateID = "37173";

		var myTemplateNumber = options.templateNumber;
		var myTemplateName = options.templateName;
		var myTemplateID = options.templateID;

		var returnHTML = "";

		returnHTML += 	'<div class="col-sm-6 col-md-4">';

		returnHTML += 		'<a href="javascript:;" data-templateid="' + myTemplateID + '" id="template-' + myTemplateNumber + '" class="template template-' + myTemplateNumber + '">';
		returnHTML += 			'<div class="template-wrapper">';
		returnHTML += 				'<div class="template-over">';
		returnHTML += 					'<div class="template-content">';
		returnHTML += 						'<h5>' + myTemplateName + '</h5>';
		returnHTML += 					'</div>';
		returnHTML += 					'<div class="template-actions">';
		returnHTML += 						'<button class="btn btn-primary" data-action="TemplateDemoClick">Preview Template</button>';
		returnHTML += 						'<button class="btn btn-success" data-action="TemplateSelectClick">Select Template</button>';
		returnHTML += 					'</div>';
		returnHTML += 				'</div>';
		returnHTML += 				'<div class="template-image">';
		returnHTML += 					'<img src="/images/templates/previews/' + myTemplateID + '.jpg" alt="' + myTemplateName + '">';
		returnHTML += 				'</div>';
		returnHTML += 			'</div>';
		returnHTML += 		'</a>';

		returnHTML += 	'</div>	';

		return returnHTML;
		
	},

	printTemplateDemoFrame : function() {	
	
		var myTemplateID = Step1.currentTemplateID;

		var returnHTML = "";

		returnHTML +=	"<div id='template-demo-frame' class='template-demo-frame' style='display:none;'>";
		returnHTML +=		"<div class='template-demo-frame-controls clearfix' id='template-demo-frame-controls'>";
		returnHTML +=			"<div class='frame-controls-left'>";
		returnHTML +=				"<button class='btn btn-success' data-action='TemplateSelect'>";
		returnHTML +=					"<span class='glyphicon glyphicon-ok'></span>";
		returnHTML +=					"<span>Select Template</span>";
		returnHTML +=				"</button>";
		returnHTML +=			"</div>";
		returnHTML +=			"<div class='frame-controls-right'>";
		returnHTML +=				"<button class='btn btn-danger' data-action='HideTemplateDemoFrame'>";
		returnHTML +=					"<span class='glyphicon glyphicon-remove'></span>";
		returnHTML +=					"<span>Close</span>";
		returnHTML +=				"</button>";
		returnHTML +=			"</div>";
		returnHTML +=		"</div>";
		returnHTML +=		"<div class='template-demo-frame-iframe-container' id='template-demo-frame-iframe-container'>";
		returnHTML +=			"<iframe id='template-demo-frame-iframe' class='template-demo-frame-iframe' src='www.getbuild.today/Content/Templates/" + myTemplateID + "/site/'></iframe>";
		returnHTML +=		"</div>";
		returnHTML +=	"</div>";

		return returnHTML;

	},

	templateDemo : function(templateID) {	
	
		if ((options.templateID === undefined)) {
			throw "ArgumentError: Must specify 'options.templateID'.";
		}

		Step1.showTemplateDemoFrame();

	},

	templateSelect : function() {

		var myPort = ""; 

		if (location.port !== "") {
			myPort = ":" + location.port;
		}
		
		window.location.href = "https://" + window.location.hostname + myPort +  "/createaccount/index.asp?templateid=" + Step1.currentTemplateID;

	},

	addTemplateDemoFrame : function() {	
		$("body").prepend(Step1.printTemplateDemoFrame);
	},

	showTemplateDemoFrame : function() {
		
		if ($("template-demo-frame").length === 0) {
			Step1.addTemplateDemoFrame();
		}

		var myTemplateID = Step1.currentTemplateID;
		var myTemplateURL = "http://www.getbuild.today/Content/Templates/" + myTemplateID + "/site/";

		$("#template-demo-frame-iframe").attr("src", myTemplateURL);

		$("#template-demo-frame").fadeIn(250);
		
	},

	hideTemplateDemoFrame : function(event) {	
		$("#template-demo-frame").fadeOut(250);
	},

	removeTemplateDemoFrame : function() {
		$("#template-demo-frame").remove();	
	},

	onTemplateMouseEnter : function(event) {
		$(event.currentTarget).addClass("over");
	},

	onTemplateMouseLeave : function(event) {
		$(event.currentTarget).removeClass("over");
	},

	onTemplateDemoClick : function(event) {	

		var myTemplateID = $(event.currentTarget).closest(".template").attr("data-templateid");
		Step1.currentTemplateID = myTemplateID;

		Step1.showTemplateDemoFrame();

	},

	onTemplateSelectClick : function(event) {		

		var myTemplateID = $(event.currentTarget).closest(".template").attr("data-templateid");
		Step1.currentTemplateID = myTemplateID;

		Step1.templateSelect();

	},

	onTemplateImageLoaded : function(event) {
		$(this).closest(".template").addClass("loaded");
	},

	reset : function() {

		Step1.getTemplatesXML();

		$("body").on("mouseenter", ".template", Step1.onTemplateMouseEnter);
		$("body").on("mouseleave", ".template", Step1.onTemplateMouseLeave);

		$("body").on("click", "[data-action='TemplateDemoClick']", Step1.onTemplateDemoClick);
		$("body").on("click", "[data-action='TemplateSelectClick']", Step1.onTemplateSelectClick);
		$("body").on("click", "[data-action='TemplateSelect']", Step1.templateSelect);

		$("body").on("click", "[data-action='HideTemplateDemoFrame']", Step1.hideTemplateDemoFrame);

	}


};


Step1.reset();