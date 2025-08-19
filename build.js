const fs = require('fs');
require('dotenv').config();

// Read the original HTML file
let html = fs.readFileSync('index.html', 'utf8');

// Replace placeholder values with environment variables
html = html.replace(
  "const APPWRITE_ENDPOINT = process.env.APPWRITE_ENDPOINT || 'https://fra.cloud.appwrite.io/v1';",
  `const APPWRITE_ENDPOINT = '${process.env.APPWRITE_ENDPOINT}';`
);

html = html.replace(
  "const APPWRITE_PROJECT = process.env.APPWRITE_PROJECT || '6839d9640019316a160d';",
  `const APPWRITE_PROJECT = '${process.env.APPWRITE_PROJECT}';`
);

html = html.replace(
  "const APPWRITE_DB_ID = process.env.APPWRITE_DB_ID || '6839dcca000190bf99f6';",
  `const APPWRITE_DB_ID = '${process.env.APPWRITE_DB_ID}';`
);

html = html.replace(
  "const APPWRITE_COLLECTION_ID = process.env.APPWRITE_COLLECTION_ID || 'users';",
  `const APPWRITE_COLLECTION_ID = '${process.env.APPWRITE_COLLECTION_ID}';`
);

html = html.replace(
  "const SUPREMEAMER_RECEIVER_BNB = process.env.SUPREMEAMER_RECEIVER_BNB || '0xYourBnbAddressHere';",
  `const SUPREMEAMER_RECEIVER_BNB = '${process.env.SUPREMEAMER_RECEIVER_BNB}';`
);

// Create dist directory if it doesn't exist
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist');
}

// Write the processed HTML to the dist directory
fs.writeFileSync('dist/index.html', html);

// Copy other necessary files (like images)
if (fs.existsSync('supremeamer_coin.png')) {
  fs.copyFileSync('supremeamer_coin.png', 'dist/supremeamer_coin.png');
}

console.log('Build completed successfully!');