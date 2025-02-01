async function fetchMenuData() {
  try {
      const response = await fetch("https://ws-kaloriku-4cf736febaf0.herokuapp.com/menu");
      
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const menuItems = await response.json();
      console.log("Menu Data:", menuItems);
      
      const container = document.getElementById("menu-container");
      container.innerHTML = ""; // Kosongkan kontainer sebelum menambahkan data baru
      
      menuItems.forEach((item) => {
          const card = document.createElement("div");
          card.className = "bg-white p-6 rounded-lg shadow-lg mb-4";
          
          card.innerHTML = `
              <img src="${item.image}" alt="${item.name}" class="w-full h-80 object-cover rounded-lg mb-4">
              <h3 class="text-xl font-semibold mb-2">${item.name}</h3>
              <p class="text-gray-700 mb-2"><strong>Kalori:</strong> ${item.calories} kcal</p>
              <p class="text-gray-700"><strong>Komposisi:</strong></p>
              <ul class="list-disc pl-5 text-gray-700">
                  ${item.ingredients.split(',').map(ing => `<li>${ing.trim()}</li>`).join('')}
              </ul>
          `;
          
          container.appendChild(card);
      });
      
      document.querySelectorAll(".edit-btn").forEach((button) => {
          button.addEventListener("click", (event) => {
              event.preventDefault();
              const id = button.getAttribute("data-id");
              const item = menuItems.find((menuItem) => menuItem._id === id);
              if (confirm(`Edit menu item: ${item.name}?`)) {
                  window.location.href = `edit_menu.html?menuItemId=${id}`;
              }
          });
      });
      
      document.querySelectorAll(".delete-btn").forEach((button) => {
          button.addEventListener("click", async (event) => {
              event.preventDefault();
              const id = button.getAttribute("data-id");
              if (confirm("Are you sure you want to delete this menu item?")) {
                  await deleteMenuItem(id);
              }
          });
      });
  } catch (error) {
      console.error("Error fetching menu data:", error);
      document.getElementById("menu-container").innerHTML =
          '<p class="text-center text-red-500">Failed to load menu data. Please try again later.</p>';
  }
}

async function deleteMenuItem(id) {
  try {
      const response = await fetch(`https://ws-kaloriku-4cf736febaf0.herokuapp.com/delete/${id}`, {
          method: "DELETE",
      });

      if (response.ok) {
          alert("Menu item deleted successfully.");
          fetchMenuData();
      } else {
          throw new Error(`HTTP error! status: ${response.status}`);
      }
  } catch (error) {
      console.error("Error deleting menu item:", error);
      alert("Failed to delete menu item. Please try again later.");
  }
}

document.addEventListener("DOMContentLoaded", fetchMenuData);
