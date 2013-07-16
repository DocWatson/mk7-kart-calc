function getstats(r){
	for (b in kartbody){
		for (w in wheel){
			for(g in glider){
				speed = racers[r].speed + kartbody[b].speed + wheel[w].speed + glider[g].speed;
				accel = racers[r].acceleration + kartbody[b].acceleration + wheel[w].acceleration + glider[g].acceleration;
				weight = racers[r].weight + kartbody[b].weight + wheel[w].weight + glider[g].weight;
				handling = racers[r].handling + kartbody[b].handling + wheel[w].handling + glider[g].handling;
				offroad = racers[r].offroad + kartbody[b].offroad + wheel[w].offroad + glider[g].offroad;
				average = (speed + accel + weight +handling + offroad)/5;
				
				combo = 'body: ' + b + ' wheel: ' + w + ' glider: '+g;
				/*document.write(
				'<h3> Build: '+combo+'</h3>' + 
				'Speed: ' + speed+'<br />' + 
				'Acceleration: ' + accel+'<br />' + 
				'Weight: ' + weight+'<br />' +
				'Handling: ' + handling + '<br />' + 
				'Offroad: ' + offroad +'<br />' +
				'Average: ' + average +'<br />');*/
				speed = 0;
				combo = '';
			}
		}
		speed = 0;
		combo = '';
	}
}