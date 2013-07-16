<!DOCTYPE HTML>
<html lang=en>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link href="styles/style.css" rel="stylesheet" type="text/css" />
<script src="stats4.json"></script>
<script src="functions2.js"></script>
<title>Mario Kart 7 Kart Build Assessments</title>
</head>

<body>
<div id="wrapper">
    <h1>Mario Kart 7 Kart Build Assessments <?php echo  ($_GET["type"] != '' && $_GET["type"] != 'all') ? " - ".ucwords(htmlspecialchars($_GET["type"])) : ' - All';?></h1>
    <p>This shows the extended stats that are not displayed by the game. To see normal stats as they appear in the game, <a href="totals.php">click here</a>.</p>
    <div id="bodybox">
    <a href="/mario-kart-7-calculator">&lt;&lt; Return to Kart Build Calculator</a><br>
<br>

    <p><strong>There are 5 main weight classes.</strong> I classified them by weight to ease up on the number of iterations in the loop. Click on a weight type to view results for individual weight classes (useful if you are trying to maximize Toad's speed, for example)</p>
    <ul>
    	<?php echo  ($_GET["type"] != '' && $_GET["type"] != 'all') ? '<li><a href="?type=all">View stats for all weight types</a></li>' : '';?>
        <li><a href="?type=light">Light (Toad, Koopa Troopa, Lakitu, Shy Guy)</a></li>
        <li><a href="?type=midlight">Mid Light (Peach, Daisy, Yoshi)</a></li>
        <li><a href="?type=mid">Mid (Mario, Luigi, Mii)</a></li>
        <li><a href="?type=midheavy">Mid Heavy (Donkey Kong, Rosalina, Wiggler)</a></li>
        <li><a href="?type=heavy">Heavy (Bowser, Wario, Metal Mario, Honey Queen)</a></li>
    </ul>
    
    <p><strong>There are essentially two types of gliders</strong>: Those that offer less weight (-.25) and faster acceleration (+.25) are classified as low-weight below. Those that offer no bonuses are classified as standard below. This was done to reduce the total number of iterations in the loop as well, and to cut out redundant data to a point.</p>
    
    <h4>Jump to:</h4>
    <ul>
        <li><a href="#bestav">Best Average</a></li>
        <li><a href="#bestlandspeed">Best Speed (Land)</a></li>
        <li><a href="#bestseaspeed">Best Speed (Sea)</a></li>
        <li><a href="#bestairspeed">Best Speed (Air)</a></li>
        <li><a href="#bestacceleration">Best Acceleration</a></li>
        <li><a href="#bestlandhandling">Best Handling (Land)</a></li>
        <li><a href="#bestseahandling">Best Handling (Sea)</a></li>
        <li><a href="#bestairhandling">Best Handling (Air)</a></li>
        <li><a href="#heaviest">Heaviest</a></li>
        <li><a href="#bestoffroad">Best Offroad</a></li>
        <li><a href="#bestminiturbo">Best Miniturbo</a></li>
        <li><a href="#beststability">Best Stability</a></li>
        <li><a href="#bestdrift">Best Drift</a></li>
      
        <li><a href="#worstav">Worst Average</a></li>
        <li><a href="#worstlandspeed">Worst Speed (Land)</a></li>
        <li><a href="#worstseaspeed">Worst Speed (Sea)</a></li>
        <li><a href="#worstairspeed">Worst Speed (Air)</a></li>
        <li><a href="#worstacceleration">Worst Acceleration</a></li>
        <li><a href="#worstlandhandling">Worst Handling (Land)</a></li>
        <li><a href="#worstseahandling">Worst Handling (Sea)</a></li>
        <li><a href="#worstairhandling">Worst Handling (Air)</a></li>
        <li><a href="#lightest">Lightest</a></li>
        <li><a href="#worstoffroad">Worst Offroad</a></li>
        <li><a href="#worstminiturbo">Worst Miniturbo</a></li>
        <li><a href="#worststability">Worst Stability</a></li>
        <li><a href="#worstdrift">Worst Drift</a></li>
    </ul>
    
    
    
    <script>
	<?php echo  ($_GET["type"] == 'light' || $_GET["type"] == 'midlight' || $_GET["type"] == 'mid' || $_GET["type"] == 'midheavy' || $_GET["type"] == 'heavy') ? "getStats('".htmlspecialchars($_GET["type"])."');" :  "getAllStats();" ;?>
	</script>
    </div>
</div>
</body>


</html>