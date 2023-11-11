const product1 = {
  image: 'images/destniklobouk.jpg',
  name: 'Deštníklobouk',
  description: 'Vynikající pokud si často zapomínáte deštník a nechcete být nikdy překvapeni nečekanou přeháňkou.',
};

const product2 = {
  image: 'images/slepickabelka.jpg',
  name: 'Slepičkabelka',
  description: 'Nejlepší způsob jak zaujmout neotřelou módou v ulíčkách kolem Staroměstkého náměstí.',
};

const product3 = {
  image: 'images/anatoplavky.jpg',
  name: 'Anatoplavky',
  description: 'Aby muži na rozpálených plážích kromě vašeho těla obdivovali také vaše nitro.',
};

/////////////////

const product1HTML = `
<img class="card-img-top" src="${product1.image}" alt="Card image cap">
<div class="card-body">
  <h2 class="card-title">${product1.name}</h2>
  <p class="card-text">${product1.description}</p>
</div>
<button type="button" class="btn btn-lg btn-primary btn-block">Koupit</button>`

const product2HTML = `
<img class="card-img-top" src="${product2.image}" alt="Card image cap">
<div class="card-body">
  <h2 class="card-title">${product2.name}</h2>
  <p class="card-text">${product2.description}</p>
</div>
<button type="button" class="btn btn-lg btn-primary btn-block">Koupit</button>`

const product3HTML = `
<img class="card-img-top" src="${product3.image}" alt="Card image cap">
<div class="card-body">
  <h2 class="card-title">${product3.name}</h2>
  <p class="card-text">${product3.description}</p>
</div>
<button type="button" class="btn btn-lg btn-primary btn-block">Koupit</button>`

/////////////////

const productCard1 = document.querySelector("#product1")
const productCard2 = document.querySelector("#product2")
const productCard3 = document.querySelector("#product3")

/////////////////

productCard1.innerHTML = product1HTML
productCard2.innerHTML = product2HTML
productCard3.innerHTML = product3HTML

/////////////////

/* productCard1.classList.add("border-primary")

const button = document.querySelector("#product2 button")

button.classList.remove("btn-primary")

const cardTitle = document.querySelector("#product3 .card-title")

cardTitle.classList.toggle("text-center") */
