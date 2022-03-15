
$( document ).ready(function() {
    navigation('new')
	
	
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}


function navigation(id){	
	
	$('#new').removeClass('active');
	$('#current').removeClass('active');
	$('#list').removeClass('active');
	
	$('.newContainer').addClass('hidden');
	$('.currentContainer').addClass('hidden');
	$('.listContainer').addClass('hidden');
	
	
	
	$('#'+id).addClass('active');	
	$('.'+id+'Container').removeClass('hidden')
	
	
	
}