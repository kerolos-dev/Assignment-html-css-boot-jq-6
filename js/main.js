let windowtopscroll = $("#services").offset().top;
$(window).scroll(function () { 
  let windowscroll=$(window).scrollTop()
if( windowscroll >windowtopscroll){
  $("#navsled").css("backgroundColor","white" ,3000)
  $( "#btnup").show(500);

}
else{
  $("#navsled").css("backgroundColor","transparent" ,3000)
  $( "#btnup").hide(500);



}
}
)