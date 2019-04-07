const topics = ["Bugs Bunny", "Tweety", "Tasmanian Devil", "Daffy Duck", "Porky Pig", "Marvin the Martian", "Elmer Fudd", "Sylvester", "Pepe Le Pew"];

let lastSearch;
let offset = 0;

function addNewButton(userInput = $("#newInput").val().trim(), add = true) {
    if (add) {
        topics.push(userInput);
    }

    const btnDom = $(`<button class="btn waves-effect deep-purple lighten-3 giphyFetcher" data-interest='${userInput}'><i class="material-icons left">gif</i>${userInput}</button>`);
    btnDom.insertBefore($("#newButton")); //Remaking the buttons is dumb.  Lets just add the new one.
}

function displayGiphyResponse(response, replace = true) {
    if (replace) {
        $("#displayArea").empty();
    }

    let counter = offset + 1;
    response.data.forEach(element => {
        let giphyDom = `
        <div class="col s12 m4 l3">
          <div class="card small">
            <div class="card-image">
              <img src="${element.images.fixed_width_still.url}" 
                  data-still="${element.images.fixed_width_still.url}" 
                  data-animate="${element.images.fixed_width.url}" 
                  data-state="still" 
                  class="gif">
              <span class="card-title">${counter++}</span>
            </div>
            <div class="card-content">${element.title}<br>Rating: ${element.rating}</div>
          </div>
        </div>`;

        $("#displayArea").append(giphyDom);
    });
}

function giphySearch(source) {
    let searchTerm = $(this).attr("data-interest");
    searchTerm = searchTerm.replace(/ /g, "+"); //Replace any spaces with pluses.

    let replace = true;
    if (searchTerm === lastSearch) {
        offset += 10;
        replace = false;
    } else {
        lastSearch = searchTerm;
        offset = 0;
    }



    $.ajax({
        url: `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=svKQhrA5X2P0e8BNptFNyEWf87jROpZl&limit=10&offset=${offset}`,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        displayGiphyResponse(response, replace);
    });
}

function startOrStopGiphy(item) {
    const state = $(item).attr("data-state");

    //Switch the Src and update the state for future clicks.
    if (state === "still") {
        $(item).attr("src", $(item).attr("data-animate"));
        $(item).attr("data-state", "animate");
    } else {
        $(item).attr("src", $(item).attr("data-still"));
        $(item).attr("data-state", "still");
    }
}

function stopPulse() {
    $("#newButton").removeClass("pulse"); // Users don't need a pulse after its been used.
}

topics.forEach(element => {
    addNewButton(element, false);
});

$("#newButton").on("click", stopPulse);
$("#submitInterest").on("click", function () {
    addNewButton($("#newInput").val().trim());
});
$(document).on("click", '.giphyFetcher', giphySearch);
$(document).on('click', '.gif', function () {
    startOrStopGiphy(this);
});

$(document).ready(function () {
    $('.modal').modal();
});