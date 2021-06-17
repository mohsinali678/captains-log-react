export const apiURL = () => {
    return window.location.hostname === "localhost"
    ? "http://127.0.0.1:3001"
    : "https://ali678.herokuapp.com/";
}