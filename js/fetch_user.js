// Fungsi untuk mengambil data dari API dan menampilkannya di tabel
async function fetchUser() {
    try {
      // Ambil data dari endpoint
      const response = await fetch("https://ws-kaloriku-4cf736febaf0.herokuapp.com/user");
      console.log("Response:", response);
      // Periksa apakah respons sukses
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      // Parse data ke JSON
      const menuItems = await response.json();

      console.log("User Data:", menuItems);
  
      // Elemen container untuk tabel
      const tbody = document.querySelector("tbody");
  
      // Hapus konten lama (jika ada)
      tbody.innerHTML = "";
  
      // Loop melalui data dan buat elemen HTML untuk setiap item
      menuItems.forEach((item) => {
        const tr = document.createElement("tr");
        tr.className = "whitespace-nowrap h-11 border-b border-gray-200";
  
        tr.innerHTML = `
                  <td class="px-4 py-2">${item._id}</td>
                  <td class="px-4 py-2">${item.username}</td>
                  <td class="px-4 py-2">${item.role}</td>
                  <td class="px-4 py-2">
                      <a href="edit_menu.html?menuItemId=${item._id}" class="text-blue-500 hover:underline edit-btn" data-id="${item._id}">Edit</a>
                      <a href="#" class="text-red-500 hover:underline delete-btn" data-id="${item._id}">Delete</a>
                  </td>
              `;
  
        // Tambahkan baris ke tabel
        tbody.appendChild(tr);
      });
  
      document.querySelectorAll(".edit-btn").forEach((button) => {
          button.addEventListener("click", (event) => {
            event.preventDefault(); // Mencegah navigasi langsung
    
            const id = button.getAttribute("data-id");
            const item = menuItems.find((user) => user._id === id);
            console.log("User:", item); // Tampilkan data user di console
  
            // Tampilkan popup konfirmasi
            if (confirm(`Edit user: ${item.name}?`)) {
              console.log("User Data:", item); // Tampilkan data user di console
    
              // Navigasi ke halaman edit
              window.location.href = `edit_users.html?userId=${id}`;
            }
          });
        });
  
      // Tambahkan event listener untuk tombol delete
      document.querySelectorAll(".delete-btn").forEach((button) => {
        button.addEventListener("click", async (event) => {
          event.preventDefault();
          const id = button.getAttribute("data-id");
          if (confirm("Are you sure you want to delete this user?")) {
            await deleteUser(id);
          }
        });
      });
    } catch (error) {
      console.error("Error fetching user data:", error);
  
      // Tampilkan pesan error di halaman
      const tbody = document.querySelector("tbody");
      tbody.innerHTML =
        '<tr><td colspan="7" class="text-center text-red-500">Failed to load user data. Please try again later.</td></tr>';
    }
  }
  
  // Fungsi untuk menghapus item menu berdasarkan ID
  async function deleteUser(id) {
    console.log("Deleting user with ID:", id); // Debugging log

    try {
        const response = await fetch(`https://ws-kaloriku-4cf736febaf0.herokuapp.com/user/delete/${id}`, {
            method: "DELETE",
        });

        if (response.ok) {
            alert("User deleted successfully.");
            fetchUser(); // Refresh data setelah menghapus
        } else {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
    } catch (error) {
        console.error("Error deleting user:", error);
        alert("Failed to delete user. Please try again later.");
    }
}

  
  // Panggil fungsi fetchUser saat halaman dimuat
  document.addEventListener("DOMContentLoaded", fetchUser);
  
