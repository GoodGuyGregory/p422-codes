## HTTP Servers

**URI** https executes through these more general form of URL they are composed of many elements 

`URI = scheme:[//authority]path[?query][#fragment]`

the authority is composed of three subcomponents

`authority = [userinfo@]host[:port]`

the host responds with custom generated data now a days.nso basically responding to path requests to build assets and return them

**CURL**

`nslookup <site>` returns the server that hosts a site

`https://` responds with port 443 

`http://` responds with port 440

`curl -I <site>` responds with header information on the requested site

**HTTP Verbs**

* GET: responds with retrieving new quotes from the REST API `curl -X GET https://api.kanye.rest` performs a GET request with curl `curl -X GET https://api.kanye.rest?format="text"` returns quotes

**Create a Gitignore via GET request**

`curl https://www.toptal.com/developers/gitignore/api/<needed files to ignore>`

example `curl https://www.toptal.com/developers/gitignore/api/node,vim,windows,macos > .gitignore`

**Additional Notes**

[http codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)
