// Select color input
var $color  = $('#colorPicker');
var $height = $('#inputHeight');
var $weight  = $('#inputWeight');
var $canvas = $("#pixelCanvas");
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(evt) {
   evt.preventDefault();

//$canvas.children().remove();
$canvas.children().remove();
var height = $height.val();
var weight = $weight.val();
var row,col;
for(var i =0;i<height;i++){
row = '<tr id="row'+i+'"></tr>';
 $canvas.append(row);
 for(var j= 0;j<weight;j++){
   col = '<td id="col'+j+'"></td>';
   $("#row"+i).append(col);
 }
}
// Your code goes here!
}
$canvas.on('click', 'td' , function(evt){
    // switch color based on value.
    if($(evt.target).css("background-color") === "rgba(0, 0, 0, 0)" ){
        $(evt.target).css("background", $color.val());
    }else{
        $(evt.target).css("background", "rgba(0, 0, 0, 0)");
    }

});
