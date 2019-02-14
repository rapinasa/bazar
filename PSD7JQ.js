




$(document).ready(function(){
    $("#div1").click(function(){
        $("#form1").fadeIn(500);
    });});
$(document).ready(function(){
    $("#div2").click(function(){
        $("#form2").fadeIn(500);
    });
});
$(document).ready(function(){
    $("#div3").click(function(){
        $("#form3").fadeIn(500);
    });
});
$(document).ready(function(){
    $("#div4").click(function(){
        $("#form4").fadeIn(500);
    });
});
$(document).ready(function(){
    $("#registration1, #registration3").click(function(){
        $("#form5").fadeIn(500);
    });
});
$(document).ready(function(){
    $("#registration2, #newAccount").click(function(){
        $("#form6").fadeIn(500);
    });
});
$(document).ready(function(){
    $("#passwordRegistr1").keyup(function(){
        $("#passwordWarning1").fadeIn(500);
    });
});



	$(document).ready(function(){
		 $("button").click(function(){
		 	var massege = $("textarea").val();
		 	var old =  $("#content").html();
		 	$("#content").html(old+"<p>" + massege + "</p>");
		 });
		}); 



$(document).ready(function(){
	$('#cross1,#cross2,#cross3,#cross4,#cross5,cross6').click(function(){
   $('#form1,#form2,#form3,#form4,#form5,#form6').fadeOut('slow');
});
}); 

$(document).ready(function(){
    $('.plus-btn').on('click', function(e) {
    e.preventDefault();
    var $input = $('#cart');
    var value = parseInt($input.val());
    if (value <= 100) {
        value = value + 1;
    } else {
        value = 100;
    }
  $input.val(value);
});
});



    
$(document).ready(function () {

function get_timer() {

    var date_new = "November 1,2019 23:08";


    var date_t = new Date(date_new);

    var date = new Date();

    var timer = date_t - date;
    
    
    if(date_t > date) {
        
        
        var day = parseInt(timer/(60*60*1000*24));
        
        if(day < 10) {
            day = '0' + day;
        }
    
        day = day.toString();
            

        var hour = parseInt(timer/(60*60*1000))%24;
    
        if(hour < 10) {
            hour = '0' + hour;
        }
    
        hour = hour.toString();
            
    
        var min = parseInt(timer/(1000*60))%60;
    
        if(min < 10) {
            min = '0' + min;
        }
    
        min = min.toString();
            
    
        var sec = parseInt(timer/1000)%60;
        
        if(sec < 10) {
            sec = '0' + sec;
        }
        
        sec = sec.toString();
        
    
        if(day[1] == 9 && 
            hour[0] == 2 && 
            hour[1] == 3 && 
            min[0] == 5 && 
            min[1] == 9 && 
            sec[0] == 5 && 
            sec[1] == 9) {
            animation($("#day0"),day[0]);
        }
        else {
            $("#day0").html(day[0]);
        }
    
        if(hour[0] == 2 && 
            hour[1] == 3 && 
            min[0] == 5 && 
            min[1] == 9 && 
            sec[0] == 5 && 
            sec[1] == 9) {
            animation($("#day1"),day[1]);
        }
        else {
            $("#day1").html(day[1]);
        }
    
        if(hour[1] == 3 && 
            min[0] == 5 && 
            min[1] == 9 && 
            sec[0] == 5 && 
            sec[1] == 9) {
            animation($("#hour0"),hour[0]);
        }
        else {
            $("#hour0").html(hour[0]);
        }
        
        if(min[0] == 5 && 
            min[1] == 9 && 
            sec[0] == 5 && 
            sec[1] == 9) {
            animation($("#hour1"),hour[1]);
        }
        else {
            $("#hour1").html(hour[1]);
        }
            
    
        if(min[1] == 9 && 
            sec[0] == 5 && 
            sec[1] == 9) {
            animation($("#min0"),min[0]);
        }
        else {
            $("#min0").html(min[0]);
        }
    
        if(sec[0] == 5 && sec[1] == 9) {
            animation($("#min1"),min[1]);
        }
        else {
            $("#min1").html(min[1]);
        }
            
    
        if(sec[1] == 9) {
            animation($("#sec0"),sec[0]);
        }
        else {
            $("#sec0").html(sec[0]);
        }
        animation($("#sec1"),sec[1]);   
    
        setTimeout(get_timer,1000);
    }
    else {
        $(".text3").html("<span id='stop'>Sales is over</span>");
    }
    
}

function animation(vibor,param) {
    vibor.html(param)
        .css({'marginTop':'-20px','opacity':'0'})
        .animate({'marginTop':'0px','opacity':'1'});
}
get_timer();
});


