<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dog Accessories Store</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://js.stripe.com/v3/"></script>
</head>
<body>
    <header>
        <h1>Dog Accessories Store</h1>
    </header>

    <section class="products">
        <div class="product">
            <img src="images/dog-collar.jpg" alt="Dog Collar">
            <h2>Dog Collar</h2>
            <p>High-quality leather dog collar.</p>
            <span>$15.99</span>
            <button onclick="buyNow('dog-collar')">Buy Now</button>
        </div>

        <div class="product">
            <img src="images/dog-leash.jpg" alt="Dog Leash">
            <h2>Dog Leash</h2>
            <p>Durable nylon dog leash.</p>
            <span>$12.99</span>
            <button onclick="buyNow('dog-leash')">Buy Now</button>
        </div>

        <div class="product">
            <img src="images/dog-bowl.jpg" alt="Dog Bowl">
            <h2>Dog Bowl</h2>
            <p>Stainless steel dog bowl.</p>
            <span>$9.99</span>
            <button onclick="buyNow('dog-bowl')">Buy Now</button>
        </div>
    </section>

    <script src="script.js"></script>
</body>
</html>
