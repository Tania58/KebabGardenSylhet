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
$("#sizzlingTawaDishLink").click(function () {
    $(".MenuBlock").hide();
    $(".PopupClass").hide("slow");
    $("#sizzlingTawaDishPopup").show("slow");
});
$("#kidsCornerLink").click(function () {
    $(".MenuBlock").hide();
    $(".PopupClass").hide("slow");
    $("#kidsCornerPopup").show("slow");
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

// let carts=document.querySelectorAll('.add-cart');
// let products=[
//     {
//         name:'Gray shirt',
//         tag:'odododo',
//         price:2,
//         inCart:0
//     },

//     {
//         name:'Gray pant',
//         tag:'odododo',
//         price:4,
//         inCart:0
//     },
//     {
//         name:'Gray shari',
//         tag:'odododo',
//         price:8,
//         inCart:0
//     }
// ];
// for (let i=0;i<carts.length;i++){
//     carts[i].addEventListener('click',()=>{
//        // console.log("Item added");
//         //document.querySelectorAll('.cart span').innerHTML=carts;
//         cartNumbers(products[i]);
//         totalCost(products[i]);
//     })
// }

// function onLoadCartNumbers(){
//     let productNumbers=localStorage.getItem('cartNumbers');
//     if(productNumbers){
//         document.querySelector('.cart span').textContent=1;
//     }
// }

// function cartNumbers(product){
//     //console.log('the product clicked is',product)
//     let productNumbers=localStorage.getItem('cartNumbers');

//     productNumbers=parseInt(productNumbers);
//     localStorage.setItem('cartNumbers',1);

//     if(productNumbers){
//         localStorage.setItem('cartNumbers',productNumbers + 1);
//         document.querySelector('.cart span').textContent=productNumbers + 1;
//     }
//     else{
//         localStorage.setItem('cartNumbers',1);
//         document.querySelector('.cart span').textContent= 1;
//     }
//   setItems(product);
    
// }


// function setItems(product){

//     let cartItems=localStorage.getItem('productInCart');
//     //console.log('my cart item is',cartItems);
//     cartItems=JSON.stringify(cartItems);

//     if(cartItems != null){
//         console.log(cartItems[product.tag]);

//         if(cartItems[product.tag] == undefined){
//             cartItems={
//                ... cartItems,
//                 [product.tag]:product
//             }
//         }

//         //cartItems['gray shirt'] first product incart number
//         cartItems[product.tag].inCart += 1;

//     }
//     else{
//         product.inCart*1;//incart=1
//         cartItems={
//             [product.tag]:product
//         }
        

//     }

//     //console.log('My cartItem is ',cartItems);
//     // console.log("Inside of setItems funtion");
//     // console.log("My product is",product);
  

//     localStorage.setItems("productInCart",JSON.stringify(cartItems));
    
// }
// // total cost dosnt showing
// function totalCost(product){
//    //console.log("The product price is",product.price);
//     let cartCost=localStorage.getItem('totalCost');
   
//     console.log("My CartCost is ",cartCost);
//     console.log(typeof cartCost);

//     if(cartCost != null){
//         cartCost=parseInt(cartCost);
//         localStorage.setItem('totalCost',cartCost + product.price);
//     }
//     else{
//        localStorage.setItem('totalCost',product.price); 
//     }
   
// }

// function displayCart(){
//     let cartItems=localStorage.getItem('productInCart');
//     //console.log(cartItems) Cart item null show kore.Product display hoy na
//     cartItems=JSON.parse(cartItems);
//     let productContainer=document.querySelector('.products');
//     let cartCost=localStorage.getItem('totalCost');
    
//     console.log(cartItems);
//     console.log('running');

//     if(cartItems && productContainer){
//         productContainer.innerHTML='';
//         Object.values(cartItems).map(item => {
//             productContainer.innerHTML += `<div class="products"><ion-ion name="close-circle"></ion-ion>
//             <img src="./image/${item.tag}.jpg">
//             <span>${item.name}</span>
//             </div>
//             <div class="price">$${item.price}00</div>
//             <div class="quantity">
//             <ion-icon class="decrease" name="arrow-dropleft-circle"></ion-icon><span>${item.inCart}</span>
//             <ion-icon class="decrease" name="arrow-droprightt-circle"></ion-icon></div><div class="total">
//              $${item.inCart * item.price}00</div>
//              `;
//         });//increase decease item quantity code

//         productContainer.innerHTML += `<div class="basketTotalContainer"><h4 class="basketTotalTitle">Basket Total</h4>
//         <h4 class="basketTotal">$${cartCost}00</h4></div>`
//     }

// }

// onLoadCartNumbers();
// displayCart();

// ADD TO CART END HERE

// ************************************************
// Shopping Cart API https://codepen.io/chrisachinga/pen/MWwrZLJ
// ************************************************

var shoppingCart = (function() {
  // =============================
  // Private methods and propeties
  // =============================
  cart = [];
  
  // Constructor
  function Item(name, price, count) {
    this.name = name;
    this.price = price;
    this.count = count;
  }
  
  // Save cart
  function saveCart() {
    sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
  }
  
    // Load cart
  function loadCart() {
    cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
  }
  if (sessionStorage.getItem("shoppingCart") != null) {
    loadCart();
  }
  

  // =============================
  // Public methods and propeties
  // =============================
  var obj = {};
  
  // Add to cart
  obj.addItemToCart = function(name, price, count) {
    for(var item in cart) {
      if(cart[item].name === name) {
        cart[item].count ++;
        saveCart();
        return;
      }
    }
    var item = new Item(name, price, count);
    cart.push(item);
    saveCart();
  }
  // Set count from item
  obj.setCountForItem = function(name, count) {
    for(var i in cart) {
      if (cart[i].name === name) {
        cart[i].count = count;
        break;
      }
    }
  };
  // Remove item from cart
  obj.removeItemFromCart = function(name) {
      for(var item in cart) {
        if(cart[item].name === name) {
          cart[item].count --;
          if(cart[item].count === 0) {
            cart.splice(item, 1);
          }
          break;
        }
    }
    saveCart();
  }

  // Remove all items from cart
  obj.removeItemFromCartAll = function(name) {
    for(var item in cart) {
      if(cart[item].name === name) {
        cart.splice(item, 1);
        break;
      }
    }
    saveCart();
  }

  // Clear cart
  obj.clearCart = function() {
    cart = [];
    saveCart();
  }

  // Count cart 
  obj.totalCount = function() {
    var totalCount = 0;
    for(var item in cart) {
      totalCount += cart[item].count;
    }
    return totalCount;
  }

  // Total cart
  obj.totalCart = function() {
    var totalCart = 0;
    for(var item in cart) {
      totalCart += cart[item].price * cart[item].count;
    }
    return Number(totalCart.toFixed(2));
  }

  // List cart
  obj.listCart = function() {
    var cartCopy = [];
    for(i in cart) {
      item = cart[i];
      itemCopy = {};
      for(p in item) {
        itemCopy[p] = item[p];

      }
      itemCopy.total = Number(item.price * item.count).toFixed(2);
      cartCopy.push(itemCopy)
    }
    return cartCopy;
  }

  // cart : Array
  // Item : Object/Class
  // addItemToCart : Function
  // removeItemFromCart : Function
  // removeItemFromCartAll : Function
  // clearCart : Function
  // countCart : Function
  // totalCart : Function
  // listCart : Function
  // saveCart : Function
  // loadCart : Function
  return obj;
})();


// *****************************************
// Triggers / Events
// ***************************************** 
// Add item
$('.add-to-cart').click(function(event) {
  event.preventDefault();
  var name = $(this).data('name');
  var price = Number($(this).data('price'));
  shoppingCart.addItemToCart(name, price, 1);
  displayCart();
});

// Clear items
$('.clear-cart').click(function() {
  shoppingCart.clearCart();
  displayCart();
});


function displayCart() {
  var cartArray = shoppingCart.listCart();
  var output = "";
  for(var i in cartArray) {
    output += "<tr>"
      + "<td>" + cartArray[i].name + "</td>" 
      + "<td>(" + cartArray[i].price + ")</td>"
      + "<td><div class='input-group'><button class='minus-item input-group-addon btn btn-primary' data-name=" + cartArray[i].name + ">-</button>"
      + "<input type='number' class='item-count form-control' data-name='" + cartArray[i].name + "' value='" + cartArray[i].count + "'>"
      + "<button class='plus-item btn btn-primary input-group-addon' data-name=" + cartArray[i].name + ">+</button></div></td>"
      + "<td><button class='delete-item btn btn-danger' data-name=" + cartArray[i].name + ">X</button></td>"
      + " = " 
      + "<td>" + cartArray[i].total + "</td>" 
      +  "</tr>";
  }
  $('.show-cart').html(output);
  $('.total-cart').html(shoppingCart.totalCart());
  $('.total-count').html(shoppingCart.totalCount());
}

// Delete item button

$('.show-cart').on("click", ".delete-item", function(event) {
  var name = $(this).data('name')
  shoppingCart.removeItemFromCartAll(name);
  displayCart();
})


// -1
$('.show-cart').on("click", ".minus-item", function(event) {
  var name = $(this).data('name')
  shoppingCart.removeItemFromCart(name);
  displayCart();
})
// +1
$('.show-cart').on("click", ".plus-item", function(event) {
  var name = $(this).data('name')
  shoppingCart.addItemToCart(name);
  displayCart();
})

// Item count input
$('.show-cart').on("change", ".item-count", function(event) {
   var name = $(this).data('name');
   var count = Number($(this).val());
  shoppingCart.setCountForItem(name, count);
  displayCart();
});

displayCart();
                  


