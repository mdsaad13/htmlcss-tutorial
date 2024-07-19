$('.hide-show-btn').click(function () {
    console.log('Button clicked');

    const inputType = $('#password').attr('type');

    if (inputType === 'password') {
        $('#password').attr('type', 'text');
        $('.hide-icon').hide();
        $('.show-icon').show();
    } else {
        $('#password').attr('type', 'password');
        $('.hide-icon').show();
        $('.show-icon').hide();
    }
});

$('#login-form').submit(function (e) {
    e.preventDefault();

    const username = $('#username').val();

    $('#username-display').text(username);

    $('#login-form').fadeOut();
    $('#login-msg').slideDown();
});