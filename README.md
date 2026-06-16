# Oumnia Selmane — Portfolio

## Run locally

```
npm install
npm run dev
```

Open http://localhost:5173

## Enable the Contact Form (EmailJS)

The contact form uses EmailJS — a free service that sends emails directly from the browser.

1. Create a free account at https://www.emailjs.com
2. Add an **Email Service** (Gmail) → copy the **Service ID**
3. Create an **Email Template** with these variables:
   - `{{from_name}}` — sender's name
   - `{{reply_to}}` — sender's email
   - `{{message}}` — message body
   → copy the **Template ID**
4. Go to **Account → API Keys** → copy your **Public Key**
5. Open `src/components/Contact.tsx` and replace:
   ```
   const EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID";
   const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
   const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY";
   ```

That's it — the form will send emails to your Gmail inbox.
