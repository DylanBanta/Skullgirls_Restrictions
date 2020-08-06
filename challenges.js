//All Character's Challenges
var allCharacters = ["No LP", "No MP", "No HP", "No LK", "No MK", "No HK", "No Jumps", "No Dash", "No Resets", "No Supers", "No Kick Specials", "No Punch Specials", "No Grabs (Except to Tech)", "No Quarter/Half/Full Circle Inputs", "No DP Inputs"];

//Character Specific Challenges
var squigglyChallenges = ["No Double Jumps", "No Seria Cancels", "No Seria Charging", "No Squiggly Battle Opera (SBO) Super (Lv 1)", "No Daisy Pusher Super (Lv 1)", "No Inferno of Leviathan Super (Lv 3)", "Must Win with Shun Goku Saltsu Super (Lv 5)"];
var bigBandChallenges = ["No Double Jumps", "No Brass Knuckles", "No 'A' Train", "No Taunt Supers", "No Super Sonic Jazz (SSJ) Super (Lv 1)", "No TUBA TUBA Super (Lv 1)", "No Tympany Drive Super (Lv 1)", "No Strike up the Band Super (Lv 3)", "Must Win with Satchmo Solo Super (Lv 5)", "Must Parry Instead of Blocking"];
var elizaChallenges = ["No Double Jumps", "No Air Dash", "No upper Khat", "No Osiris Spiral", "No Sekhmet", "No Albus/Horace", "No Lady of Slaughter Super", "No Nekhbet Breaker Super", "No Khepri Sun Super"];
var msfortuneChallenges = ["No Double Jumps", "No Air Dash", "No Fiber Upper", "Head On Only", "Headless Only", "No Cat Scratch Feaver Super", "No Feral Edge Super", "No Fifth of Dismember Super"];
var peacockChallenges = ["No Double Jumps", "No Air Dash", "No Zoning", "No George", "No George/Lemmy", "No Argus Agony Super", "No Lonesome Lenny Super", "No Goodfellas Super", "No Teleports"];
var painwheelChallenges = ["No Flight", "No Buer Reaper", "No Gae Bolga Stinger", "No Death Crawl Super", "No Buer Thresher Super", "No Hatred Install Super", "No Buer Overdrive Super", "No Charging for Armor"];
var filiaChallenges = ["No Air Dash", "No Hairball", "No Updo", "No Gregor Samson Super", "No Fenrir Drive Super", "No Tricobezoar Super"];
var cerebellaChallenges = ["No Double Jumps", "No Command Grabs", "No Tumbling Run", "No Lock n'Load", "No Devil Horns", "Must Get 2000 Points", "No Diamond Dynamo Super", "No Ultimate Showstopper Super", "No Diamonds are Forever Super"];
var valentineChallenges = ["No Double Jumps", "No Air Dash", "No Bypass", "No Dead Cross/Flew Shot", "No Vial Hazard (Charging Needles)", "No Checkmate Incision Super", "No EKG Flatliner Super", "No Acquisitive Prescription/Countervenom Super", "No Dead on Arrival Super"];
var parasoulChallenges = ["No Tears", "No Napalm Shot", "No Napalm Trigger/Quake/Pillar", "No Silent Scope Super", "No Motor Brigade Super", "No Inferno Brigade Super"];
var doubleChallenges = ["No Double Jumps", "No Luger", "No Flesh Step", "No Cilia Slide", "No Hornet Bomber", "No Item Crash", "No Bandwagon Rushdown Super", "No Beast of Gehenna Super", "No Catellite Lives Super", "No Nightmare Legion Super", "Must Win with Megalith Array", "Must Stagger Opponent with Teacup"];
var fukuaChallenges = ["No Double Jumps", "No Command Grabs", "No Clones", "No Love Dart", "No Platonic Drillationship", "No Blown Kiss Super", "No The Drill Of My Dreams Super", "No Best Friends Forever! Super", "No Twice Shy Super", "Must Win with Head Over Heels Super (Lv5)"];
var beowulfChallenges = ["No Wolf Shoot", "No Wulf Blitzer", "No Throwing Chair", "Chairless Only", "No Using Hype", "No Gigantic Arm Super (Lv 1)", "No Three Wulf Moonsault Super (Lv 3)", "No Wulfamania Super (Lv 3)", "Must Win with Penguin"];
var robofortuneChallenges = ["No Double Jumps", "No Zoning", "No Beams", "No Headrones", "No Danger!", "No Catastrophic Cannon Super (Lv 1/3/5)", "No Magnet Trap Super (Lv 1)", "No Systemic Circuit Breaker Super (Lv 3)"];

//Other specific Challenges
//Only valid if a team has 2 or more Characters
//var assistChallenges = ["No Assist Calls"];
//Valentine with at least 1 other team member
//var valAssistChallenges = ["No Forbidden Procedure: Rebirth Ex Machina", "Must use Forbidden Procedure: Rebirth Ex Machina on your KO'ed character"]

var allSettings = [allCharacters, squigglyChallenges, bigBandChallenges, elizaChallenges, msfortuneChallenges, peacockChallenges, painwheelChallenges, filiaChallenges, cerebellaChallenges, valentineChallenges, parasoulChallenges, doubleChallenges, fukuaChallenges, beowulfChallenges, robofortuneChallenges];
var settingsTitles = ["General Settings", "Squiggly Challenges", "Big Band Challenges", "Eliza Challenges", "Ms. Fortune Challenges", "Peacock Challenges", "Painwheel Challenges", "Filia Challenges", "Cerebella Challenges", "Valentine Challenges", "Parasoul Challenges", "Double Challenges", "Fukua Challenges", "Beowulf Challenges", "Robo Fortune Challenges"];

/*
//<input type="checkbox" name="options_p1Only" id="p1Only" onclick="options('p1Only')">
var chckbxCode = "<input type='checkbox' name='checkboxID'>"
var modal = $(".loadSettings");
appendData(modal, chckbxCode);
*/

//Collapse HTML
/*
<div class='card'>
    <div class='card-header' id='headingOne'>
        <h5 class='mb-0'>
            <button class='btn btn-link' data-toggle='collapse' data-target='#collapseOne' aria-expanded='true' aria-controls='collapseOne'>
                Collapse Title
            </button>
        </h5>
    </div>

    <div id='collapseOne' class='collapse show' aria-labelledby='headingOne' data-parent='#accordion'>
        <div class='card-body'>
            Collapse Content
        </div>
    </div>
</div>
*/

//Collapse Content HTML
/*
ArrData1 <input type="checkbox" name="ArrData1" checked="true"><br />
ArrData2 <input type="checkbox" name="ArrData1" checked="true"><br />
*/

function buildAccordion(cards) {
  var cardString = "";
  for (var i = 0; i < cards.length; i++) {
    cardString += cards[i] + "\n";
  }
  var accordionString = "<div class='accordion' id='accordionParent'>" + cardString + "</div>";
  var modal = $(".loadSettings");
  appendData(modal, accordionString);
}

function buildCards(title, content, id) {

  var card;

  if (id == 0) {
    card = "<div class='card'>\n<div class='card-header' id='heading" + id + "'>\n<h2 class='mb-0'>\n<button class='btn btn-link' type='button' data-toggle='collapse' data-target='#collapse" + id + "' aria-expanded='true' aria-controls='collapse" + id + "'> " + title + " </button> </h2> </div> \n<div id='collapse" + id + "' class='collapse show' aria-labelledby='heading" + id + "' data-parent='#accordionParent'>\n<div class='card-body'> " + content + " </div> </div> </div>";
  }
  else {
    card = "<div class='card'>\n<div class='card-header' id='heading" + id + "'>\n<h2 class='mb-0'>\n<button class='btn btn-link collapsed' type='button' data-toggle='collapse' data-target='#collapse" + id + "' aria-expanded='false' aria-controls='collapse" + id + "'> " + title + " </button> </h2> </div>\n<div id='collapse" + id + "' class='collapse' aria-labelledby='heading" + id + "' data-parent='#accordionParent'> <div class='card-body'> " + content + " </div> </div> </div>";
  }
  console.log("card | " + card);
  return card;
}

function buildCollapseContent(dataArr) {
  var inputString = "";
  var contentString = "";
  var currentString;
  var chckbxCode;
  for (var i = 0; i < dataArr.length; i++) {
    currentString = dataArr[i];
    chckbxCode = " <input type='checkbox' name='name' checked='true'>"
    inputString = currentString + chckbxCode + "<br/>";
    contentString += inputString + "\n";
  }
  console.log("contentString | " + contentString);
  return contentString;
}


function buildSettings() {

  var currentSettings;
  var content;
  var cards = [];

  for (var i = 0; i < allSettings.length; i++) {
    currentSettings = [];
    for (var j = 0; j < allSettings[i].length; j++) {
      currentSettings.push(allSettings[i][j]);
      //console.log(settingsTitles[i] + " | " + allSettings[i][j]);
    }
    content = buildCollapseContent(currentSettings);
    cards.push(buildCards(settingsTitles[i], content, i));
  }

  buildAccordion(cards);
}