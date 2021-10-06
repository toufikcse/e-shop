const loadProducts = () => {
    const data = [
        {
            "id": 1,
            "name": "Mac Book",
            "price": 109.95,
            "image": "https://agbd.s3.amazonaws.com/media/images/Macbook-Aidr--M1-d-1.jpg",
        },
        {
            "id": 2,
            "name": "Asus ",
            "price": 500.2,
            "image": "https://agbd.s3.amazonaws.com/media/images/Macbook-Aidr--M1-d-1.jpg",
        },
        {
            "id": 3,
            "name": "Dell",
            "price": 420.4,
            "image": "https://agbd.s3.amazonaws.com/media/images/Macbook-Aidr--M1-d-1.jpg",
        },
        {
            "id": 4,
            "name": "Lenevo",
            "price": 802.60,
            "image": "https://agbd.s3.amazonaws.com/media/images/Macbook-Aidr--M1-d-1.jpg",
        },
        {
            "id": 5,
            "name": "Mac Air",
            "price": 410,
            "image": "https://agbd.s3.amazonaws.com/media/images/Macbook-Aidr--M1-d-1.jpg",
        },
        {
            "id": 6,
            "name": "Samsung",
            "price": 510.5,
            "image": "https://agbd.s3.amazonaws.com/media/images/Macbook-Aidr--M1-d-1.jpg",
        },
        {
            "id": 7,
            "name": "Sony vio",
            "price": 640.3,
            "image": "https://agbd.s3.amazonaws.com/media/images/Macbook-Aidr--M1-d-1.jpg",
        },
        {
            "id": 8,
            "name": "Vivo",
            "price": 360.40,
            "image": "https://agbd.s3.amazonaws.com/media/images/Macbook-Aidr--M1-d-1.jpg",
        },
        {
            "id": 9,
            "name": "Accer",
            "price": 780.32,
            "image": "https://agbd.s3.amazonaws.com/media/images/Macbook-Aidr--M1-d-1.jpg",
        },
        {
            "id": 10,
            "name": "Redmi",
            "price": 802.61,
            "image": "https://agbd.s3.amazonaws.com/media/images/Macbook-Aidr--M1-d-1.jpg",
        },
        {
            "id": 11,
            "name": "Dell Vostro",
            "price": 190.51,
            "image": "https://agbd.s3.amazonaws.com/media/images/Macbook-Aidr--M1-d-1.jpg",
        },
        {
            "id": 12,
            "name": "Mac Book",
            "price": 240.35,
            "image": "https://agbd.s3.amazonaws.com/media/images/Macbook-Aidr--M1-d-1.jpg",
        },
        {
            "id": 13,
            "name": "Fujistu",
            "price": 605.90,
            "image": "https://agbd.s3.amazonaws.com/media/images/Macbook-Aidr--M1-d-1.jpg",
        },
        {
            "id": 14,
            "name": "HP",
            "price": 725.14,
            "image": "https://agbd.s3.amazonaws.com/media/images/Macbook-Aidr--M1-d-1.jpg",
        },
        {
            "id": 15,
            "name": "Apple Pro",
            "price": 250.24,
            "image": "https://agbd.s3.amazonaws.com/media/images/Macbook-Aidr--M1-d-1.jpg",
        }
    ];
    showProducts(data);
};

// show all product in UI 
const showProducts = (products) => {
    // console.log('clicked')
    const allProducts = products.map((pd) => pd);
    for (const product of allProducts) {
      const image = product.image;
      const div = document.createElement("div");
      div.classList.add("product");
      div.innerHTML = `
        <button id="btn-card" onclick="addToCart(\'${product.name}\', \'${product.price}\', \'${image}\', \'${product.id}\')">
            <img class="product-image" src=${image}></img>
            <h3>${product.name}</h3>
            <h5>Price: ${product.price}</h5>
        </button>
        `;
      document.getElementById("all-products").appendChild(div);
    }
};

loadProducts();

let idArray = [];
let cartArray = [];
const addToCart = (name, price, image, id) => {
    // console.log(idArray);
    if(idArray.includes(id)) {
        const textcount = document.getElementById(id).innerText;
        let count = parseInt(textcount);
        count = count + 1;
        document.getElementById(id).innerText = count;
    }
    else {
        idArray.push(id);
        const div = document.createElement("div");
        div.classList.add("product");
        div.innerHTML = `
            <div class="added-product">
                <img id="img-cart" class="img-cart-quantity" src="https://agbd.s3.amazonaws.com/media/images/Macbook-Aidr--M1-d-1.jpg" alt="">
                <span id="${id}">1</span>
                <span>${name}</span>
                <span>BDT: ${price}</span>
                <span onclick="removeFromCart(\'${id}\', \'${price}\')">
                    <i id="remove-icon" class="fas fa-trash-alt"></i>
                </span>
                
            </div>
            <hr>
        `;
        document.getElementById('add-products').appendChild(div);
        cartArray.push(id);
        // console.log('cartArray push id = ', id);
    }
    // console.log(idArray);
    subTotal('subtotal', price);
    tax('tax');
    updateTotal();
};

const removeFromCart = (id, price) => {
    // console.log('id = ', id);
    // console.log('cart array before: ', cartArray);
    // console.log('cartArray Length ', cartArray.length);
    // console.log('idArray Length', idArray.length);
    reduce_subTotal(id, price);
    let key = 0;
    for(let i=0; i<cartArray.length; i++) {
        if(cartArray[i] == id){
            key = i;
        }
    }
    // console.log('key = ', key);
    let list = document.getElementById('add-products');
    // console.log(list.childNodes);
    list.removeChild(list.childNodes[key+1]);
    cartArray.splice(key, 1);
    idArray.splice(key, 1);
    // console.log(cartArray);
}

const reduce_subTotal = (id, price) => {
    // console.log(id);
    let price2 = price;
    const textNumberOfProducts = document.getElementById(id).innerText;
    const numberOfProducts = parseInt(textNumberOfProducts);
    price2 = price * numberOfProducts;
    // console.log(price2);
    const preDiscount = getInputValue('discount');
    const preSubtotal = getInputValue('subtotal');
    const discount = (price2/100) * 10;
    const totaldiscount = preDiscount - discount;

    const afterDiscountPrice = (price2/100) * 90;
    const total = preSubtotal - afterDiscountPrice;

    // tax section
    const oldTax = getInputValue('tax');
    const tax = (afterDiscountPrice/100) * 5;
    const finalTax = oldTax - tax;

    if(totaldiscount < 0) {
        document.getElementById('discount').innerText = '0.00';
    }
    else {
        document.getElementById('discount').innerText = totaldiscount.toFixed(2);
    }
    if(total < 0) {
       document.getElementById('subtotal').innerText = '0.00';
    }
    else {
        document.getElementById('subtotal').innerText = /*Math.round(total);*/ total.toFixed(2);
    }
    if(finalTax < 0) {
        document.getElementById('tax').innerText = '0.00';
    }
    else {
        document.getElementById('tax').innerText = finalTax.toFixed(2);
    }
    // Total
    updateTotal();    
}

const getInputValue = (id) => {
    const element = document.getElementById(id).innerText;
    const converted = parseFloat(element);
    return converted;
};

const subTotal = (id, value) => {
    const convertedOldPrice = getInputValue(id);
    const convertPrice = parseFloat(value);
    // discount
    const preDiscount = getInputValue('discount');
    const discount = (convertPrice/100) * 10;
    const totaldiscount = preDiscount + discount;

    const afterDiscountPrice = (convertPrice/100) * 90;
    const total = convertedOldPrice + afterDiscountPrice;
    document.getElementById(id).innerText = /*Math.round(total);*/ total.toFixed(2);
    document.getElementById('discount').innerText = totaldiscount.toFixed(2);
};

const tax = id => {
    const oldTax = getInputValue(id);
    const textSubTotal = getInputValue('subtotal');
    const subTotal = parseFloat(textSubTotal);
    const tax = (subTotal/100) * 5;
    document.getElementById(id).innerText = /*Math.round(total);*/ tax.toFixed(2);
};

//grandTotal update function
const updateTotal = () => {
    const grandTotal = getInputValue("subtotal") + getInputValue("tax");
    document.getElementById("total").innerText = grandTotal.toFixed(2);
    document.getElementById("pay-btn").innerText = grandTotal.toFixed(2);
};
