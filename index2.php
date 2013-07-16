<!DOCTYPE HTML>
<html lang=en>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Mario Kart 7 Calculator</title>
<link href="styles/style.css" rel="stylesheet" type="text/css" />
</head>

<body>
<div id="wrapper">
    <h1>Build and compare Kart Loadouts</h1>
    <p>WARNING: may contain spoilers if you have not unlocked all secrets! To see calculations to determine the best stat combinations, go <a href="totals.php">here</a> (it's heavy on JavaScript so beware if you're on a slow device)</p>
    <div id="kart1_stats" class="statbox">
        <form id="kart1_build">
            <fieldset>
                <label for="racer1">Racer</label>
                <select name="racer1" id="racer1">
                	<option value="--">Select Racer</option>
                    <option value="toad">Toad</option>
                    <option value="koopa">Koopa Troopa</option>
                    <option value="lakitu">Lakitu</option>
                    <option value="shyguy">Shy Guy</option>
                    <option value="peach">Peach</option>
                    <option value="daisy">Daisy</option>
                    <option value="yoshi">Yoshi</option>
                    <option value="mario">Mario</option>
                    <option value="luigi">Luigi</option>
                    <option value="mii">Mii</option>
                    <option value="dk">Donkey Kong</option>
                    <option value="rosalina">Rosalina</option>
                    <option value="wiggler">Wiggler</option>
                    <option value="bowser">Bowser</option>
                    <option value="wario">Wario</option>
                    <option value="metalmario">Metal Mario</option>
                    <option value="honey">Honey Queen</option>
                </select><br />
        
                <label for="body1">Kart Body</label>
                <select name="body1" id="body1">
                    <option value="standard">Standard</option>
                    <option value="bdasher">B Dasher</option>
                    <option value="barrel">Barrel Train</option>
                    <option value="seven">Blue Seven</option>
                    <option value="bolt">Bolt Buggy</option>
                    <option value="bumble">Bumble V</option>
                    <option value="cactx">Cact-x</option>
                    <option value="cloud">Cloud 9</option>
                    <option value="egg">Egg 1</option>
                    <option value="gherkin">Gherkin (Zucchini)</option>
                    <option value="gold">Gold Cart</option>
                    <option value="growlster">Growlster</option>
                    <option value="clown">Koopa Clown</option>
                    <option value="pipe">Pipe Frame</option>
                    <option value="ribbon">Royal Ribbon</option>
                    <option value="soda">Soda Jet</option>
                    <option value="tinytug">Tiny Tug</option>
                </select><br />
        
                <label for="wheel1">Wheel</label>
                <select name="wheel1" id="wheel1">
                    <option value="standard">Standard</option>
                    <option value="gold">Gold</option>
                    <option value="monster">Monster</option>
                    <option value="mushroom">Mushroom</option>
                    <option value="redmonster">Red Monster</option>
                    <option value="roller">Roller</option>
                    <option value="slick">Slick</option>
                    <option value="slim">Slim</option>
                    <option value="sponge">Sponge</option>
                    <option value="wooden">Wooden</option>
                </select><br />
        
                <label for="glider1">Glider</label>
                <select name="glider1" id="glider1">
                    <option value="standard">Super Glider</option>
                    <option value="flower">Flower Glider</option>
                    <option value="ghastly">Ghastly Glider</option>
                    <option value="gold">Gold Glider</option>
                    <option value="parafoil">Parafoil</option>
                    <option value="peach">Peach Parasol</option>
                    <option value="swoop">Swoop</option>
                </select>
            </fieldset>
        </form>
    
    	<ul>
             <li>Speed (Land) <span id="kart1_speed"></span></li>
            <li>Speed (Sea) <span id="kart1_speeds"></span></li>
            <li>Speed (Air) <span id="kart1_speeda"></span></li>
            <li>Acceleration <span id="kart1_accel"></span></li>
            <li>Weight <span id="kart1_weight"></span></li>
            <li>Handling (Land) <span id="kart1_handling"></span></li>
            <li>Handling (Sea) <span id="kart1_handlings"></span></li>
            <li>Handling (Air) <span id="kart1_handlinga"></span></li>
            <li>Off-road <span id="kart1_offroad"></span></li>
            <li>Mini-turbo <span id="kart1_mini"></span></li>
            <li>Stability <span id="kart1_stability"></span></li>
            <li>Drift <span id="kart1_drift"></span></li>
        </ul>
    </div>
    
    <div id="kart2_stats" class="statbox">
        <form id="kart2_build">
            <fieldset>
                <label for="racer2">Racer</label>
                <select name="racer2" id="racer2">
                <option value="--">Select Racer</option>
                    <option value="toad">Toad</option>
                    <option value="koopa">Koopa Troopa</option>
                    <option value="lakitu">Lakitu</option>
                    <option value="shyguy">Shy Guy</option>
                    <option value="peach">Peach</option>
                    <option value="daisy">Daisy</option>
                    <option value="yoshi">Yoshi</option>
                    <option value="mario">Mario</option>
                    <option value="luigi">Luigi</option>
                    <option value="mii">Mii</option>
                    <option value="dk">Donkey Kong</option>
                    <option value="rosalina">Rosalina</option>
                    <option value="wiggler">Wiggler</option>
                    <option value="bowser">Bowser</option>
                    <option value="wario">Wario</option>
                    <option value="metalmario">Metal Mario</option>
                    <option value="honey">Honey Queen</option>
                </select><br />
        
                <label for="body2">Kart Body</label>
                <select name="body2" id="body2">
                    <option value="standard">Standard</option>
                    <option value="bdasher">B Dasher</option>
                    <option value="barrel">Barrel Train</option>
                    <option value="seven">Blue Seven</option>
                    <option value="bolt">Bolt Buggy</option>
                    <option value="bumble">Bumble V</option>
                    <option value="cactx">Cact-x</option>
                    <option value="cloud">Cloud 9</option>
                    <option value="egg">Egg 1</option>
                    <option value="gherkin">Gherkin (Zucchini)</option>
                    <option value="gold">Gold Cart</option>
                    <option value="growlster">Growlster</option>
                    <option value="clown">Koopa Clown</option>
                    <option value="pipe">Pipe Frame</option>
                    <option value="ribbon">Royal Ribbon</option>
                    <option value="soda">Soda Jet</option>
                    <option value="tinytug">Tiny Tug</option>
                </select><br />
        
                <label for="wheel2">Wheel</label>
                <select name="wheel2" id="wheel2">
                    <option value="standard">Standard</option>
                    <option value="gold">Gold</option>
                    <option value="monster">Monster</option>
                    <option value="mushroom">Mushroom</option>
                    <option value="redmonster">Red Monster</option>
                    <option value="roller">Roller</option>
                    <option value="slick">Slick</option>
                    <option value="slim">Slim</option>
                    <option value="sponge">Sponge</option>
                    <option value="wooden">Wooden</option>
                </select><br />
        
                <label for="glider2">Glider</label>
                <select name="glider2" id="glider2">
                    <option value="standard">Super Glider</option>
                    <option value="flower">Flower Glider</option>
                    <option value="ghastly">Ghastly Glider</option>
                    <option value="gold">Gold Glider</option>
                    <option value="parafoil">Parafoil</option>
                    <option value="peach">Peach Parasol</option>
                    <option value="swoop">Swoop</option>
                </select>
            </fieldset>
        </form>
    
    	<ul>
            <li>Speed (Land) <span id="kart2_speed"></span></li>
            <li>Speed (Sea) <span id="kart2_speeds"></span></li>
            <li>Speed (Air) <span id="kart2_speeda"></span></li>
            <li>Acceleration <span id="kart2_accel"></span></li>
            <li>Weight <span id="kart2_weight"></span></li>
            <li>Handling (Land) <span id="kart2_handling"></span></li>
            <li>Handling (Sea) <span id="kart2_handlings"></span></li>
            <li>Handling (Air) <span id="kart2_handlinga"></span></li>
            <li>Off-road <span id="kart2_offroad"></span></li>
            <li>Mini-turbo <span id="kart2_mini"></span></li>
            <li>Stability <span id="kart2_stability"></span></li>
            <li>Drift <span id="kart2_drift"></span></li>
        </ul>
    </div>
    
    <div id="kart3_stats" class="statbox">
        <form id="kart3_build">
            <fieldset>
                <label for="racer3">Racer</label>
                <select name="racer3" id="racer3">
                	<option value="--">Select Racer</option>
                    <option value="toad">Toad</option>
                    <option value="koopa">Koopa Troopa</option>
                    <option value="lakitu">Lakitu</option>
                    <option value="shyguy">Shy Guy</option>
                    <option value="peach">Peach</option>
                    <option value="daisy">Daisy</option>
                    <option value="yoshi">Yoshi</option>
                    <option value="mario">Mario</option>
                    <option value="luigi">Luigi</option>
                    <option value="mii">Mii</option>
                    <option value="dk">Donkey Kong</option>
                    <option value="rosalina">Rosalina</option>
                    <option value="wiggler">Wiggler</option>
                    <option value="bowser">Bowser</option>
                    <option value="wario">Wario</option>
                    <option value="metalmario">Metal Mario</option>
                    <option value="honey">Honey Queen</option>
                </select><br />
        
                <label for="body3">Kart Body</label>
                <select name="body3" id="body3">
                    <option value="standard">Standard</option>
                    <option value="bdasher">B Dasher</option>
                    <option value="barrel">Barrel Train</option>
                    <option value="seven">Blue Seven</option>
                    <option value="bolt">Bolt Buggy</option>
                    <option value="bumble">Bumble V</option>
                    <option value="cactx">Cact-x</option>
                    <option value="cloud">Cloud 9</option>
                    <option value="egg">Egg 1</option>
                    <option value="gherkin">Gherkin (Zucchini)</option>
                    <option value="gold">Gold Cart</option>
                    <option value="growlster">Growlster</option>
                    <option value="clown">Koopa Clown</option>
                    <option value="pipe">Pipe Frame</option>
                    <option value="ribbon">Royal Ribbon</option>
                    <option value="soda">Soda Jet</option>
                    <option value="tinytug">Tiny Tug</option>
                </select><br />
        
                <label for="wheel3">Wheel</label>
                <select name="wheel3" id="wheel3">
                    <option value="standard">Standard</option>
                    <option value="gold">Gold</option>
                    <option value="monster">Monster</option>
                    <option value="mushroom">Mushroom</option>
                    <option value="redmonster">Red Monster</option>
                    <option value="roller">Roller</option>
                    <option value="slick">Slick</option>
                    <option value="slim">Slim</option>
                    <option value="sponge">Sponge</option>
                    <option value="wooden">Wooden</option>
                </select><br />
        
                <label for="glider3">Glider</label>
                <select name="glider3" id="glider3">
                    <option value="standard">Super Glider</option>
                    <option value="flower">Flower Glider</option>
                    <option value="ghastly">Ghastly Glider</option>
                    <option value="gold">Gold Glider</option>
                    <option value="parafoil">Parafoil</option>
                    <option value="peach">Peach Parasol</option>
                    <option value="swoop">Swoop</option>
                </select>
            </fieldset>
        </form>
    
    	<ul>
             <li>Speed (Land) <span id="kart3_speed"></span></li>
            <li>Speed (Sea) <span id="kart3_speeds"></span></li>
            <li>Speed (Air) <span id="kart3_speeda"></span></li>
            <li>Acceleration <span id="kart3_accel"></span></li>
            <li>Weight <span id="kart3_weight"></span></li>
            <li>Handling (Land) <span id="kart3_handling"></span></li>
            <li>Handling (Sea) <span id="kart3_handlings"></span></li>
            <li>Handling (Air) <span id="kart3_handlinga"></span></li>
            <li>Off-road <span id="kart3_offroad"></span></li>
            <li>Mini-turbo <span id="kart3_mini"></span></li>
            <li>Stability <span id="kart3_stability"></span></li>
            <li>Drift <span id="kart3_drift"></span></li>
        </ul>
    </div>
    
    <div id="kart4_stats" class="statbox">
        <form id="kart4_build">
            <fieldset>
                <label for="racer4">Racer</label>
                <select name="racer4" id="racer4">
                	<option value="--">Select Racer</option>
                    <option value="toad">Toad</option>
                    <option value="koopa">Koopa Troopa</option>
                    <option value="lakitu">Lakitu</option>
                    <option value="shyguy">Shy Guy</option>
                    <option value="peach">Peach</option>
                    <option value="daisy">Daisy</option>
                    <option value="yoshi">Yoshi</option>
                    <option value="mario">Mario</option>
                    <option value="luigi">Luigi</option>
                    <option value="mii">Mii</option>
                    <option value="dk">Donkey Kong</option>
                    <option value="rosalina">Rosalina</option>
                    <option value="wiggler">Wiggler</option>
                    <option value="bowser">Bowser</option>
                    <option value="wario">Wario</option>
                    <option value="metalmario">Metal Mario</option>
                    <option value="honey">Honey Queen</option>
                </select><br />
        
                <label for="body4">Kart Body</label>
                <select name="body4" id="body4">
                    <option value="standard">Standard</option>
                    <option value="bdasher">B Dasher</option>
                    <option value="barrel">Barrel Train</option>
                    <option value="seven">Blue Seven</option>
                    <option value="bolt">Bolt Buggy</option>
                    <option value="bumble">Bumble V</option>
                    <option value="cactx">Cact-x</option>
                    <option value="cloud">Cloud 9</option>
                    <option value="egg">Egg 1</option>
                    <option value="gherkin">Gherkin (Zucchini)</option>
                    <option value="gold">Gold Cart</option>
                    <option value="growlster">Growlster</option>
                    <option value="clown">Koopa Clown</option>
                    <option value="pipe">Pipe Frame</option>
                    <option value="ribbon">Royal Ribbon</option>
                    <option value="soda">Soda Jet</option>
                    <option value="tinytug">Tiny Tug</option>
                </select><br />
        
                <label for="wheel4">Wheel</label>
                <select name="wheel4" id="wheel4">
                    <option value="standard">Standard</option>
                    <option value="gold">Gold</option>
                    <option value="monster">Monster</option>
                    <option value="mushroom">Mushroom</option>
                    <option value="redmonster">Red Monster</option>
                    <option value="roller">Roller</option>
                    <option value="slick">Slick</option>
                    <option value="slim">Slim</option>
                    <option value="sponge">Sponge</option>
                    <option value="wooden">Wooden</option>
                </select><br />
        
                <label for="glider4">Glider</label>
                <select name="glider4" id="glider4">
                    <option value="standard">Super Glider</option>
                    <option value="flower">Flower Glider</option>
                    <option value="ghastly">Ghastly Glider</option>
                    <option value="gold">Gold Glider</option>
                    <option value="parafoil">Parafoil</option>
                    <option value="peach">Peach Parasol</option>
                    <option value="swoop">Swoop</option>
                </select>
            </fieldset>
        </form>
    
    	<ul>
             <li>Speed (Land) <span id="kart4_speed"></span></li>
            <li>Speed (Sea) <span id="kart4_speeds"></span></li>
            <li>Speed (Air) <span id="kart4_speeda"></span></li>
            <li>Acceleration <span id="kart4_accel"></span></li>
            <li>Weight <span id="kart4_weight"></span></li>
            <li>Handling (Land) <span id="kart4_handling"></span></li>
            <li>Handling (Sea) <span id="kart4_handlings"></span></li>
            <li>Handling (Air) <span id="kart4_handlinga"></span></li>
            <li>Off-road <span id="kart4_offroad"></span></li>
            <li>Mini-turbo <span id="kart4_mini"></span></li>
            <li>Stability <span id="kart4_stability"></span></li>
            <li>Drift <span id="kart4_drift"></span></li>
        </ul>
    </div>
    <div style="clear: both">
    <p>Special thanks to the <a href="http://www.mariowiki.com/Mario_Kart_7" target="_blank" rel="follow">MarioWiki</a>, the source for these stats</p>
    </div>
</div>
</body>

<script src="/scripts/jquery.js"></script>
<script src="stats3.json"></script>
<script>

$(document).ready(function(){
	$('#kart1_build select').change(function(){
		speed    = racers[$('#racer1').val()].landspeed + wheel[$('#wheel1').val()].landspeed + kartbody[$('#body1').val()].landspeed + glider[$('#glider1').val()].landspeed;
		speeds    = racers[$('#racer1').val()].seaspeed + wheel[$('#wheel1').val()].seaspeed + kartbody[$('#body1').val()].seaspeed + glider[$('#glider1').val()].seaspeed;
		speeda    = racers[$('#racer1').val()].airspeed + wheel[$('#wheel1').val()].airspeed + kartbody[$('#body1').val()].airspeed + glider[$('#glider1').val()].airspeed;
		accel    = racers[$('#racer1').val()].acceleration + wheel[$('#wheel1').val()].acceleration + kartbody[$('#body1').val()].acceleration + glider[$('#glider1').val()].acceleration;
		weight   = racers[$('#racer1').val()].weight + wheel[$('#wheel1').val()].weight + kartbody[$('#body1').val()].weight + glider[$('#glider1').val()].weight;
		handling = racers[$('#racer1').val()].landhandling + wheel[$('#wheel1').val()].landhandling + kartbody[$('#body1').val()].landhandling + glider[$('#glider1').val()].landhandling;
		handlings = racers[$('#racer1').val()].seahandling + wheel[$('#wheel1').val()].seahandling + kartbody[$('#body1').val()].seahandling + glider[$('#glider1').val()].seahandling;
		handlinga = racers[$('#racer1').val()].airhandling + wheel[$('#wheel1').val()].airhandling + kartbody[$('#body1').val()].airhandling + glider[$('#glider1').val()].airhandling;
		offroad  = racers[$('#racer1').val()].offroad + wheel[$('#wheel1').val()].offroad + kartbody[$('#body1').val()].offroad + glider[$('#glider1').val()].offroad;
		miniturbo  = racers[$('#racer1').val()].miniturbo + wheel[$('#wheel1').val()].miniturbo + kartbody[$('#body1').val()].miniturbo + glider[$('#glider1').val()].miniturbo;
		stability  = racers[$('#racer1').val()].stability + wheel[$('#wheel1').val()].stability + kartbody[$('#body1').val()].stability + glider[$('#glider1').val()].stability;
		drift  = racers[$('#racer1').val()].drift + wheel[$('#wheel1').val()].drift + kartbody[$('#body1').val()].drift + glider[$('#glider1').val()].drift;
		
		$('#kart1_speed').html(speed);
		$('#kart1_speeds').html(speeds);
		$('#kart1_speeda').html(speeda);
		$('#kart1_accel').html(accel);
		$('#kart1_weight').html(weight);
		$('#kart1_handling').html(handling);
		$('#kart1_handlinga').html(handlinga);
		$('#kart1_handlings').html(handlings);
		$('#kart1_offroad').html(offroad);
		$('#kart1_mini').html(miniturbo);
		$('#kart1_stability').html(stability);
		$('#kart1_drift').html(drift);
	});
	
	$('#kart2_build select').change(function(){
		speed    = racers[$('#racer2').val()].landspeed + wheel[$('#wheel2').val()].landspeed + kartbody[$('#body2').val()].landspeed + glider[$('#glider2').val()].landspeed;
		speeds    = racers[$('#racer2').val()].seaspeed + wheel[$('#wheel2').val()].seaspeed + kartbody[$('#body2').val()].seaspeed + glider[$('#glider2').val()].seaspeed;
		speeda    = racers[$('#racer2').val()].airspeed + wheel[$('#wheel2').val()].airspeed + kartbody[$('#body2').val()].airspeed + glider[$('#glider2').val()].airspeed;
		accel    = racers[$('#racer2').val()].acceleration + wheel[$('#wheel2').val()].acceleration + kartbody[$('#body2').val()].acceleration + glider[$('#glider2').val()].acceleration;
		weight   = racers[$('#racer2').val()].weight + wheel[$('#wheel2').val()].weight + kartbody[$('#body2').val()].weight + glider[$('#glider2').val()].weight;
		handling = racers[$('#racer2').val()].landhandling + wheel[$('#wheel2').val()].landhandling + kartbody[$('#body2').val()].landhandling + glider[$('#glider2').val()].landhandling;
		handlings = racers[$('#racer2').val()].seahandling + wheel[$('#wheel2').val()].seahandling + kartbody[$('#body2').val()].seahandling + glider[$('#glider2').val()].seahandling;
		handlinga = racers[$('#racer2').val()].airhandling + wheel[$('#wheel2').val()].airhandling + kartbody[$('#body2').val()].airhandling + glider[$('#glider2').val()].airhandling;
		offroad  = racers[$('#racer2').val()].offroad + wheel[$('#wheel2').val()].offroad + kartbody[$('#body2').val()].offroad + glider[$('#glider2').val()].offroad;
		miniturbo  = racers[$('#racer2').val()].miniturbo + wheel[$('#wheel2').val()].miniturbo + kartbody[$('#body2').val()].miniturbo + glider[$('#glider2').val()].miniturbo;
		stability  = racers[$('#racer2').val()].stability + wheel[$('#wheel2').val()].stability + kartbody[$('#body2').val()].stability + glider[$('#glider2').val()].stability;
		drift  = racers[$('#racer2').val()].drift + wheel[$('#wheel2').val()].drift + kartbody[$('#body2').val()].drift + glider[$('#glider2').val()].drift;
		
		$('#kart2_speed').html(speed);
		$('#kart2_speeds').html(speeds);
		$('#kart2_speeda').html(speeda);
		$('#kart2_accel').html(accel);
		$('#kart2_weight').html(weight);
		$('#kart2_handling').html(handling);
		$('#kart2_handlinga').html(handlinga);
		$('#kart2_handlings').html(handlings);
		$('#kart2_offroad').html(offroad);
		$('#kart2_mini').html(miniturbo);
		$('#kart2_stability').html(stability);
		$('#kart2_drift').html(drift);
	});
	
	$('#kart3_build select').change(function(){
		speed    = racers[$('#racer3').val()].landspeed + wheel[$('#wheel3').val()].landspeed + kartbody[$('#body3').val()].landspeed + glider[$('#glider3').val()].landspeed;
		speeds    = racers[$('#racer3').val()].seaspeed + wheel[$('#wheel3').val()].seaspeed + kartbody[$('#body3').val()].seaspeed + glider[$('#glider3').val()].seaspeed;
		speeda    = racers[$('#racer3').val()].airspeed + wheel[$('#wheel3').val()].airspeed + kartbody[$('#body3').val()].airspeed + glider[$('#glider3').val()].airspeed;
		accel    = racers[$('#racer3').val()].acceleration + wheel[$('#wheel3').val()].acceleration + kartbody[$('#body3').val()].acceleration + glider[$('#glider3').val()].acceleration;
		weight   = racers[$('#racer3').val()].weight + wheel[$('#wheel3').val()].weight + kartbody[$('#body3').val()].weight + glider[$('#glider3').val()].weight;
		handling = racers[$('#racer3').val()].landhandling + wheel[$('#wheel3').val()].landhandling + kartbody[$('#body3').val()].landhandling + glider[$('#glider3').val()].landhandling;
		handlings = racers[$('#racer3').val()].seahandling + wheel[$('#wheel3').val()].seahandling + kartbody[$('#body3').val()].seahandling + glider[$('#glider3').val()].seahandling;
		handlinga = racers[$('#racer3').val()].airhandling + wheel[$('#wheel3').val()].airhandling + kartbody[$('#body3').val()].airhandling + glider[$('#glider3').val()].airhandling;
		offroad  = racers[$('#racer3').val()].offroad + wheel[$('#wheel3').val()].offroad + kartbody[$('#body3').val()].offroad + glider[$('#glider3').val()].offroad;
		miniturbo  = racers[$('#racer3').val()].miniturbo + wheel[$('#wheel3').val()].miniturbo + kartbody[$('#body3').val()].miniturbo + glider[$('#glider3').val()].miniturbo;
		stability  = racers[$('#racer3').val()].stability + wheel[$('#wheel3').val()].stability + kartbody[$('#body3').val()].stability + glider[$('#glider3').val()].stability;
		drift  = racers[$('#racer3').val()].drift + wheel[$('#wheel3').val()].drift + kartbody[$('#body3').val()].drift + glider[$('#glider3').val()].drift;
		
		$('#kart3_speed').html(speed);
		$('#kart3_speeds').html(speeds);
		$('#kart3_speeda').html(speeda);
		$('#kart3_accel').html(accel);
		$('#kart3_weight').html(weight);
		$('#kart3_handling').html(handling);
		$('#kart3_handlinga').html(handlinga);
		$('#kart3_handlings').html(handlings);
		$('#kart3_offroad').html(offroad);
		$('#kart3_mini').html(miniturbo);
		$('#kart3_stability').html(stability);
		$('#kart3_drift').html(drift);
	});
	
	$('#kart4_build select').change(function(){
		speed    = racers[$('#racer4').val()].landspeed + wheel[$('#wheel4').val()].landspeed + kartbody[$('#body4').val()].landspeed + glider[$('#glider4').val()].landspeed;
		speeds    = racers[$('#racer4').val()].seaspeed + wheel[$('#wheel4').val()].seaspeed + kartbody[$('#body4').val()].seaspeed + glider[$('#glider4').val()].seaspeed;
		speeda    = racers[$('#racer4').val()].airspeed + wheel[$('#wheel4').val()].airspeed + kartbody[$('#body4').val()].airspeed + glider[$('#glider4').val()].airspeed;
		accel    = racers[$('#racer4').val()].acceleration + wheel[$('#wheel4').val()].acceleration + kartbody[$('#body4').val()].acceleration + glider[$('#glider4').val()].acceleration;
		weight   = racers[$('#racer4').val()].weight + wheel[$('#wheel4').val()].weight + kartbody[$('#body4').val()].weight + glider[$('#glider4').val()].weight;
		handling = racers[$('#racer4').val()].landhandling + wheel[$('#wheel4').val()].landhandling + kartbody[$('#body4').val()].landhandling + glider[$('#glider4').val()].landhandling;
		handlings = racers[$('#racer4').val()].seahandling + wheel[$('#wheel4').val()].seahandling + kartbody[$('#body4').val()].seahandling + glider[$('#glider4').val()].seahandling;
		handlinga = racers[$('#racer4').val()].airhandling + wheel[$('#wheel4').val()].airhandling + kartbody[$('#body4').val()].airhandling + glider[$('#glider4').val()].airhandling;
		offroad  = racers[$('#racer4').val()].offroad + wheel[$('#wheel4').val()].offroad + kartbody[$('#body4').val()].offroad + glider[$('#glider4').val()].offroad;
		miniturbo  = racers[$('#racer4').val()].miniturbo + wheel[$('#wheel4').val()].miniturbo + kartbody[$('#body4').val()].miniturbo + glider[$('#glider4').val()].miniturbo;
		stability  = racers[$('#racer4').val()].stability + wheel[$('#wheel4').val()].stability + kartbody[$('#body4').val()].stability + glider[$('#glider4').val()].stability;
		drift  = racers[$('#racer4').val()].drift + wheel[$('#wheel4').val()].drift + kartbody[$('#body4').val()].drift + glider[$('#glider4').val()].drift;
		
		$('#kart4_speed').html(speed);
		$('#kart4_speeds').html(speeds);
		$('#kart4_speeda').html(speeda);
		$('#kart4_accel').html(accel);
		$('#kart4_weight').html(weight);
		$('#kart4_handling').html(handling);
		$('#kart4_handlinga').html(handlinga);
		$('#kart4_handlings').html(handlings);
		$('#kart4_offroad').html(offroad);
		$('#kart4_mini').html(miniturbo);
		$('#kart4_stability').html(stability);
		$('#kart4_drift').html(drift);
	});
});
</script>

</html>