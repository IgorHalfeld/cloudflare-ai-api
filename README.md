## `cloudflare-ai-api`

Simple bypass to access cloudflare ai from web clients

## How to use

Check available [models and payloads here](https://developers.cloudflare.com/workers-ai/models/)

```
POST - `/ai`
{
    "model": "@cf/meta/llama-2-7b-chat-fp16",
    "payload": {
        "messages": [{ "role": "assistant", "content": "tell me a history" }],
        "stream": false
    }
}
```

Create a new file `.env` and copy the content from `.env.example` and update the values

You can use fly.io to deploy this project
