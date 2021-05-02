var today=new Date();
	var day=today.getDate(); 
	var day_nr=today.getDay()
	var month=today.getMonth();
	var year = today.getFullYear();

	//var daymonth=("00" + day).slice(-2) + ("00" + (month+1)).slice(-2);//"0101" till "3112"
	
w3.getHttpObject("js/pTimes.js", prayTimes);//
function prayTimes(myObject) {
	var prayerTimes= myObject['HKI'][month][day]; //old method
	//var prayerTimes= myObject['HKI'][daymonth];
	//adjust time if last wek of mars or october
	//check how to do this
	document.getElementById("aikatauluDiv").innerHTML = "-";
	if (typeof prayerTimes != "undefined"){
		
		var output='<div class="w3-panel w3-pale-yellow w3-topbar w3-bottombar w3-border-amber"><h3>Rukousajat:<br>Helsinki<br>';
		output+=day+'/'+(month+1)+'/' +year+'</h3><p>'; 
		output+='Fajr: '+prayerTimes.Fajr+'<br>';
		output+='Shoroq: '+prayerTimes.Shoroq+'<br>';
		output+='Dhuhr: '+prayerTimes.Dhuhr+'<br>';
		output+='Asr: '+prayerTimes.Asr+'<br>';
		output+='Maghrib: '+prayerTimes.Maghrib+'<br>';
		output+='Isha: '+prayerTimes.Isha+'<br>';
		output+='</p></div><p></p>';
		//if(document.getElementById("aikatauluDiv")) document.getElementById("aikatauluDiv").innerHTML = output;
		//document.getElementById("aikatauluDiv2").innerHTML = output;
		
	}
}


w3.getHttpObject("js/hijri_dates.js", hijriDates);
function hijriDates(myObject) {
	var hijri= myObject['gDate'][year][month][day]; 
	if (typeof hijri != "undefined"){
		var hYear=myObject['hYear'];//TODO
		var iMonthNames = new Array("Muharramkuuta","Safarkuuta","Rabi Al-Awwalkuuta","Rabi Al-Thanikuuta",
		"Jumada Al-ulakuuta","Jumada Al-Thanikuuta","Rajabkuuta","Shábankuuta",
		"Ramadankuuta","Shawwalkuuta","Dhu Al-Qádakuuta","Dhu Al-Hijjahkuuta");
		var hDate=hijri[0]+ ". "+iMonthNames[hijri[1]]+ " "+ hYear+" H هـ";
		
		var dayarray=new Array("sunnuntai","maanantai","tiistai","keskiviikko","torstai","perjantai","lauantai");
		var montharray=new Array("tammikuuta","helmikuuta","maaliskuuta","huhtikuuta","toukokuuta","kesäkuuta","heinäkuuta","elokuuta","syyskuuta","lokakuuta","marraskuuta","joulukuuta");
		var gDate= "Tänään on "+dayarray[day_nr]+" "+day+". "+montharray[month]+" "+year;
		
		var output='<div class="w3-panel w3-pale-yellow w3-center w3-topbar w3-bottombar w3-border-amber"><p>';
		//var output='<div class="w3-panel w3-theme-l5 w3-leftbar w3-rightbar w3-border-amber"><p>';
		output+=gDate;
		output+='<br>';
		output+=hDate+' (<a href="kalender.html">Islamilaisen kalenterin mukaan</a>)';
		output+='</p></div>';
		
		document.getElementById("hijri_div").innerHTML = output;
		document.getElementById("hDate").innerHTML = hDate;
		if (document.getElementById("hijri_div2"))
			document.getElementById("hijri_div2").innerHTML = output;
		if (document.getElementById("hijri_div_ramadan"))
			document.getElementById("hijri_div_ramadan").innerHTML = gDate+ "<br>"+hDate;
		
		document.getElementById("gDate").innerHTML = gDate;//
	}
	
}
	

function toggleDiv(id) {
    var x = document.getElementById(id);
    if (x.classList) { 
        x.classList.toggle("w3-show");
    } else {
    // Fallback for IE9 and earlier
    if (x.className.indexOf("w3-show") == -1) 
        x.className = x.className + " w3-show";
    else 
        x.className = x.className.replace("w3-show", "");
    }
}

function getCopyright(){	
	var d = new Date();
	var vuosi = d.getFullYear();
	var text = 'Copyright © 2000-';
	document.getElementById("copyright").innerHTML = text+vuosi+" Pirjo"+ "<br><b>www.islamopas.com</b>" ;
}

getCopyright();
