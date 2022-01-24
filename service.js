$(document).ready(function() {
    console.log("Working!");
    $.ajax({
        type: "post",
        data: {
            "country": "India"
        },
        url: "https://countriesnow.space/api/v0.1/countries/states/",
        success: function(data) {
            let get_states = data.data.states;
            get_states.forEach(element => {
                $("#states").append('<option value="' + element.name + '">' + element.name + '</option>');
            });
        },
    });
});


$(document).ready(function() {
    $("#states").change(function() {
        let get_state = $("#states").val();
        let get_states_and_cities = {};
        get_states_and_cities['country'] = "India";
        get_states_and_cities["state"] = get_state;

        $.ajax({
            type: "post",
            data: get_states_and_cities,
            url: "https://countriesnow.space/api/v0.1/countries/state/cities",
            success: function(data) {
                $("#cities").empty();
                let get_cities = data.data;
                get_cities.forEach(element => {
                    $("#cities").append(
                        '<option value="' +
                        element +
                        '">' +
                        element +
                        "</option>"
                    );
                })
            },
        });
    })
})