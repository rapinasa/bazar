

function klikaj(i) {
	
   var x = document.getElementById(i);
    x.style.color='#D58F37';
 setTimeout(function(){ x.style.color="black" }, 2000);
  
};

function klikon1() {
	
	var y = document.getElementById("form1");
	 setTimeout(function(){ y.style.display="block" }, 500);
};

function klikon2() {
	
	var y = document.getElementById("form2");
	 setTimeout(function(){ y.style.display="block" }, 500);
};

function klikon3() {
	
	var y = document.getElementById("form3");
	 setTimeout(function(){ y.style.display="block" }, 500);
};
function klikon4() {
	
	var y = document.getElementById("form4");
	 setTimeout(function(){ y.style.display="block" }, 500);
};
function klikon5() {
	
	var y = document.getElementById("form5");
	 setTimeout(function(){ y.style.display="block" }, 500);
};
function klikon6() {
	
	var y = document.getElementById("form6");
	 setTimeout(function(){ y.style.display="block" }, 500);

};

function keyup1() {
	
	var y = document.getElementById("passwordWarning1");
	 setTimeout(function(){ y.style.display="block" }, 2500);
};




/*
<script type="text/javascript">
	var myInput = document.getElementById("form5");
	myInput.onblur = function() {
  document.getElementById("form5").style.display = "none";
}
</script>

<script>
	
	var modal = document.getElementById('form5');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
*/
	function discount() {
    alert("Good deals. We will call you as soon as possible");
};

/*
    var oldAccount1 = document.getElementById("passwordRegistr");
    var warning = document.getElementById("passwordWarning");
    oldAccount1.onkeyup = function(){
     var lowerCaseLetters = /[a-z]/g;
      var upperCaseLetters = /[A-Z]/g;
      var numbers = /[0-9]/g;
       if(oldAccount1.value.match(lowerCaseLetters)) { 
warning.style.display = "none";
	}
}
*/





var oldAccount1 = document.getElementById("passwordRegistr1");
oldAccount1.onkeyup = function() {
    document.getElementById("passwordWarning1").style.display = "block";
};

oldAccount1.onblur = function() {
    document.getElementById("passwordWarning1").style.display = "none";
};


	  var oldAccount2 = document.getElementById("emailRegistr1");
	  oldAccount2.onkeyup = function() {
    document.getElementById("emailWarning1").style.display = "block";
};
oldAccount2.onblur = function() {
    document.getElementById("emailWarning1").style.display = "none";
};

var newAccount1 = document.getElementById("passwordRegistr2");
newAccount1.onkeyup = function() {
    document.getElementById("passwordWarning2").style.display = "block";
};
newAccount1.onblur = function() {
    document.getElementById("passwordWarning2").style.display = "none";
};


	  var newAccount2 = document.getElementById("emailRegistr2");
	  newAccount2.onkeyup = function() {
    document.getElementById("emailWarning2").style.display = "block";
};
newAccount2.onblur = function() {
    document.getElementById("emailWarning2").style.display = "none";
};
var newAccount3 = document.getElementById("passwordRegistr3");
newAccount3.onkeyup = function() {
    document.getElementById("passwordWarning3").style.display = "block";
};
newAccount3.onblur = function() {
    document.getElementById("passwordWarning3").style.display = "none";
};






var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}



function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }

  slides[slideIndex-1].style.display = "block";  

}

var picture = 1;
showPicture(picture);

function plusPicture(y) {
  showPicture(picture += y);
}

function currentPicture(y) {
  showPicture(picture = y);
}

function showPicture(y) {
  var k;
  var image = document.getElementsByClassName("myPictures");
  var dots = document.getElementsByClassName("dot");
  if (y > image.length) {picture = 1}    
  if (y < 1) {picture = image.length}
  for (k = 0; k < image.length; k++) {
      image[k].style.display = "none";  
  }
  for (k = 0; k < dots.length; k++) {
      dots[k].className = dots[k].className.replace(" active", "");
  }
  image[picture-1].style.display = "block";  
  dots[picture-1].className += " active";
}










	var slideInd = 0;
showSlid();

function showSlid() {
    var i;
    var slid = document.getElementsByClassName("mySlides");
    for (i = 0; i < slid.length; i++) {
        slid[i].style.display = "none"; 
    }
    slideInd++;
    if (slideInd > slid.length) {slideInd = 1} 
    slid[slideInd-1].style.display = "block"; 
    setTimeout(showSlid, 3000); // Change image every 2 seconds
}








	var slideInd1 = 0;
showSlid1();

function showSlid1() {
    var i;
    var slid1 = document.getElementsByClassName("myPictures");
    for (i = 0; i < slid1.length; i++) {
        slid1[i].style.display = "none"; 
    }
    slideInd1++;
    if (slideInd1 > slid1.length) {slideInd1 = 1} 
    slid1[slideInd1-1].style.display = "block"; 
    setTimeout(showSlid1, 3000); // Change image every 2 seconds
}


