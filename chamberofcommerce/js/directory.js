const apiURL = "json/directory.json";

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((directoryData) => {
   

    for (i = 0; i < directoryData.business.length; i++){


        let bizName = document.createElement("h5");
        bizName.textContent = directoryData.business[i].Name;
     


        let iconPath = directoryData.business[i].logo;
        let theIcon = document.createElement("img");
        theIcon.src=iconPath;

        
        
        let phone = document.createElement("p");
        phone.textContent = "Phone Number: " + directoryData.business[i].phone;
   

        let webLink = directoryData.business[i].link;
        let inputBut = document.createElement("a");
        let label = "Click to Visit Site";
        inputBut.textContent = label;
        inputBut.setAttribute("href", webLink);

        

        
        
        let theBiz = document.createElement("div");
        theBiz.setAttribute("id", "theBiz");
        theBiz.setAttribute("class", "griditems");

        theBiz.appendChild(bizName);
        theBiz.appendChild(theIcon);
        theBiz.appendChild(phone);
        theBiz.appendChild(inputBut);
        

        myDiv = document.getElementById("myData");

        
        myDiv.appendChild(theBiz);
        }


 }); 


 var elements = document.getElementsByClassName("griditems");
 var container = document.getElementByClassName("myData");

// Declare a loop variable
var i;

// List View
function listView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "100%";
  }
}

// Grid View
function gridView() {



  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "30%";

  }
}