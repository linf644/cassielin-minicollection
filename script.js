// console.log("Hi, is it working?")

// load the airtable library, and call it airtable
var Airtable = require("airtable");
// console.log(Airtable);

// connect our airtable base to our website using API key
var base = new Airtable({ apiKey: "key5FuU6aQOHNX1mU" }).base(
  "appOFqp9plsC9AMAo"
);

// get our airtable data, specify how to retrieve it
base("sneakers").select({}).eachPage(gotPageOfSneakers, gotAllSneakers);

// an empty array to hold our data
const sneakers = [];

// callback function that receives our data
function gotPageOfSneakers(records, fetchNextPage) {
    console.log("gotPageOfSneakers()");
    // add the records from this page to our books array
    sneakers.push(...records);
    // request more pages
    fetchNextPage();
  }

  // call back function that is called when all pages are loaded
function gotAllSneakers(err) {
    console.log("gotAllSneakers()");
  
    // report an error, you'd want to do something better than this in production
    if (err) {
      console.log("error loading data");
      console.error(err);
      return;
    }
  
    // call functions to log and show the sneakers
    consoleLogSneakers();
    showSneakers();
  }

  // just loop through the sneakers and console.log them
function consoleLogSneakers() {
    console.log("consoleLogSneakers()");
    sneakers.forEach((sneaker) => {
      console.log("Sneaker:", sneaker);
    });
  }

  // loop through the airtable, and display them onto our page
  // loop through the sneakers, create an h2 for each one, and add it to the page
function showSneakers() {
    console.log("showSneakers()");
    sneakers.forEach((sneaker) => {

        // creating new div element
        var sneakerContainer = document.createElement("div");
        sneakerContainer.classList.add("sneaker-container");
        document.querySelector(".container").append(sneakerContainer);
        // adding sneaker name to page
        var sneakerName = document.createElement("h1");
        sneakerName.classList.add("sneaker-name");
        sneakerName.innerText = sneaker.fields.sneaker_name;
        sneakerContainer.append(sneakerName);
        // add snkr color to page
        var color = document.createElement("p");
        color.classList.add("color");
        color.innerText = sneaker.fields.color;
        sneakerContainer.append(color);
        // adding snker img to page
        var sneakerImg = document.createElement("img");
        sneakerImg.classList.add("sneaker-img");
        sneakerImg.src = sneaker.fields.sneaker_img[0].url;
        sneakerContainer.append(sneakerImg);

        // when user hover over the sneaker container
        // background of the container will turn black and text turn white
        // when mouseout set to default
        sneakerContainer.addEventListener("mouseover", function(){
          sneakerContainer.classList.add("active");
          sneakerName.classList.add("active");
          color.classList.add("active");
        });
        sneakerContainer.addEventListener("mouseout", function(){
          sneakerContainer.classList.remove("active");
          sneakerName.classList.remove("active");
          color.classList.remove("active");
        });
        // when user click the sneaker container
        // the images appear or disappear
        sneakerContainer.addEventListener("click", function(){
          sneakerImg.classList.toggle("active");
        });
        // hover over the img and have it bounce
        sneakerImg.addEventListener("mouseover", function(){
          sneakerImg.classList.add("float");
      })
        sneakerImg.addEventListener("mouseout", function(){
            sneakerImg.classList.remove("float");
        })

        // adding brand genre as a class to each container
        var brand = sneaker.fields.brand;
        sneakerContainer.classList.add(brand);
        
        // filter by Nike
        var brandNike = document.querySelector(".nike");
        brandNike.addEventListener("click", function(){
          if (sneakerContainer.classList.contains("nike")) {
            sneakerContainer.style.border = "5px solid #fcbe32";
          } else {
            sneakerContainer.style.border = "1px solid black";
          }
        })
        // filter by AJ
        var brandAj = document.querySelector(".air-jordan");
        brandAj.addEventListener("click", function(){
          if (sneakerContainer.classList.contains("air-jordan")) {
            sneakerContainer.style.border = "5px solid #004e66";
          } else {
            sneakerContainer.style.border = "1px solid black";
          }
        })
        // filter by Adidass
        var brandAdidas = document.querySelector(".adidas");
        brandAdidas.addEventListener("click", function(){
          if (sneakerContainer.classList.contains("adidas")) {
            sneakerContainer.style.border = "5px solid #ff5f2e";
          } else {
            sneakerContainer.style.border = "1px solid black";
          }
        })
    });
  }

        // define the first word
        let firstColor = document.querySelector("#mini");
        // define the second word
        let secondColor = document.querySelector("#sneaker");
        // define the third word
        let thirdColor = document.querySelector("#collection");
        // define body
        let body = document.querySelector("body");
        
        // hover over the first word "mini", and change the background color
        firstColor.addEventListener("mouseover", function(){
            body.style.backgroundColor = "#d9e4dd";
        })
        firstColor.addEventListener("mouseout", function(){
            body.style.backgroundColor = "rgb(225, 229, 237)";
        })
        // hover over the second word "mini", and change the background color
        secondColor.addEventListener("mouseover", function(){
            body.style.backgroundColor = "#faf3dd";
        })
        secondColor.addEventListener("mouseout", function(){
            body.style.backgroundColor = "rgb(225, 229, 237)";
        })
        // hover over the third word "mini", and change the background color
        thirdColor.addEventListener("mouseover", function(){
            body.style.backgroundColor = "#faf4ff";
        })
        thirdColor.addEventListener("mouseout", function(){
            body.style.backgroundColor = "rgb(225, 229, 237)";
        })
  
      