const products = [
    {
        "id": 1,
        "name": "Product 1",
        "description": "This is the first product.",
        "images": ["img/product-card-image.jpeg", "img/product-card-image2.jpeg", "img/product-card-image3.jpeg", "img/product-card-image4.jpeg"],
        "category": "Electronics",
        "price": 100
    },
    {
        "id": 2,
        "name": "Product 2",
        "description": "This is the second product.",
        "images": ["img/product-card-image.jpeg", "img/product-card-image2.jpeg", "img/product-card-image3.jpeg", "img/product-card-image4.jpeg"],
        "category": "Electronics",
        "price": 150
    },
    {
        "id": 3,
        "name": "Product 3",
        "description": "This is the third product.",
        "images": ["img/product-card-image.jpeg", "img/product-card-image2.jpeg", "img/product-card-image3.jpeg", "img/product-card-image4.jpeg"],
        "category": "Clocks",
        "price": 200
    },
    {
        "id": 4,
        "name": "Product 4",
        "description": "This is the fourth product.",
        "images": ["img/product-card-image.jpeg", "img/product-card-image2.jpeg", "img/product-card-image3.jpeg", "img/product-card-image4.jpeg"],
        "category": "Clocks",
        "price": 250
    },
    {
        "id": 5,
        "name": "Product 5",
        "description": "This is the fifth product.",
        "images": ["img/product-card-image.jpeg", "img/product-card-image2.jpeg", "img/product-card-image3.jpeg", "img/product-card-image4.jpeg"],
        "category": "Clocks",
        "price": 300
    },
    {
        "id": 6,
        "name": "Product 6",
        "description": "This is the sixth product.",
        "images": ["img/product-card-image.jpeg", "img/product-card-image2.jpeg", "img/product-card-image3.jpeg", "img/product-card-image4.jpeg"],
        "category": "Clocks",
        "price": 350
    },
    {
        "id": 7,
        "name": "Product 7",
        "description": "This is the seventh product.",
        "images": ["img/product-card-image.jpeg", "img/product-card-image2.jpeg", "img/product-card-image3.jpeg", "img/product-card-image4.jpeg"],
        "category": "Dishes",
        "price": 400
    },
    {
        "id": 8,
        "name": "Product 8",
        "description": "This is the eighth product.",
        "images": ["img/product-card-image.jpeg", "img/product-card-image2.jpeg", "img/product-card-image3.jpeg", "img/product-card-image4.jpeg"],
        "category": "Dishes",
        "price": 450
    },
    {
        "id": 9,
        "name": "Product 9",
        "description": "This is the ninth product.",
        "images": ["img/product-card-image.jpeg", "img/product-card-image2.jpeg", "img/product-card-image3.jpeg", "img/product-card-image4.jpeg"],
        "category": "Dishes",
        "price": 500
    },
    {
        "id": 10,
        "name": "Product 10",
        "description": "This is the tenth product.",
        "images": ["img/product-card-image.jpeg", "img/product-card-image2.jpeg", "img/product-card-image3.jpeg", "img/product-card-image4.jpeg"],
        "category": "Dishes",
        "price": 550
    },
    {
        "id": 11,
        "name": "Product 11",
        "description": "This is the eleventh product.",
        "images": ["img/product-card-image.jpeg", "img/product-card-image2.jpeg", "img/product-card-image3.jpeg", "img/product-card-image4.jpeg"],
        "category": "Models",
        "price": 600
    },
    {
        "id": 12,
        "name": "Product 12",
        "description": "This is the twelfth product.",
        "images": ["img/product-card-image.jpeg", "img/product-card-image2.jpeg", "img/product-card-image3.jpeg", "img/product-card-image4.jpeg"],
        "category": "Art",
        "price": 650
    },
    {
        "id": 13,
        "name": "Product 13",
        "description": "This is the thirteenth product.",
        "images": ["img/product-card-image.jpeg", "img/product-card-image2.jpeg", "img/product-card-image3.jpeg", "img/product-card-image4.jpeg"],
        "category": "Art",
        "price": 700
    },
    {
        "id": 14,
        "name": "Product 14",
        "description": "This is the fourteenth product.",
        "images": ["img/product-card-image.jpeg", "img/product-card-image2.jpeg", "img/product-card-image3.jpeg", "img/product-card-image4.jpeg"],
        "category": "Art",
        "price": 750
    },
    {
        "id": 15,
        "name": "Product 15",
        "description": "This is the fifteenth product.",
        "images": ["img/product-card-image.jpeg", "img/product-card-image2.jpeg", "img/product-card-image3.jpeg", "img/product-card-image4.jpeg"],
        "category": "Art",
        "price": 800
    },
    {
        "id": 16,
        "name": "Product 16",
        "description": "This is the sixteenth product.",
        "images": ["img/product-card-image.jpeg", "img/product-card-image2.jpeg", "img/product-card-image3.jpeg", "img/product-card-image4.jpeg"],
        "category": "Electronics",
        "price": 850
    },
    {
        "id": 17,
        "name": "Product 17",
        "description": "This is the seventeenth product.",
        "images": ["img/product-card-image.jpeg", "img/product-card-image2.jpeg", "img/product-card-image3.jpeg", "img/product-card-image4.jpeg"],
        "category": "Other",
        "price": 900
    },
    {
        "id": 18,
        "name": "Product 18",
        "description": "This is the eighteenth product.",
        "images": ["img/product-card-image.jpeg", "img/product-card-image2.jpeg", "img/product-card-image3.jpeg", "img/product-card-image4.jpeg"],
        "category": "Other",
        "price": 950
    },
    {
        "id": 19,
        "name": "Product 19",
        "description": "This is the nineteenth product.",
        "images": ["img/product-card-image.jpeg", "img/product-card-image2.jpeg", "img/product-card-image3.jpeg", "img/product-card-image4.jpeg"],
        "category": "Other",
        "price": 1000
    },
    {
        "id": 20,
        "name": "Product 20",
        "description": "This is the twentieth product.",
        "images": ["img/product-card-image.jpeg", "img/product-card-image2.jpeg", "img/product-card-image3.jpeg", "img/product-card-image4.jpeg"],
        "category": "Other",
        "price": 1050
    }
  ];