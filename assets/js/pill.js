// Get loading indicator element
const indicator = document.querySelector('#indicator')
// Assign Pill to specified selector
pill('#content', {
	onLoading() {
		// Show loading indicator
		indicator.style.display = 'initial'

	},
	onReady() {
		// Hide loading indicator
		indicator.style.display = 'none'

	}

})
