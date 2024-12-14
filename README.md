# 🧩 EnigmaHub API

[![RapidAPI](https://img.shields.io/badge/Available%20on-RapidAPI-blue.svg)](https://rapidapi.com/your-username/api/enigmahub-api)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Riddles](https://img.shields.io/badge/Riddles-1000+-orange.svg)](https://rapidapi.com/your-username/api/enigmahub-api)

> *"Challenge minds, engage users, and make learning fun with the most comprehensive riddles API available."*

## 🌟 Why EnigmaHub API?

Unlock a treasure trove of over 1000 carefully curated riddles spanning 20+ specialized categories. Perfect for educational apps, games, and learning platforms that want to engage users with intelligent content.

### ✨ Key Features

- 🎯 **1000+ Premium Riddles** - Constantly updated collection
- 🧠 **20+ Categories** - From Science to Philosophy
- 🎮 **3 Difficulty Levels** - Easy, Medium, Hard
- 💡 **Smart Hint System** - Guide users to solutions
- 📚 **Detailed Explanations** - Learn from each riddle
- 🔄 **Regular Updates** - Fresh content guaranteed

## 🚀 Quick Start

```javascript
const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://enigmahub-api.p.rapidapi.com/v1/riddles',
  headers: {
    'X-RapidAPI-Key': 'your-api-key',
    'X-RapidAPI-Host': 'enigmahub-api.p.rapidapi.com'
  }
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}
```

## 📊 Available Endpoints

| Endpoint | Description |
|----------|-------------|
| `/riddles` | Get random riddles |
| `/riddles/category/{category}` | Get riddles by category |
| `/riddles/difficulty/{level}` | Get riddles by difficulty |
| `/categories` | List all available categories |

## 🎯 Perfect For

- 📱 Educational Apps
- 🎮 Quiz Games
- 🧠 Brain Training Apps
- 🎓 Learning Platforms
- 🌐 Educational Websites

## 💡 Example Response

```json
{
  "riddle": {
    "question": "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. I have roads, but no cars. What am I?",
    "category": "Logic",
    "difficulty": "Medium",
    "hint": "I help you find your way.",
    "answer": "A map",
    "explanation": "A map shows cities, mountains, water, and roads without containing the actual physical objects."
  }
}
```

## 🌟 Categories

- 🔬 Science
- 💻 Technology
- 🧮 Mathematics
- 🌍 Geography
- 📚 Literature
- 🎨 Art
- 🎵 Music
- And many more!

## 📈 Pricing

| Plan | Price | Features |
|------|--------|-----------|
| Basic | $9.99/month | • 1,000 requests/month<br>• Basic categories<br>• Standard support |
| Pro | $24.99/month | • 5,000 requests/month<br>• All categories<br>• Priority support |
| Enterprise | Custom | • Unlimited requests<br>• Custom features<br>• Premium support |

## 🔗 Links

- [API Documentation](https://rapidapi.com/your-username/api/enigmahub-api)
- [Terms of Service](https://rapidapi.com/your-username/api/enigmahub-api/terms)
- [Privacy Policy](https://rapidapi.com/your-username/api/enigmahub-api/privacy)

## 📫 Support

Need help? Contact us at support@enigmahub-api.com

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Made with 🧠 by EnigmaHub Team
</p>
