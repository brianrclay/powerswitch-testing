$(document).ready(function(){
    var searchLength = $('.search-bar input').val().length;

    $('.search-bar input').keydown(function(){
        searchLength = $('.search-bar input').val().length;
        if(searchLength){
            $('.search-result').removeClass('fade-out');
            $('.popular-employers').addClass('fade-out');
        } else{
            $('.search-result').addClass('fade-out');
            $('.popular-employers').removeClass('fade-out');
        }

        $('.results-text').text($(this).val())
    })

    $('.employer').click(function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active');
        }else{
            $('.employer').removeClass('active');
            $(this).addClass('active');
        }
    })

    $('.clear-results').click(function(){
        $('.search-result').addClass('fade-out');
        $('.popular-employers').removeClass('fade-out');
    })
})


// Dropdown

$('.dropdown-toggle').click(function(){
    $(this).parent('.dropdown').toggleClass('open');
    $('.dd-scrim').toggleClass('open');
})

$('.dd-scrim').click(function(){
    $('.dropdown').removeClass('open');
    $('.dd-scrim').removeClass('open');
})

$('.dropdown-item').click(function(){
    // var dropdownToggleText = $(this).parents('.dropdown').find('.toggle-label');
    var itemText = $(this).find('.item-inner').text();
    $(this).parents('.dropdown').find('.toggle-label').text(itemText);
    $(this).parents('.dropdown').find('.dropdown-item').removeClass('active')
    $(this).addClass('active');
    $(this).parents('.dropdown').removeClass('open');
    $('.dd-scrim').removeClass('open');
});

//deposit type
$('.deposit-type').click(function(){
    $('.deposit-type').removeClass('active');
    $(this).addClass('active');
})
