(function() {

	var SELECTORS = {
		SECTION_HEADER: '[data-js=bt-accordion-section-header]',
		SECTION_BODY: '[data-js=bt-accordion-section-body]'
	};

	var CLASSES = {
	    HIDDEN: "hidden"
	};

	var Container = b$.bdom.getNamespace('http://backbase.com/2013/portalView').getClass('container');

	Container.extend(function(bDomDocument, node) {
		Container.apply(this, arguments);
		this.isPossibleDragTarget = true;
	}, {
		localName: 'AccordionPF3E4',
		namespaceURI: 'cxp-training'
	}, {
	    template: function(json) {
            var data = {item: json.model.originalItem};
            var sTemplate = cxp_training.AccordionPF3E4(data);
            return sTemplate;
        },
		handlers: {
			DOMReady: function(event) {
                var $container = $(this.htmlNode),
                    $sections = $container.find(SELECTORS.SECTION_BODY);

                $container.on('click', SELECTORS.SECTION_HEADER, function(event) {
                	$sections.addClass(CLASSES.HIDDEN);
                	$(this).parent().children(SELECTORS.SECTION_BODY).removeClass(CLASSES.HIDDEN);
                });
			},
            dragDrop: function(event) {
             	console.log(event);
            }
		}
	});
})();