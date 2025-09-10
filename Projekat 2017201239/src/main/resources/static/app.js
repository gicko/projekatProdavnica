function addBrand() {
    const name = document.getElementById('brandName').value;
    fetch('/brands', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name })
    }).then(loadBrands);
}

function addPetFood() {
    const name = document.getElementById('foodName').value;
    const price = parseFloat(document.getElementById('foodPrice').value);
    const brandId = parseInt(document.getElementById('brandId').value);
    fetch('/petfoods', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, price, brand: { id: brandId } })
    }).then(loadPetFoods);
}

function loadBrands() {
    fetch('/brands')
        .then(res => res.json())
        .then(data => {
            const list = document.getElementById('brandList');
            list.innerHTML = '';
            data.forEach(b => {
                const li = document.createElement('li');
                li.textContent = `ID: ${b.id}, Name: ${b.name}`;
                list.appendChild(li);
            });
        });
}

function loadPetFoods() {
    fetch('/petfoods')
        .then(res => res.json())
        .then(data => {
            const list = document.getElementById('foodList');
            list.innerHTML = '';
            data.forEach(f => {
                const li = document.createElement('li');
                li.textContent = `Name: ${f.name}, Price: ${f.price}, Brand ID: ${f.brand.id}`;
                list.appendChild(li);
            });
        });
}

loadBrands();
loadPetFoods();