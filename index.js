class CaptchaVerifier {
  constructor(client, options = {}) {
    this.client = client;
    this.options = options;
    this.generateCaptcha();
  }

  // Allow only numbers in the generated code
  generateCaptcha() {
    const allowedCharacters = '0123456789';
    const captchaArray = Array.from({ length: 5 }, () => allowedCharacters[Math.floor(Math.random() * allowedCharacters.length)]);
    this.captcha = captchaArray.join('');
  }

  // Send the captcha message to the specified channel
  sendCaptchaMessage(channel) {
    channel.send(`\`${this.captcha}\``)
      .catch(console.error);
  }

  // Verify if the user input matches the generated captcha
  verifyCaptcha(userInput) {
    return userInput === this.captcha;
  }
}

module.exports = CaptchaVerifier;