!function(e,t){"function"==typeof define&&define.amd?define([],t):"object"==typeof module&&module.exports?module.exports=t():e.Autogrow=t()}(this,function(){return function(e,t){var o=this
void 0===t&&(t=999),o.getOffset=function(e){for(var t=window.getComputedStyle(e,null),o=["paddingTop","paddingBottom"],n=0,i=0;i<o.length;i++)n+=parseInt(t[o[i]])
return n},o.autogrowFn=function(){var t=0,i=!1
return e.scrollHeight-n>o.maxAllowedHeight?(e.style.overflowY="scroll",t=o.maxAllowedHeight):(e.style.overflowY="hidden",e.style.height="auto",t=e.scrollHeight-n,i=!0),e.style.height=t+"px",i}
var n=o.getOffset(e)
o.rows=e.rows||1,o.lineHeight=e.scrollHeight/o.rows-n/o.rows,o.maxAllowedHeight=o.lineHeight*t-n,e.addEventListener("input",o.autogrowFn)}})
