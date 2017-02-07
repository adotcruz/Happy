function addImage(input){
	if(input.files && input.files[0]){
		var reader = new FileReader();
		reader.onload = function(e){
			$('#input-img').show();
			$('#input-img').attr('src', e.target.result);
			$('#input-img').css('display', 'inherit');
		};
		reader.readAsDataURL(input.files[0]);
	}
}