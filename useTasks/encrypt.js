
const ENCRYPTION_KEY = 'some-random-encryption-key';

// Function to encrypt data
 const encryptData = (data) => {
  const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), ENCRYPTION_KEY).toString();
  return encryptedData;
};

// Function to decrypt data
 const decryptData = (encryptedData) => {
  const decryptedBytes = CryptoJS.AES.decrypt(encryptedData, ENCRYPTION_KEY);
  const decryptedData = JSON.parse(decryptedBytes.toString(CryptoJS.enc.Utf8));
  return decryptedData;
};