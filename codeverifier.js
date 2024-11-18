const crypto = require('crypto');

// Generate a random string with allowed characters
function generateCodeVerifier(length) {
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~';
  let codeVerifier = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = crypto.randomInt(0, charset.length);
    codeVerifier += charset[randomIndex];
  }
  return codeVerifier;
}

// Length between 43 and 128
const codeVerifierLength = 96;  // You can adjust this value within the specified range
const codeVerifier = generateCodeVerifier(codeVerifierLength);

// Generate the code_challenge
const codeChallenge = crypto.createHash('sha256')
  .update(codeVerifier)
  .digest('base64url');

// Set the code_challenge_method to S256
const codeChallengeMethod = 'S256';

console.log('Code Verifier:', codeVerifier);
console.log('Code Challenge:', codeChallenge);
console.log('Code Challenge Method:', codeChallengeMethod);
