const input = document.querySelector("#add");
const list = document.querySelector("#list");
var el = document.getElementsByTagName('li');

// this function will allow us to add elements when we click the button

function inputLength() {
    return input.value.length

}




btn.onclick = function() {
    var txt = input.value;
    li = document.createElement('li');
    li.innerHTML = txt;
    list.insertBefore(li, list.childNodes[0]);
    li.appendChild(dBtn);

    var dBtn = document.createElement("button");
    dBtn.appendChild(document.createTextNode("Delete"));


    dBtn.addEventListener("click", deleteListItem);


    input.value = '';
    if (txt == '') {
        alert('Task cannot be empty');
    }

};


function deleteListItem() {
    li.classList.add("delete");
}



//this function will allow us to check the clicked elements
list.onclick = function(ev) {
    if (ev.target.tagName == 'LI') {
        ev.target.classList.toggle('checked');
    }
};

function addListAfterKeyPress() {
    if (inputLength() == '' && event.which === 13) {
        alert('Task cannot be empty');

    } else if (inputLength() > 0 && event.which === 13) {
        var txt = input.value;
        li = document.createElement('li');
        li.innerHTML = txt;
        list.insertBefore(li, list.childNodes[0]);
        deleteBt()
        input.value = '';
    }
}

input.addEventListener("keypress", addListAfterKeyPress)