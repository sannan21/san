



let lists = document.getElementsByClassName("list");

let rightBox = document.getElementById("right");

let leftBox = document.getElementById("left");

for (list of lists) {

    list.addEventListener("dragstart", function (e) {

        let selected = e.target;

        rightBox.addEventListener("dragover", function (e) {
            e.preventDefault();

        });

        rightBox.addEventListener("drop", function (e) {

            rightBox.appendChild(selected);



            selected = null;

        });

        leftBox.addEventListener("dragover", function (e) {
            e.preventDefault();

        });

        leftBox.addEventListener("drop", function (e) {

            leftBox.appendChild(selected);

            selected = null;

        });






    })
}



let listss = document.getElementsByClassName("ar");

let rightBoxs = document.getElementById("right");

let leftBoxs = document.getElementById("arw");

for (lis of listss) {

    lis.addEventListener("dragstart", function (e) {

        let selected = e.target;

        rightBoxs.addEventListener("dragover", function (e) {
            e.preventDefault();

        });

        rightBoxs.addEventListener("drop", function (e) {

            rightBoxs.appendChild(selected);



            selected = null;

        });

        leftBoxs.addEventListener("dragover", function (e) {
            e.preventDefault();

        });

        leftBoxs.addEventListener("drop", function (e) {

            leftBoxs.appendChild(selected);

            selected = null;

        });






    })
}

