// Jquery
$('.mainConversion button').click(function(){
    $('.mainConversion').removeClass('mainConversion--toggled');
    const elParent = $(this).closest('.mainConversion');
    elParent.addClass('mainConversion--toggled');
});