# URL Shortner System Design

## Overview

A URL shortener service creates an alias or a short URL for a long URL. Users are redirected to the original URL when they visit these short links.

Why do we need a URL shortener?
URL shortener saves space in general when we are sharing URLs. Users are also less likely to mistype shorter URLs. Moreover, we can also optimize links across devices, this allows us to track individual links.

### Steps

1. Create a server
    a. express, we require express and call express()
    b. listen to port
2. We add middlewares, which gets called between the request and response.
3. On / or homepage we need to show the html page
    a. we first write a middleware using app.use('/',fn)
    b. inside the fn return the html file.
4. 