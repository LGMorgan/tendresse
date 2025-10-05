import type { RequestEvent } from "@sveltejs/kit";
import { BREVO_API_KEY } from "$env/static/private";
import { CreateContact, ContactsApi, ContactsApiApiKeys } from "@getbrevo/brevo";

export const actions = {
    sendToBrevo: async ({ request }: RequestEvent) => {
        const formData = await request.formData();
        const email = formData.get('email');

        let success = true;
        let error = '';

        if (email && typeof email === 'string') {
            const contactAPI = new ContactsApi();
            contactAPI.setApiKey(ContactsApiApiKeys.apiKey, BREVO_API_KEY);

            const contact = new CreateContact();
            contact.email = email;

            contactAPI.createContact(contact).then((response) => {
                console.log('Contact added successfully :', response);
                success = true;
                return { success };
            }).catch((error) => {
                console.error('Error adding contact:', error);
                if (error.response && error.response.body && error.response.data.code === 'duplicate_parameter') {
                    error = 'Cet email est déjà inscrit';
                } else {
                    error = 'Une erreure est survenue, merci de réessayer plus tard';
                }
                return { success, error };
            });
        } else {
            console.log('Invalid email:', email);
            error = 'Email non valide'
        }
        console.log('Email received:', email);

        return { success, error };
    }

}