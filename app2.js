$(document).ready(function () {


    /*   toggle light  ||  تیک خاموش و روشن   */

    if ($(".light-box").prop('checked')) {
    } else {
        $(".light-on").css('color', 'green');
    }

    $(".light-box").click(function () {
        // let lightPos = $(".light-box").val();


        if ($(".light-box").prop('checked')) {
            // lightPos === 'off';

            $("body").css('background-color', '#000');

            $(".light-off").css('color', 'green');
            $(".light-on").css('color', '#000');

            $(".off-light").css('display', 'block');
            $(".on-light").css('display', 'none');

        } else {
            // lightPos === 'on';

            $("body").css('backgroundColor', '#fff');

            $(".light-on").css('color', 'green');
            $(".light-off").css('color', '#000');

            $(".on-light").css('display', 'block');
            $(".off-light").css('display', 'none');
        }
    });



    /*   show/hide case  ||  نشان دادن/پنهان کردن   */

    $(".show").click(function () {
        $("#lamp").show(1000);

        $(this).css('color', 'whitesmoke');
        $(".hide").css('color', '#000');
    })

    $(".hide").click(function () {
        $("#lamp").hide(1000);

        $(this).css('color', 'whitesmoke');
        $(".show").css('color', '#000');
    })

    $(".toggle").click(function () {
        $("#lamp").toggle(1000);
    })

    //  if ($("#lamp").css('display', 'none')) {
    //         $(".show").css('color', 'whitesmoke');
    //         $(".hide").css('color', '#000');

    //     } else {
    //         $(".hide").css('color', 'whitesmoke');
    //         $(".show").css('color', '#000');
    //     }



    /*   light on/light off  ||  روشن و خاموش کردن   */

    $(".light-on").click(function () {
        $(".on-light").css('display', 'block');
        $(".off-light").css('display', 'none');

        $("body").css('background-color', '#fff');

        $(this).css('color', 'green');
        $(".light-off").css('color', '#000');
    })

    $(".light-off").click(function () {
        $(".off-light").css('display', 'block');
        $(".on-light").css('display', 'none');

        $("body").css('background-color', '#000');

        $(this).css('color', 'green');
        $(".light-on").css('color', '#000');


    })

})