var enterButton = document.getElementById("enter")
var input = document.getElementById("userInput")
var ul = document.querySelector("ul")
var item = document.getElementsByTagName("li")

function inputLength() {
    return input.value.length

}

function listLength() {
    return item.length;
}

function createListElement() {
    var li = document.createElement("li"); //create li
    li.appendChild(document.createTextNode(input.value)); //make text in li
    ul.append(li) //add li to ul
    input.value = ""; //reset input

    function crossOut() {
        li.classList.toggle("done")

    }

    li.addEventListener("click", crossOut);

    var dBtn = document.createElement("button");
    dBtn.appendChild(document.createTextNode("Delete"));
    li.appendChild(dBtn);
    dBtn.addEventListener("click", deleteListItem)

    function deleteListItem() {
        li.classList.add("delete");

    }

}

function addListClick() {
    if (inputLength() > 0) {
        createListElement();

    }
}

function addListAfterKeyPress() {
    if (inputLength() > 0 && event.which === 13) {
        createListElement();
    }
}


enterButton.addEventListener("click", addListClick);
input.addEventListener("keypress", addListAfterKeyPress);