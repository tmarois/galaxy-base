/**
 * Compare two values and return true if they are identical
 */
export const valueComparator = (a, b) => a === b

/**
 * Search through an array of objects
 * @param { Array } data 
 * @param { String } search 
 * @returns Filtered Array
 */
export const searchData = (data, search) => {
    return data.filter(item => {
        return Object.values(item).some(val => {
            return (
                typeof val === 'string' &&
                val.toLowerCase().includes(search.toLowerCase())
            );
        });
    });
};

/**
 * Sort an array based on ASC/DESC of a property
 * @param { Array } data 
 * @param { String } search 
 * @param { String<ASC|DESC> } order 
 * @returns Filtered Array
 */
export const sortData = (data, property, order) => {
    return data.sort((a, b) => {
        if (order === 'ASC') {
            if (a[property] < b[property]) return -1;
            if (a[property] > b[property]) return 1;
            return 0;
        } else if (order === 'DESC') {
            if (a[property] > b[property]) return -1;
            if (a[property] < b[property]) return 1;
            return 0;
        }
        return data;
    });
};

/**
 * Extract a value from a property in nested objects
 * Can use Dot Notation here, like "user.first_name"
 * 
 * @reference https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_get
 * @param { Object } obj 
 * @param { String } path 
 * @param { String|Number } defaultValue 
 * @returns the value found or default if no value found
 */
export const getObjectValue = (obj, path, defaultValue = undefined) => {
    if (path === null || path === undefined) {
        return defaultValue;
    }
	const travel = regexp =>
		String.prototype.split
			.call(path, regexp)
			.filter(Boolean)
			.reduce((res, key) => (res !== null && res !== undefined ? res[key] : res), obj);
	const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/);
	return result === undefined || result === obj ? defaultValue : result;
};

/**
 * Checks if object and its properties has changed values from its original 
 * @param { Object } original 
 * @param { Object } updated 
 * @returns true if object values have changed or fales if they are the same
 */
export const hasObjectChanged = (original, updated) => {
    if (Array.isArray(original) && Array.isArray(updated)) {
        if (original.length !== updated.length) {
            return true;
        }
        return !original.every((val, index) => hasObjectChanged(val, updated[index]));
    }

    if (typeof original === 'object' && original !== null && typeof updated === 'object' && updated !== null) {
        for (const key in original) {
            if (original.hasOwnProperty(key)) {
                if (!updated.hasOwnProperty(key) || hasObjectChanged(original[key], updated[key])) {
                    return true;
                }
            }
        }
        for (const key in updated) {
            if (updated.hasOwnProperty(key) && !original.hasOwnProperty(key)) {
                return true;
            }
        }
        return false;
    }

    return original !== updated;
};


/**
 * Extracts all the values from the array of objects
 * and returns just the array of values
 * @param { Array<Objects> } arr 
 * @param { String } prop 
 * @returns Array of values (example: [25, 35, 45])
 */
export const objectValues = (arr, prop) => {
    return arr.map(obj => obj[prop]);
}

/**
 * Normalize an object by returning only the properties
 * from the array of keys
 * @param { Array } keys 
 * @param { Object } obj 
 * @returns an object of only the properties from array
 */
export const objectNormalizedKeys = (keys, obj) => {
    return keys.reduce((result, propertyName) => {
      if (obj.hasOwnProperty(propertyName)) {
        result[propertyName] = obj[propertyName];
      }
      return result;
    }, {});
}

/**
 * Normalize an object by returning only the properties
 * @param { Object } obj 
 * @param { Object } propertyNamesWithDefaults 
 * @returns 
 */
export const objectNormalizedDefaults = (obj, propertyNamesWithDefaults) => {
    return Object.entries(propertyNamesWithDefaults).reduce((acc, [property, defaultValue]) => {
        acc[property] = obj[property] !== undefined ? obj[property] : defaultValue;
        return acc;
    }, {});
};

/**
 * Check if an object is empty
 * @param { Object } obj 
 * @returns 
 */
export const isEmpty = (obj) => {
    return Object.keys(obj).length === 0;
}

/**
 * Get the length of an object (counting its property keys)
 * @param { Object } obj 
 * @returns 
 */
export const objectLength = (obj) => {
    return Object.keys(obj).length;
}