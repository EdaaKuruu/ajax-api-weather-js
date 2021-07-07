var url = 'https://api.collectapi.com/weather/getWeather?data.lang=tr&data.city=ankara';

function ajax(url) {
    $.ajax({
        type: 'GET',
        dataType: 'json',
        headers: {
            'authorization': 'apikey 2D1cKJWHraYdcaioSK9qfx:1gbSeJ67dwxWTSJs2i6fq0',
            'content-type': 'application/json'
        },
        url: url,
        success: function(data) {
            console.log(data)
            if (data.success == true) {
                $.each(data.result, function(key, value) {
                    console.log(value)
                    var html = `
                    <div class="col-md-4">
                    <div style="height: 250px; max-height: 250px;" class="card mb-3 shadow">
                    <div class="card-header">
                    ${value.date} - ${value.day}
                    </div>
                    <div class="card-body">
                    <div style='display:flex; align-items: center;' class='weather-report'>
                    <img style='margin-right: 20px' width="50" heigth="50" src=${value.icon} />
                    <div>
                    Hissedilen sıcaklık: ${value.degree} C° - ${value.description}
                    <br>
                    Nem oranı: ${value.humidity}
                    </div>
                    </div>
                    <br>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Minimum: ${value.min} C°</li>
                        <li class="list-group-item">Maximum: ${value.max} C°</li>
                        <li class="list-group-item"><i class="fas fa-moon"></i> Gece: ${value.night} C°</li>
                    </ul>
                    </div>
                    </div>
                    </div>
                    <br>
                    `
                    $('#results > .row').append(html)
                })
            } else {
                alert("Maalesef böyle bir şehir bulunamadı!")
            }
        }
    })
}

$('.Tıkla').on('click', function() {
    var country = $('.country').val().toLowerCase();
    var new_url = 'https://api.collectapi.com/weather/getWeather?data.lang=tr&data.city=' + country;
    $('#results > .row').html('')
    ajax(new_url)
})

$(function() {
    ajax(url)
})