document.querySelector('#abutton').onclick = function (){
    let dateStart =  document.querySelector('#start-date').value;
    let timeStart =  document.querySelector('#start-time').value;
    console.log(dateStart);
    console.log(timeStart);
}
var event = new MouseEvent("onclick", {
    view: window,
    bubbles: true,
    cancelable: true
 });
 document.querySelector("[type=date]").dispatchEvent(event);
 