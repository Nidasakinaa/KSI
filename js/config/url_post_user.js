export let urlPOST = "https://ws-kaloriku-4cf736febaf0.herokuapp.com/registeruser";

export function AmbilResponse(result) {
    console.log(result); 
    alert(result.message); 
    window.location.href = "user.html"; 
}