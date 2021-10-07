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
            "image": "https://www.netstar.com.bd/wp-content/uploads/2020/05/asus-vivobook-15-x512fl-laptop-1-11.jpg",
        },
        {
            "id": 3,
            "name": "Dell",
            "price": 420.4,
            "image": "https://nk1bd.com/wp-content/uploads/2020/07/dell-inspiron-15-3580-1-500x500-1.jpg",
        },
        {
            "id": 4,
            "name": "Lenevo",
            "price": 802.60,
            "image": "https://i.gadgets360cdn.com/products/large/lenovo-thinkpad-plus-900x800-1578416340.jpg",
        },
        {
            "id": 5,
            "name": "Mac Air",
            "price": 410,
            "image": "https://cdn.shopify.com/s/files/1/0471/6039/3896/products/Apple_new-macbookair-m1-istockbd_1.jpg?v=1605037952",
        },
        {
            "id": 6,
            "name": "Samsung",
            "price": 510.5,
            "image": "https://i.gadgets360cdn.com/large/samsung_galaxy_book_s_2020_samsung_1590757082259.jpg?downsize=950:*",
        },
        {
            "id": 7,
            "name": "Sony vio",
            "price": 640.3,
            "image": "https://www.notebookcheck.net/typo3temp/_processed_/e/0/csm_VAIO_F-Serie_von_Sony_13_b579831fb9.jpg",
        },
        {
            "id": 8,
            "name": "Vivo",
            "price": 360.40,
            "image": "https://i.gadgets360cdn.com/products/large/Asus-Vivobook-S14-DB-753x800-1596098689.jpg?downsize=*:180",
        },
        {
            "id": 9,
            "name": "Accer",
            "price": 780.32,
            "image": "https://static.acer.com/up/Resource/Acer/Laptops/Aspire_5/photogallery/20201117/Acer-Aspire-5_A515-56-56G-56S-56T_Non-FP-with-Backlit_Silver_gallery_02.png",
        },
        {
            "id": 10,
            "name": "Redmi",
            "price": 802.61,
            "image": "https://www.kablewala.com.bd/images/thumbnails/715/500/detailed/161/XIAOMI-14235-A.jpg",
        },
        {
            "id": 11,
            "name": "Dell Vostro",
            "price": 190.51,
            "image": "https://i.dell.com/is/image/DellContent/content/dam/global-site-design/product_images/dell_client_products/notebooks/vostro_notebooks/15_3501/pdp/vostro-15-3501-pdp-gallery-504x350-bk.jpg?hei=402&qlt=90,0&op_usm=1.75,0.3,2,0&resMode=sharp&pscan=auto&fmt=pjpg",
        },
        {
            "id": 12,
            "name": "Mac Book",
            "price": 240.35,
            "image": "https://brotherselectronicsbd.com/image/cache/catalog/demo/product/Apple/MacBook%20Pro/Air%20M1/Macbook-Air-M1-1-800x800.png",
        },
        {
            "id": 13,
            "name": "Fujistu",
            "price": 605.90,
            "image": "https://www.fujitsu.com/hk/imagesgig5/W-DK70954_tcm137-5115638_tcm137-5309118-32.png",
        },
        {
            "id": 14,
            "name": "HP",
            "price": 725.14,
            "image": "https://i.gadgets360cdn.com/products/large/hp-pavilion-14-db-1-1200x800-1614153294.jpg?downsize=*:420&output-quality=80",
        },
        {
            "id": 15,
            "name": "Apple Pro",
            "price": 250.24,
            "image": "https://www.notebookcheck.net/fileadmin/_processed_/7/4/csm_IMG_9464_c9bd7b798a.jpg",
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
            <h5>Price: <span id="product-price${product.id}">${product.price}</span></h5>
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

        const key1 = 'product-price' + id;
        // console.log(key1);
        const key2 = 'add-cart-price' + id;
        const oldPrice = getInputValue(key1);
        const newPrice = oldPrice * count;
        document.getElementById(key2).innerText = newPrice.toFixed(2);
    }
    else {
        idArray.push(id);
        const div = document.createElement("div");
        div.classList.add("product");
        div.innerHTML = `
            <div class="added-product">
                <div class="inner-div">
                    <img id="img-cart" src="${image}" alt="">
                    <span class="cart-basket" id="${id}">1</span>
                </div>
                <span>${name}</span>
                <span>BDT <span id="add-cart-price${id}">${price}</span></span>
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

    if(totaldiscount < 1.00) {
        document.getElementById('discount').innerText = '0.00';
    }
    else {
        document.getElementById('discount').innerText = totaldiscount.toFixed(2);
    }
    if(total < 1.00) {
       document.getElementById('subtotal').innerText = '0.00';
    }
    else {
        document.getElementById('subtotal').innerText = /*Math.round(total);*/ total.toFixed(2);
    }
    if(finalTax < 1.00) {
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
    // document.getElementById("total").innerText = grandTotal.toFixed(2);
    // document.getElementById("pay-btn").innerText = grandTotal.toFixed(2);
    if(grandTotal < 1.00){
        document.getElementById("total").innerText = '0.00';
        document.getElementById("pay-btn").innerText = '0.00';
    } 
    else{
        document.getElementById("total").innerText = grandTotal.toFixed(2);
        document.getElementById("pay-btn").innerText = grandTotal.toFixed(2);
    }
};