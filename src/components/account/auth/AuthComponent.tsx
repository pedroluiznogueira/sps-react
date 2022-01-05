export function isAuth() {
    const token = window.sessionStorage.getItem('mockedToken');
    if (token) return true;
    return false;
}