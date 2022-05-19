import 'dotenv/config';
import * as core from '@actions/core';
import { listContacts, sendMessage } from './convesationAPI';
import { fetchAccessToken } from './utils/fetchAccessToken';
import { parseMessage } from './utils';

(async () => {
  const clientId = core.getInput('clientId') || process.env.CLIENT_ID;
  const clientSecret =
    core.getInput('clientSecret') || process.env.CLIENT_SECRET;
  const projectId = core.getInput('projectId') || process.env.PROJECT_ID;
  const appId = core.getInput('appId') || process.env.APP_ID;
  const message = core.getInput('message');
  const meta = core.getInput('meta') || null;

  if (meta) {
    console.log(meta);
  }

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
