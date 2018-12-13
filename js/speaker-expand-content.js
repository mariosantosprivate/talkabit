$( document ).ready(function() {

    let showMoreHtml = $('.speaker-biography-content').html();
    let lessText = showMoreHtml.substr(0, 1000);
    if (showMoreHtml.length > 1000)
        $(".speaker-biography-content").html(lessText + " ...").append("<button type=\"button\" class=\"btn btn-dark show-more-content\">Show More</button>\n");
    else
        $(".speaker-biography-content").html(showMoreHtml);

    $("body").on("click", ".show-more-content", function () {
        $(this).parent('.speaker-biography-content').html(showMoreHtml).append("<button type=\"button\" class=\"btn btn-dark show-less-content\">Show Less</button>");
    });

    $("body").on("click", ".show-less-content", function () {
        $(this).parent('.speaker-biography-content').html(lessText + " ...").append("<button type=\"button\" class=\"btn btn-dark show-more-content\">Show More</button>");
    });

    $('.speaker-biography-content').css("display", "inline");
});