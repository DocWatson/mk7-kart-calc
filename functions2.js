var ctr = 0;
var glider_count = 1;
best = {
	landspeed :{
		value : 0,
		string : '',
		counts : 0
	},
	seaspeed :{
		value : 0,
		string : '',
		counts : 0
	},
	airspeed :{
		value : 0,
		string : '',
		counts : 0
	},
	acceleration : {
		value : 0,
		string : '',
		counts : 0	
	},
	weight: {
		value : 0,
		string : '',
		counts : 0	
	},
	handling : {
		value : 0,
		string : '',
		counts : 0	
	},
	handlings : {
		value : 0,
		string : '',
		counts : 0	
	},
	handlinga : {
		value : 0,
		string : '',
		counts : 0	
	},
	offroad : {
		value : 0,
		string : '',
		counts : 0	
	},
	miniturbo : {
		value : 0,
		string : '',
		counts : 0	
	},
	stability : {
		value : 0,
		string : '',
		counts : 0	
	},
	drift : {
		value : 0,
		string : '',
		counts : 0	
	},
	average : {
		value : 0,
		string : '',	
		counts : 0
	}
}
worst = {
	landspeed :{
		value : 6,
		string : '',
		counts : 0
	},
	seaspeed :{
		value : 6,
		string : '',
		counts : 0
	},
	airspeed :{
		value : 6,
		string : '',
		counts : 0
	},
	acceleration : {
		value : 6,
		string : '',
		counts : 0	
	},
	weight: {
		value : 6,
		string : '',
		counts : 0	
	},
	handling : {
		value : 6,
		string : '',
		counts : 0	
	},
	handlings : {
		value : 6,
		string : '',
		counts : 0	
	},
	handlinga : {
		value : 6,
		string : '',
		counts : 0	
	},
	offroad : {
		value : 6,
		string : '',
		counts : 0	
	},
	miniturbo : {
		value : 6,
		string : '',
		counts : 0	
	},
	stability : {
		value : 6,
		string : '',
		counts : 0	
	},
	drift : {
		value : 6,
		string : '',
		counts : 0	
	},
	average : {
		value : 6,
		string : '',	
		counts : 0
	}
}

function getStats(r){
		for (b in kartbody){
			for (w in wheel){
				for(g in glider){
					if(glider_count > 7){
						glider_count = 1;	
					}
					landspeed = racers[r].landspeed + kartbody[b].landspeed + wheel[w].landspeed + glider[g].landspeed;
					seaspeed = racers[r].seaspeed + kartbody[b].seaspeed + wheel[w].seaspeed + glider[g].seaspeed;
					airspeed = racers[r].airspeed + kartbody[b].airspeed + wheel[w].airspeed + glider[g].airspeed;
					accel = racers[r].acceleration + kartbody[b].acceleration + wheel[w].acceleration + glider[g].acceleration;
					weight = racers[r].weight + kartbody[b].weight + wheel[w].weight + glider[g].weight;
					handling = racers[r].landhandling + kartbody[b].landhandling + wheel[w].landhandling + glider[g].landhandling;
					handlings = racers[r].seahandling + kartbody[b].seahandling + wheel[w].seahandling + glider[g].seahandling;
					handlinga = racers[r].airhandling + kartbody[b].airhandling + wheel[w].airhandling + glider[g].airhandling;
					offroad = racers[r].offroad + kartbody[b].offroad + wheel[w].offroad + glider[g].offroad;
					miniturbo = racers[r].miniturbo + kartbody[b].miniturbo + wheel[w].miniturbo + glider[g].miniturbo;
					stability = racers[r].stability + kartbody[b].stability + wheel[w].stability + glider[g].stability;
					drift = racers[r].drift + kartbody[b].drift + wheel[w].drift + glider[g].drift;
					average = (landspeed + seaspeed + airspeed + accel + weight + handling + handlings + handlinga + offroad + miniturbo + stability + drift)/12;
					
					combo = 'Racer weight: '+ r +'<br />Kart Body: ' + b + '<br />Wheel type: ' + w + '<br />Glider type: '+g +'<br /><br />';
					
					if(landspeed > best.landspeed.value){
						best.landspeed.value = landspeed;
						best.landspeed.string = combo + '<br />';
					}else if(landspeed == best.landspeed.value){
						if(glider_count == 1){
							combo = 'Racer weight: '+ r +'<br />Kart Body: ' + b + '<br />Wheel type: ' + w + '<br />Glider type: Any<br /><br />';
							best.landspeed.string += combo + '<br />';
						}
					}
					
					if(seaspeed > best.seaspeed.value){
						best.seaspeed.value = seaspeed;
						best.seaspeed.string = combo + '<br />';
					}else if(seaspeed == best.seaspeed.value){
						if(glider_count == 1){
							combo = 'Racer weight: '+ r +'<br />Kart Body: ' + b + '<br />Wheel type: ' + w + '<br />Glider type: Any<br /><br />';
							best.seaspeed.string += combo + '<br />';
						}
					}
					
					if(airspeed > best.airspeed.value){
						best.airspeed.value = airspeed;
						best.airspeed.string = combo + '<br />';
					}else if(airspeed == best.airspeed.value){
						best.airspeed.string += combo + '<br />';
					}
					
					if(accel > best.acceleration.value){
						best.acceleration.value = accel;
						best.acceleration.string = combo + '<br />';
					}else if(accel == best.acceleration.value){
						best.acceleration.string += combo + '<br />';
					}
					
					if(weight > best.weight.value){
						best.weight.value = weight;
						best.weight.string = combo + '<br />';
					}else if(weight == best.weight.value){
						best.weight.string += combo + '<br />';
					}
					
					if(handling > best.handling.value){
						best.handling.value = handling;
						best.handling.string = combo + '<br />';
					}else if(handling == best.handling.value){
						if(glider_count == 1){
							combo = 'Racer weight: '+ r +'<br />Kart Body: ' + b + '<br />Wheel type: ' + w + '<br />Glider type: Any<br /><br />';
							best.handling.string += combo + '<br />';
						}
					}
					
					if(handlings > best.handlings.value){
						best.handlings.value = handlings;
						best.handlings.string = combo + '<br />';
					}else if(handlings == best.handlings.value){
						if(glider_count == 1){
							combo = 'Racer weight: '+ r +'<br />Kart Body: ' + b + '<br />Wheel type: ' + w + '<br />Glider type: Any<br /><br />';
							best.handlings.string += combo + '<br />';
						}
					}
					
					if(handlinga > best.handlinga.value){
						best.handlinga.value = handlinga;
						best.handlinga.string = combo + '<br />';
					}else if(handlinga == best.handlinga.value){
						best.handlinga.string += combo + '<br />';
					}
					
					if(offroad > best.offroad.value){
						best.offroad.value = offroad;
						best.offroad.string = combo + '<br />';
					}else if(offroad == best.offroad.value){
						best.offroad.string += combo + '<br />';
					}
					
					if(miniturbo > best.miniturbo.value){
						best.miniturbo.value = miniturbo;
						best.miniturbo.string = combo + '<br />';
					}else if(miniturbo == best.miniturbo.value){
						best.miniturbo.string += combo + '<br />';
					}
					
					if(stability > best.stability.value){
						best.stability.value = stability;
						best.stability.string = combo + '<br />';
					}else if(stability == best.stability.value){
						best.stability.string += combo + '<br />';
					}
					
					if(drift > best.drift.value){
						best.drift.value = drift;
						best.drift.string = combo + '<br />';
					}else if(drift == best.drift.value){
						best.drift.string += combo + '<br />';
					}
					
					if(average > best.average.value){
						best.average.value = average;
						best.average.string = combo + '<br />';
					}else if(average == best.average.value){
						best.average.string += combo + '<br />';
					}
					
					if(landspeed < worst.landspeed.value){
						worst.landspeed.value = landspeed;
						worst.landspeed.string = combo + '<br />';
					}else if(landspeed == worst.landspeed.value){
						if(glider_count == 1){
							combo = 'Racer weight: '+ r +'<br />Kart Body: ' + b + '<br />Wheel type: ' + w + '<br />Glider type: Any<br /><br />';
							worst.landspeed.string += combo + '<br />';
						}
					}
					
					if(seaspeed < worst.seaspeed.value){
						worst.seaspeed.value = seaspeed;
						worst.seaspeed.string = combo + '<br />';
					}else if(seaspeed == worst.seaspeed.value){
						if(glider_count == 1){
							combo = 'Racer weight: '+ r +'<br />Kart Body: ' + b + '<br />Wheel type: ' + w + '<br />Glider type: Any<br /><br />';
							worst.seaspeed.string += combo + '<br />';
						}
					}
					
					if(airspeed < worst.airspeed.value){
						worst.airspeed.value = airspeed;
						worst.airspeed.string = combo + '<br />';
					}else if(airspeed == worst.airspeed.value){
						combo = 'Racer weight: '+ r +'<br />Kart Body: ' + b + '<br />Wheel type: ' + w + '<br />Glider type: Any<br /><br />';
					}
					
					if(accel < worst.acceleration.value){
						worst.acceleration.value = accel;
						worst.acceleration.string = combo + '<br />';
					}else if(accel == worst.acceleration.value){
						worst.acceleration.string += combo + '<br />';
					}
					
					if(weight < worst.weight.value){
						worst.weight.value = weight;
						worst.weight.string = combo + '<br />';
					}else if(weight == worst.weight.value){
						worst.weight.string += combo + '<br />';
					}
					
					if(handling < worst.handling.value){
						worst.handling.value = handling;
						worst.handling.string = combo + '<br />';
					}else if(handling == worst.handling.value){
						if(glider_count == 1){
							combo = 'Racer weight: '+ r +'<br />Kart Body: ' + b + '<br />Wheel type: ' + w + '<br />Glider type: Any<br /><br />';
							worst.handling.string += combo + '<br />';
						}
					}
					
					if(handlings < worst.handlings.value){
						worst.handlings.value = handlings;
						worst.handlings.string = combo + '<br />';
					}else if(handlings == worst.handlings.value){
						if(glider_count == 1){
							combo = 'Racer weight: '+ r +'<br />Kart Body: ' + b + '<br />Wheel type: ' + w + '<br />Glider type: Any<br /><br />';
							worst.handlings.string += combo + '<br />';
						}
					}
					
					if(handlinga < worst.handlinga.value){
						worst.handlinga.value = handlinga;
						worst.handlinga.string = combo + '<br />';
					}else if(handlinga == worst.handlinga.value){
						worst.handlinga.string += combo + '<br />';
					}
					
					if(offroad < worst.offroad.value){
						worst.offroad.value = offroad;
						worst.offroad.string = combo + '<br />';
					}else if(offroad == worst.offroad.value){
						worst.offroad.string += combo + '<br />';
					}
					
					if(miniturbo < worst.miniturbo.value){
						worst.miniturbo.value = miniturbo;
						worst.miniturbo.string = combo + '<br />';
					}else if(miniturbo == worst.miniturbo.value){
						worst.miniturbo.string += combo + '<br />';
					}
					
					if(stability < worst.stability.value){
						worst.stability.value = stability;
						worst.stability.string = combo + '<br />';
					}else if(stability == worst.stability.value){
						worst.stability.string += combo + '<br />';
					}
					
					if(drift < worst.drift.value){
						worst.drift.value = drift;
						worst.drift.string = combo + '<br />';
					}else if(drift == worst.drift.value){
						worst.drift.string += combo + '<br />';
					}
					
					if(average < worst.average.value){
						worst.average.value = average;
						worst.average.string = combo + '<br />';
					}else if(average == worst.average.value){
						worst.average.string += combo + '<br />';
					}
					glider_count++;
					ctr++;
				}
			}
		}

	document.write('<h1>Total Combinations: '+ctr+'</h1>');
	document.write('<h1><a name="bestav">Best Average:</a> '+best.average.value+'</h1>');
	document.write('<p>Build(s): <br />'+best.average.string+'</p>');
	
	document.write('<h1><a name="bestlandspeed">Best Speed (Land)</a>: '+best.landspeed.value+'</h1>');
	document.write('<p>Build(s): <br />'+best.landspeed.string+'</p>');
	
	document.write('<h1><a name="bestseaspeed">Best Speed (Sea)</a>: '+best.seaspeed.value+'</h1>');
	document.write('<p>Build(s): <br />'+best.seaspeed.string+'</p>');
	
	document.write('<h1><a name="bestairspeed">Best Speed (air)</a>: '+best.airspeed.value+'</h1>');
	document.write('<p>Build(s): <br />'+best.airspeed.string+'</p>');
	
	document.write('<h1><a name="bestacceleration">Best Acceleration</a>: '+best.acceleration.value+'</h1>');
	document.write('<p>Build(s): <br />'+best.acceleration.string+'</p>');
	
	document.write('<h1><a name="bestlandhandling">Best Handling (Land):</a> '+best.handling.value+'</h1>');
	document.write('<p>Build(s): <br />'+best.handling.string+'</p>');
	
	document.write('<h1><a name="bestseahandling">Best Handling (Sea):</a> '+best.handlings.value+'</h1>');
	document.write('<p>Build(s): <br />'+best.handlings.string+'</p>');
	
	document.write('<h1><a name="bestairhandling">Best Handling (Air):</a> '+best.handlinga.value+'</h1>');
	document.write('<p>Build(s): <br />'+best.handlinga.string+'</p>');
	
	document.write('<h1><a name="heaviest">Heaviest:</a> '+best.weight.value+'</h1>');
	document.write('<p>Build(s): <br />'+best.weight.string+'</p>');
	
	document.write('<h1><a name="bestoffroad">Best Offroad:</a> '+best.offroad.value+'</h1>');
	document.write('<p>Build(s): <br />'+best.offroad.string+'</p>');
	
	document.write('<h1><a name="bestminiturbo">Best Miniturbo</a>: '+best.miniturbo.value+'</h1>');
	document.write('<p>Build(s): <br />'+best.miniturbo.string+'</p>');
	
	document.write('<h1><a name="beststability">Best Stability</a>: '+best.stability.value+'</h1>');
	document.write('<p>Build(s): <br />'+best.stability.string+'</p>');
	
	document.write('<h1><a name="bestdrift">best Drift</a>: '+best.drift.value+'</h1>');
	document.write('<p>Build(s): <br />'+worst.drift.string+'</p>');
	
	document.write('<h1><a name="worstav">Worst Average</a>: '+worst.average.value+'</h1>');
	document.write('<p>Build(s): <br />'+worst.average.string+'</p>');
	
	document.write('<h1><a name="worstspeed">Worst Speed</a>: '+worst.landspeed.value+'</h1>');
	document.write('<p>Build(s): <br />'+worst.landspeed.string+'</p>');
	
	document.write('<h1><a name="worstacceleration">Worst Acceleration</a>: '+worst.acceleration.value+'</h1>');
	document.write('<p>Build(s): <br />'+worst.acceleration.string+'</p>');
	
	document.write('<h1><a name="worsthandling">Worst Handling</a>: '+worst.handling.value+'</h1>');
	document.write('<p>Build(s): <br />'+worst.handling.string+'</p>');
	
	document.write('<h1><a name="lightest">Lightest</a>: '+worst.weight.value+'</h1>');
	document.write('<p>Build(s): <br />'+worst.weight.string+'</p>');
	
	document.write('<h1><a name="worstoffroad">Worst Offroad</a>: '+worst.offroad.value+'</h1>');
	document.write('<p>Build(s): <br />'+worst.offroad.string+'</p>');
	
	document.write('<h1><a name="worstminiturbo">Worst Miniturbo</a>: '+worst.miniturbo.value+'</h1>');
	document.write('<p>Build(s): <br />'+worst.miniturbo.string+'</p>');
	
	document.write('<h1><a name="worststability">Worst Stability</a>: '+worst.stability.value+'</h1>');
	document.write('<p>Build(s): <br />'+worst.stability.string+'</p>');
	
	document.write('<h1><a name="worstdrift">Worst Drift</a>: '+worst.drift.value+'</h1>');
	document.write('<p>Build(s): <br />'+worst.drift.string+'</p>');

	
}

function getAllStats(){
	for(r in racers){
		for (b in kartbody){
			for (w in wheel){
				for(g in glider){
					landspeed = racers[r].landspeed + kartbody[b].landspeed + wheel[w].landspeed + glider[g].landspeed;
					seaspeed = racers[r].seaspeed + kartbody[b].seaspeed + wheel[w].seaspeed + glider[g].seaspeed;
					airspeed = racers[r].airspeed + kartbody[b].airspeed + wheel[w].airspeed + glider[g].airspeed;
					accel = racers[r].acceleration + kartbody[b].acceleration + wheel[w].acceleration + glider[g].acceleration;
					weight = racers[r].weight + kartbody[b].weight + wheel[w].weight + glider[g].weight;
					handling = racers[r].landhandling + kartbody[b].landhandling + wheel[w].landhandling + glider[g].landhandling;
					handlings = racers[r].seahandling + kartbody[b].seahandling + wheel[w].seahandling + glider[g].seahandling;
					handlinga = racers[r].airhandling + kartbody[b].airhandling + wheel[w].airhandling + glider[g].airhandling;
					offroad = racers[r].offroad + kartbody[b].offroad + wheel[w].offroad + glider[g].offroad;
					miniturbo = racers[r].miniturbo + kartbody[b].miniturbo + wheel[w].miniturbo + glider[g].miniturbo;
					stability = racers[r].stability + kartbody[b].stability + wheel[w].stability + glider[g].stability;
					drift = racers[r].drift + kartbody[b].drift + wheel[w].drift + glider[g].drift;
					average = (landspeed + seaspeed + airspeed + accel + weight + handling + handlings + handlinga + offroad + miniturbo + stability + drift)/12;
					
					combo = 'Racer weight: '+ r +'<br />Kart Body: ' + b + '<br />Wheel type: ' + w + '<br />Glider type: '+g +'<br /><br />';
					
					if(landspeed > best.landspeed.value){
						best.landspeed.value = landspeed;
						best.landspeed.string = combo + '<br />';
					}else if(landspeed == best.landspeed.value){
						best.landspeed.string += combo + '<br />';
					}
					
					if(seaspeed > best.seaspeed.value){
						best.seaspeed.value = seaspeed;
						best.seaspeed.string = combo + '<br />';
					}else if(seaspeed == best.seaspeed.value){
						best.seaspeed.string += combo + '<br />';
					}
					
					if(airspeed > best.airspeed.value){
						best.airspeed.value = airspeed;
						best.airspeed.string = combo + '<br />';
					}else if(airspeed == best.airspeed.value){
						best.airspeed.string += combo + '<br />';
					}
					
					if(accel > best.acceleration.value){
						best.acceleration.value = accel;
						best.acceleration.string = combo + '<br />';
					}else if(accel == best.acceleration.value){
						best.acceleration.string += combo + '<br />';
					}
					
					if(weight > best.weight.value){
						best.weight.value = weight;
						best.weight.string = combo + '<br />';
					}else if(weight == best.weight.value){
						best.weight.string += combo + '<br />';
					}
					
					if(handling > best.handling.value){
						best.handling.value = handling;
						best.handling.string = combo + '<br />';
					}else if(handling == best.handling.value){
						best.handling.string += combo + '<br />';
					}
					
					if(handlings > best.handlings.value){
						best.handlings.value = handlings;
						best.handlings.string = combo + '<br />';
					}else if(handlings == best.handlings.value){
						best.handlings.string += combo + '<br />';
					}
					
					if(handlinga > best.handlinga.value){
						best.handlinga.value = handlinga;
						best.handlinga.string = combo + '<br />';
					}else if(handlinga == best.handlinga.value){
						best.handlinga.string += combo + '<br />';
					}
					
					if(offroad > best.offroad.value){
						best.offroad.value = offroad;
						best.offroad.string = combo + '<br />';
					}else if(offroad == best.offroad.value){
						best.offroad.string += combo + '<br />';
					}
					
					if(miniturbo > best.miniturbo.value){
						best.miniturbo.value = miniturbo;
						best.miniturbo.string = combo + '<br />';
					}else if(miniturbo == best.miniturbo.value){
						best.miniturbo.string += combo + '<br />';
					}
					
					if(stability > best.stability.value){
						best.stability.value = stability;
						best.stability.string = combo + '<br />';
					}else if(stability == best.stability.value){
						best.stability.string += combo + '<br />';
					}
					
					if(drift > best.drift.value){
						best.drift.value = drift;
						best.drift.string = combo + '<br />';
					}else if(drift == best.drift.value){
						best.drift.string += combo + '<br />';
					}
					
					if(average > best.average.value){
						best.average.value = average;
						best.average.string = combo + '<br />';
					}else if(average == best.average.value){
						best.average.string += combo + '<br />';
					}
					
					if(landspeed < worst.landspeed.value){
						worst.landspeed.value = landspeed;
						worst.landspeed.string = combo + '<br />';
					}else if(landspeed == worst.landspeed.value){
						worst.landspeed.string += combo + '<br />';
					}
					
					if(seaspeed < worst.seaspeed.value){
						worst.seaspeed.value = seaspeed;
						worst.seaspeed.string = combo + '<br />';
					}else if(seaspeed == worst.seaspeed.value){
						worst.seaspeed.string += combo + '<br />';
					}
					
					if(airspeed < worst.airspeed.value){
						worst.airspeed.value = airspeed;
						worst.airspeed.string = combo + '<br />';
					}else if(airspeed == worst.airspeed.value){
						worst.airspeed.string += combo + '<br />';
					}
					
					if(accel < worst.acceleration.value){
						worst.acceleration.value = accel;
						worst.acceleration.string = combo + '<br />';
					}else if(accel == worst.acceleration.value){
						worst.acceleration.string += combo + '<br />';
					}
					
					if(weight < worst.weight.value){
						worst.weight.value = weight;
						worst.weight.string = combo + '<br />';
					}else if(weight == worst.weight.value){
						worst.weight.string += combo + '<br />';
					}
					
					if(handling < worst.handling.value){
						worst.handling.value = handling;
						worst.handling.string = combo + '<br />';
					}else if(handling == worst.handling.value){
						worst.handling.string += combo + '<br />';
					}
					
					if(handlings < worst.handlings.value){
						worst.handlings.value = handlings;
						worst.handlings.string = combo + '<br />';
					}else if(handlings == worst.handlings.value){
						worst.handlings.string += combo + '<br />';
					}
					
					if(handlinga < worst.handlinga.value){
						worst.handlinga.value = handlinga;
						worst.handlinga.string = combo + '<br />';
					}else if(handlinga == worst.handlinga.value){
						worst.handlinga.string += combo + '<br />';
					}
					
					if(offroad < worst.offroad.value){
						worst.offroad.value = offroad;
						worst.offroad.string = combo + '<br />';
					}else if(offroad == worst.offroad.value){
						worst.offroad.string += combo + '<br />';
					}
					
					if(miniturbo < worst.miniturbo.value){
						worst.miniturbo.value = miniturbo;
						worst.miniturbo.string = combo + '<br />';
					}else if(miniturbo == worst.miniturbo.value){
						worst.miniturbo.string += combo + '<br />';
					}
					
					if(stability < worst.stability.value){
						worst.stability.value = stability;
						worst.stability.string = combo + '<br />';
					}else if(stability == worst.stability.value){
						worst.stability.string += combo + '<br />';
					}
					
					if(drift < worst.drift.value){
						worst.drift.value = drift;
						worst.drift.string = combo + '<br />';
					}else if(drift == worst.drift.value){
						worst.drift.string += combo + '<br />';
					}
					
					if(average < worst.average.value){
						worst.average.value = average;
						worst.average.string = combo + '<br />';
					}else if(average == worst.average.value){
						worst.average.string += combo + '<br />';
					}
					ctr++;
				}
			}
		}
	}
	document.write('<h1>Total Combinations: '+ctr+'</h1>');
	document.write('<h1><a name="bestav">Best Average:</a> '+best.average.value+'</h1>');
	document.write('<p>Build(s): <br />'+best.average.string+'</p>');
	
	document.write('<h1><a name="bestlandspeed">Best Speed (Land)</a>: '+best.landspeed.value+'</h1>');
	document.write('<p>Build(s): <br />'+best.landspeed.string+'</p>');
	
	document.write('<h1><a name="bestseaspeed">Best Speed (Sea)</a>: '+best.seaspeed.value+'</h1>');
	document.write('<p>Build(s): <br />'+best.seaspeed.string+'</p>');
	
	document.write('<h1><a name="bestairspeed">Best Speed (Air)</a>: '+best.airspeed.value+'</h1>');
	document.write('<p>Build(s): <br />'+best.airspeed.string+'</p>');
	
	document.write('<h1><a name="bestacceleration">Best Acceleration</a>: '+best.acceleration.value+'</h1>');
	document.write('<p>Build(s): <br />'+best.acceleration.string+'</p>');
	
	document.write('<h1><a name="bestlandhandling">Best Handling:</a> '+best.handling.value+'</h1>');
	document.write('<p>Build(s): <br />'+best.handling.string+'</p>');
	
	document.write('<h1><a name="bestseahandling">Best Handling (Sea):</a> '+best.handlings.value+'</h1>');
	document.write('<p>Build(s): <br />'+best.handlings.string+'</p>');
	
	document.write('<h1><a name="bestairhandling">Best Handling (Air):</a> '+best.handlinga.value+'</h1>');
	document.write('<p>Build(s): <br />'+best.handlinga.string+'</p>');
	
	document.write('<h1><a name="heaviest">Heaviest:</a> '+best.weight.value+'</h1>');
	document.write('<p>Build(s): <br />'+best.weight.string+'</p>');
	
	document.write('<h1><a name="bestoffroad">Best Offroad:</a> '+best.offroad.value+'</h1>');
	document.write('<p>Build(s): <br />'+best.offroad.string+'</p>');
	
	document.write('<h1><a name="worstav">Worst Average</a>: '+worst.average.value+'</h1>');
	document.write('<p>Build(s): <br />'+worst.average.string+'</p>');
	
	document.write('<h1><a name="worstspeed">Worst Speed</a>: '+worst.landspeed.value+'</h1>');
	document.write('<p>Build(s): <br />'+worst.landspeed.string+'</p>');
	
	document.write('<h1><a name="worstacceleration">Worst Acceleration</a>: '+worst.acceleration.value+'</h1>');
	document.write('<p>Build(s): <br />'+worst.acceleration.string+'</p>');
	
	document.write('<h1><a name="worsthandling">Worst Handling</a>: '+worst.handling.value+'</h1>');
	document.write('<p>Build(s): <br />'+worst.handling.string+'</p>');
	
	document.write('<h1><a name="lightest">Lightest</a>: '+worst.weight.value+'</h1>');
	document.write('<p>Build(s): <br />'+worst.weight.string+'</p>');
	
	document.write('<h1><a name="worstoffroad">Worst Offroad</a>: '+worst.offroad.value+'</h1>');
	document.write('<p>Build(s): <br />'+worst.offroad.string+'</p>');
	
	document.write('<h1><a name="worstminiturbo">Worst Miniturbo</a>: '+worst.miniturbo.value+'</h1>');
	document.write('<p>Build(s): <br />'+worst.miniturbo.string+'</p>');
	
	document.write('<h1><a name="worststability">Worst Stability</a>: '+worst.stability.value+'</h1>');
	document.write('<p>Build(s): <br />'+worst.stability.string+'</p>');
	
	document.write('<h1><a name="worstdrift">Worst Drift</a>: '+worst.drift.value+'</h1>');
	document.write('<p>Build(s): <br />'+worst.drift.string+'</p>');
	
}