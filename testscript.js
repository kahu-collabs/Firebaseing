var test = function(command) {
  var myDataRef = new Firebase('https://sweltering-inferno-8171.firebaseio.com/kahu');
  myDataRef.push({command: command});

  // myDataRef.on('child_added', function(snapshot) {
  //   var message = snapshot.val();
  var commandArray = command.split(' ')
  console.log(commandArray)
  $("#tests").append("<p>" + commandArray[0] + "ing " + commandArray[1] + "</p>")
  if(commandArray[0] == "draw") {
    var imageHtml = '<img src="' + commandArray[1] + '">'};
    $("#tests").append(imageHtml)
  }
  //   var changeTextColour = function(color) {
  //     $("#"+test).css("color", color)
  //   }
  //   if (message.command == command) {
  //     changeTextColour("green")
  //   } else {
  //     changeTextColour("red")
  //   }

  //   myDataRef.off()
  // });


var runTests = function(){
  test("play http://www.here-and-now.info/audio/rickastley_artists.mp3");
  test("draw https://i0.wp.com/www.toptenzpictures.com/wp-content/uploads/2012/11/eagle-fighting-fox.jpg")
  test("draw http://s2.dmcdn.net/Dlqni/x240-w2J.jpg")
}
