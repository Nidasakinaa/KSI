const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('userId');

export let urlPUT = "https://ws-kaloriku-4cf736febaf0.herokuapp.com/updateuser" + userId;

export function AmbilResponse(result) {
    console.log(result);
    alert(result.message); 
    window.location.href = "user.html"; 
}