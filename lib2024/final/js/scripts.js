window.onload = init;

function init() {

    document.querySelector(".ham").onclick = showHideMobileMenu;

    $("#profile-form").submit(function(e) {
        e.preventDefault();
        var form = this;
        showFormValues(form);
    });

    document.querySelector("#loadTable").onclick = createTableFromJSON;

    var imgThumbs = document.querySelectorAll(".image");

    for (i = 0; i < imgThumbs.length; i+=1) {
        imgThumbs[i].addEventListener("click", showImgLightBox);
    }

    document.querySelector(".image").onclick = showImgLightBox;

    document.querySelector(".active").onclick = hideImgLightBox;

}

function showHideMobileMenu() {

    var mobileNav = document.querySelector(".mobile-nav-container");

    if(mobileNav.style.display=="block") {
        mobileNav.style.display="none";
    } else {
        mobileNav.style.display="block";
    }
}

function showFormValues(form){
    var formValues = $(form).serializeArray();
    $.each(formValues, function(index, field){
        $("#results").find("#"+field.name+"_result").text(field.value);
        if(field.name=="email"){
            $("#results").find("#"+field.name+"_result").attr("href", "mailto:"+field.value);
        }
    })
}

function createTableFromJSON() {
        var mySchedule = [
            {
                "Time": "09:00 - 11:00",
                "Monday": "Communications I",
                "Tuesday": "Client Services",
                "Wednesday": "Special Collections",
                "Thursday" : "Directed Research Seminar",
                "Friday" : "Client Services",
            },
            {
                "Time": "11:00 - 12:30",
                "Monday": "Reference",
                "Tuesday": "Internet App",
                "Wednesday": "Library Software",
                "Thursday" : "French",
                "Friday" : "Reference",
            },
            {
                "Time": "14:00 - 15:00",
                "Monday": "Acquisitions",
                "Tuesday": "General Elective",
                "Wednesday": "Marketing",
                "Thursday" : "Emerging Library Tech",
                "Friday" : "Library Software",
            },
            {
                "Time": "15:30 - 17:30",
                "Monday": "French",
                "Tuesday": "French",
                "Wednesday": "Acquisitions",
                "Thursday" : "Subject Analysis",
                "Friday" : "Internet App",
            }
        ]

        var col = [];
        for (var i = 0; i < mySchedule.length; i++) {
            for (var key in mySchedule[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        // CREATE DYNAMIC TABLE.
        var table = document.createElement("table");

        // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

        var tr = table.insertRow(-1);                   // TABLE ROW.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // TABLE HEADER.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < mySchedule.length; i++) {

            // create a row for each object row and add to the end of the table
            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
            // create a cell for each object column & add to the end of the row
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = mySchedule[i][col[j]];
            }
        }

        // ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("json_table");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
    }

function showImgLightBox(){

    var targetImgId = this.getAttribute("data-img-id");

    document.querySelector("#image-overlay").style.display ="block";

    document.querySelector(".img-slide.active").classList.remove("active");

    document.querySelector("#"+targetImgId).classList.add("active");
}

function hideImgLightBox(){
    document.querySelector("#image-overlay").style.display ="none";
}
