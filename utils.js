// Returns a promise which resolves after x amount of ms. Allows pausing on a line.
function sleep(ms) {
    // A promise is returned. When used in an async function with the await keyword, will wait the x amount of milliseconds to resolve and then continue
    return new Promise(resolve => setTimeout(resolve, ms));
}


//appends data to a jQuery selector
function appendData(selector, data){
  selector.append(data);
}
