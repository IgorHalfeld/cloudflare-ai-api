import Cloudflare from "cloudflare";

export default eventHandler(async (event) => {
  const { payload, model } = await readBody(event);
  const { cfApiEmail, cfApiKey, cfAccountId } = useRuntimeConfig();

  const cloudflare = new Cloudflare({
    apiEmail: cfApiEmail,
    apiKey: cfApiKey,
  });

  const response = await cloudflare.workers.ai.run(model, {
    account_id: cfAccountId,
    ...payload,
  });

  return response;
});
