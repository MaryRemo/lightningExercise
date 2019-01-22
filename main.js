// Setup a simple application with just index.html and main.js (no browserify/grunt and no React).

// 1) This application should display the current date & time on the DOM
// 2) There should be a button that when clicked, updates the current date & time on the DOM
// 3) Push it up to Github 
// 4) Once you are finished, slack Emily or Leah your repo link

// *notes: this is a simple web application, so you will need to run the http server


const time = () => {
        let date = new Date(); 
        
        let dateOutput = document.getElementById("output")
        
        let p = document.createElement("p");
        p.textContent = date;
        
        dateOutput.appendChild(p);

        let timeButton = document.createElement("button");
        timeButton.textContent = "Add Time";
        timeButton.setAttribute("class", "updateTime");
        
        dateOutput.appendChild(timeButton);
        dateOutput.appendChild(p);
        
        timeButton.addEventListener("click", ()=> {
            dateOutput.textContent="";
            time();
        });
        
  
}
// let myTime = document.createElement("TIME");
time();
