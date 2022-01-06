export function isAuth() {
    const token = window.sessionStorage.getItem('mockedToken');
    console.log(token);
    if (token) return true;
    return false;
}