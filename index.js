/*
index.js
 */

/* Load scripts before loading DOM/HTML to ensure script run correctly on DOM/HTML */
$(document).ready(function () {

	//use STRICT javascript rules when pharsing this document
	"use strict";
	//
	/* global variable declarations */
																				/* 	var msg = "Hello, this is javascript";
																					var msgStart = "Javascript has started";
																					var msgEnd = "Javascript has ended";
																					var msgBreak = "Javascript has broken out of loop";
																					var msgContinue = "Javascript is continuing loop";
 */	var msgIfPetrol = "has a Petrol Car, and is aged";
	var msgHits = " hits matching search parameters.";
																					//var none;
																					//var showIt = function (msg){
																					//	console.log(msg);
																					//}

	/* global (outer) scope */
	/*jquery*/

	var arrayResults = $("#arrayResults");
	arrayResults.text("Error getting array");

	var gArrayResults = $("#gArrayResults");
	gArrayResults.text("Enter search parameters in the box above. Then press Search");

	var gArrayLength = $("#gArrayLength");
																					//gArrayLength.text("Error getting No of Hits");

																					//	var gitHubSearch = "https://api.github.com/search/repositories?q=jquery+language:javascript&sort=stars";

	/*declare toggleButtonLabel Text */
	  var toggleSysMsg = $("#toggleSysMsg");
	  toggleSysMsg.text("Enter code,then click button");

	/*on click, show/Hide the text id' = toggleButton */
	  var toggleButton = $("#logOnButton");
	  toggleButton.on("click", function () {
	  	toggleSysMsg.toggle();
	  });

	/*on click, show/Hide the text id = ghResultsButton */
	  var toggleButton = $("#ghResultsButton");
	  toggleButton.on("click", function () {
	  	gArrayResults.toggle(500);

	  	if (toggleButton.text() == "Hide Results")
		  	toggleButton.text("Show Results");
		  else
		  	toggleButton.text("Hide Results");

																					//					toggleButton.on("click", function () {
																					//							// set background colour to "hartblue" on hover (in)
																					//								$(this).css("background-color", "green");
																					//						}, function () {
																					//							//set background colour to seethought on hover (out)
																					//								$(this).css("background-color", "red");
																					//						});
	});

	/* arrays */
	var POSArray = [{
			firstName: "Gerald",
			surName: "Oakham",
			age: 44,
			POSCode: "0001",
			carType: {
				fuelType: "diesel",
				carColour: "black",
			}
		}, {
			firstName: "Spyros",
			surName: "Botsis",
			age: 51,
			POSCode: "0002",
			carType: {
				fuelType: "petrol",
				carColour: "silver",
			}
		}, {
			firstName: "Oliver",
			surName: "Oakham",
			age: 6,
			POSCode: "0003",
			carType: {
				fuelType: "none",
				carColour: "none",
			}
		}, {
			firstName: "Elizabeth",
			surName: "Oakham",
			age: 39,
			POSCode: "0004",
			carType: {
				fuelType: "",
				carColour: "",
			}
		}
	];

	/* loops */

																								/*JS for-each loop */
																								//for (var x = 0; x < POSArray.length; x++)
																								//{
																								//	var noInArray = POSArray[x];
																								//	if (noInArray.carType.fuelType === "petrol" ) {
																								//			console.log(noInArray);
																								//			continue;
																								//	}
																								//	console.log(noInArray.firstName);
																								//}

	/*JQuery loop (Same as above, just with JQuery) */
	  //Empty the POSArray
	  arrayResults.empty();
	  // $.each(jquery extension) (POSArray (name of array to perform action on), function(){} (the action to perform
	  $.each(POSArray, function (i, item) {
	  	if (item.carType.fuelType === "petrol") {
	  		console.log(item.firstName, msgIfPetrol, item.age);
	  	} else
	  		console.log(item.surName)
	  });

	//GitHub results display
	  function displayResults(results) {
		//Empty the Array
		gArrayResults.empty();
		// $.each(jquery extension) (name of array to perform action on), function(){} (the action to perform
		$.each(results, function (j, ghitem) {
	
																						/* 		  if (!ghitem.language) {
																										console.log(ghitem.name," is in Javascript")
																									var newResult = $("<div class='ghresults'>" +
																											"<div class='title'>" + ghitem.name + "</div>" +
																											"<div style='color:red'>Language: " + ghitem.language + "</div>" +
																											"<div>Owner: " + ghitem.owner.login + "</div>" +
																											"<div>" + "<a href =" + "'" + ghitem.svn_url + "'" + "target='_blank'" + ">" + "<img id='logo' src='https://assets-cdn.github.com/favicon.ico' alt='Visit " + ghitem.name + "'>" + "</div>" + "</a>" +
																											"</div>");

																									} else
																									var newResult = $("<div class='ghresults'>" +
																											"<div class='title'>" + ghitem.name + "</div>" +
																											"<div>Language: " + ghitem.language + "</div>" +
																											"<div>Owner: " + ghitem.owner.login + "</div>" +
																											"<div>" + "<a href =" + "'" + ghitem.svn_url + "'" + "target='_blank'" + ">" + "<img id='logo' src='https://assets-cdn.github.com/favicon.ico' alt='Visit " + ghitem.name + "'>" + "</div>" + "</a>" +
																											"</div>"); */
																											
					
		  if (!ghitem.language) {
			  /* if the language donslt match any given, change the font color */
			var langColor = "style='color:red'";
			} else
			  /*else, keep if black */
			var langColor ="style='color:black'";
			
		  if (ghitem.has_issues == false) {
			  /* if the code hsa known issues, tick it */
			  var hasIssues ="<img src='images/green_tick_small.png' alt='Has Issues'/>";
		  } else
			  /* else, cross it */
			  var hasIssues ="<img src='images/empty.png' alt='NO Issues'/>";
			
			
			var newResult = $("<div class='ghresults'>" +
					"<div class='title'>" + ghitem.name + "</div>" +
					"<div><strong>Discription:</strong><em> " + ghitem.description + "</em></div>" +
					"<div " +langColor +"><strong>Language:</strong> " + ghitem.language + "</div>" +
					"<div><strong>Owner:</strong> " + ghitem.owner.login + "</div>" +
					"<div><strong>Has known issues?</strong> " + hasIssues + "</div>" +
					"<div>" + "<a href =" + "'" + ghitem.svn_url + "'" + "target='_blank'" + ">" + "<img id='logo' src='https://assets-cdn.github.com/favicon.ico' alt='Visit " + ghitem.name + "'>" + "</div>" + "</a>" +
					"</div>");					

			newResult.hover(function () {
				// set background colour to "hartblue" on hover (in)
				$(this).css("background-color", "#F4F7FC");
			}, function () {
				//set background colour to seethought on hover (out)
				$(this).css("background-color", "transparent");
			});

			gArrayResults.append(newResult);
		});
	}

	/*JQuery GITHUB search */

	$("#gitHubSearchForm").on("submit", function () {
		gArrayLength.empty();
		var searchPhrase = $("#searchPhrase").val();
		var useStars = $("#useStars").val();
		var langChoice = $("#langChoice").val();

		if (searchPhrase) {
			gArrayResults.text("Performing GitHub search. Please Wait...");
			var gitHubSearch = "https://api.github.com/search/repositories?q=" + encodeURIComponent(searchPhrase);

			if (langChoice != "All") {
				gitHubSearch += "+language:" + encodeURIComponent(langChoice);
			}

			if (useStars) {
				gitHubSearch += "&sort=stars";
			}

			$.get(gitHubSearch, function (r) {

				var ghLength = $("<div class='ghlength'>" +
						"<div class='title'>" + " You got back " + r.items.length + msgHits + "</div>" +
						"</div>");
				gArrayResults.text("Searching. Please wait....");
				//Display Number of Hits
				  gArrayLength.append(ghLength);
				//Display Results from search
				  displayResults(r.items);
				/*Display Number of Hits in console*/
				  console.log(r.items.length, msgHits);
			});
		}
		return false;
	});

																						//			gArrayLength.empty();
																						//			$.get(gitHubSearch, function (r) {
																						//
																						//			var ghLength = $("<div class='ghlength'>" +
																						//				"<div class='title'>" + r.items.length + msgHits + "</div>" +
																						//				"</div>");
																						//			//Display Number of Hits
																						//				gArrayLength.append(ghLength);
																						//			//Display Results from search
																						//				displayResults(r.items);
																						//			/*Display Number of Hits in console*/
																						//				console.log(r.items.length, msgHits);
																						//			});

																						//});

																						/*Functions (repeatable/re-useable code) */
																						/* Global functions */
																						//function showItThen(msg,callback) {
																						//	showIt(msg);
																						//	callback();
																						//}

																						/* Run Scopes */
																						//showItThen("showItThen function started", function (){
																						//	alert("Welcome to HART mPOS");
																						//	console.log("HART mPOS Alert msg displaied");
																						//});
																						//console.log(msg);
																						//console.log("msg is of a type" + typeof(msg));
																						//showIt("Javascripted file ended");


																						/* Bad JavaScript Example */
																						//badJavaScript="this is bad JavaScript, and should throw up and error in the console"

});
