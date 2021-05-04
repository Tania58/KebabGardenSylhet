//MENU OVERLAY FUNCTION START HERE

$("#kebabGardenMainsLink").click(function () {
    $(".MenuBlock").hide();
    $(".PopupClass").hide("slow");
    $("#kebabGardenMainsPopup").show("slow");
});
$("#tandooriKaKhajanaLink").click(function () {
    $(".MenuBlock").hide();
    $(".PopupClass").hide("slow");
    $("#tandooriKaKhajanaPopup").show("slow");
});
$("#ClassicLink").click(function () {
    $(".MenuBlock").hide();
    $(".PopupClass").hide("slow");
    $("#ClassicPopup").show("slow");
});
$("#SouthLink").click(function () {
    $(".MenuBlock").hide();
    $(".PopupClass").hide("slow");
    $("#SouthPopup").show("slow");
});
$("#BaltiLink").click(function () {
    $(".MenuBlock").hide();
    $(".PopupClass").hide("slow");
    $("#BaltiPopup").show("slow");
});
$("#BiryaniLink").click(function () {
    $(".MenuBlock").hide();
    $(".PopupClass").hide("slow");
    $("#BiryaniPopup").show("slow");
});
$("#AgraLink").click(function () {
    $(".MenuBlock").hide();
    $(".PopupClass").hide("slow");
    $("#AgraPopup").show("slow");
});
$("#FusionLink").click(function () {
    $(".MenuBlock").hide();
    $(".PopupClass").hide("slow");
    $("#FusionPopup").show("slow");
});
$("#VegLink").click(function () {
    $(".MenuBlock").hide();
    $(".PopupClass").hide("slow");
    $("#VegPopup").show("slow");
});
$("#VegSidesLink").click(function () {
    $(".MenuBlock").hide();
    $(".PopupClass").hide("slow");
    $("#VegSidesPopup").show("slow");
});
$("#RicesLink").click(function () {
    $(".MenuBlock").hide();
    $(".PopupClass").hide("slow");
    $("#RicesPopup").show("slow");
});
$("#SetMealsLink").click(function () {
    $(".MenuBlock").hide();
    $(".PopupClass").hide("slow");
    $("#SetMealsPopup").show("slow");
});
$("#BreadLink").click(function () {
    $(".MenuBlock").hide();
    $(".PopupClass").hide("slow");
    $("#BreadPopup").show("slow");
});
$("#SundriesLink").click(function () {
    $(".MenuBlock").hide();
    $(".PopupClass").hide("slow");
    $("#SundriesPopup").show("slow");
});
$("#DrinksLink").click(function () {
    $(".MenuBlock").hide();
    $(".PopupClass").hide("slow");
    $("#DrinksPopup").show("slow");
});
$(".ClosePopup").click(function () {
    $(".PopupClass").hide()
    $(".MenuBlock").show("slow")
});
// $(".OrderButton").click(function () {
//     $(".PopupClass").hide()
//     $("#PleaseWait").show();
// });

//MENU OVERLAY FUNCTION END HERE/////

// ADD TO CART FUNCTION START

let carts=document.querySelectorAll('.add-cart');
let products=[
    {
        name:'Gray shirt',
        tag:'odododo',
        price:2,
        inCart:0
    },

    {
        name:'Gray pant',
        tag:'odododo',
        price:4,
        inCart:0
    },
    {
        name:'Gray shari',
        tag:'odododo',
        price:8,
        inCart:0
    }
];
for (let i=0;i<carts.length;i++){
    carts[i].addEventListener('click',()=>{
       // console.log("Item added");
        //document.querySelectorAll('.cart span').innerHTML=carts;
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

function onLoadCartNumbers(){
    let productNumbers=localStorage.getItem('cartNumbers');
    if(productNumbers){
        document.querySelector('.cart span').textContent=1;
    }
}

function cartNumbers(product){
    //console.log('the product clicked is',product)
    let productNumbers=localStorage.getItem('cartNumbers');

    productNumbers=parseInt(productNumbers);
    localStorage.setItem('cartNumbers',1);

    if(productNumbers){
        localStorage.setItem('cartNumbers',productNumbers + 1);
        document.querySelector('.cart span').textContent=productNumbers + 1;
    }
    else{
        localStorage.setItem('cartNumbers',1);
        document.querySelector('.cart span').textContent= 1;
    }
  setItems(product);
    
}


function setItems(product){

    let cartItems=localStorage.getItem('productsInCart');
    //console.log('my cart item is',cartItems);
    cartItems=JSON.parse(cartItems);

    if(cartItems != null){
        console.log(cartItems[product.tag]);

        if(cartItems[product.tag] == undefined){
            cartItems={
                ...cartItems,
                [product.tag]:product
            }
        }

        //cartItems['gray shirt'] first product incart number
        cartItems[product.tag].inCart += 1;

    }
    else{
        product.inCart=1;
        cartItems={
            [product.tag]:product
        }
        

    }

    //console.log('My cartItem is ',cartItems);
    // console.log("Inside of setItems funtion");
    // console.log("My product is",product);
  

    localStorage.setItem("productsInCart",JSON.stringify(cartItems));
    
}
// total cost dosnt showing
function totalCost(product){
   //console.log("The product price is",product.price);
    let cartCost=localStorage.getItem('totalCost');
   
    console.log("My CartCost is ",cartCost);
    console.log(typeof cartCost);

    if(cartCost != null){
        cartCost=parseInt(cartCost);
        localStorage.setItem('totalCost',cartCost + product.price);
    }
    else{
       localStorage.setItem('totalCost',product.price); 
    }
   
}

function displayCart(){
    let cartItems=localStorage.getItem('productInCart');
    cartItems=JSON.parse(cartItems);
    let productContainer=document.querySelector('.products');
    let cartCost=localStorage.getItem('totalCost');
    
    console.log(cartItems);
    //console.log('running');

    if(cartItems && productContainer){
        productContainer.innerHTML='';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `<div class="products"><ion-ion name="close-circle"></ion-ion>
            <img src="./image/${item.tag}.jpg">
            <span>${item.name}</span>
            </div>
            <div class="price">$${item.price}00</div>
            <div class="quantity">
            <ion-icon class="decrease" name="arrow-dropleft-circle"></ion-icon><span>${item.inCart}</span>
            <ion-icon class="decrease" name="arrow-droprightt-circle"></ion-icon></div><div class="total">
             $${item.inCart * item.price}00</div>
             `;
        });//increase decease item quantity code

        productContainer.innerHTML += `<div class="basketTotalContainer"><h4 class="basketTotalTitle">Basket Total</h4>
        <h4 class="basketTotal">$${cartCost}00</h4></div>`
    }

}

onLoadCartNumbers();
displayCart();

// ADD TO CART END HERE


