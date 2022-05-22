    window.onscroll = function() {f10(), f9()};

$(document).ready(function(){
    $("input").focus(function(){
      $(this).css("background-color", "lightblue");
    });
    $("input").blur(function(){
      $(this).css("background-color", "white");
    });
  });

$(document).ready(function(){
    $(".hakkimizda").click(function(){
      $("#hakki").fadeToggle("slow");
      $(".linkler").fadeToggle("slow");
    });
  });

  $(document).ready(function(){
    $("#sitead").mouseover(function(){
      $("#sitead").css("font-size", "28px");
    });
    $("#sitead").mouseout(function(){
      $("#sitead").css("font-size", "24px");
    });
  });


  document.getElementById("sitead").onmouseenter(f1());
  function f1(){
    document.getElementById("sitead").style.color="crimson";
}
  document.getElementById("sitead").onmouseleave(f4());
  function f4(){
    document.getElementById("sitead").style.color="cyan";
}


function f3(){
    // alert("Sitemize Hoş Geldiniz");
}


function f10() {
  if (document.documentElement.scrollTop > 150) {
    document.getElementById("ifr1").className = "slideUp";
  }
}
function f9() {
  if (document.documentElement.scrollTop > 950) {
    document.getElementById("ifr2").className = "slideUp";
  }
}




document.getElementById("arama").onkeydown(f12());
document.getElementById("arama").onclick(f12());
function f12(){
    var y = document.getElementById("arama").value;
  document.getElementById("demo").style.display="block";
  document.getElementById("demo").innerHTML =  y + "  bulunmuyor " ;
}

// $("#arama").bind("keyup", function() {
//     var text = $(this).val().toLowerCase();
//     var items = $(".item_name");

//     //first, hide all:
//     items.parent().hide();

//     //show only those matching user input:
//     items.arama(function () {
//         return $(this).text().toLowerCase().indexOf(text) == 0;
//     }).parent().show();
// });

// document.getElementsByClassName("dropdown-toggle").onclick(f8());
// function f8(){
//     document.getElementsByClassName("dropdown-menu").style.display="block";
// }


// document.getElementById("arama").onclick(f());
// document.getElementById("arama").onkeydown(f2());
// // document.getElementById("iframe").onmouseenter(f2());
// // function f2(){
// //     document.getElementsByTag("iframe").title="YAAAAAAAAAAAAAAAAAAAAAAA";
// // }
// document.getElementById("sitead").onmouseover(f());
// // 24px
// document.getElementById("sitead").onmouseout(f2());



