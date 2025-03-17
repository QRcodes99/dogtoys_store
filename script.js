const stripe = Stripe("YOUR_STRIPE_PUBLISHABLE_KEY");

function buyNow(product) {
    fetch("/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ product })
    })
    .then(response => response.json())
    .then(session => {
        return stripe.redirectToCheckout({ sessionId: session.id });
    })
    .catch(error => console.error("Error:", error));
}