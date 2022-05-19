import * as core from '@actions/core';
import { listContacts, sendMessage } from './convesationAPI';
import { fetchAccessToken } from './fetchAccessToken';

(async () => {
  const clientId = core.getInput('clientId');
  const clientSecret = core.getInput('clientSecret');
  const projectId = core.getInput('projectId');
  const appId = core.getInput('appId');

  try {
    const accessToken = await fetchAccessToken(clientId, clientSecret);

    const contacts = await listContacts({
      projectId,
      accessToken,
    });

    await Promise.all(
      contacts.map(async (contact: any) => {
        const { id: contactId } = contact;

        sendMessage({
          accessToken,
          message: {
            text_message: { text: '💩💩💩💩💩💩💩🍌' },
          },
          contactId,
          projectId,
          appId,
        });
      })
    );
  } catch (e) {
    console.log(e);
  }
})();
