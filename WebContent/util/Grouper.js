jQuery.sap.declare("sap.ui.demo.myFiori.util.Grouper");

sap.ui.demo.myFiori.util.Grouper = {

	bundle : null, // somebody has to set this

	ApprovalStatus : function (oContext) {
		var status = oContext.getProperty("ApprovalStatus");
		var text = sap.ui.demo.myFiori.util.Grouper.bundle.getText("StatusText" + status, "?");
		return {
			key: status,
			text: text
		};
	},

	TotalAmount : function (oContext) {
		var price = oContext.getProperty("TotalAmount");
		var key = null,
			text = null;
		if (price <= 2500000) {
			key = "LE25";
			text = "< 2500000";
		} else if (price > 2500000 && price <= 5000000) {
			key = "LE500";
			text = "< 5000000 ";
		} else if (price > 5000000) {
			key = "GT500";
			text = "> 5000000";
		}
		return {
			key: key,
			text: text
		};
	}
};