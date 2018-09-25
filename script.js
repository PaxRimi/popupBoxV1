( function () {

    const body = document.querySelector('body');

// get actual time
    const newDate = Date.parse(new Date());

// count 24hours in milliseconds
    const hours24 = 24 * 60 * 60 * 1000;

// function that create and add box to body of the site
    function createBox() {

        // delete previous information from localStorage
        localStorage.clear();
        localStorage.removeItem("GDPR_answer");
        localStorage.removeItem("GDPR_lastVisit");
        //blocking scrolling at site
        body.style.overflow = "hidden";

        // creating main div and add style
        let box = document.createElement("div");
        box.style.boxSizing = "border-box";
        box.style.width = "600px";
        box.style.height = "300px";
        box.style.padding = "15px";
        box.style.color = "white";
        box.style.display = "flex";
        box.style.flexDirection = "column";
        box.style.alignItems = "center";
        box.style.justifyContent = "space-between";
        box.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
        box.style.position = "fixed";
        box.style.top = "50%";
        box.style.left = "50%";
        box.style.margin = "-150px 0 0 -300px";
        box.style.zIndex = "10";

        // creating title for box
        let title = document.createElement("h1");
        title.innerText = "GDPR consent";

        // creating accept button with style
        let btnAccept = document.createElement("button");
        btnAccept.innerText = "Accept";
        btnAccept.style.backgroundColor = "green";
        btnAccept.style.padding = "10px 15px";

        // add function that save answer and time of answer
        btnAccept.addEventListener("click", function () {
            //return the scroll option on the site
            body.style.overflow = "scroll";

            localStorage.setItem("GDPR_answer", "accept");

            localStorage.setItem("GDPR_lastVisit", newDate);

            // remove box from the site
            body.removeChild(this.parentElement.parentElement);
        });

        //creating cancel button with style
        let btnCancel = document.createElement("button");
        btnCancel.innerText = "Cancel";
        btnCancel.style.backgroundColor = "red";
        btnCancel.style.padding = "10px 15px";

        // add function that save answer and time of answer
        btnCancel.addEventListener("click", function () {
            //return the scroll option on the site
            body.style.overflow = "scroll";

            localStorage.setItem("GDPR_answer", "cancel");

            localStorage.setItem("GDPR_lastVisit", newDate);
            // remove box from the site
            body.removeChild(this.parentElement.parentElement);
        });

        // create container for button with style
        let btnContainer = document.createElement("div");
        btnContainer.style.width = "70%";
        btnContainer.style.display = "flex";
        btnContainer.style.justifyContent = "space-between";

        // add button to container
        btnContainer.appendChild(btnAccept);
        btnContainer.appendChild(btnCancel);

        // add title and buttons to the main div
        box.appendChild(title);
        box.appendChild(btnContainer);

        // add box to the site
        body.appendChild(box);
    }

// take the time of last visit at the site from localstorage
    const oldDate = Number(localStorage.getItem("GDPR_lastVisit"));

// check if from the last visit pass 24 hours || Yes - run the function

    if (oldDate === null || newDate - oldDate > hours24) {
        createBox();
    }

} () );