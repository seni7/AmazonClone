const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51Lc4AXIsQAs2CJr6xdwy89DxW0mKgGXVqbEoT4ZhGOiqWyJRlQdmm3xR5gfcBjvwNg0klMjR1Wc8pGe1L2eCoEvy00GMlHR22K"
);
// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());


app.get("/", (request, response) => response.status(200).send("hello world"));


exports.api = functions.https.onRequest(app);
app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log("Payment Request Recieved for this amount >>> ", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd",
    });

    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

exports.api = functions.https.onRequest(app);