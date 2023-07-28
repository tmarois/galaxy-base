/**
 * Transform a string/number into a comma seperated number
 * like 10000 into 10,000
 * @param { String|Number } n 
 * @param { Number } decimals 
 * @returns 
 */
export const transformNumber = (n, decimals = 2) => {
    if (n === '' || n === null || n === undefined ) return '';
    if (isNaN(n)) return 'Invalid';
    const num = Number(n).toFixed(decimals);
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

/**
 * Formats a string or number into a currency 
 * like: 1000000 into $1,000,000
 * @param { String|Number } v 
 * @param { String<USD>} currency 
 * @returns 
 */
export const formatCurrency = (v, currency = 'USD') => {
    if (isNaN(v)) return 'Invalid';
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: currency }).format(v);
};

/**
 * Creates a safe slug for URL
 * @param { String } str 
 * @returns a formatted string
 */
export const formatSlug = (str) => {
    return str
      .toLowerCase()
      .replace(/[^a-z0-9-]+/g, '-')
      .replace(/^-+|-+$/g, '');
};

/**
 * Formats a string and ensures its a URL
 * @param { String } url 
 * @returns formatted URL string
 */
export const formatURL = (url) => {
    // remove any whitespace at the start or end of the URL
    url = url.trim();
    // check if the URL starts with 'http://' or 'https://'
    if (!/^https?:\/\//i.test(url)) {
        // if it doesn't, add 'http://' to the start of the URL
        url = 'http://' + url;
    }
    return url;
}

/**
 * Transform a number into a US phone format
 * Also removes the +1 country code
 * @param { String|Number } phone 
 * @returns string
 */
export const formatPhoneNumber = (phone) => {
    let cleanedPhone = phone.replace(/\D/g, '');
    if (cleanedPhone.startsWith('1')) {
        cleanedPhone = cleanedPhone.slice(1);
    }
    cleanedPhone = cleanedPhone.slice(0, 10);
    if (cleanedPhone && cleanedPhone.length === 10) {
        return cleanedPhone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
    }
    return cleanedPhone;
}