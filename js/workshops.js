const workshops = [
    {
        title: "Workshop: Dominos",
        room: "To be defined",
        schedule: "9:15 am - 10:25 am",
        expert: "Arlindo Oliveira & Marcelo Marques",
        status: true,
        description: "To be included\n",
        sponsor_image: "",
        form_link: "",
    },
    {
        title: "Workshop: Evolve Software to scale on teams",
        room: "To be defined",
        schedule: "9:15 am - 10:25 am",
        expert: "Arlindo Oliveira & Marcelo Marques",
        status: true,
        description: "To be included\n",
        sponsor_image: "res/img/sponsors/farfetch.png",
        form_link: "",
    },
    {
        title: "Workshop: Design Systems 101: Front-end as a Team Sport",
        room: "B003",
        schedule: "9:15 am - 10:25 am",
        expert: "Arlindo Oliveira & Marcelo Marques",
        status: true,
        description: "To be included\n",
        sponsor_image: "res/img/sponsors/HostelWorld.png",
        form_link: "",
    }
];

$( document ).ready(function() {

    $(".workshops-container article").on('click', function () {

        let id = parseInt($(this).attr("id").split("-")[1]) - 1;

        $("#workshop-modal .workshop-modal-title h3").text(workshops[id].title);
        $("#workshop-modal .ws-insight-detail-room").text(workshops[id].room);
        $("#workshop-modal .ws-insight-detail-schedule").text(workshops[id].schedule);
        $("#workshop-modal .ws-insight-detail-experts").text(workshops[id].expert);
        $("#workshop-modal .status").removeClass('red-dot').removeClass('green-dot');
        $("#workshop-modal .status").addClass(workshops[id].status ? "green-dot" : "red-dot");
        $("#workshop-modal .ws-insight-detail-status").text(workshops[id].status ? "(Available)" : "(Full)");
        $("#workshop-modal .ws-description-content").text(workshops[id].description);
        $("#workshop-modal .ws-sponsor").attr("src",(workshops[id].sponsor_image));
        $("#workshop-modal .modal-body button").attr("disabled", (!workshops[id].status));
        $("#workshop-modal .modal-body a").attr("href", workshops[id].form_link);
        $("#workshop-modal .ws-sponsor").css("max-height", id === 1 ? "20px": "30px");
        if(id === 0)
            $(".modal-footer").hide();
        else
            $(".modal-footer").show();

        $('#workshop-modal').modal('show');
    });

});