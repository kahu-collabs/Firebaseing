var runTest = function() {
  var myDataRef = new Firebase('https://sweltering-inferno-8171.firebaseio.com/kahu');
  myDataRef.push({command: "play ding"});
  myDataRef.on('child_added', function(snapshot) {
    var message = snapshot.val();
    var changeBackground = function(color) {
      $("body").css("background-color", color)
      }
      if (message.command == 'play ding') {
        changeBackground("green")
      } else {
        changeBackground("red")
      }
    myDataRef.off()
  });
}
