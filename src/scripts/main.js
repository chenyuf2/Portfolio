// Put your js code here
window.onscroll = function() {scrollFunction()};
window.onload = function() {
  navbarhelper("homehead");
}

function scrollFunction() {
  const padding_size = "30px 16";
  const font_size = "20px";
  const default_color = "#8f989f";
  const padding_size2 = "34px 16";
  const font_size2 = "22px";
  const default_color2 = "white";
  const key_array = ["artshead", "newshead", "contacthead", "abouthead", "homehead", "carousel"];
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    key_array.forEach((item, i) => {
      document.getElementById(item).style.padding = padding_size;
      document.getElementById(item).style.fontSize = font_size;
      document.getElementById(item).style.color = default_color;
    });
    document.getElementById("navid").style.backgroundColor = "white";
  } else {
    key_array.forEach((item, i) => {
      document.getElementById(item).style.padding = padding_size2;
      document.getElementById(item).style.fontSize = font_size2;
      document.getElementById(item).style.color = default_color2;
    });
    document.getElementById("navid").style.backgroundColor = "rgba(0, 0, 0, 0.4)";
  }
  //
  var front_page_height = parseInt(document.getElementById("front-page").offsetHeight);
  var info_block_height = parseInt(document.getElementById("info-block").offsetHeight);
  var modal_section_height = parseInt(document.getElementById("modal-section").offsetHeight);
  var fixed_pic_height = parseInt(document.getElementById("fixed-pic").offsetHeight);
    var carousel_height = parseInt(document.getElementById("carousel-section").offsetHeight);
  if (document.documentElement.scrollTop <= front_page_height - 50) {
      navbarhelper("homehead");
  } else if (document.documentElement.scrollTop <= front_page_height + info_block_height- 50) {
      navbarhelper("abouthead");
  } else if (document.documentElement.scrollTop <= front_page_height + info_block_height + fixed_pic_height- 50) {
      navbarhelper("newshead");
  } else if (document.documentElement.scrollTop <= front_page_height + info_block_height + fixed_pic_height + modal_section_height- 50) {
      navbarhelper("contacthead");
  } else {
      navbarhelper("carousel");
  }
  const icon_array = ["icon1", "icon2", "icon3"];
  const modal_array = ["project1", "project2", "project3"];
  const num_array = ["num1", "num2", "num3"];
  const footer_array = ["footer1", "footer2", "footer3"];
  const carousel_array = ["carousel-animation"];
  if (isInViewport(document.getElementById("icon1"))) {
    animation_helper(icon_array);
  }
  if (isInViewport(document.getElementById("project4"))) {
    animation_helper(modal_array);
  }
  if (isInViewport(document.getElementById("num1"))){
     animation_helper(num_array);
  }
  if (isInViewport(document.getElementById("footer1"))){
     animation_helper(footer_array);
  }
  if (isInViewport(document.getElementById("carousel-animation"))){
    animation_helper(carousel_array);
  }

}
function animation_helper(id_array) {
  id_array.forEach((item, i) => {
    let class_array = document.getElementById(item).classList;
    if (!("animate-box" in class_array)) {
      document.getElementById(item).classList.add("animate-box");
    }
  });

}

function navbarhelper(id) {
  var id_array = ["abouthead", "homehead" ,"contacthead","newshead", "carousel"];
  id_array.forEach((item, i) => {
    document.getElementById(item).classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
}

function isInViewport(el) {
  var userheight = document.documentElement.clientHeight;
  var current = el.getBoundingClientRect().top;
  if (current + 15 <= userheight) {
    return true;
  }
  return false;
}
