var ctr = 0;
var glider_count = 1;
best = {
	speed :{
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
	offroad : {
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
	speed :{
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
	offroad : {
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
					if(glider_count > 2){
						glider_count = 1;	
					}
					speed = racers[r].speed + kartbody[b].speed + wheel[w].speed + glider[g].speed;
					accel = racers[r].acceleration + kartbody[b].acceleration + wheel[w].acceleration + glider[g].acceleration;
					weight = racers[r].weight + kartbody[b].weight + wheel[w].weight + glider[g].weight;
					handling = racers[r].handling + kartbody[b].handling + wheel[w].handling + glider[g].handling;
					offroad = racers[r].offroad + kartbody[b].offroad + wheel[w].offroad + glider[g].offroad;
					average = (speed + accel + weight +handling + offroad)/5;
					
					combo = 'Kart Body: ' + b + '<br />Wheel type: ' + w + '<br />Glider type: '+g +'<br /><br />';
					
					if(speed > best.speed.value){
						best.speed.value = speed;
						if(glider_count == 1){
							combo = 'Racer weight: '+ r +'<br />Kart Body: ' + b + '<br />Wheel type: ' + w + '<br />Glider type: Any<br /><br />';
							best.speed.string = combo + '<br />';
						}
					}else if(speed == best.speed.value){
						if(glider_count == 1){
							combo = 'Racer weight: '+ r +'<br />Kart Body: ' + b + '<br />Wheel type: ' + w + '<br />Glider type: Any<br /><br />';
							best.speed.string += combo + '<br />';
						}
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
						if(glider_count == 1){
							combo = 'Racer weight: '+ r +'<br />Kart Body: ' + b + '<br />Wheel type: ' + w + '<br />Glider type: Any<br /><br />';
							best.handling.string = combo + '<br />';
						}
					}else if(handling == best.handling.value){
						if(glider_count == 1){
							combo = 'Racer weight: '+ r +'<br />Kart Body: ' + b + '<br />Wheel type: ' + w + '<br />Glider type: Any<br /><br />';
							best.handling.string += combo + '<br />';
						}
					}
					
					if(offroad > best.offroad.value){
						best.offroad.value = offroad;
						if(glider_count == 1){
							combo = 'Racer weight: '+ r +'<br />Kart Body: ' + b + '<br />Wheel type: ' + w + '<br />Glider type: Any<br /><br />';
							best.offroad.string = combo + '<br />';
						}
					}else if(offroad == best.offroad.value){
						if(glider_count == 1){
							combo = 'Racer weight: '+ r +'<br />Kart Body: ' + b + '<br />Wheel type: ' + w + '<br />Glider type: Any<br /><br />';
							best.offroad.string += combo + '<br />';
						}
					}
					
					if(average > best.average.value){
						best.average.value = average;
						best.average.string = combo + '<br />';
					}else if(average == best.average.value){
						best.average.string += combo + '<br />';
					}
					
					if(speed < worst.speed.value){
						worst.speed.value = speed;
						if(glider_count == 1){
							combo = 'Racer weight: '+ r +'<br />Kart Body: ' + b + '<br />Wheel type: ' + w + '<br />Glider type: Any<br /><br />';
							worst.speed.string = combo + '<br />';
						}
					}else if(speed == worst.speed.value){
						if(glider_count == 1){
							combo = 'Racer weight: '+ r +'<br />Kart Body: ' + b + '<br />Wheel type: ' + w + '<br />Glider type: Any<br /><br />';
							worst.speed.string += combo + '<br />';
						}
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
						if(glider_count == 1){
							combo = 'Racer weight: '+ r +'<br />Kart Body: ' + b + '<br />Wheel type: ' + w + '<br />Glider type: Any<br /><br />';
							worst.handling.string = combo + '<br />';
						}
					}else if(handling == worst.handling.value){
						if(glider_count == 1){
							combo = 'Racer weight: '+ r +'<br />Kart Body: ' + b + '<br />Wheel type: ' + w + '<br />Glider type: Any<br /><br />';
							worst.handling.string += combo + '<br />';
						}
					}
					
					if(offroad < worst.offroad.value){
						worst.offroad.value = offroad;
						if(glider_count == 1){
							combo = 'Racer weight: '+ r +'<br />Kart Body: ' + b + '<br />Wheel type: ' + w + '<br />Glider type: Any<br /><br />';
							worst.offroad.string = combo + '<br />';
						}
					}else if(offroad == worst.offroad.value){
						if(glider_count == 1){
							combo = 'Racer weight: '+ r +'<br />Kart Body: ' + b + '<br />Wheel type: ' + w + '<br />Glider type: Any<br /><br />';
							worst.offroad.string += combo + '<br />';
						}
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
	
	document.write('<h1><a name="bestspeed">Best Speed</a>: '+best.speed.value+'</h1>');
	document.write('<p>Build(s): <br />'+best.speed.string+'</p>');
	
	document.write('<h1><a name="bestacceleration">Best Acceleration</a>: '+best.acceleration.value+'</h1>');
	document.write('<p>Build(s): <br />'+best.acceleration.string+'</p>');
	
	document.write('<h1><a name="besthandling">Best Handling:</a> '+best.handling.value+'</h1>');
	document.write('<p>Build(s): <br />'+best.handling.string+'</p>');
	
	document.write('<h1><a name="heaviest">Heaviest:</a> '+best.weight.value+'</h1>');
	document.write('<p>Build(s): <br />'+best.weight.string+'</p>');
	
	document.write('<h1><a name="bestoffroad">Best Offroad:</a> '+best.offroad.value+'</h1>');
	document.write('<p>Build(s): <br />'+best.offroad.string+'</p>');
	
	document.write('<h1><a name="bestav">Best Average:</a> '+best.average.value+'</h1>');
	document.write('<p>Build(s): <br />'+best.average.string+'</p>');
	
	document.write('<h1><a name="worstav">Worst Average</a>: '+worst.average.value+'</h1>');
	document.write('<p>Build(s): <br />'+worst.average.string+'</p>');
	
	document.write('<h1><a name="worstspeed">Worst Speed</a>: '+worst.speed.value+'</h1>');
	document.write('<p>Build(s): <br />'+worst.speed.string+'</p>');
	
	document.write('<h1><a name="worstacceleration">Worst Acceleration</a>: '+worst.acceleration.value+'</h1>');
	document.write('<p>Build(s): <br />'+worst.acceleration.string+'</p>');
	
	document.write('<h1><a name="worsthandling">Worst Handling</a>: '+worst.handling.value+'</h1>');
	document.write('<p>Build(s): <br />'+worst.handling.string+'</p>');
	
	document.write('<h1><a name="lightest">Lightest</a>: '+worst.weight.value+'</h1>');
	document.write('<p>Build(s): <br />'+worst.weight.string+'</p>');
	
	document.write('<h1><a name="worstoffroad">Worst Offroad</a>: '+worst.offroad.value+'</h1>');
	document.write('<p>Build(s): <br />'+worst.offroad.string+'</p>');
}

function getAllStats(){
	for(r in racers){
	//	document.write('<h1>'+r+'</h1>');
		for (b in kartbody){
			for (w in wheel){
				for(g in glider){
					speed = racers[r].speed + kartbody[b].speed + wheel[w].speed + glider[g].speed;
					accel = racers[r].acceleration + kartbody[b].acceleration + wheel[w].acceleration + glider[g].acceleration;
					weight = racers[r].weight + kartbody[b].weight + wheel[w].weight + glider[g].weight;
					handling = racers[r].handling + kartbody[b].handling + wheel[w].handling + glider[g].handling;
					offroad = racers[r].offroad + kartbody[b].offroad + wheel[w].offroad + glider[g].offroad;
					average = (speed + accel + weight +handling + offroad)/5;
					
					combo = 'Racer weight: '+ r +'<br />Kart Body: ' + b + '<br />Wheel type: ' + w + '<br />Glider type: '+g +'<br /><br />';
					
					if(speed > best.speed.value){
						best.speed.value = speed;
						best.speed.string = combo + '<br />';
					}else if(speed == best.speed.value){
						best.speed.string += combo + '<br />';
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
					
					if(offroad > best.offroad.value){
						best.offroad.value = offroad;
						best.offroad.string = combo + '<br />';
					}else if(offroad == best.offroad.value){
						best.offroad.string += combo + '<br />';
					}
					
					if(average > best.average.value){
						best.average.value = average;
						best.average.string = combo + '<br />';
					}else if(average == best.average.value){
						best.average.string += combo + '<br />';
					}
					
					if(speed < worst.speed.value){
						worst.speed.value = speed;
						worst.speed.string = combo + '<br />';
					}else if(speed == worst.speed.value){
						worst.speed.string += combo + '<br />';
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
					
					if(offroad < worst.offroad.value){
						worst.offroad.value = offroad;
						worst.offroad.string = combo + '<br />';
					}else if(offroad == worst.offroad.value){
						worst.offroad.string += combo + '<br />';
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
	
	document.write('<h1><a name="bestspeed">Best Speed</a>: '+best.speed.value+'</h1>');
	document.write('<p>Build(s): <br />'+best.speed.string+'</p>');
	
	document.write('<h1><a name="bestacceleration">Best Acceleration</a>: '+best.acceleration.value+'</h1>');
	document.write('<p>Build(s): <br />'+best.acceleration.string+'</p>');
	
	document.write('<h1><a name="besthandling">Best Handling:</a> '+best.handling.value+'</h1>');
	document.write('<p>Build(s): <br />'+best.handling.string+'</p>');
	
	document.write('<h1><a name="heaviest">Heaviest:</a> '+best.weight.value+'</h1>');
	document.write('<p>Build(s): <br />'+best.weight.string+'</p>');
	
	document.write('<h1><a name="bestoffroad">Best Offroad:</a> '+best.offroad.value+'</h1>');
	document.write('<p>Build(s): <br />'+best.offroad.string+'</p>');
	
	document.write('<h1><a name="worstav">Worst Average</a>: '+worst.average.value+'</h1>');
	document.write('<p>Build(s): <br />'+worst.average.string+'</p>');
	
	document.write('<h1><a name="worstspeed">Worst Speed</a>: '+worst.speed.value+'</h1>');
	document.write('<p>Build(s): <br />'+worst.speed.string+'</p>');
	
	document.write('<h1><a name="worstacceleration">Worst Acceleration</a>: '+worst.acceleration.value+'</h1>');
	document.write('<p>Build(s): <br />'+worst.acceleration.string+'</p>');
	
	document.write('<h1><a name="worsthandling">Worst Handling</a>: '+worst.handling.value+'</h1>');
	document.write('<p>Build(s): <br />'+worst.handling.string+'</p>');
	
	document.write('<h1><a name="lightest">Lightest</a>: '+worst.weight.value+'</h1>');
	document.write('<p>Build(s): <br />'+worst.weight.string+'</p>');
	
	document.write('<h1><a name="worstoffroad">Worst Offroad</a>: '+worst.offroad.value+'</h1>');
	document.write('<p>Build(s): <br />'+worst.offroad.string+'</p>');
	
}