/**
 * Created by kcp on 7/5/17.
 */
$(function() {
    $('.editbtn').click(function (event) {
        event.preventDefault();
        const location = JSON.parse(this.getAttribute('name'));
        $('#_id').val(location._id);
        $('#nameUpdate').val(location.name);
        $('#categoryUpdate').val(location.category);
        $('#longitudeUpdate').val(location.coords[0]);
        $('#latitudeUpdate').val(location.coords[1]);
    });

    $('#searchForm').click(function (event) {
        event.preventDefault();
        navigator.geolocation.getCurrentPosition(function (position) {
            const category = $('#categorySearch').val();
            const name = $('#nameSearch').val();
            const longitude = position.coords.longitude;
            const latitude = position.coords.latitude;
            if (category === '') {
                alert('Category cannot be Empty');
            }else{
                const fields = {
                    'name': name,
                    'category': category,
                    'longitude': longitude,
                    'latitude': latitude
                };
                $.post('/search', fields)
                    .done(function (data) {
                        if (data.length === 0) {
                            $('#message').text('Unable to find any nearby location based on your search criteria.');
                        } else {
                            $('#message').text('');
                            data.forEach(function (location) {
                                $('#locations').append(`<li>${location.name} - ${location.category}</li>`);
                            });
                        }
                    })
                    .fail(function () {
                        alert('Unable to search location!');
                    });
            }
        },function (err) {
            alert(err.message);
        });
    });

});