function enterInput(e) {
  var flag = e.getModifierState("CapsLock");
  if(flag) {
    return true;
  } else {
    return false;
  }
}