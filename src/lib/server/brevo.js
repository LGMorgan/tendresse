import { BREVO_API_KEY } from "$env/static/private";
import { CreateContact, ContactsApi } from "@getbrevo/brevo";

let contactAPI = new ContactsApi();
contactAPI.authentications.apiKey.apiKey = BREVO_API_KEY

let contact = new CreateContact();
contact.email = "alice.johnson@example.com";
contact.attributes = {
    FIRSTNAME: "Alice",
    LASTNAME: "Johnson",
};

export async function sendToBrevo(email) {
    try {
        contact.email = email
        const data = await contactAPI.createContact(contact);
        console.log('API called successfully. Returned data: ' + JSON.stringify(data));
        return { data }
    } catch (error) {
        console.error(error);
        throw new Error(`Failed to add contact to Brevo.`);
    }
}