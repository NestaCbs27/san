
$( document ).ready(function() {
	navigation('new')
	disableMenu('current')
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
	if(!$('#'+id).hasClass('disabledMenu')){
		$('#new').removeClass('active');
		$('#current').removeClass('active');
		$('#list').removeClass('active');
		
		$('.newContainer').addClass('hidden');
		$('.currentContainer').addClass('hidden');
		$('.listContainer').addClass('hidden');
		
		
		$('#'+id).addClass('active');	
		$('.'+id+'Container').removeClass('hidden')
	}	
}

function disableMenu(id){
	$('#'+id).addClass('disabledMenu');
}

function enableMenu(id){
	$('#'+id).removeClass('disabledMenu');
}

function selectCote(elem){
	
	if(elem === 'btnG'){
		$('#btnD').removeClass('btn-action-active')
		$('#btnG').addClass('btn-action-active')
	}

	if(elem === 'btnD'){
		$('#btnD').addClass('btn-action-active')
		$('#btnG').removeClass('btn-action-active')
	}
}

var joueur1 = "";
var joueur2 = "";

function startMatch(){
	
	$('#erreurSaisieJoueurs').addClass('hidden');	
	
	joueur1 = $('#J1').val();	
	joueur2 = $('#J2').val();	
	
	if(joueur1 === "" || joueur2 === ""){
		$('#erreurSaisieJoueurs').removeClass('hidden');	
	}else{
		enableMenu('current')
		navigation('current')
		$('.J1Name').text(joueur1);	
		$('.J2Name').text(joueur2);	
	}
}