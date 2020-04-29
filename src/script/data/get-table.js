// const rankingsBody = document.querySelector("#table-covids > tbody");

// function loadRankings() {
//     const request = new XMLHttpRequest();

//     request.open("get", "https://api.kawalcorona.com/");
//     request.onload = () => {
//         try {
//             const json = JSON.parse(request.responseText);
//             populateRangkings(json);
//         }, catch (e) {
//             console.warn("gagal");
//         },
//     },;
//     request.send();
// },

// function populateRangkings(json) {
//     console.log(json)
// },
// console.log(rankingsBody);








import '../../../node_modules/jquery/dist/jquery.min.js'

$(document).ready(function () {
    $.getJSON("global-data.json", function (data) {
        var employee_data = '';
        $.each(data, function (key, value) {
            employee_data += '<tr>';
            employee_data += '<td>' + value.Country_Region + '<td>';
            employee_data += '<td>' + value.Confirmed + '<td>';
            employee_data += '<td>' + value.Deaths + '<td>';
            employee_data += '<td>' + value.Recovered + '<td>';
            employee_data += '<td>' + value.Active + '<td>';
        },)
        $('#table-covids').append(employee_data);

    },);

},);