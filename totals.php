<!DOCTYPE HTML>
<html lang=en>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link href="styles/style.css" rel="stylesheet" type="text/css" />
<script src="stats2.json"></script>
<script src="functions.js"></script>
<title>Mario Kart 7 Kart Build Assessments</title>
</head>

<body>
<div id="wrapper">
    <h1>Mario Kart 7 Kart Build Assessments <?php echo  ($_GET["type"] != '' && $_GET["type"] != 'all') ? " - ".ucwords(htmlspecialchars($_GET["type"])) : ' - All';?></h1>
    
    <p>This hows the stats as they appear in the game. To view the extended stats <a href="totals-extended.php">click here</a></p>
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
    
    Jump to:
    <ul>
        <li><a href="#bestav">Best Average</a></li>
        <li><a href="#bestspeed">Best Speed</a></li>
        <li><a href="#bestacceleration">Best Acceleration</a></li>
        <li><a href="#besthandling">Best Handling</a></li>
        <li><a href="#heaviest">Heaviest</a></li>
        <li><a href="#bestoffroad">Best Offroad</a></li>
        <li><a href="#worstav">Worst Average</a></li>
        <li><a href="#worstspeed">Worst Speed</a></li>
        <li><a href="#worstacceleration">Worst Acceleration</a></li>
        <li><a href="#worsthandling">Worst Handling</a></li>
        <li><a href="#lightest">Lightest</a></li>
        <li><a href="#worstoffroad">Worst Offroad</a></li>
    </ul>
    
    
    
    <script>
	<?php echo  ($_GET["type"] == 'light' || $_GET["type"] == 'midlight' || $_GET["type"] == 'mid' || $_GET["type"] == 'midheavy' || $_GET["type"] == 'heavy') ? "getStats('".htmlspecialchars($_GET["type"])."');" :  "getAllStats();" ;?>
	</script>
    </div>
</div>
</body>


</html>