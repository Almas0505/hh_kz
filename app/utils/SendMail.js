const nodemailer = require('nodemailer');

// Настройка транспортера с использованием Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'dark046knight046@gmail.com', // Ваш Gmail адрес
    pass: 'ygvmyklkzglxahpe'     // Используйте App Password, а не основной пароль
  }
});

// Функция для отправки email
function sendMail(to, subject, text) {
  const mailOptions = {
    from: 'dark046knight046@gmail.com',
    to: to,
    subject: subject,
    text: text
  };

  // Отправка email
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject('Ошибка при отправке письма: ' + error);
      } else {
        resolve('Письмо отправлено: ' + info.response);
      }
    });
  });
}

module.exports = {
  sendMail
};
