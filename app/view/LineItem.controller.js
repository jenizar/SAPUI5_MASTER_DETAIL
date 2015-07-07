sap.ui.controller("sap.ui.demo.myFiori.view.LineItem", {

	 handleEditPress : function (evt) {

			var context = evt.getSource().getBindingContext();
			this.nav.to("LineItemEdit", context);

		  },		
	
	handleNavBack : function (evt) { 
		this.nav.back("Detail");
	}
});