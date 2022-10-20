// IIFE -- Immediately Invoked Function Expression
/*
File name : app.js
Name : Che Kei, Cheung
Student ID : 301252985
Date : 2022-09-29
*/
(function($){

    $(
        function()
        {
            //alert("11");

            //Contact form submition
            $("#submitform").click(
                function()
                {
                    o = {
                        "name" : $("#name").val(),
                        "email" : $("#email").val(),
                        "mobile" : $("#mobile").val(),
                        "message" : $("#message").val()
                    }

                    //Check to aprove empty entry
                    if (o.name != "" && o.email != "" && o.mobile != "" && o.message != "")
                    {
                        $.post("/contact" , o , 
                            function(o)
                            {
                                if (o.status == 1 )
                                {
                                    alert("Thank you.");
                                    $("#name").val("");
                                    $("#email").val("");
                                    $("#mobile").val("");
                                    $("#message").val("");
                                }
                                else
                                    alert("System error");
                            }
                        );
                    }
                    else
                        alert("All fields must be filled.");
                }
            );

            $("#entryform").click(
                function()
                {
                    err = 0;
                    $(".req").each(
                        function()
                        {
                            if ($(this).val() == "" )
                                err = 1;
                        }
                    );

                    if (err == 1)
                        alert("All fields must be filled");
                    else
                        document.form1.submit();
                }
            );

            $("#loginform").click(
                function()
                {
                    o = {
                        "username" : $("#name").val(),
                        "password" : $("#password").val(),
                    }

                    //Check to aprove empty entry
                    if (o.username != "" && o.password != "" )
                    {
                        $.post("/login" , o , 
                            function(o)
                            {
                                console.log(o);
                                if (o.status == 1 )
                                {
                                    window.location.href = "/businesscontact";
                                   
                                }
                                else if (o.status == 2 )
                                {
                                    alert("Incorrect password.");
                                   
                                }
                                else
                                    alert("System error");
                            }
                        );
                    }
                    else
                        alert("All fields must be filled.");
                }
            );
        }
    );

    

})(jQuery);