/**
 * Automic.js Framework
 * @file src/view.js
 * @author Automic.js
 * @copyright 2017
 * @license MIT
 * @github https://AutomicJS/automic.js
 * @version 0.0.1
 */
class View extends Automic {
	constructor() {
		super(); 
		this.view = '';
		this.viewRendered = false;
	}
	init() {}
	render() {
		var view = this.init();
		this.view = view; 
		this.getDom().display(view); 
		this.viewRendered = true;
	}
	setAttributes(attributesList) {
		if ( !this.viewRendered ) {
			return this.error('Failed to set attributes. View must be rendered already in order to do this.', true); // Message, NOT_BLOCKING(default=true)
		}
		for( var i = 0; i < attributesList.length; i++ ) {
			var parentNode = attributesList[i].parentNode;
			var nodeInstance = this.getDom().find(parentNode);
			this.getDom(nodeInstance).setNodeAttributes(attributesList[i].name, attributesList[i].value); 
		}
		return true; 
	}
	getAttributes(attributeName) {
		if ( typeof attributeName !== 'undefined' && attributeName instanceof Array ) {
			var attrResult = [];
			for ( var i = 0; i < attributeName.length; i++ ) {
				attrResult.push(this.getAttributes(attributeName[i]));
			}
		}
		else if ( typeof attributeName !== 'undefined' && typeof attributeName === 'string' ) {
			if( !this.viewRendered ) {
				if ( typeof this.view !== 'undefined' && this.view !== '' ) {
					var upperAttrTest = new RegExp(attributeName.replace(' ', '.*'), 'gmi');
					if(upperAttrTest.test(this.view) == true) {
						var matches = this.view.match(new RegExp(attributeName.replace(' ', '.*'), 'i'));
						return {
							length: matches.length,
							result: matches
						};
					}
					else {
						return {
							length: 0,
							result: []
						};
					}
				}
				else {
					return {
						length: 0,
						result: []
					};
				}
			}
			else {
				if( this.getDom().find('[' + attributeName + ']', 'QS').length !== 0 ) {
					var attrsDQs = this.getDom().find('[' + attributeName + ']', 'QS'); 
					return {
						length: attrsDQs.length,
						result: attrsDQs
					};
				}
				return {
					length: 0,
					result: []
				};
			}
		}
	}
}
