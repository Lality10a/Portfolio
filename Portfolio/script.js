$('#villes').change(function() {
	console.log('change !');

	var ville = $(this).val();
  console.log(ville);
  console.log('https://prevision-meteo.ch/services/json/' + ville);

	$.ajax({
	url: 'https://prevision-meteo.ch/services/json/' + ville,
	type: 'GET',
	dataType: 'json',
	}).done(function(data) {
		console.log(data);
	
	  $('#meteo').text('Actuellement : ' + data.current_condition.condition);
	  $('#description').text('Aujourd\'hui, ' + data.fcst_day_0.day_long + ' ' + data.fcst_day_0.date + ' , le soleil se lève à ' + data.city_info.sunrise + ' et se couche à ' + data.city_info.sunset + '.');
      $('#icon').attr('src',data.current_condition.icon);

      });
});  	

