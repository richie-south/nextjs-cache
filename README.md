1. start api server `npm run api`
2. start next `npm run dev`¨

Cache is set to 5secs.
Reloading page after cache expiring will yield results below.

**On `/`**

i get 3 requests to my api server

```
"GET /data.json?id=6" "undici"
"GET /data.json?id=6" "undici"
"GET /data.json?id=6" "undici"
```

**On /todo**

i get 5 requests to my api server

```
"GET /data.json?id=6" "undici"
"GET /data.json?id=6" "undici"
"GET /data.json?id=6" "undici"
"GET /data.json?id=6" "undici"
"GET /data.json?id=6" "undici"
```
