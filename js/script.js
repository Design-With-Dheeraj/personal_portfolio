
// document.getElementById('navOpen').addEventListener('click', function() {
//   document.getElementById('navBar').classList.add('nav_open')
// })

function resOpen() 
{
  document.querySelector(".navBar").classList.add('res_open')
}

function resClose() 
{
  document.querySelector(".navBar").classList.remove('res_open')
}


// Sticky Header ---------------------------------------->

window.addEventListener("scroll", function () {
    header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 80);
  })



window.addEventListener("load", () => {
        // Get the title element
        const title = document.getElementById("page-title");

        // Get the original title text
        const originalTitle = title.textContent;

        // Set the initial title text
        let currentTitle = originalTitle;

        // Update the title text at regular intervals
        setInterval(() => {
          const firstChar = currentTitle.charAt(0);
          const newTitle = currentTitle.substring(1) + firstChar;
          currentTitle = newTitle;
          title.textContent = currentTitle;
        }, 100);
      });
