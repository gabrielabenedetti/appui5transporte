/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"transporte/apptransporte/test/integration/AllJourneys"
	], function() {
		QUnit.start();
	});
});