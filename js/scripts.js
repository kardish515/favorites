$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var faves = [];
    var newFaves = [];
    var foodInput = $("input#food").val();
    var colorInput = $("input#color").val();
    var musicInput = $("input#music").val();
    faves.push(foodInput);
    faves.push(colorInput);
    faves.push(musicInput);
    newFaves.push(faves[1], faves[0], faves[2]);
    $("li#one").text(newFaves.shift());
    $("li#two").text(newFaves.shift());
    $("li#three").text(newFaves.shift());
    event.preventDefault();
  });
});
