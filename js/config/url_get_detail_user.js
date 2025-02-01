const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get("userId");

if (!userId) {
    console.error("userId is missing in the URL");
} else {
    console.log("userId:", userId);
}

export let urlFetch = "https://ws-kaloriku-4cf736febaf0.herokuapp.com/user/" + userId;

console.log("Fetching from URL:", urlFetch);

