import 'dotenv/config';
import { fetchAccessToken } from '../fetchAccessToken';
import { listContacts, sendMessage } from '../convesationAPI';

(async () => {
  const { CLIENT_ID, CLIENT_SECRET, PROJECT_ID, APP_ID } = process.env;

  try {
    const accessToken = await fetchAccessToken(CLIENT_ID, CLIENT_SECRET);

    const contacts = await listContacts({
      projectId: PROJECT_ID,
      accessToken,
    });

    await Promise.all(
      contacts.map(async (contact: any) => {
        const { id: contactId } = contact;

        sendMessage({
          accessToken,
          message: {
            text_message: { text: '💩💩💩💩💩💩💩' },
          },
          contactId,
          projectId: PROJECT_ID,
          appId: APP_ID,
        });
      })
    );
  } catch (e) {
    console.log(e);
  }
})();
