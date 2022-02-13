function myfunction(){
    var hid = document.getElementsByClassName("hidden"); //Makes the <div clas "hidden" Visible after button press
if(hid[0].offsetWidth > 0 && hid[0].offsetHeight > 0) {
    hid[0].style.visibility = "visible";
    var hid =document.getElementsByClassName('Normal');    // Makes the <div class "Normal" Invisible after button Press
    if(hid[0].offsetWidth > 0 && hid[0].offsetHeight > 0) {
        hid[0].style.visibility = "hidden"
    }
}
}