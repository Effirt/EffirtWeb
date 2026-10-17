/******************************************************************************/
/* Copyright 2025 Zelix Pty Ltd (ACN 078 740 093)                             */
/******************************************************************************/
function send(key, extra) {
   var s = window.location.href;
   s = s.substring(s.indexOf("://")+3);
   if (s.indexOf("www.") == 0) {
      s = s.substring(4);
   }
   s = s.substring(0, s.indexOf("/"));
   if (extra != null && extra.length > 0) {
      window.location.replace("mailto:" + key + "@" + s + "?subject=" + extra);
   }
   else {
      window.location.replace("mailto:" + key + "@" + s);
   }
}
