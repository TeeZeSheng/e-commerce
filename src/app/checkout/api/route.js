const Stripe = require('stripe')
const stripe = Stripe(process.env.SECRET);


export async function POST(req, res) {
  try {
    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      ui_mode: 'embedded',
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of
          // the product you want to sell
          price: '{{prod_id}}',
          quantity: 1,
        },
      ],
      mode: 'payment',
      return_url:
        `${req.headers.origin}/return?session_id={CHECKOUT_SESSION_ID}`,
    });
    console.log(session.client_secret)
    res.send({clientSecret: session.client_secret});
  } catch (err) {
    res.status(err.statusCode || 500).json(err.message);
  }
}