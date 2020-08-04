//toggle all class by array - onclick="toggleAllClass(findChildren(findParent(this, 'LI'), '.detail'), 'hidden'); return false;"
//return false - avoid the page jumping straight to the top"
function toggleAllClass(allChildren, cls1, cls2) {
  for (var i = 0; i < allChildren.length; i++) {
    allChildren[i].classList.toggle(cls1)
    if (cls2 != null) {
      allChildren[i].classList.toggle(cls2)
    }
  }
  // return false; //not working
}

function findParent(thisElement, parentTagName) {
  while (
    (thisElement = thisElement.parentElement) &&
    thisElement.tagName != parentTagName
  );
  //Searching loop only stop while parent is founded
  return thisElement //if searching no one will return null
}

function findChildren(parentEL, sl) {
  return parentEL.querySelectorAll(sl)
}
