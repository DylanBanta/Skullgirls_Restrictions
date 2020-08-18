//Global variables
var characters = ["Squiggly", "Big Band", "Eliza", "Ms. Fortune", "Peacock", "Painwheel", "Filia", "Cerebella", "Valentine", "Parasoul", "Double", "Fukua", "Beowulf", "Robo Fortune"];
var maxTeamSize = 0; //0 == random team size

//All Character's Challenges
var generalSettings = ["No LP", "No MP", "No HP", "No LK", "No MK", "No HK", "No Jumps", "No Dash", "No Resets", "No Supers", "No Kick Specials", "No Punch Specials", "No Grabs (Except to Tech)", "No Quarter/Half/Full Circle Inputs", "No DP Inputs"];

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

var allSettings = [generalSettings, squigglyChallenges, bigBandChallenges, elizaChallenges, msfortuneChallenges, peacockChallenges, painwheelChallenges, filiaChallenges, cerebellaChallenges, valentineChallenges, parasoulChallenges, doubleChallenges, fukuaChallenges, beowulfChallenges, robofortuneChallenges];
var settingsTitles = ["General Settings", "Squiggly Challenges", "Big Band Challenges", "Eliza Challenges", "Ms. Fortune Challenges", "Peacock Challenges", "Painwheel Challenges", "Filia Challenges", "Cerebella Challenges", "Valentine Challenges", "Parasoul Challenges", "Double Challenges", "Fukua Challenges", "Beowulf Challenges", "Robo Fortune Challenges"];

function firstTimeSetup() {
  var fts = loadStorage("fts");
  if (fts != "true") {
    console.log("Running First Time Setup");
    defaultSettings();
    localStorage.setItem("fts", true);
  }
}

function defaultSettings() {
  console.log("Loading Default Settings");
  //localStorage.clear();
  for (var i = 0; i < allSettings.length; i++) {
    for (var j = 0; j < allSettings[i].length; j++) {
      localStorage.setItem(settingsTitles[i] + "_" + allSettings[i][j], true);
    }
  }
}

//Builds the html for settings modal
function buildSettings() {

  var currentSettings; //Array of settings, used to build content in buildContent()
  var content; //Built in buildContent, used to build cards array
  var cards = []; //Once Each content is pushed to cards array, complete array pushed to buildAccordion()


  for (var i = 0; i < allSettings.length; i++) { //Loop through all settings
    currentSettings = []; //clear currentSettings each loop
    for (var j = 0; j < allSettings[i].length; j++) { //Loop through nested array in allSettings (title for nested array is settingsTitles[i])
      currentSettings.push(allSettings[i][j]); //pushes result to currentSettings
      //console.log(settingsTitles[i] + " | " + allSettings[i][j]);
    }
    content = buildContent(currentSettings); //returns content from buildContent()
    cards.push(buildCards(settingsTitles[i], content, i)); //pushes title, content, and id into cards arr
  }
  buildAccordion(cards); //builds accordion for settings with all nested html data
}

function buildContent(dataArr) {
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
  //console.log("contentString | " + contentString);
  return contentString;
}

//Settings Modal is populated with an Accordion
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
  //console.log("card | " + card);
  return card;
}

function options(option) {
  if (option == "p1Only") { //Player 1 Only
    var p1Only = $("#p1Only").is(":checked");
    if (p1Only) {
      $("#disableCheck").find("*").attr("disabled", true);
    }
    else {
      $("#disableCheck").find("*").attr("disabled", false);
    }
  }
  else if (option == "shareOptions") { //Players Share Options
    //TODO
  }
}

function pcc_radio(player, value) {
  var char1;
  var char2;
  var char3;
  var label;
  var label2;
  var pcc;

  if (player == 1) {
    char1 = $("#p1_charList1");
    char2 = $("#p1_charList2");
    char3 = $("#p1_charList3");
    label = $("#p1_charLabel");
    label2 = $("#p1_charGrammar");
    pcc = "p1cc";
  }
  else if (player == 2) {
    char1 = $("#p2_charList1");
    char2 = $("#p2_charList2");
    char3 = $("#p2_charList3");
    label = $("#p2_charLabel");
    label2 = $("#p2_charGrammar");
    pcc = "p2cc";
  }
  var randTxt = "P" + player + " Random Character";
  var labelTxt = "Character";
  var temp;

  if (value == 0) {
    //TOOD Random
    pcc_radio(player, 3);
  }
  else if (value == 1) {
    char1.show();
    char2.hide();
    char3.hide();
    label.html(labelTxt);
    label2.html(labelTxt);
  }
  else if (value == 2) {
    char1.show();
    char2.show();
    char3.hide();
    label.html(labelTxt + "s");
    label2.html(labelTxt + "s");
  }
  else if (value == 3) {
    char1.show();
    char2.show();
    char3.show();
    label.html(labelTxt + "s");
    label2.html(labelTxt + "s");
  }
  else {
    console.log("pcc_radio| Error | value out of scope: " + value);
  }

  maxTeamSize = value - 1;
  if (maxTeamSize < 0) {
    maxTeamSize = 2;
  }
  //console.log("maxTeamSize | " + maxTeamSize);
}


function moveSelectOptions(player, movedItem, direction) {
  //console.log(player, movedItem, direction);
  var lList;
  var rList;
  var id;
  var pNum;

  if (player == 1) {
    lList = $(".p1_lSelect");
    rList = $(".p1_rSelect");
    id = "p1_left_option";
    pNum = 1;
  }
  else if (player == 2) {
    lList = $(".p2_lSelect");
    rList = $(".p2_rSelect");
    id = "p2_left_option";
    pNum = 2;
  }

  var selected;
  var i;
  var option;

  if (direction == "left") {
    $(rList).find("option:selected").each(function() {
      selected = $(this).text();
      i = lList[0].length;
      option = '<option id="' + id + "" + i + '" ondblclick=\'moveSelectOptions(' + pNum + ',"' + selected + '",\"right\")\'>' + selected + '</option>';
      $(this).remove();
      lList.append(option);
    });
  }
  else if (direction == "right") {

    //value = $("input[name='p1cc']:checked").val();

    $(lList).find("option:selected").each(function() {
      selected = $(this).text();
      i = rList[0].length;
      if (i <= maxTeamSize) {
        option = '<option id="' + id + "" + i + '" ondblclick=\'moveSelectOptions(' + pNum + ',"' + selected + '",\"left\")\'>' + selected + '</option>';
        $(this).remove();
        rList.append(option);
      }
    });
  }
}


//Returns a copy of character global array to randomCharacter, otherwise global variable is overwritten
function copyChar() {
  var charCopy = [];
  for (var i = 0; i < characters.length; i++) {
    charCopy.push(characters[i]);
  }
  return charCopy;
}

//Returns array of unique random characters (min 1)
function randomCharacter(count) {
  var randChar;
  var charCopy = copyChar();
  var randCharArr = [];
  var currentChar;
  var index;

  for (var i = 0; i < count; i++) {
    randChar = Math.random() * (charCopy.length);
    randChar = Math.floor(randChar);
    currentChar = charCopy[randChar];
    randCharArr.push(currentChar);
    charCopy.splice(randChar, 1);
  }
  return randCharArr;
}

function roll(player) {
  var numChars;
  var randChars;
  var results;

  if (player == 1) {
    numChars = $("input[name='p1cc']:checked").val();
    randChars = $("input[name='p1_randBool']:checked").val();
  }
  else if (player == 2) {
    numChars = $("input[name='p2cc']:checked").val();
    randChars = $("input[name='p2_randBool']:checked").val();
  }

  if (numChars == 0) { //Random Amount of characters
    //Chooses how many characters to randomly select
    var rand = Math.random() * 3;
    rand = Math.floor(rand);
    rand++;
    numChars = rand;
  }

  if (randChars == "on") {
    results = randomCharacter(numChars);
    $(p1_roll).html("");
    for (var i = 0; i < numChars; i++) {
      appendData(p1_roll, results[i] + " | ");
    }
  }
  else {

  }
}

function randChar(player) { //Triggers when Random Characters Checkbox changed
  var p1; //if checked returns true
  var hideRand;
  var charSelect;
  var pcc0;
  var pcc3;

  if (player == 1) {
    p1 = $("#p1_randChar").is(":checked"); //if checked returns true
    hideRand = $("#p1cc_hideRandom");
    charSelect = $("#p1_charSelect");
    pcc0 = "#p1_cc_0";
    pcc3 = "#p1_cc_3";
  }
  else if (player == 2) {
    p1 = $("#p2_randChar").is(":checked"); //if checked returns true
    hideRand = $("#p2cc_hideRandom");
    charSelect = $("#p2_charSelect");
    pcc0 = "#p2_cc_0";
    pcc3 = "#p2_cc_3";
  }

  if (p1) { //when checkbox is true
    charSelect.hide(); //Hide charSelect
    hideRand.show(); //display Random
  }
  else { //when checkbox is false
    hideRand.hide(); //Hide Random
    charSelect.show(); //Show char select
    if ($(pcc0).is(":checked")) {
      //console.log($(pcc0).prop("checked"));
      $(pcc0).prop("checked", false);
      $(pcc3).prop("checked", true);
    }
    pcc_radio(player, 3);
  }
}

//Runs after page has finished Loading
async function onPageLoad() {
  var p1_option = '';
  var p2_option = '';
  var p1_id = "p1_left_option";
  var p2_id = "p2_left_option";

  var character;

  for (var i = 0; i < characters.length; i++) {
    character = characters[i].toString();
    p1_option += '<option id="p1_left_option' + i + '" ondblclick=\'moveSelectOptions(1,"' + characters[i].toString() + '",\"right\")\'>' + characters[i] + '</option>';
    p2_option += '<option id="p2_left_option' + i + '" ondblclick=\'moveSelectOptions(2,"' + characters[i].toString() + '",\"right\")\'>' + characters[i] + '</option>';
  }
  await sleep(5);
  appendData($("#p1_leftList"), p1_option);
  appendData($("#p2_leftList"), p2_option);
  buildSettings();
  firstTimeSetup();
}
onPageLoad();