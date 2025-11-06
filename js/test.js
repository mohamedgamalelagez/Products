var pn = document.getElementById("pn");
var pp = document.getElementById("pp");
var pc = document.getElementById("pc");
var pd = document.getElementById("pd");
var allProducts = [];
if(localStorage.getItem("addProducts") != null){
  allProducts = JSON.parse(localStorage.getItem("addProducts"));
  displayAllProduct();
    
}
var currentIndex = null;
function addProduct() {
  var product = {
    Name: pn.value.trim(),
    Price: Number(pp.value.trim()),
    Category: pc.value.trim(),
    Description: pd.value.trim(),
  };
  if (currentIndex === null) {
    allProducts.push(product);
    localStorage.setItem("addProducts", JSON.stringify(allProducts));
  } else {
    allProducts[currentIndex] = product;
    currentIndex = null;
    document.getElementById("addProduct").textContent = "add-product";
  }
  clearForm();
  displayAllProduct();
}

function clearForm() {
  pn.value = "";
  pp.value = "";
  pc.value = "";
  pd.value = "";
}

function displayAllProduct() {
  var cartoona = "";
  console.log(allProducts);
  for (var i = 0; i < allProducts.length; i++) {
    cartoona += `<tr>
                <td>${i + 1}</td>
                <td>${allProducts[i].Name}</td>
                <td>${allProducts[i].Price}</td>
                <td>${allProducts[i].Category}</td>
                <td>${allProducts[i].Description}</td>
                <td><button onclick="updateElement(${i})" class="btn btn-warning">Update</button></td>
                <td><button onclick="deleteElement(${i})";
                 class="btn btn-danger">delete</button></td>
              </tr>`;
  }
  document.getElementById("tbody").innerHTML = cartoona;
}
function deleteElement(index) {
  allProducts.splice(index, 1);
  localStorage.setItem("addProducts", JSON.stringify(allProducts));
  displayAllProduct();
}

function updateElement(index) {
  var product = allProducts[index];
  pn.value = product.Name.trim();
  pp.value = product.Price;
  pc.value = product.Category.trim();
  pd.value = product.Description.trim();
  currentIndex = index;
  document.getElementById("addProduct").textContent = "upDated";
}
//CRUD operations
//Create
//Read
//Update
//Delete
//search
