export const isAuthorised = () => {
    return localStorage.getItem('stk') ? true : false;
}