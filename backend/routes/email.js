const { Router } = require('express');
const { Resend } = require('resend');

const router = Router();
const resend = new Resend("re_ii5ZEfCM_HJftVVDbSqrTkBzKQdUKVHot");

router.post("/welcome", async (req, res) => {
    const customerData = req.body; 
    console.log(customerData);
    const emailFormat = {
        from: "mackhack0705@gmail.com",
        to: [customerData.email],
        subject: "Welcome to Mackhack",
        html: "<strong>Welcome to the Mackhack Best education platform</strong>",
    }
    console.log(emailFormat);
    const { data, error } = await resend.emails.send()

    if (error) {
        return res.status(400).json({ error });
      }
    
    res.status(200).json({ data });
})

module.exports = router;