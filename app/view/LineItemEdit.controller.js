sap.ui.controller("sap.ui.demo.myFiori.view.LineItemEdit", {

	handleCancelPress : function (evt) {

			var context = evt.getSource().getBindingContext();
			this.nav.to("LineItem", context);

		  },		
	
	handleNavBack : function (evt) { 
		this.nav.back("Detail");
	}
});