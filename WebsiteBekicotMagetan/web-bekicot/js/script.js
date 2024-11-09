document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', (event) => {
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
  
      if (!name || !email || !phone) {
        alert('Harap isi semua bidang!');
        event.preventDefault(); // Mencegah pengiriman form jika ada field yang kosong
      } else if (!validateEmail(email)) {
        alert('Harap masukkan alamat email yang valid!');
        event.preventDefault();
      } else if (!validatePhone(phone)) {
        alert('Harap masukkan nomor telepon yang valid!');
        event.preventDefault();
      }
    });
  
    function validateEmail(email) {
      // Simple regex for email validation
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
    }
  
    function validatePhone(phone) {
      // Simple regex for phone number validation (Indonesian phone number format)
      const re = /^(\+62|62|0)8[1-9][0-9]{6,9}$/;
      return re.test(String(phone));
    }
  });
  