const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("YOUR_STRIPE_SECRET_KEY");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/create-checkout-session", async (req, res) => {
    const { product } = req.body;

    const prices = {
        "dog-collar": 1599,
        "dog-leash": 1299,
        "dog-bowl": 999
    };

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
            {
                price_data: {
                    currency: "usd",
                    product_data: { name: product },
                    unit_amount: prices[product],
                },
                quantity: 1
            }
        ],
        mode: "payment",
        success_url: "https://yourusername.github.io/dog-store/success.html",
        cancel_url: "https://yourusername.github.io/dog-store/cancel.html",
    });

    res.json({ id: session.id });
});

app.listen(3000, () => console.log("Server running on port 3000"));