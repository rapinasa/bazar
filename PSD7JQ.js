




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


 
