/**
 * Automic.js Framework
 * @file examples/basic-view/index.js
 * @author Automic.js
 * @copyright 2017
 * @license MIT
 * @github https://AutomicJS/automic.js
 * @version 0.0.1
 * @description This is a very basic example of a standalone Automic View, made with <3 by the Automic.js Team. This example uses Automic version 0.0.1
 */
 
class MyAutomicView extends View {
	constructor() { 
		super(); 
		this.view = '<div id="test" a-onclick="alert(\'test\');">Testing me out!</div>';
	}
 	static metadata() {   
		return {
			"friendly name": "my view",
			"common name": "myview"
        };
  }
	init() {
		return this.view;
  }
}

// Create Standalone View
var viewTest = new MyAutomicView();
// Render Standalone View
viewTest.render();
// Manipulate Attributes of Standalone View
viewTest.setAttributes([
  {
    parentNode: '#test',
    name: 'automic-rocks',
    value: 'heck yeah!'
  }
]);
// Get the new attribute we just defined
var attrWeJustDefined = viewTest.getAttributes('automic-rocks'); 
console.log(attrWeJustDefined); 
