// Create of directive for call ajax function of blur
app.directive('myBlur', function () {
	return {
		restrict: 'A',
		link: function (scope, element, attr) {
			element.bind('blur', function () {
				scope.$apply(attr.myBlur);
			});
		}
	};
});