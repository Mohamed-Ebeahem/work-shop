var productNameInput = document.getElementById("productName")
var productPriceInput = document.getElementById("productPrice")
var productCategoryInput = document.getElementById("productCategory")
var productDiscriptionInput = document.getElementById("productDiscription")
var searchInput = document.getElementById("searchInput")

var productList = [];
if (localStorage.getItem("Datalist") != null){
    productList = JSON.parse(localStorage.getItem("Datalist"))
    displayData()
}
function addProduct(){
   // console.log(productNameInput.value)
    // console.log(productPriceInput.value)
    // console.log(productCategoryInput.value)
    // console.log(productDiscriptionInput.value)
    var product ={
        name: productNameInput.value,
        price: productPriceInput.value,
        cate: productCategoryInput.value,
        dec: productDiscriptionInput.value
    }
    productList.push(product)
    // console.log(productList)
    localStorage.setItem("Datalist",JSON.stringify(productList))
    displayData()
}
function displayData(){
    var temp=""
    for(var i=0; i<productList.length; i++){
        temp += `
            <tr>
            <td>`+i+`</td>
            <td>`+productList[i].name+`</td>
            <td>`+productList[i].price+`</td>
            <td>`+productList[i].cate+`</td>
            <td>`+productList[i].dec+`</td>
            <td><button onclick="updateProduct(`+i+`)" class="btn btn-outline-warning">Update</button></td>
            <td><button onclick="DeletProduct(`+i+`)" class="btn btn-outline-danger">Delet</button></td>
            </tr>
        `
    }
    document.getElementById("myData").innerHTML = temp
}

function DeletProduct(index){
    productList.splice(index, 1)
    
    displayData()
    localStorage.setItem("Datalist",JSON.stringify(productList))
    // console.log(productList)
}



function search(){
    var searchVal = searchInput.value.toLowerCase()
    
    console.log(searchVal.value)
    // console.log(searchinput.value)
    var temp=""
    for ( var i = 0; i < productList.length; i++){
        if(productList[i].name.toLowerCase().includes(searchVal) == true 
        ||
        productList[i].cate.toLowerCase().includes(searchVal) == true
        ){
            temp += `
            <tr>
            <td>`+i+`</td>
            <td>`+productList[i].name.toLowerCase().replace(searchVal, "<span class='text-danger'>"+searchVal+"</span>") +`</td>
            <td>`+productList[i].price+`</td>
            <td>`+productList[i].cate.toLowerCase().replace(searchVal, "<span class='text-danger'>"+searchVal+"</span>")+`</td>
            <td>`+productList[i].dec+`</td>
            <td><button onclick="updateProduct(`+i+`)" class="btn btn-outline-warning">Update</button></td>
            <td><button onclick="DeletProduct(`+i+`)" class="btn btn-outline-danger">Delet</button></td>
            </tr>
        `
        }
    }
    document.getElementById("myData").innerHTML = temp

}

function clearForm(){
    productNameInput.value=""
    productPriceInput.value=""
    productCategoryInput.value="samsung"
    productDiscriptionInput.value=""
}


function updateProduct(index){
    // console.log(productList[index]);
    productNameInput.value= productList[index].name
    productPriceInput.value= productList[index].price
    productCategoryInput.value= productList[index].cate
    productDiscriptionInput.value= productList[index].dec
    document.getElementById("addProduct").style.display = "none"
    document.getElementById("editProduct").style.display = "inline-block"
    
}





















// var imgList = document.querySelectorAll(".item img")
// var myImage = document.querySelector("#myImage")
// for (var i=0; i<imgList.length; i++){
//     imgList[i].addEventListener("click", function (e){
//         var imgSrc = e.target.getAttribute("src")
//         myImage.setAttribute("src", imgSrc)
//     })
// }

// var img = document.querySelector("img")
// document.addEventListener("mousemove", function (event){
//     img.style.top = event.clientY + "px"
//     img.style.left = event.clientX + "px"
// })





// 26

// let product = {
//     name: "nokia",
//     price: 4000,
//     calcPrice: function () {
//         let calcTaxs = () => {
//             console.log(this);
//             return this.price * 0.10
//         }
//         return this.price + calcTaxs()
//     }
// }

// let res = product.calcPrice()
// console.log(res)