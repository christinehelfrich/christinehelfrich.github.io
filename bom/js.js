document.getElementById("mybtn").addEventListener("click", function() {
    let chapterinput = document.getElementById("chapter").value;

    if (chapterinput !=="") {
        const newBTN = document.createElement("button");
        newBTN.innerHTML = "\u274C";

        const newLI = document.createElement("li");
        newLI.textContent = chapterinput;
        newLI.appendChild(newBTN);

        document.getElementById("mylist").appendChild(newLI);

        document.getElementById("chapter").value = "";

        newBTN.addEventListener("click", function() {
            document.getElementById("mylist").removeChild(newLI);
        });
    }

    

});

focus();





