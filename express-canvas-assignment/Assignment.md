Create a single-file express JS script that does the following:

1. Serve an `index.html` file located in an 'html' directory for `/`
2. Serve a **JSON** object response including your name, your email address, and your favorite musician for the route `/about`
3. Accept an **HTTP GET** request to `/password/generate/:length` that returns a randomly generated password at least the size of *"length"*
4. Accept an **HTTP POST** verb to `/password` that verifies a password is **8** characters and contains numbers. This should return a **JSON** document with a *'valid'* key set to **true or false** depending on the password's merit.

Your script may depend on Express, but no other external libraries (Using the Node standard library is fine). Upload only your JS file.