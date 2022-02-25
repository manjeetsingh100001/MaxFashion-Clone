let data=JSON.parse(localStorage.getItem("mensdata"))||[]
displayData(data)
var cartarr=localStorage.getItem("cartproducts1")||[]
var detailarr=localStorage.getItem("details")||[]
function sortbyprices() {
     let select=document.getElementById("sortPricez");
     if(select.value=="Low") {
           data.sort(function(a,b){return a.price - b.price;});
     }
     if(select.value=="High") {
           data.sort(function(a,b){return b.price - a.price;});
     }
  //    if(select.value=="default")
  //    {
  //        women_kurti.sort(function(){return women_kurti})
  //     // displayData(women_kurti);
  //    }

     displayData(data);
     console.log("men_tees:",data);

 }
 function displayData(data){
    let maincontainer=document.querySelector("#zeus")
    maincontainer.innerHTML=""
data.forEach((elem) => {
    let maindiv=document.createElement("div")
maindiv.setAttribute("id","maindiv")
  
   let div1=document.createElement("div")
   div1.setAttribute("class","container")
   div1.addEventListener("dblclick",function(){
      detail(elem)
  })
   let image=document.createElement("img")
   image.src=elem.image_url
   let p1=document.createElement("h4")
   p1.textContent=elem.Symbol+elem.price
   let h5=document.createElement("p")
   h5.textContent=elem.category
   
   div1.append(image,p1,h5)
   let div2=document.createElement("div")
   div2.setAttribute("id","basketbutton")
   let button=document.createElement("button")
   button.setAttribute("id","hideseek")
   button.textContent="ADD TO BASKET"
   button.addEventListener("click",function(){
       cart(elem)
   })
   div2.append(button)
   maindiv.append(div1,div2)
   maincontainer.append(maindiv)
});
}
function cart(elem){
    cartarr.push(elem)
    localStorage.setItem("cartproducts",JSON.stringify(cartarr))
}
function detail(elem){
    detailarr=[]
    detailarr.push(elem)
    localStorage.setItem("details",JSON.stringify(detailarr))
    window.location.href="detailpage.html"
}
