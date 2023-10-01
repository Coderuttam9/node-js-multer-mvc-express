// random Id generate

export const generateRandomId = (length = 28) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomId = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomId += characters.charAt(randomIndex);
    }

    return randomId;
};


// generat slug function 
export const createProductSlug = (name) => {
    // Convert the product name to lowercase
    const lowercaseName = name.toLowerCase();

    // Replace spaces with hyphens and remove special characters
    const slug = lowercaseName.replace(/[^a-zA-Z0-9-]/g, '-').replace(/--+/g, '-');

    // Remove leading and trailing hyphens
    const finalSlug = slug.replace(/^-+|-+$/g, '');

    return finalSlug;
}