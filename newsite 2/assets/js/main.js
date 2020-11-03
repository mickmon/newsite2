// Form Subscription ============================

(function ($) {
	window.fnames = new Array();
	window.ftypes = new Array();
	fnames[0] = 'EMAIL';
	ftypes[0] = 'email';
})(jQuery);
var $mcj = jQuery.noConflict(true);

function validateForm() {
	let val = document.forms['mc-embedded-subscribe-form']['EMAIL'].value;
	if (val == '') {
		alert('You must enter an email to subscribe.');
		return false;
	} else {
		alert('Subscribed !!');
		return true;
	}
}

// Form Contact =========================

window.addEventListener('DOMContentLoaded', function () {
	// get the form elements defined in your form HTML above

	var form = document.getElementById('my-form');
	var status = document.getElementById('my-form-status');

	// Success and Error functions for after the form is submitted
	function success() {
		form.reset();
		status(alert("Thanks, I'll get back to you."));
	}

	function error() {
		status(alert('Oops! There was a problem.'));
	}

	// handle the form submission event

	form.addEventListener('submit', function (ev) {
		ev.preventDefault();
		var data = new FormData(form);
		ajax(form.method, form.action, data, success, error);
	});
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
	var xhr = new XMLHttpRequest();
	xhr.open(method, url);
	xhr.setRequestHeader('Accept', 'application/json');
	xhr.onreadystatechange = function () {
		if (xhr.readyState !== XMLHttpRequest.DONE) return;
		if (xhr.status === 200) {
			success(xhr.response, xhr.responseType);
		} else {
			error(xhr.status, xhr.response, xhr.responseType);
		}
	};
	xhr.send(data);
}
