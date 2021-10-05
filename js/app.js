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
      console.log
      div.innerHTML = `
        <div>
            <img class="product-image" src=${image}></img>
            <h3>${product.name}</h3>
            <h5>Price: ${product.price}</h5>
        </div>
        `;
      document.getElementById("all-products").appendChild(div);
    }
};

loadProducts();