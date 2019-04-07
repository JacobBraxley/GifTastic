
//A way to fetch 10 items from giphy.
//Each button will fetch from giphy to to populate 10 images.
//An initial array of data.
//An area to add new buttons.
const interestArray = ["Bugs Bunny", "Tweety", "Tasmanian Devil", "Daffy Duck", "Porky Pig", "Marvin the Martian", "Elmer Fudd", "Sylvester", "Pepe Le Pew"];

function addNewButton() {
    $("#newButton").removeClass("pulse"); // Users don't need a pulse after its been used.
    const userInput = $("#newInput").val().trim();
    interestArray.push(userInput);

    const btnDom = $(`<button class='giphyFetcher' data-interest='${userInput}'>${userInput}</button>`);
    $("#searchButtons").append(btnDom);
}

function displayGiphyResponse(response) {
    $("#displayArea").clear();

    response.data.array.forEach(element => {
        let giphyDom = `${element}`;//TODO

        $("#displayArea").append(giphyDom);
    });
}

function giphySearch(source) {
    const searchTerm = $(this).attr("data-interest");

    //svKQhrA5X2P0e8BNptFNyEWf87jROpZl
    const query = ``;//TODO

    //Use Query.
    //Call displayGiphyResponse(response)

    // var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC";

    // $.ajax({
    //   url: queryURL,
    //   method: "GET"
    // }).then(function(response) {
    //   console.log(response);
    // });
}

function startOrStopGiphy(item) {
    //Figure out how to start/stop giphys. $(item).
}

$("#newButton").on("click", addNewButton);
$(".giphyFetcher").on("click", giphySearch);
$(".giphyItem").on("click", startOrStopGiphy);

$(document).ready(function(){
    $('.modal').modal();
  });


//   <body>
//   <img src="https://media1.giphy.com/media/3o85xkQpyMlnBkpB9C/200_s.gif" data-still="https://media1.giphy.com/media/3o85xkQpyMlnBkpB9C/200_s.gif" data-animate="https://media1.giphy.com/media/3o85xkQpyMlnBkpB9C/200.gif" data-state="still" class="gif">
//   <img src="https://media2.giphy.com/media/8rFQp4kHXJ0gU/200_s.gif" data-still="https://media2.giphy.com/media/8rFQp4kHXJ0gU/200_s.gif" data-animate="https://media2.giphy.com/media/8rFQp4kHXJ0gU/200.gif" data-state="still" class="gif">
//   <img src="https://media3.giphy.com/media/W6LbnBigDe4ZG/200_s.gif" data-still="https://media3.giphy.com/media/W6LbnBigDe4ZG/200_s.gif" data-animate="https://media3.giphy.com/media/W6LbnBigDe4ZG/200.gif" data-state="still" class="gif">
//   <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
//   <script type="text/javascript">
//     $(".gif").on("click", function() {
//       // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
//       var state = $(this).attr("data-state");
//       // If the clicked image's state is still, update its src attribute to what its data-animate value is.
//       // Then, set the image's data-state to animate
//       // Else set src to the data-still value
//       if (state === "still") {
//         $(this).attr("src", $(this).attr("data-animate"));
//         $(this).attr("data-state", "animate");
//       } else {
//         $(this).attr("src", $(this).attr("data-still"));
//         $(this).attr("data-state", "still");
//       }
//     });
//   </script>
// </body>