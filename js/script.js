$(function () {
    $('#btn').on('click', function () {
        var userName = $('#name').val(),
            userEmail = $('#email').val(),
            userFormEmail = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,6})+$/,
            userPassword = $('#password').val(),
            userConfirmPassword = $('#confirmPassword').val(),
            userTextarea = $('#textarea').val(), 
            userCountry = $('#country').val(),
            checkbox = document.getElementById("checkbox"),
            gender = document.getElementsByName("gender"),
            formValid = false,
            i = 0;
        while (!formValid && i < gender.length) {
            if (gender[i].checked) formValid = true;
            i++;
        }
        
        if (!formValid) 
        {
            $('#span').text(" please Choose your gender").css('color', 'red');
        }

        if (formValid) 
        {
            $('#span-gender').text("").css('color', 'blue');
        }

        if (userName == "") 
        {
            $('#span-name').text("please enter user name").css('color', 'red');
            $('#name').css('border', '1px solid red');
        } 
        
        if (userEmail == "") 
        {
            $('#span-email').text('please enter user email').css('color', 'red');
            $('#email').css('border', '1px solid red');
        } 
        
        else if (!userFormEmail.test(userEmail)) 
        {
                $('#span-email').text('Email must have aaa@aaa.aaa').css('color', 'red');
                $('#email').css('border', '1px solid red');
        }

        if (userPassword.length < 4) 
        {
            $('#span-password').text('please enter your password').css('color', 'red');
            $('#password').css('border', '1px solid red');
        } 
        
        if (userConfirmPassword.length == "") {
            $('#confirmPassword').text('please confirm your password').css('color','red');
            $('#confirmPassword').css('border', '1px solid red');
        } 
        
        else if (userConfirmPassword !== userPassword) 
        {
                $('#span-confirmPassword').text('your Password not match').css('color','red');
                $('#confirmPassword').css('border', '1px solid red');
        }
        if (userCountry == "") 
        {
            $('#span-country').text('please select a Country ').css('color', 'red');
            $('#country').css('border', '1px solid red');
        }
        
        if (userTextarea.length < 5) 
        {
            $('#span-textarea').text('please write at least 5 chareckter').css('color', 'red');
            $('#textarea').css('border', '1px solid red');
        }
        
        if(checkbox.checked == false)
        {
            $('#span-ckeckbox').text(" please accepte vilkorna").css('color', 'red');
        }
        
        if(checkbox.checked == true)
        {
            $('#span-ckeckbox').text("").css('color', 'blu');
        }
        
        if (userName !== "") 
        {
            $('#span-name').text('').css('color', 'blue');
            $('#name').css('border', '1px solid blue');
        } 
        
        if (userFormEmail.test(userEmail)) 
        {
            $('#span-email').text('').css('color', 'blue');
            $('#email').css('border', '1px solid blue');
        }
        
        if (userPassword.length > 4) 
        {
            $('#span-password').text('').css('color', 'blue');
            $('#password').css('border', '1px solid blue');
        }
       
        if (userConfirmPassword == userPassword) 
        {
            $('#span-confirmPassword').text('').css('color', 'blue');
            $('#span-confirmPassword').css('border', '1px solid blue');
        } 
        
        if (userCountry !== "") 
        {
            $('#span-country').text('').css('color', 'blue');
            $('#country').css('border', '1px solid blue');
        } 
        
        if (userTextarea.length > 4) 
        {
            $('#span-textarea').text('').css('color', 'blue');
            $('#textarea').css('border', '1px solid blue');
        }
        if (checkbox.checked == true)
         {
            $('#span-checkbox').text("it has done").css('color', 'gul');
        }
       
        if (userName !== ""
            && userFormEmail.test(userEmail)
            && userPassword.length > 4
            && userTextarea.length > 4
           )
         {
           
         if (userConfirmPassword == userPassword) 
         {
                $('#successfull').text('you have Successfully registered:').css('color', 'green');
                $('form').trigger('resret');
         }
           
         else
         {
                $('#password,#confirmPassword').css('border', '1px solid red');
         }
        }
    })

})










