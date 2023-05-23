// Contoh skrip JavaScript untuk fungsi tambahan

// 1. Validasi Formulir
function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
    alert("Mohon lengkapi semua field formulir!");
    return false;
  }
}

// 2. Fungsi Tambahkan Posting
function addPost() {
  var title = document.getElementById("title").value;
  var content = document.getElementById("content").value;

  // Proses logika untuk menyimpan posting ke server
  // ...
  // ...
  alert("Posting berhasil ditambahkan!");
}

// 3. Fungsi Tambahkan ke Keranjang Belanja
function addToCart(productId) {
  // Proses logika untuk menambahkan produk ke keranjang belanja
  // ...
  // ...
  alert("Produk telah ditambahkan ke keranjang belanja!");
}

// 4. Fungsi Proses Checkout
function checkout() {
  // Proses logika untuk proses pembayaran dan checkout
  // ...
  // ...
  alert("Pembayaran berhasil! Terima kasih telah berbelanja.");
}
