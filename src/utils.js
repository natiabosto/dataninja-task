export const isAuthorised = () => {
    return localStorage.getItem('STK') ? true : false;
}