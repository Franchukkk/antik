const products = [
    {
        "id": 1,
        "name": "Вінтажний грамофон",
        "description": "Рідкісний грамофон 1920-х років з бронзовим рупором та механізмом ручного заводу. Чудово збережений стан.",
        "images": ["img/product-card-image.jpeg", "img/product-card-image2.jpeg", "img/product-card-image3.jpeg", "img/product-card-image4.jpeg"],
        "category": "Electronics",
        "price": 100
    },
    {
        "id": 2,
        "name": "Антикварний секретер",
        "description": "Елегантний секретер XIX століття з червоного дерева, з потайними шухлядами та оригінальною фурнітурою.",
        "images": ["img/product-card-image.jpeg", "img/product-card-image2.jpeg", "img/product-card-image3.jpeg", "img/product-card-image4.jpeg"],
        "category": "Electronics",
        "price": 150,
        "rating": 1,
    },
    {
        "id": 3,
        "name": "Старовинний годинник",
        "description": "Настінний годинник епохи модерн з ручним розписом та позолоченим маятником, виготовлений у Відні.",
        "images": ["img/product-card-image.jpeg", "img/product-card-image2.jpeg", "img/product-card-image3.jpeg", "img/product-card-image4.jpeg"],
        "category": "Clocks",
        "price": 200
    },
    {
        "id": 4,
        "name": "Раритетний чайник",
        "description": "Порцеляновий чайник кінця XIX століття з ручним розписом та золотим декором.",
        "images": ["img/product-card-image.jpeg", "img/product-card-image2.jpeg", "img/product-card-image3.jpeg", "img/product-card-image4.jpeg"],
        "category": "Clocks",
        "price": 250
    },
    {
        "id": 5,
        "name": "Бронзовий канделябр",
        "description": "Вишуканий п'ятисвічковий канделябр XVIII століття, прикрашений рельєфними орнаментами.",
        "images": ["img/product-card-image.jpeg", "img/product-card-image2.jpeg", "img/product-card-image3.jpeg", "img/product-card-image4.jpeg"],
        "category": "Clocks",
        "price": 300
    },
    {
        "id": 6,
        "name": "Антикварне дзеркало",
        "description": "Венеціанське дзеркало XIX століття в позолоченій рамі з ручним різьбленням.",
        "images": ["img/product-card-image.jpeg", "img/product-card-image2.jpeg", "img/product-card-image3.jpeg", "img/product-card-image4.jpeg"],
        "category": "Clocks",
        "price": 350
    },
    {
        "id": 7,
        "name": "Порцеляновий сервіз",
        "description": "Колекційний сервіз Мейсенської мануфактури на 12 персон з унікальним квітковим орнаментом.",
        "images": ["img/product-card-image.jpeg", "img/product-card-image2.jpeg", "img/product-card-image3.jpeg", "img/product-card-image4.jpeg"],
        "category": "Dishes",
        "price": 400
    },
    {
        "id": 8,
        "name": "Старовинна ваза",
        "description": "Китайська порцелянова ваза династії Цін з традиційним розписом та печаткою майстра.",
        "images": ["img/product-card-image.jpeg", "img/product-card-image2.jpeg", "img/product-card-image3.jpeg", "img/product-card-image4.jpeg"],
        "category": "Dishes",
        "price": 450,
        "rating": 1,
    },
    {
        "id": 9,
        "name": "Срібний столовий набір",
        "description": "Розкішний столовий набір 1890-х років, виготовлений зі срібла 925 проби з гравіруванням.",
        "images": ["img/product-card-image.jpeg", "img/product-card-image2.jpeg", "img/product-card-image3.jpeg", "img/product-card-image4.jpeg"],
        "category": "Dishes",
        "price": 500
    },
    {
        "id": 10,
        "name": "Антикварний самовар",
        "description": "Мідний самовар 1880 року виробництва тульських майстрів з оригінальними клеймами.",
        "images": ["img/product-card-image.jpeg", "img/product-card-image2.jpeg", "img/product-card-image3.jpeg", "img/product-card-image4.jpeg"],
        "category": "Dishes",
        "price": 550
    },
    {
        "id": 11,
        "name": "Старовинний глобус",
        "description": "Настільний глобус 1920-х років на дерев'яній підставці з латунними елементами.",
        "images": ["img/product-card-image.jpeg", "img/product-card-image2.jpeg", "img/product-card-image3.jpeg", "img/product-card-image4.jpeg"],
        "category": "Models",
        "price": 600
    },
    {
        "id": 12,
        "name": "Антикварна картина",
        "description": "Олійний живопис XIX століття в оригінальній позолоченій рамі, пейзаж невідомого майстра.",
        "images": ["img/product-card-image.jpeg", "img/product-card-image2.jpeg", "img/product-card-image3.jpeg", "img/product-card-image4.jpeg"],
        "category": "Art",
        "price": 650
    },
    {
        "id": 13,
        "name": "Старовинна скульптура",
        "description": "Бронзова скульптура початку XX століття, підписана відомим французьким майстром.",
        "images": ["img/product-card-image.jpeg", "img/product-card-image2.jpeg", "img/product-card-image3.jpeg", "img/product-card-image4.jpeg"],
        "category": "Art",
        "price": 700
    },
    {
        "id": 14,
        "name": "Вінтажний гобелен",
        "description": "Ручної роботи гобелен кінця XIX століття з зображенням міфологічних сцен.",
        "images": ["img/product-card-image.jpeg", "img/product-card-image2.jpeg", "img/product-card-image3.jpeg", "img/product-card-image4.jpeg"],
        "category": "Art",
        "price": 750
    },
    {
        "id": 15,
        "name": "Антикварна ікона",
        "description": "Православна ікона XVIII століття, писана на дереві темперними фарбами.",
        "images": ["img/product-card-image.jpeg", "img/product-card-image2.jpeg", "img/product-card-image3.jpeg", "img/product-card-image4.jpeg"],
        "category": "Art",
        "price": 800
    },
    {
        "id": 16,
        "name": "Раритетний телефон",
        "description": "Настільний телефонний апарат початку XX століття з латуні та бакеліту.",
        "images": ["img/product-card-image.jpeg", "img/product-card-image2.jpeg", "img/product-card-image3.jpeg", "img/product-card-image4.jpeg"],
        "category": "Electronics",
        "price": 850
    },
    {
        "id": 17,
        "name": "Антикварний компас",
        "description": "Морський компас XIX століття в латунному корпусі з оригінальним футляром.",
        "images": ["img/product-card-image.jpeg", "img/product-card-image2.jpeg", "img/product-card-image3.jpeg", "img/product-card-image4.jpeg"],
        "category": "Other",
        "price": 900
    },
    {
        "id": 18,
        "name": "Старовинна шкатулка",
        "description": "Дерев'яна шкатулка XVIII століття з інкрустацією перламутром та потайним механізмом.",
        "images": ["img/product-card-image.jpeg", "img/product-card-image2.jpeg", "img/product-card-image3.jpeg", "img/product-card-image4.jpeg"],
        "category": "Other",
        "price": 950
    },
    {
        "id": 19,
        "name": "Антикварний годинник-брегет",
        "description": "Кишеньковий годинник 1850-х років з золотим корпусом та складним механізмом.",
        "images": ["img/product-card-image.jpeg", "img/product-card-image2.jpeg", "img/product-card-image3.jpeg", "img/product-card-image4.jpeg"],
        "category": "Other",
        "price": 1000
    },
    {
        "id": 20,
        "name": "Старовинний підсвічник",
        "description": "Срібний підсвічник XVII століття з гербом аристократичної родини.",
        "images": ["img/product-card-image.jpeg", "img/product-card-image2.jpeg", "img/product-card-image3.jpeg", "img/product-card-image4.jpeg"],
        "category": "Other",
        "price": 1050
    }
  ];