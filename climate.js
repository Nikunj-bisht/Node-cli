<script>
window.addEventListener("load",()=>{
let long;
let lat;
let tempdegree=document.querySelector(".tempdegree");
let timezone=document.querySelector(".timezone");
let weather=document.querySelector(".weather");
let h2=document.querySelector(".h2");
let pre=document.querySelector(".pre");
let degree=document.querySelector(".degree");
let tempspan=document.querySelector(".degree span");
if(navigator.geolocation){
navigator.geolocation.getCurrentPosition(position=>{
long=position.coords.longitude;
lat=position.coords.latitude;
const proxy='https://cors-anywhere.herokuapp.com/';
const api=`${proxy}https://api.darksky.net/forecast/12511ba6223402e8acae5a9803149b40/${lat},${long}`;
fetch(api)
.then(response =>{
  return response.json();
  })
  .then(data =>{
    console.log(data);
    const {temperature,summary,icon,pressure}=data.currently;

    tempdegree.innerHTML=temperature;
    weather.innerHTML=summary;
    timezone.innerHTML=data.timezone;
    console.log(pressure);
    pre.innerHTML=pressure;
    setIcons(icon,document.querySelector(".icon"));


    degree.addEventListener('click',function(){
      if(tempspan.innerHTML=="F"){
      tempdegree.innerHTML=Math.floor((temperature-32)*(5/9));
      tempspan.innerHTML="C";
    }
    else{
      tempspan.innerHTML="F";
      tempdegree.innerHTML=temperature;
    }
      })
    });
});

}

function setIcons(icon,iconID){
var skycons = new Skycons({"color": "white"});
var currentIcon=icon.replace(/-/g,"_").toUpperCase();
skycons.play();
return skycons.set(iconID,Skycons[currentIcon]);
}

});


  </script>
