export function generateObject() {
    const currencies = ["USD", "EUR", "GBP", "JPY"]; // Add more currencies if needed
    const randomCurrency = currencies[Math.floor(Math.random() * currencies.length)];
    const randomValue = Math.random() * 1000;
    const randomItemId = generateUUID();
    const randomItemName = generateRandomItemName();
  
    return {
      currency: randomCurrency,
      value: randomValue.toFixed(2),
      items: [
        {
          item_id: randomItemId,
          item_name: randomItemName
        }
      ]
    };
  }
  
  function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0,
          v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  
  function generateRandomItemName() {
    const numWords = Math.floor(Math.random() * 3) + 3; // Generate a random number of words between 3 and 5
    let itemName = "";
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < numWords; i++) {
      const wordLength = Math.floor(Math.random() * 3) + 3; // Generate a random word length between 3 and 5
      let word = "";
      for (let j = 0; j < wordLength; j++) {
        const randomIndex = Math.floor(Math.random() * alphabet.length);
        word += alphabet[randomIndex];
      }
      itemName += word;
      if (i !== numWords - 1) {
        itemName += " ";
      }
    }
    return itemName;
  }
  
  
  
  
  