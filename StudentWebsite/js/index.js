$(document).ready(function() {
    var apiKey = "135a09e515da44bdef3a9f816e24ef28";
    $.each(state_info, function (i, state) {

        var url ='https://api.darksky.net/forecast/' + apiKey + '/' + state.lat + ',' + state.lng;

        $.ajax({url:url, dataType:"jsonp"}).then(function(data) {

            var temperature = data.currently.apparentTemperature;
            var color = null;

            if(temperature <= 10){
                color = '#6495ED';
            }
            else if(temperature > 10 && temperature <= 20){
                color = '#7FFFD4';
            }
            else if(temperature > 20 && temperature <= 30){
                color = '#0000FF';
            }
            else if(temperature > 30 && temperature <= 40){
                color = '#008B8B';
            }
            else if(temperature > 40 && temperature <= 50){
                color = '#00BFFF';
            }
            else if(temperature > 50 && temperature <= 60){
                color = '#F08080';
            }
            else if(temperature > 60 && temperature <= 70){
                color = '#CD5C5C';
            }
            else if(temperature > 70 && temperature <= 80){
                color = '#8B0000';
            }
            else if(temperature > 80 && temperature <= 90){
                color = '#B22222';
            }
            else if(temperature > 90){
                color = '#FF0000';
            }
            else{
                color = '#808080';
            }

            $('#' + i).css('fill', color);

        });
    });
});