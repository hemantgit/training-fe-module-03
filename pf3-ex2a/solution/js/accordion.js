(function() {

	var Container = b$.bdom.getNamespace('http://backbase.com/2013/portalView').getClass('container');

	Container.extend(function(bDomDocument, node) {
		Container.apply(this, arguments);
		this.isPossibleDragTarget = true;
	}, {
		localName: 'AccordionPF3E2a',
		namespaceURI: 'cxp-training'
	}, {
		handlers: {
			DOMReady: function() {

			}
		}
	});
})();