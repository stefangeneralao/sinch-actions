import axios from 'axios';

export const fetchAccessToken = async (
  clientId: string,
  clientSecret: string
) => {
  const data = 'grant_type=client_credentials';

  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${Buffer.from(
        `${clientId}:${clientSecret}`
      ).toString('base64')}`,
    },
  };

  try {
    const {
      data: { access_token },
    } = await axios.post(
      'https://us.auth.sinch.com/oauth2/token',
      data,
      config
    );
    return access_token;
  } catch {
    console.log('Failed to get token');
  }
};
