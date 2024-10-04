const { Router } = require('express');
const { Resend } = require('resend');

const router = Router();
const resend = new Resend("re_ii5ZEfCM_HJftVVDbSqrTkBzKQdUKVHot");

router.post("/welcome", async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    const customerData = req.body; 
    console.log(customerData);
    const emailFormat = {
        from: "Education@re.resend.com",
        to: [customerData.email],
        subject: "Welcome to Mackhack",
        html: "<strong>Welcome to the Mackhack Best education platform</strong>",
    }
    console.log(emailFormat);
    const { data, error } = await resend.emails.send(emailFormat);

    if (error) {
        return res.status(400).json({ error });
      }
    
    res.status(200).json({ data });
})

module.exports = router;