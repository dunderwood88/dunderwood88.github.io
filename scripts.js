// If you are somehow viewing this, please do not judge. I'm being incredibly lazy...

$(document).ready(function(){

    // 1) Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the
            // specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    // 2) Randomly load art images
    var artArray = [
        "bats", "bear", "bee", "bird", "birds", "camel", "capybara",
        "cat", "cow", "demon", "demon2", "dino", "dino2", "dogmouse",
        "easter", "ghosts", "giraffe", "hedgehog", "lion", "lion2", "mandrill", 
        "moby", "monkey", "moon", "nelly", "pig", "thing", "worm"
    ];
    
    // randomise images and render
    let artDivId = 1;
    for (let i = artArray.length - 1; i > -1; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = artArray[i];
        artArray[i] = artArray[j];
        artArray[j] = temp;
        console.log(artArray[i]);

        // build img elements
        var imgElem = document.createElement("img");
        imgElem.src = "images/art/" + artArray[i] + ".jpg";
        imgElem.setAttribute("alt", artArray[i]);
        // append to appropriate div element
        document.getElementById("divArt" + artDivId).appendChild(imgElem);

        // increment to next div if full
        if (i % 4 == 0) {
            artDivId++;
        }
    }
});
