document.getElementById("searchInput").addEventListener("keyup", search);

document.getElementById("filterAll").addEventListener("click", filterAll);

document.getElementById("filterLvOne").addEventListener("click", filterLvOne);

document.getElementById("filterLvTwo").addEventListener("click", filterLvTwo);

document.getElementById("sort-up").addEventListener("click", lowToHigh);

document.getElementById("sort-down").addEventListener("click", highToLow);

function search() {
    if(document.getElementById("template").innerHTML = null) {
        document.getElementById("template").style.display = "none";
    } else {
        let input = document.getElementById("searchInput");
        let filter = input.value.toLowerCase();
        let nodes = document.getElementsByClassName("mainContent");
        
        for (i=0; i < nodes.length; i++) {
            if (nodes[i].innerText.toLowerCase().includes(filter)) {
                nodes[i].style.display = "";
            } else {
                nodes[i].style.display = "none";
            }
        }
    }
}

function filterAll() {
    if(document.getElementById("template").innerHTML = null) {
        document.getElementById("template").style.display = "none";
    } else {
        let btnAll = document.getElementById("filterAll");
        let nodes = document.getElementsByClassName("mainContent");

        for (i = 0; i < nodes.length; i++) {
            if (nodes[i].innerText.includes("Lv")) {
                nodes[i].style.display = "";
            } else {
                nodes[i].style.display = "none";
            }
        }
    }
}

function filterLvOne() {
    if(document.getElementById("template").innerHTML = null) {
        document.getElementById("template").style.display = "none";
    } else {
        let btnOne = document.getElementById("filterLvOne");
        let nodes = document.getElementsByClassName("mainContent");

        for (i = 0; i < nodes.length; i++) {
            if (nodes[i].innerText.includes("Lv 1")) {
                nodes[i].style.display = "";
            } else {
                nodes[i].style.display = "none";
            }
        }
    }
}

function filterLvTwo() {
    if(document.getElementById("template").innerHTML = null) {
        document.getElementById("template").style.display = "none";
    } else {    
        let btnTwo = document.getElementById("filterLvTwo");
        let nodes = document.getElementsByClassName("mainContent");

        for (i = 0; i < nodes.length; i++) {
            if (nodes[i].innerText.includes("Lv 2")) {
                nodes[i].style.display = "";
            } else {
                nodes[i].style.display = "none";
            }
        }
    }
}

function lowToHigh() {
    if(document.getElementById("template").innerHTML = null) {
        document.getElementById("template").style.display = "none";
    } else {
        let level = document.getElementsByClassName("mainContent");
        let array = [];

        for (i=0; i<level.length; i++) {
            array[i] = level.item(i).innerHTML;
            level[i].style.display = "none";
        }

        array.sort();

        for (m=0; m<array.length; m++) {
            document.getElementById("template").innerHTML += array[m];
        }
    }
}

function highToLow() {
    if(document.getElementById("template").innerHTML = null) {
        document.getElementById("template").style.display = "none";
    } else {
        let level = document.getElementsByClassName("mainContent");
        let array = [];

        for (i=0; i<level.length; i++) {
            array[i] = level.item(i).innerHTML;
            level[i].style.display = "none";
        }

        array.reverse();

        for (m=0; m<array.length; m++) {
            document.getElementById("template").innerHTML += array[m];
        }
    }
}