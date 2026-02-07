async function loadProducts(){
 const r = await fetch("products.json");
 const data = await r.json();

 const grid = document.getElementById("products");
 if(!grid) return;

 grid.innerHTML="";

 data.forEach(p=>{
  grid.innerHTML += `
  <div class="card">
    <img src="${p.image}" style="width:100%;border-radius:12px">
    <h3>${p.name}</h3>
    <p>${p.desc}</p>
    <h2>$${p.price}</h2>
    <a class="btn" href="product.html?id=${p.id}">View</a>
  </div>`;
 });
}

loadProducts();
