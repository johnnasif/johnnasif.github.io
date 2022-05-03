var lat1;
        var lang1;
        function myMap() {

            var loc = {};
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    lat1 = position.coords.latitude
                    lang1 = position.coords.longitude
                    sessionStorage.setItem("lat", lat1);
                    sessionStorage.setItem("long", lang1); 
                    console.log("lat :"+lat1+" lang :"+ lang1);

                })
                    ;

            }

        }
var i=localStorage.getItem("i");
if(i==null){
	i=0;
}

function recently(elm){
			i++;
            var clone = document.getElementById(elm).innerHTML;
			var items="trythislocal"+i
			console.log(clone);
			console.log(items);
            localStorage.setItem(items,clone);
			localStorage.setItem("i",i);
}