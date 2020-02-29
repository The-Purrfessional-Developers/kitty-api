const config = require('config');
const fetch = require('node-fetch');

const url = config.get("url");
const key = config.get("key");
const emotion = 'tired';

const requestKitty = async (url, key, emotion) => {
    try {
        const response = await fetch(
            `${url}/api/kitties?emotion=${emotion}&key=${key}`
        );
        console.log(await response.json());
    } catch (error) {
        console.log(error);
    }
};

requestKitty(url, key, emotion);
