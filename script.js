
const body = document.querySelector('body');

// get actual time
const newDate = new Date();
const year = newDate.getFullYear();
const day = newDate.getDate();
const month = newDate.getMonth()+1;
const hour = newDate.getHours();
const minutes = newDate.getMinutes();

// function that create and add box to body of the site
function createBox(){

  // delete previous information from localStorage
  localStorage.clear();
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

         localStorage.setItem("answer", "accept");

         localStorage.setItem("newYear", year);
         localStorage.setItem("newMonth", month);
         localStorage.setItem("newDay", day);
         localStorage.setItem("newHour", hour);
         localStorage.setItem("newMin", minutes);

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

        localStorage.setItem("answer", "cancel");

        localStorage.setItem("newYear", year);
        localStorage.setItem("newMonth", month);
        localStorage.setItem("newDay", day);
        localStorage.setItem("newHour", hour);
        localStorage.setItem("newMin", minutes);

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
const oldYear = localStorage.getItem("newYear");
const oldMonth = localStorage.getItem("newMonth");
const oldDay = localStorage.getItem("newDay");
const oldHour = localStorage.getItem("newHour");
const oldMin = localStorage.getItem("newMin");

console.log(oldYear);
console.log(oldMonth);
console.log(oldDay);
console.log(oldHour);
console.log(oldMin);
console.log(localStorage.getItem("answer"));

// check if from the last visit pass 24 hours || Yes - run the function

if( oldYear === null || year - oldYear > 0 ){
  createBox();
} else if ( month - oldMonth > 0) {
  createBox();
} else if( day - oldDay > 1){
  createBox();
} else if (day - oldDay === 1 ){
    if( hour - oldHour > 0){
        createBox();
    } else if ( hour - oldHour === 0 ) {
        if ( minutes - oldMin > 0){
            createBox();
        }
    }
}

