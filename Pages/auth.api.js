const account = require('../fixtures/erm.json');
// authAPI.js
export class AuthAPI {
  // Store the Playwright APIRequestContext instance
  constructor(requestContext) {
    this.request = requestContext;
  }

  // Logs into Bee and returns the token
  async loginBee(email, password) {
    const beeRes = await this.request.post(
      process.env.BEE_ENDPOINT_URL,
      {
        data: {
          email: email,
          password: password
        },
        headers: {
          'User-Agent': 'PostmanRuntime/7.44.0',
          enforceTwoFactor: 'false',
          referer: process.env.BEE_URL
        }
      }
    );

    if (!beeRes.ok()) {
      throw new Error(`Bee login failed: ${beeRes.status()}`);
    }

    const body = await beeRes.json();
    return body.data.token;
  }

  // Uses the Bee token to log into DE and returns the DE token
  async loginDE(token) {
    const deRes = await this.request.post(
      process.env.DE_ENDPOINT_URL,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          referer: process.env.BASE_URL
        }
      }
    );

    if (!deRes.ok()) {
      throw new Error(`DE login failed: ${deRes.status()}`);
    }

    const body = await deRes.json();
    return body.data.token;
  }
}