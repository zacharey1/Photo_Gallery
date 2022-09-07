window.addEventListener('load', function() {
    baguetteBox.run('.gallery');
  });

  document.getElementById("searchbar").addEventListener("keyup", getInput);
            
            function getInput() {
              var x = document.getElementById("searchbar");
              x.value = x.value.toLowerCase();
              return x;
            }