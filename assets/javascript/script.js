
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

    const query = ``;//TODO

    //Use Query.
    //Call displayGiphyResponse(response)
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