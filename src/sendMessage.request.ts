import 'dotenv/config';
import { fetchAccessToken } from './fetchAccessToken';
import { sendMessage } from './convesationAPI';

(async () => {
  const { CLIENT_ID, CLIENT_SECRET, PROJECT_ID, APP_ID } = process.env;

  const accessToken = await fetchAccessToken(CLIENT_ID, CLIENT_SECRET);

  sendMessage({
    accessToken,
    message: {
      text_message: { text: 'Hello, world!' },
    },
    contactId: '01G3B8PFV8PY6BXMZRBCJSVBBW',
    projectId: PROJECT_ID,
    appId: APP_ID,
  });
})();
