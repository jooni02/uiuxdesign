$(document).ready(function(){
    $('footer .f_site .open').on('click', function(){
        $('footer .f_site').addClass('on')
    })
    $('footer .f_site .close').on('click', function(){
        $('footer .f_site').removeClass('on')
    })
})//$(document).ready