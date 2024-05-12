//https://nitro.unjs.io/config
export default defineNitroConfig({
  srcDir: "server",

  runtimeConfig: {
    cfApiEmail: process.env.CF_API_EMAIL,
    cfApiKey: process.env.CF_API_KEY,
    cfAccountId: process.env.CF_ACCOUNT_ID,
  },
});
