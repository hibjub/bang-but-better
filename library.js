function isTouching(car,wall) {
    if  (movivingRect.x - fixedRect.x < movivingRect.width/2 + fixedRect.width/2 && 
      fixedRect.x - movivingRect.x < movivingRect.width/2 + fixedRect.width/2 &&
      movivingRect.y - fixedRect.y < movivingRect.height/2 + fixedRect.height/2 && 
      fixedRect.y - movivingRect.y < movivingRect.height/2 + fixedRect.height/2) { 
      return true;
    } else {
      return false;
    }
  }
  
  function bounceOff(move1,move2) {
    if  (move2.x - move1.x < move2.width/2 + move1.width/2 && 
      move1.x - move2.x < move2.width/2 + move1.width/2) {
        move1.velocityX = move1.velocityX*(-1)
        move2.velocityX = move2.velocityX*(-1)
      }
    if  (move2.y - move1.y < move2.height/2 + move1.height/2 && 
      move1.y - move2.y < move2.height/2 + move1.height/2) { 
        move1.velocityY = move1.velocityY*(-1)
        move2.velocityY = move2.velocityY*(-1)
    }
  }

  function bounceOff_Edges() {
    if (move6.x < 0 || move6.x > 800) {
      move6.velocityX = move6.velocityX*(-1);
    } else if (move6.y < 0 || move6.y > 400) {
      move6.velocityY = move6.velocityY*(-1);
    }
  }