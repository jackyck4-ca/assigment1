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
        }
    );

    

})(jQuery);