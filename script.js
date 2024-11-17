let lists = document.getElementsByClassName("list");
let RightBox = document.getElementById("right");
let leftBox = document.getElementById("left");


for(list of lists) {
  list.addEventListener("dragstart", function(e){
    let selected = e.target;

    RightBox.addEventListener("dragover", function(e){
      e.preventDefault();
    });
    RightBox.addEventListener("drop", function(e){
      RightBox.appendChild(selected);
      selected = null;
    });

    leftBox.addEventListener("dragover", function(e){
      e.preventDefault();
    });
    leftBox.addEventListener("drop", function(e){
      leftBox.appendChild(selected);
      selected = null;
    });
  });
}
