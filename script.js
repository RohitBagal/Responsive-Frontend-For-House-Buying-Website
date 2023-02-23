let products = {
    data: [
      {
        productName: "Single-Family (Detached)",
        category: "1BHK",
        price: "50 Lakh",
        image: "img/Single-Family (Detached).jpg",
      },
      {
        productName: "Townhome",
        category: "2BHK",
        price: "70 Lakh",
        image: "img/Townhome.jpg",
      },
      {
        productName: " Contemporary 4BHK",
        category: "4BHK",
        price: "1.5 crore",
        image: "img/Contemporary 4BHK.jpg",
      },
      {
        productName: "Midcentury Modern",
        category: "1BHK",
        price: "29 Lakh",
        image: "img/Midcentury Modern.jpg",
      },
      {
        productName: "Farmhouse 3BHK",
        category: "3BHK",
        price: "1.2 crore",
        image: "img/Farmhouse 3BHK.jpg",
      },
      {
        productName: "Modern Home",
        category: "2BHK",
        price: "89 Lakh",
        image: "img/modern home.jpg",
      },
      {
        productName: "Brown Men's 3BHK",
        category: "3BHK",
        price: "99 Lakh",
        image: "img/Beautiful White Home.jpg",
      },
      {
        productName: "Comfy Gray Pants",
        category: "4BHK",
        price: "1.9 crore",
        image: "img/Home Near River.jpg",
      },
    ],
  };
  
  for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = i.price;
    container.appendChild(price);

    //button
    let button = document.createElement("button");
    button.innerText = "Checkout Now";
    button.addEventListener ("click", function() {
        open("description.html");
      });
    container.appendChild(button);


    

    
  
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
  
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });
  
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };
  