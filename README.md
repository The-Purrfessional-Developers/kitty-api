# kitty-api

This is a basic API that is made to return URLs to cat pictures based on the user-specified mood. 

# How do I use kitty-api?
Currently, this is done by passing a valid security key and an emotion via an HTTP GET request . Currently, such a key is not publicly available due to early private testing, though can be provided on request.

A validly structured request body would appear as so:
```
{
    "emotion": "happy",
    "key": "validApiSecurityKey"
}
```

