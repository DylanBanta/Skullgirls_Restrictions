//saves data to file "overloads" for filename and extention
//REQUIRES file_saver.js https://github.com/eligrey/FileSaver.js
function saveDataToFile(data, filename, ext) {
  if (filename == null || filename == "" || filename == undefined) {
    filename = "file";
  }

  if (ext == null || ext == "" || ext == undefined) {
    ext = "txt";
  }

  if (data == null || data == "" || data == undefined) {
    data = "Error, no data was found";
  }

  var blob = new Blob([data], {
    type: "text/plain;charset=utf-8"
  });
  saveAs(blob, filename + "." + ext);
}

// Returns a promise which resolves after x amount of ms. Allows pausing on a line.
function sleep(ms) {
  // A promise is returned. When used in an async function with the await keyword, will wait the x amount of milliseconds to resolve and then continue
  return new Promise(resolve => setTimeout(resolve, ms));
}

//appends data to a jQuery selector
function appendData(selector, data) {
  selector.append(data);
}

//Saves key value pair to localStorage
function saveStorage(key, value) {
  localStorage.setItem(key, value);
}

//loads value from key in localStorage
function loadStorage(key) {
  var data = localStorage.getItem(key);
  console.log("Loaded Data from Storage | " + data);
  return data;
}

//Converts array to JSON
function arrToJson(arr) {
  var json = JSON.stringify(arr);
  console.log("returning json | " + json);
  return json;
}

//Converts JSON to array
function jsonToArr(json) {
  var arr = JSON.parse(json);
  console.log("returning arr | " + arr);
  return arr;
}