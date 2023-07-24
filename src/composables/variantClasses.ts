import { reactive, readonly } from 'vue'
import { variants } from '../variants'

const componentVariantState = reactive(variants)

export function useVariantClasses(component: String, variant: String|null|undefined, overrides: Record<string, string> = {}) {
    const v = componentVariantState[component];
    if (v) {
        if (variant && v[variant]) {
            return readonly({...v['default'], ...v[variant], ...overrides});
        }
        return readonly({...v['default'], ...overrides});
    }
    console.warn(`[Galaxy UI warn] No component "${component}" not found in variant list`)
}

export function setVariantClasses(variantOverrides: Object) {
    Object.assign(componentVariantState, deepMerge(JSON.parse(JSON.stringify(componentVariantState)), variantOverrides))
}

function deepMerge(target, source) {
    for (const key in source) {
        const targetValue = target[key];
        const sourceValue = source[key];
        if (isObject(targetValue) && isObject(sourceValue)) {
            target[key] = deepMerge({ ...targetValue }, sourceValue);
        } else if (sourceValue !== undefined) {
            target[key] = sourceValue;
        }
    }
    return target;
}

function isObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item));
}