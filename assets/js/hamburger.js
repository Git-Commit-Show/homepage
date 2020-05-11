$('#ChangeToggle').click(function () {
	if ($('#ChangeToggle span').hasClass('ToggleButton')) {
		$('#ChangeToggle').html('<span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span>');

	}
	else {
		$('#ChangeToggle').html('<span class="ToggleButton glyphicon glyphicon-remove"></span>');

	}

});
