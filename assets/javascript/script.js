const interestArray = ["Bugs Bunny", "Tweety", "Tasmanian Devil", "Daffy Duck", "Porky Pig", "Marvin the Martian", "Elmer Fudd", "Sylvester", "Pepe Le Pew"];

function addNewButton(userInput = $("#newInput").val().trim(), add = true) {
    if (add) {
        interestArray.push(userInput);
    }

    const btnDom = $(`<button class="btn waves-effect deep-purple lighten-3 giphyFetcher" data-interest='${userInput}'><i class="material-icons left">gif</i>${userInput}</button>`);
    btnDom.insertBefore($("#newButton"));
}

function displayGiphyResponse(response) {
    $("#displayArea").empty();
    let counter = 1;
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
            <div class="card-content">${element.title}</div>
          </div>
        </div>`;

        $("#displayArea").append(giphyDom);
    });
}

function giphySearch(source) {
    let searchTerm = $(this).attr("data-interest");
    searchTerm = searchTerm.replace(/ /g, "+"); //Replace any spaces with pluses.

    $.ajax({
        url: `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=svKQhrA5X2P0e8BNptFNyEWf87jROpZl&limit=10`,
        method: "GET"
    }).then(function (response) {
        displayGiphyResponse(response)
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

interestArray.forEach(element => {
    addNewButton(element, false);
})

$("#newButton").on("click", stopPulse);
$("#submitInterest").on("click", function() {
    addNewButton($("#newInput").val().trim());
});
$(document).on("click", '.giphyFetcher', giphySearch);
$(document).on('click', '.gif', function() {
    startOrStopGiphy(this);
});

$(document).ready(function () {
    $('.modal').modal();
});