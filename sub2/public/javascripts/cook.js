function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function writeCookie(cname, cvalue, days) {
  var dt, expires;
  dt = new Date();
  dt.setTime(dt.getTime() + days * 24 * 60 * 60 * 1000);
  expires = "; expires=" + dt.toGMTString();
  document.cookie = cname + "=" + cvalue + expires + "; domain=.maindomain.com";
}

$(function () {
  $("#getcookie").click( function(handle) {
    console.log(document.cookie);
  });
  $("#setcookie").click( function(handle) {
    writeCookie("sub2","sub2", 1);
    console.log(document.cookie);
  });

});
