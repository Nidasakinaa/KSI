const urlParams = new URLSearchParams(window.location.search);
const menuItemId = urlParams.get("menuItemId");

if (!menuItemId) {
    console.error("menuItemId is missing in the URL");
} else {
    console.log("menuItemId:", menuItemId);
}

export let urlFetch = "https://ws-kaloriku-4cf736febaf0.herokuapp.com/menu" + menuItemId;

console.log("Fetching from URL:", urlFetch);

