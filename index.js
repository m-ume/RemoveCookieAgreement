




getDescendantElement(document.body);


function getDescendantElement(element){
   if(window.getComputedStyle(element).position=="fixed"){
     if(getDescendantElement2(element)){
       element.style.display="none";
       return element;
     }

    }

  for(var i=0;i<element.children.length;i++){
    var result=getDescendantElement(element.children[i]);
    if(result !="undefined"){
      return result;
    }
  }
  return "undefined";
}

function getDescendantElement2(element){
   if(element.textContent.indexOf("ookie")>=0){
       return true;
    }

  for(var i=0;i<element.children.length;i++){
    var result=getDescendantElement2(element.children[i]);
    if(result !=false){
      return result;
    }
  }
  return false;
}
