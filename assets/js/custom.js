$(function() {

    $("#contact-check").hide();
    //hang on event of form with id=myform
    $("#contact-form").submit(function(e) {

        e.preventDefault();

        //get the action-url of the form
        var actionurl = e.currentTarget.action;

        //do your own request an handle the results
        $.ajax({
                url: 'https://formspree.io/hello@designbysarab.com',
                type: 'post',
                dataType: 'json',
                data: $("#contact-form").serialize(),
                success: function(data) {
                    $("#contact-check").show();
                    $('#contact-form').trigger("reset");
                }
        });

    });

});
