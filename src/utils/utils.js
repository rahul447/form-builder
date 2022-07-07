export const DEFAULT_THEME = 'light'

export const FIELD = {
    INPUT: 'input',
    TEXTAREA: 'textarea',
    SELECT: 'select',
    RADIO: 'radio',
}

export const debounceWrapper = (func, timeout = 300) => {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}