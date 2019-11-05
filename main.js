
const displayImages = [];

let image = (Math.random() * displayImages.length-.5);
image = Math.round(image);

function randomImage(){
  console.log(image);
  document.getElementById("rotatingImage").src = (displayImages[image]);
}

function nextImage(){
  if (image == displayImages.length -1){
    image = 0;
  }
  else{
    image ++;
  }
  document.getElementById("rotatingImage").src = (displayImages[image]);
}

function daysSince(){
  let date1 = new Date("6/12/2019");
  let today = new Date();
  let dateNow = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

  let Difference_In_Time = today.getTime() - date1.getTime();  
  let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
  Difference_In_Days = Math.round(Difference_In_Days);
  console.log(Difference_In_Days);
  $('.anger2').text(Difference_In_Days);
}

daysSince();