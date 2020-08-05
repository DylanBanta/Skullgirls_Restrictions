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

//UI for Character Selection Boxes, loaded at page load with an async await of 5 milliseconds
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
}
onPageLoad();

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