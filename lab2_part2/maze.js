document.addEventListener("DOMContentLoaded", function () {
    const maze = document.getElementById("maze");
    const boundaries = document.querySelectorAll(".boundary");
    const start = document.getElementById("start");
    const end = document.getElementById("end");
    const status = document.getElementById("status");
    let gameInProgress = false;
    // start.addEventListener("mouseover", function () {
    //     if (!gameInProgress) {
    //       gameInProgress = true;
    //       alert("Game started! Move your mouse through the maze.");
    //       resetGame();
    //     }
    //   });
    
    //   end.addEventListener("mouseover", function () {
    //     if (gameInProgress) {
    //       if (checkForWin()) {
    //         alert("You win! Congratulations!");
    //       } else {
    //         alert(" you lost.");
    //       }
    //       gameInProgress = false;
    //     }
    //   });
    
    //   maze.addEventListener("mouseleave", function () {
    //     if (gameInProgress) {
    //       alert(" you lost.");
    //       gameInProgress = false;
    //       turnWallsRed();
    //     }
    //   });
    
    //   for (let i = 0; i < boundaries.length; i++) {
    //     boundaries[i].addEventListener("mouseover", function () {
    //       if (gameInProgress) {
    //         alert("Sorry, you touched the wall. Try again.");
    //         gameInProgress = false;
    //         turnWallsRed();
    //       }
    //     });
  
     start.addEventListener("mouseover", function () {
      if (!gameInProgress) {
         gameInProgress = true;
         status.textContent = "Game started! Move your mouse through the maze.";
         resetGame();
   }
     });
  
     end.addEventListener("mouseover", function () {
      if (gameInProgress) {
        if (checkForWin()) {
          status.textContent = "You win.";
        } else {
           status.textContent = " you lost. ";
         }
         gameInProgress = false;
       }
    });
  
     maze.addEventListener("mouseleave", function () {
       if (gameInProgress) {
         status.textContent = "you lost";
         gameInProgress = false;
        turnWallsRed();
       }
     });
  
     for (let i = 0; i < boundaries.length; i++) {
       boundaries[i].addEventListener("mouseover", function () {
        if (gameInProgress) {
          boundaries.forEach(function (boundary) {
            boundary.classList.add("youlose");
           });
          status.textContent = "Sorry, you touched the wall. Try again.";
          gameInProgress = false;
        }
      });
  
      boundaries[i].addEventListener("mouseout", function () {
        if (gameInProgress) {
          if (boundaries[i].classList.contains("youlose")) {
             boundaries[i].classList.remove("youlose");
          }
        }
       });
     }
  
    function checkForWin() {
      for (let i = 0; i < boundaries.length; i++) {
        if (boundaries[i].classList.contains("youlose")) {
          return false;
        }
      }
      return true;
    }
  
    function resetGame() {
      for (let i = 0; i < boundaries.length; i++) {
        if (boundaries[i].classList.contains("youlose")) {
          boundaries[i].classList.remove("youlose");
        }
      }
    }
  
    function turnWallsRed() {
      for (let i = 0; i < boundaries.length; i++) {
        boundaries[i].classList.add("youlose");
      }
    }
  });
  
  
  
  
  
  