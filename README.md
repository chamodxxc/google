# Google Search API – Cloudflare Worker  
Creator: **Chamod Nimsara**

A simple Google Custom Search JSON API wrapper deployed on Cloudflare Workers.

## 🔥 Usage  
```
https://your-worker-subdomain.workers.dev/?q=tiktok
```

### Response Example:
```json
{
  "status": true,
  "creator": "Chamod Nimsara",
  "data": [
    {
      "title": "...",
      "link": "...",
      "snippet": "..."
    }
  ]
}
```

## 🚀 Deploy to Cloudflare
1. Install Wrangler  
```
npm install -g wrangler
```

2. Login  
```
wrangler login
```

3. Deploy  
```
wrangler deploy
```

4. Add Environment Variables  
```
wrangler secret put API_KEY
wrangler secret put CX_ID
```

Done!
