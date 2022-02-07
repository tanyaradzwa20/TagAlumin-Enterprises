// // load more button
var numberOfItems=6;
$('#myList .col-md-4:lt('+numberOfItems+')').fadeIn();


$('#loadMore').click(function () {
    numberOfItems = numberOfItems+6;
    $('#myList .col-md-4:lt('+numberOfItems+')').fadeIn();
            $('#loadMore').css("display", "none");
    $('#showLess').css("display", "block");
});

$('#showLess').click(function () {
    numberOfItems= numberOfItems-6;
    $('#myList .col-md-4').not(':lt('+numberOfItems+')').fadeOut();
    $('#loadMore').css("display", "block");
    $('#showLess').css("display", "none");
});