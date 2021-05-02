var menuClick = document.querySelectorAll(".menuBlock");
var menuItems = document.querySelectorAll(".PopupClass");
for(var i=0;i<menuClick.length;i++){
  menuClick[i].addEventListener("click",function(){
    menuClick.forEach(function(menuBtn){
      menuBtn.classList.remove("active");
    })
this.classList.add("active");
var menuBtn_value=this.getAttribute("data-li");
menuItems.forEach(function(hide)
{
hide.style.display="none";
})//by clicking menuBtn PopupClass display eill be none

 // alert("menuBtn_value");
  //
if(menuBtn_value==="kebabGardenMains"){
 
  document.querySelector("."+ menuBtn_value).style.display="block";
}
else if(menuBtn_value=="tandooriKaKhajana"){
  
  document.querySelector("."+ menuBtn_value).style.display="block";
}
else{
  console.log("");
}
  });
}

//Add to chart another one start
inames=[]
iqtyp=[]
iprice=[]
function addItem(){
    inames.push(document.getElementById('pname').value)
    iqtyp.push(parseInt(document.getElementById('pqty').value))
    iprice.push(parseInt(document.getElementById('price').value))
    
    displayCart()

}

function displayCart(){
    cartdata='<table><tr><th>Product Name</th><th>Quantity</th><th>Price</th><th>Total</th></tr>';

    total=0;
    for(i=0;i<inames.length;i++){
        total+=iqtyp[i]*iprice[i]

        cartdata+="<tr><td>"+inames[i]+"</td><td>"+iqtyp[i]+"</td><td>"
        +iprice[i]+"</td><td>"+iqtyp[i]*iprice[i]+"</td><td><button onclick='delElement(" + i + ")'>Delete</button></td></tr>"
    }


    cartdata+='<tr><td></td><td></td><td></td><td>'+total+'</td></tr></table>'
    document.getElementById('cart').innerHTML=cartdata
}

function delElement(a){
    inames.splice(a,1)
    iqtyp.splice(a,1)
    iprice.splice(a,1)
    displayCart()
}

    
//Add to chart another one 