<?php
session_start();
$filename = '../json/products.json';
$promoFilename = '../json/promocodes.json';
$uploadDir = '../img/'; // Директорія для збереження зображень

// Перевірка пароля
if (!isset($_SESSION['authenticated']) || !$_SESSION['authenticated']) {
    if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['password'])) {
        if ($_POST['password'] === '9912') {
            $_SESSION['authenticated'] = true;
        } else {
            $error = "Неправильний пароль. Спробуйте ще раз.";
        }
    }

    if (!isset($_SESSION['authenticated']) || !$_SESSION['authenticated']) {
        ?>
        <!DOCTYPE html>
        <html lang="uk">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Введіть пароль</title>
        </head>
        <body>
        <h1>Доступ до сторінки</h1>
        <form method="POST">
            <label>
                Введіть пароль:<br>
                <input type="password" name="password" required>
            </label><br><br>
            <button type="submit">Увійти</button>
        </form>
        <?php if (isset($error)) { echo "<p style='color: red;'>$error</p>"; } ?>
        </body>
        </html>
        <?php
        exit;
    }
}
// Назва файлу для збереження даних
$filename = '../json/products.json';
$promoFilename = '../json/promocodes.json';
$uploadDir = '../img/'; // Директорія для збереження зображень

// Видалення товару
if (isset($_GET['delete'])) {
    $deleteId = (int)$_GET['delete'];

    if (file_exists($filename)) {
        $products = json_decode(file_get_contents($filename), true);
        $updatedProducts = [];

        foreach ($products as $product) {
            if ($product['id'] !== $deleteId) {
                $updatedProducts[] = $product;
            } else {
                // Видаляємо зображення товару
                foreach ($product['images'] as $image) {
                    if (file_exists($image)) {
                        unlink($image);
                    }
                }
            }
        }

        file_put_contents($filename, json_encode($updatedProducts, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
        echo "<p style='color: green;'>Товар із ID $deleteId видалено.</p>";
    } else {
        echo "<p style='color: red;'>Файл із даними не знайдено.</p>";
    }
}

// Додавання товару
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['add_product'])) {
    // Отримуємо дані з форми
    $name = $_POST['name'] ?? '';
    $description = $_POST['description'] ?? '';
    $category = $_POST['category'] ?? 'Other';
    $initialPrice = $_POST['initialPrice'] ?? '';
    $price = $_POST['price'] ?? '';

    // Перевірка наявності файлів
    $images = [];
    for ($i = 1; $i <= 4; $i++) {
        $fileKey = 'image' . $i;
        if (isset($_FILES[$fileKey]) && $_FILES[$fileKey]['error'] === UPLOAD_ERR_OK) {
            $tmpName = $_FILES[$fileKey]['tmp_name'];
            $fileName = basename($_FILES[$fileKey]['name']);
            $targetFile = $uploadDir . $fileName;

            // Переміщення файлу до директорії
            if (move_uploaded_file($tmpName, $targetFile)) {
                $images[] = $targetFile;
            } else {
                echo "<p style='color: red;'>Помилка завантаження зображення $fileName.</p>";
            }
        }
    }

    // Валідація полів
    if (empty($name) || empty($price) || !is_numeric($price) || !is_numeric($initialPrice) || count($images) !== 4) {
        echo "<p style='color: red;'>Будь ласка, заповніть всі поля правильно та завантажте 4 зображення.</p>";
    } else {
        // Завантаження існуючих даних, якщо файл існує
        $products = [];
        if (file_exists($filename)) {
            $jsonData = file_get_contents($filename);
            $products = json_decode($jsonData, true) ?? [];
        }

        // Додавання нового товару до масиву
        $newProduct = [
            'id' => count($products) + 1, // Присвоєння ID
            'name' => htmlspecialchars($name),
            'description' => htmlspecialchars($description),
            'images' => $images,
            'category' => htmlspecialchars($category),
            'initiallPrice' => (float)$initialPrice,
            'price' => (float)$price,
        ];
        $products[] = $newProduct;

        // Збереження даних у файл
        file_put_contents($filename, json_encode($products, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));

        echo "<p style='color: green;'>Товар успішно додано!</p>";
    }
}

// Додавання промокоду
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['add_promo'])) {
    $promo = $_POST['promo'] ?? '';
    $discount = $_POST['discount'] ?? '';

    if (empty($promo) || empty($discount) || !is_numeric($discount)) {
        echo "<p style='color: red;'>Будь ласка, заповніть всі поля правильно.</p>";
    } else {
        $promocodes = [];
        if (file_exists($promoFilename)) {
            $jsonPromoData = file_get_contents($promoFilename);
            $promocodes = json_decode($jsonPromoData, true) ?? [];
        }

        $newPromo = [
            'promo' => htmlspecialchars($promo),
            'discount' => (int)$discount,
        ];
        $promocodes[] = $newPromo;

        file_put_contents($promoFilename, json_encode($promocodes, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
        echo "<p style='color: green;'>Промокод успішно додано!</p>";
    }
}

// Видалення промокоду
if (isset($_GET['delete_promo'])) {
    $promoToDelete = $_GET['delete_promo'];

    if (file_exists($promoFilename)) {
        $promocodes = json_decode(file_get_contents($promoFilename), true);
        $updatedPromocodes = [];

        foreach ($promocodes as $promo) {
            if ($promo['promo'] !== $promoToDelete) {
                $updatedPromocodes[] = $promo;
            }
        }

        file_put_contents($promoFilename, json_encode($updatedPromocodes, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
        echo "<p style='color: green;'>Промокод $promoToDelete видалено.</p>";
    } else {
        echo "<p style='color: red;'>Файл із промокодами не знайдено.</p>";
    }
}
?>

<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Примітивна адмінка</title>
</head>
<body>
    <h1>Додати товар</h1>
    <form method="POST" enctype="multipart/form-data">
        <input type="hidden" name="add_product" value="1">
        <label>
            Назва товару:<br>
            <input type="text" name="name" required>
        </label><br><br>
        <label>
            Опис:<br>
            <textarea name="description" required></textarea>
        </label><br><br>
        <label>
            Зображення 1:<br>
            <input type="file" name="image1" required>
        </label><br><br>
        <label>
            Зображення 2:<br>
            <input type="file" name="image2" required>
        </label><br><br>
        <label>
            Зображення 3:<br>
            <input type="file" name="image3" required>
        </label><br><br>
        <label>
            Зображення 4:<br>
            <input type="file" name="image4" required>
        </label><br><br>
        <label>
            Категорія:<br>
            <select name="category">
                <option value="Electronics">Electronics</option>
                <option value="Clocks">Clocks</option>
                <option value="Dishes">Dishes</option>
                <option value="Models">Models</option>
                <option value="Art">Art</option>
                <option value="Other">Other</option>
            </select>
        </label><br><br>
        <label>
            Ціна в фізичному магазині:<br>
            <input type="text" name="initialPrice" required>
        </label><br><br>
        <label>
            Ціна на сайті:<br>
            <input type="text" name="price" required>
        </label><br><br>
        <button type="submit">Додати товар</button>
    </form>

    <h2>Список товарів</h2>
    <?php
    // Виведення списку товарів, якщо файл існує
    if (file_exists($filename)) {
        $products = json_decode(file_get_contents($filename), true);

        if (!empty($products)) {
            echo '<ul>';
            foreach ($products as $product) {
                echo '<li>';
                echo "<strong>{$product['name']}</strong> - {$product['price']} грн (Категорія: {$product['category']})";
                echo "<br>Опис: {$product['description']}";
                echo "<br>Ціна в магазині: {$product['initiallPrice']} грн";
                echo "<br>Зображення: <ul>";
                foreach ($product['images'] as $image) {
                    echo "<li><a href='$image' target='_blank'>$image</a></li>";
                }
                echo "</ul>";
                echo "<a href='?delete={$product['id']}' style='color: red;'>Видалити</a>";
                echo '</li>';
            }
            echo '</ul>';
        } else {
            echo '<p>Список товарів порожній.</p>';
        }
    } else {
        echo '<p>Список товарів порожній.</p>';
    }
    ?>

    <h1>Додати промокод</h1>
    <form method="POST">
        <input type="hidden" name="add_promo" value="1">
        <label>
            Промокод:<br>
            <input type="text" name="promo" required>
        </label><br><br>
        <label>
            Знижка (%):<br>
            <input type="text" name="discount" required>
        </label><br><br>
        <button type="submit">Додати промокод</button>
    </form>

    <h2>Список промокодів</h2>
    <?php
    // Виведення списку промокодів, якщо файл існує
    if (file_exists($promoFilename)) {
        $promocodes = json_decode(file_get_contents($promoFilename), true);

        if (!empty($promocodes)) {
            echo '<ul>';
            foreach ($promocodes as $promo) {
                echo '<li>';
                echo "<strong>Промокод:</strong> {$promo['promo']} - <strong>Знижка:</strong> {$promo['discount']}%";
                echo " <a href='?delete_promo={$promo['promo']}' style='color: red;'>Видалити</a>";
                echo '</li>';
            }
            echo '</ul>';
        } else {
            echo '<p>Список промокодів порожній.</p>';
        }
    } else {
        echo '<p>Список промокодів порожній.</p>';
    }
    ?>

    