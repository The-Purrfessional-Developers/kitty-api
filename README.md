# kitty-api

This is a basic API that is made to return URLs to cat pictures based on the user-specified mood. 

# How do I use kitty-api?
Currently, this is done by passing a valid security key and an emotion via an HTTP GET request . Currently, such a key is not publicly available due to early private testing, though can be provided on request.

Consistent with HTTP standards for GET requests, *emotion* and *key* are to be placed in the URL query. For example, for a standard JavaScript fetch, using the standard try-catch pattern and async/await, we have,

```
const requestKitty = async (domain, key, emotion) => {
  try {
    const url = `${domain}/api/kitties?emotion=${emotion}&key=${key}`;
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log(error);
  };
};
```

The response body will look something like this:
```
{
    "isGif": false,
    "owner": "CuteKitty Gallary",
    "sourceUrl": "https://www.cutekitty.cute",
    "_id": "123456789",
    "imageUrl": "https://www.cutekitty.cute/gallery/kitty001",
    "emotion": "happy",
    "dateAdded": "2020-02-26T20:11:15.124Z",
    "__v": 0
}
```

# What if I want to use the code?
The kitty-api repository is a public repository and covered under the MIT open source license. While one can clone the reposity, do not expect it to start up successfully.

Due to security reasons, we choose not to share the config files. These config files (which can be found in .gitignore) should store the MongoDB URI, the hashed security key, and the port on which you wish to run the web server.

The contents of these files will be in the following form:

```
{
  "PORT": 3000
  "mongoURI": "mongoURI",
  "securityKey": "saltedAndHashedKey"
}
```

You will have to provide your own MongoDB Atlas cluster. We would recommend signing up for a free account <a href="https://cloud.mongodb.com">here</a>.

# What are the ```yarn``` commands?

There are a number of convenient yarn scripts (defined in package.json) which can be used

## yarn server
This command starts up the server using the default *NODE_ENV* and *nodemon*.

## yarn migrate
This command sets the NODE_ENV to "builder" and migrates data from *migration/data.json* to the MongoDB database. Currently, it just inserts two test documents.

## yarn production
Similar to  ```yarn server```, this command starts up the server, but sets the NODE_ENV to "production."

## yarn genKey
This can be used to conveniently generate API keys and hashing them. This will print a new object to the console, which can then be used to modify the config files. The user must specify the lengths of the key to be generated and the salt to be used for hashing.

The output of this operation will look as follows:

```
{
  plainKey: 'plainTextKey',
  hashedKey: 'saltedAndHashedKey'
}

```

## yarn example.request
This runs the example request script, taking the API key and the URL from *config/examples.json* (not available in public kitty-api repository) and returns the response as a JSON object. Note that this is a NodeJS script, and thus uses node-fetch to send requests.

