const workshops = [
    {
        title: "\"Dominos\"",
        room: "To be defined",
        schedule: "9:15 am - 10:25 am",
        status: true,
        description: "To be included\n",
        sponsor_image: "",
        form_link: "https://docs.google.com/forms/d/e/1FAIpQLSflMZzzAB8dfJF6QL7OQckkuiqE9OwDDTEPsFFxOMbSjxYM8g/viewform?usp=sf_link",
    },
    {
        title: "\"Evolve Software to scale on teams\"",
        room: "To be defined",
        schedule: "9:15 am - 10:25 am",
        status: true,
        description: "To be included\n",
        sponsor_image: "res/img/sponsors/farfetch.png",
        form_link: "https://docs.google.com/forms/d/e/1FAIpQLSflMZzzAB8dfJF6QL7OQckkuiqE9OwDDTEPsFFxOMbSjxYM8g/viewform?usp=sf_link",
    },
    {
        title: "\"Design Systems 101: Front-end as a Team Sport\"",
        room: "To be defined",
        schedule: "9:15 am - 10:25 am",
        status: true,
        description: "To be included\n",
        sponsor_image: "res/img/sponsors/HostelWorld.png",
        form_link: "https://docs.google.com/forms/d/e/1FAIpQLSflMZzzAB8dfJF6QL7OQckkuiqE9OwDDTEPsFFxOMbSjxYM8g/viewform?usp=sf_link",
    }
];

$( document ).ready(function() {

    $(".workshops-container article").on('click', function () {

        let id = parseInt($(this).attr("id").split("-")[1]) - 1;

        $("#workshop-modal .workshop-modal-title h3").text(workshops[id].title);
        $("#workshop-modal .ws-insight-detail-room").text(workshops[id].room);
        $("#workshop-modal .ws-insight-detail-schedule").text(workshops[id].schedule);
        $("#workshop-modal .status").removeClass('red-dot').removeClass('green-dot');
        $("#workshop-modal .status").addClass(workshops[id].status ? "green-dot" : "red-dot");
        $("#workshop-modal .ws-insight-detail-status").text(workshops[id].status ? "(Available)" : "(Full)");
        $("#workshop-modal .ws-description-content").text(workshops[id].description);
        $("#workshop-modal .ws-sponsor").attr("src",(workshops[id].sponsor_image));
        $("#workshop-modal .modal-body button").attr("disabled", (!workshops[id].status));
        $("#workshop-modal .modal-body a").attr("href", workshops[id].form_link);
        $("#workshop-modal .ws-sponsor").css("max-height", id === 1 ? "23px": "35px");
        if(id === 0)
            $(".modal-footer").hide();
        else
            $(".modal-footer").show();

        $('#workshop-modal').modal('show');
    });

});