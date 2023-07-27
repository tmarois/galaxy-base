/**
 * Generates a small unique id based on random string
 * @returns String (example: "0n8m8fv5r")
 */
export const uniqueId = () => {
    return Math.random().toString(36).substr(2, 9);
};

/**
 * Generates a unique ID using timestamp and random string
 * @returns String (example: "1615351449107-7d0c6j8z7w")
 */
export const uniqueIdWithTime = () => {
    return `${Date.now()}-${uniqueId()}`;
};

/**
 * Generates a Universal Unique User ID (V4)
 * Using time to make it even more unique
 * @returns String (example: "c784d127-b2d8-4d59-a239-5a9ff43bceb3")
 */
export const generateUUID = () => {
    let d = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
        d += performance.now(); //use high-precision timer if available
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

/**
 * Generate random string
 * Can be used to generate a password
 * @returns String (example: "0n8m8fv5r")
 */
export const generateRandom = (length, symbols) => {
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    if (symbols) {
        characters += '!@#$%^&*()';
    }
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};