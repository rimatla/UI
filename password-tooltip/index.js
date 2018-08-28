$(document).ready(function () {
  console.log('jquery');

    $('input[type=password]').keyup(function() {
        // set password variable
        let userPassword = $(this).val();
        let specialChar = /[^a-zA-Z0-9\-\/]/;

        //function call
        hasNumber();
        hasChar();
        hasUpper();
        hasLetter();
        hasLength();

        //validate special character
        function hasChar(){
            if (userPassword.match(specialChar)) {
                $('#char').removeClass('invalid').addClass('valid');
            } else {
                $('#char').removeClass('valid').addClass('invalid');
            }
        }

        //validate the length
        function hasLength(){
            if ( userPassword.length < 8 ) {
                $('#length').removeClass('valid').addClass('invalid');
            } else {
                $('#length').removeClass('invalid').addClass('valid');
            }
        }

        //validate any letter
        function hasLetter(){
            if ( userPassword.match(/[A-z]/) ) {
                $('#letter').removeClass('invalid').addClass('valid');
            } else {
                $('#letter').removeClass('valid').addClass('invalid');
            }
        }

        //validate uppercase letter
        function hasUpper(){
            if ( userPassword.match(/[A-Z]/) ) {
                $('#capital').removeClass('invalid').addClass('valid');
            } else {
                $('#capital').removeClass('valid').addClass('invalid');
            }
        }

        //validate number
        function hasNumber(){
            if ( userPassword.match(/\d/) ) {
                $('#number').removeClass('invalid').addClass('valid');
            } else {
                $('#number').removeClass('valid').addClass('invalid');
            }
        }

    }).focus(function() {
        $('#pswd_info').show();
    }).blur(function() {
        $('#pswd_info').hide();
    });

});



