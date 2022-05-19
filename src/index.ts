import * as core from '@actions/core';
import { listContacts, sendMessage } from './convesationAPI';
import { fetchAccessToken } from './fetchAccessToken';

const isJson = (str: string) => {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
};

const parseMessage = (message: string) => {
  return isJson ? JSON.parse(message) : { text_message: { text: message } };
};

(async () => {
  const clientId = core.getInput('clientId');
  const clientSecret = core.getInput('clientSecret');
  const projectId = core.getInput('projectId');
  const appId = core.getInput('appId');
  const message = core.getInput('message');
  const meta = core.getInput('meta');

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
          message: parseMessage(message),
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
