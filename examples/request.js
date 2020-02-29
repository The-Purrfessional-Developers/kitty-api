const config = require('config');
const fetch = require('node-fetch');

const domain = config.get("domain");
const key = config.get("key");
const emotion = 'tired';

const requestKitty = async (domain, key, emotion) => {
    try {
        const url = `${domain}/api/kitties?emotion=${emotion}&key=${key}`
        const response = await fetch(url);
        console.log(await response.json());
    } catch (error) {
        console.log(error);
    };
};

module.exports = requestKitty;

requestKitty(domain, key, emotion);
