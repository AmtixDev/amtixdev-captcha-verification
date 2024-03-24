<div align="center">
    <br />
    <p>
        <a href="https://amtixdev.xyz"><img src="https://cdn.discordapp.com/attachments/1141443355532873879/1173692642551402608/mybanner-o-x_1.png?ex=6564e174&is=65526c74&hm=4939339c5671e01c6cdd068fb581b1fe88bd9b1c8fe56142caa4f51953cc7237&" width="546" alt="amtixdev-captcha-verification" /></a>
    </p>
    <p>
    <a href="https://discord.gg/Ym5V2DB6sk"><img src="https://img.shields.io/discord/1125840988007579732?color=5865F2&logo=discord&logoColor=white" alt="Discord server" /></a>
    <a href="https://www.npmjs.com/package/amtixdev-captcha-verification"><img src="https://img.shields.io/npm/v/amtixdev-captcha-verification?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/amtixdev-captcha-verification"><img src="https://img.shields.io/npm/dt/amtixdev-captcha-verification?maxAge=3600" alt="NPM downloads" /></a>
    </p>
  <p>
        <a href="https://amtixdev.xyz"><img src="https://cdn.discordapp.com/attachments/1148318536062742648/1180978797193990275/Powered_By_AmtiXDev_With_Color.png?ex=657f6336&is=656cee36&hm=0828041d09f451ead489b244b10099ba1bd97fa6becffdca1d8e2315ccb2df35&" alt="AmtiXDev" /></a>
    </p>

</div>

# Captcha Verification for Discord Bots

A simple npm package for generating and verifying captcha codes with numbers for Discord bots.

## Installation

```bash
npm install captcha-verification
```

# Usage
```js
const Discord = require('discord.js');
const CaptchaVerifier = require('amtixdev-captcha-verification');

const client = new Discord.Client();
const captchaVerifier = new CaptchaVerifier(client);

client.on('message', (message) => {
  if (message.author.bot) return;

  // Example: Send captcha to the same channel when a certain command is sent
  if (message.content.toLowerCase() === '!sendcaptcha') {
    captchaVerifier.sendCaptchaMessage(message.channel);
  }

  // Example: Verify the user's input
  const userInput = message.content.trim();
  const isVerified = captchaVerifier.verifyCaptcha(userInput);

  if (isVerified) {
    message.reply('Captcha verified successfully!');
  }
});

client.login('YOUR_BOT_TOKEN');
```
Replace ('YOUR_BOT_TOKEN') with your Discord bot token.
# Methods
'sendCaptchaMessage(channel)'
Sends the generated captcha code to the specified channel.
### Parameters:
channel (Discord.js Channel): The channel to send the captcha message.
verifyCaptcha(userInput)
Verifies if the provided user input matches the generated captcha code.
### Parameters:
userInput (String): The user's input to be verified.
### Returns:
true if the input is correct, false otherwise.

