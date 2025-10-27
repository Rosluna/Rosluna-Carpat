// Токен та ID бота (вставиш свої)
const BOT_TOKEN = 'ТУТ_ВСТАВ_СВІЙ_ТОКЕН';
const CHAT_ID = 'ТУТ_ВСТАВ_СВІЙ_ID';

// Елементи
const orderBtn = document.getElementById('orderBtn');
const popup = document.getElementById('orderPopup');
const closePopup = document.getElementById('closePopup');
const sendBtn = document.getElementById('sendBtn');

// Відкриття popup
orderBtn.addEventListener('click', () => {
  popup.style.display = 'flex';
});

// Закриття popup
closePopup.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Відправка форми
sendBtn.addEventListener('click', () => {
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const city = document.getElementById('city').value;
  const postal = document.getElementById('postal').value;

  if (!name || !phone || !city || !postal) {
    alert('Будь ласка, заповніть усі поля!');
    return;
  }

  const message = `📦 Нове замовлення!\n👤 Ім’я: ${name}\n📞 Телефон: ${phone}\n🏙️ Місто та область: ${city}\n📮 Поштовий індекс: ${postal}`;

  fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(message)}`)
    .then(() => {
      alert('✅ Дякуємо! Ваше замовлення прийнято. Ми скоро з вами зв’яжемося!');
      popup.style.display = 'none';
      document.getElementById('name').value = '';
      document.getElementById('phone').value = '';
      document.getElementById('city').value = '';
      document.getElementById('postal').value = '';
    })
    .catch(err => {
      alert('Помилка при відправці. Спробуйте ще раз.');
      console.error(err);
    });
});

// Закриття popup при кліку поза формою
window.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});
