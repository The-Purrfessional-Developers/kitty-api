const bcrypt = require("bcryptjs");
const crypto = require("crypto");

const genKey = async (keyLength, saltLength) => {
    //Generate plain-text API key from random bytes, encoded in ASCII
    const plainKey = crypto.randomBytes(keyLength).toString('hex');

    //Generating salt for hashing
    const salt = await bcrypt.genSalt(saltLength);

    //Hashing the plain-text API key with salt
    const hashedKey = await bcrypt.hash(plainKey, salt)
    
    return {plainKey: plainKey, hashedKey: hashedKey};
};

const printNewKey = async (keyLength, saltLength) => {
    console.log(await genKey(keyLength, saltLength));
};

printNewKey(Number(process.argv[2]),Number(process.argv[3]));

module.exports = genKey;



