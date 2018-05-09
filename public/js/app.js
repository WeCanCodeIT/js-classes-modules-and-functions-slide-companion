const MyModule = (function() {
	function MyModule(name) {
		this._name = name || 'Default Name'
	}

	function _printName() {
		console.log('Name: ' + _name)
	}

	MyModule.prototype = {
		changeInnerText: function(element, replacementText) {
			element.innerText = replacementText
			return console.log(
				`Text of ${element.tagName} changed to "${replacementText}".`,
			)
		},
		getName: function() {
			_printName()
		},
	}

	return MyModule
})()
