const urlParams = new URLSearchParams(window.location.search);
const menuItemId = urlParams.get('menuItemId');

export let urlPUT = "https://ws-kaloriku-4cf736febaf0.herokuapp.com/update/" + menuItemId;

export function AmbilResponse(result) {
    console.log(result);
    alert(result.message); 
    window.location.href = "menu.html"; 
}