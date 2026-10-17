/******************************************************************************/
/* Copyright 2006 Zelix Pty Ltd (ACN 078 740 093)                             */
/******************************************************************************/

function MM_preloadImages() {
   var d=document; 
   if(d.images){ 
      if(!d.MM_p) 
	     d.MM_p=new Array();
      var i,j=d.MM_p.length, a=MM_preloadImages.arguments; 
	  for(i=0; i<a.length; i++)
         if (a[i].indexOf("#")!=0){ 
		    d.MM_p[j]=new Image; 
			d.MM_p[j++].src=a[i]
	     }
   }
}

function MM_findObj(n, d) {
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapTab() {
  var i,j=0,x,a=MM_swapTab.arguments; document.MM_sr=new Array; 
  for(i=0;i<(a.length-1);i+=2)
     if ((x=MM_findObj(a[i]))!=null)
	    {document.MM_sr[j++]=x; 
		   if(!x.oSrc) x.oSrc=x.src; x.src=a[i+1];}
}

function swapTab() {
  var a=swapTab.arguments;
  if ((x=MM_findObj(a[0]))!=null){x.style.visibility="visible"};
  if ((x=MM_findObj(a[1]))!=null){x.style.visibility="hidden"};
  if ((x=MM_findObj(a[2]))!=null){x.style.visibility="visible"};
  if ((x=MM_findObj(a[3]))!=null){x.style.visibility="hidden"};
  if ((x=MM_findObj(a[4]))!=null){x.style.visibility="visible"};
  if ((x=MM_findObj(a[5]))!=null){x.style.visibility="hidden"};
}

function MM_swapTabArea() { 
  var a=MM_swapTabArea.arguments;
  if ((x=MM_findObj(a[0]))!=null){x.style.visibility="visible"};
  if ((x=MM_findObj(a[1]))!=null){x.style.visibility="hidden"};
  if ((x=MM_findObj(a[2]))!=null){x.style.visibility="hidden"};
}

