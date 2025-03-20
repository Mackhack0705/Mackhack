import sgMail from '@sendgrid/mail';

export async function sendEmail({
    to,
    subject,
    text,
}: {
    to: string;
    subject: string;
    text: string;
}) {
    if(!process.env.SENDGRID_API_KEY) {
        console.log('hi');
        throw new Error("SENDGRID_API_KEY environment variable is not set");
    }

    if(!process.env.EMAIL_FROM) {
        console.log('bye');
        throw new Error("EMAIL_FROM environment variable is not set");
    }

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const message = {
        to: to.toLowerCase().trim(),
        from: process.env.EMAIL_FROM,
        subject: subject.trim(),
        text: text.trim(),
    };
    console.log(message)

    try {
        const [response] = await sgMail.send(message);

        if(response.statusCode === 202) {
            throw new Error(`SendGrid API returned status code ${response.statusCode}`);
        }

        return {
            success: true,
            messageId: response.headers['x-message-id'],
        }

    } catch (error) {
        console.error("Error sending email: ", error);
        return {
            success: false,
            message: "Failed to send email. Please try again later.",
        }
    }
}