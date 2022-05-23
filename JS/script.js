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
      $("#sitead").css("font-size", "38px");
    });
    $("#sitead").mouseout(function(){
      $("#sitead").css("font-size", "32px");
    });
  });


function f1(){
    document.getElementById("sitead").className="shadow";
}
document.getElementById("sitead").onmouseover(f1());

function f2(){
    document.getElementById("sitead").classList.remove("shadow");
}
document.getElementById("sitead").onmouseout(f2());


function f3(){
    alert("Sitemize Hoş Geldiniz");
}


function f10() {
  if (document.documentElement.scrollTop > 100) {
    document.getElementById("ifr1").className = "slideUp";
  }
}
function f9() {
  if (document.documentElement.scrollTop > 650) {
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


function f6(){
    document.getElementsByClassName("ifr1").setAttribute("title", "2022 Yeni Bahar Koleksiyonu");
}
document.getElementsByClassName("ifr1").onmouseenter = function() {f6()};

function f7(){
    document.getElementsByClassName("ifr2").setAttribute("title", "2022 Yeni Yaz Koleksiyonu");
}
document.getElementsByClassName("ifr2").onmouseenter(f7());


function f4(){
    document.getElementsByClassName("navbar").className = "navbar-dark";
}
document.onload(f4());

function f14(){
    document.getElementsByClassName("hakkimizda").setAttribute("style","text-shadow: 1px 1px white;");
}
document.getElementsByClassName("hakkimizda").onmouseover(f14());

$(document).ready(function(){
    $(".ilkbahar2022").mouseover(function(){
      $(".ilkbahar2022").css("font-size", "55px");
    });
    $(".ilkbahar2022").mouseout(function(){
      $(".ilkbahar2022").css("font-size", "50px");
    });
  });

$(document).ready(function(){
    $(".yaz2022").mouseover(function(){
      $(".yaz2022").css("font-size", "55px");
    });
    $(".yaz2022").mouseout(function(){
      $(".yaz2022").css("font-size", "50px");
    });
  });

