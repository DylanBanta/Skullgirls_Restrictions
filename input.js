var characters = ["Squiggly", "Big Band", "Eliza", "Ms. Fortune", "Peacock", "Painwheel", "Filia", "Cerebella", "Valentine", "Parasoul", "Double", "Fukua", "Beowulf", "Robo Fortune"];

function getSelectedIndex(list){
  return list.prop("selectedIndex");
}

function p1_checkDupeChars(){
  var list1 = $("#p1_charList_1");
  var list2 = $("#p1_charList_2");
  var list3 = $("#p1_charList_3");

  var list1Val = list1.val();
  var list2Val = list2.val();
  var list3Val = list3.val();

  var list1Index = getSelectedIndex(list1);
  var list2Index = getSelectedIndex(list2);
  var list3Index = getSelectedIndex(list3);

  //alert(list1Index);
  if(list1Val == list2Val){
    list2Index++;
    list2.prop("selectedIndex", list2Index);
  }

  if(list1Val == list3Val){
    list3Index++;
    list3.prop("selectedIndex", list3Index);
  }

  if (list2Val == list3Val) {
    list3Index++;
    list3.prop("selectedIndex", list3Index);
  }
}

function p1_selectCharList() {
  var list1 = $("#p1_charList_1");
  var list2 = $("#p1_charList_2");
  var list3 = $("#p1_charList_3");

  var option = '';
  for (var i = 0; i < characters.length; i++) {
    option += '<option value="' + characters[i] + '">' + characters[i] + '</option>';
  }

  list1.empty();
  list2.empty();
  list3.empty();

  list1.append(option);
  list2.append(option);
  list3.append(option);

  p1_checkDupeChars();
}

function p1cc_radio(value) {
  var char1 = $("#p1_charList1");
  var char2 = $("#p1_charList2");
  var char3 = $("#p1_charList3");

  if (value == null) {
    value = $("input[name='p1cc']:checked").val();
    console.log("p1cc_radio value | " + value);
  }

  if (value == 1) {
    char1.show();
    char2.hide();
    char3.hide();
  } else if (value == 2) {
    char1.show();
    char2.show();
    char3.hide();
  } else if (value == 3) {
    char1.show();
    char2.show();
    char3.show();
  } else {
    console.log("p1cc_radio| Error | value out of scope: " + value);
  }

  p1_selectCharList();
}

function p1_RandChar() { //Triggers when P1 Random Characters Checkbox changed
  var p1 = $("#p1_randChar").is(":checked"); //if checked returns true
  var hideRand = $("#p1cc_hideRandom");
  var charSelect = $("#p1_charSelect");
  if (p1) { //when checkbox is true
    charSelect.hide(); //Hide charSelect
    hideRand.show(); //display Random
  } else { //when checkbox is false
    hideRand.hide(); //Hide Random
    charSelect.show(); //Show char select
    if (p1_cc_0.checked == true) {
      p1_cc_0.checked = false;
      p1_cc_1.checked = true;
    }
    p1cc_radio();
  }
}
