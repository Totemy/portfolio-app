import * as emailjs from '@emailjs/browser';

const EMAIL_SERVICE_ID = process.env.VUE_APP_EMAIL_SERVICE_ID;
const TEMPLATE_ID = process.env.VUE_APP_TEMPLATE_ID;
const USER_ID = process.env.VUE_APP_USER_ID;
const sendEmail = async (templateParams) => {
    try {
        const response = await emailjs.send(
            EMAIL_SERVICE_ID,
            TEMPLATE_ID,
            templateParams,
            USER_ID
        );
        console.log('Email sent:', response);
        return response;
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
};

export { sendEmail };
