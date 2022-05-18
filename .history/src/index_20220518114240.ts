import 'dotenv/config';
import { fetchAccessToken } from './fetchAccessToken';
import {
  createContact,
  listContacts,
  sendMessage,
  deleteContact,
} from './convesationAPI';

(async () => {
  const { CLIENT_ID, CLIENT_SECRET, PROJECT_ID, APP_ID } = process.env;

  const accessToken = await fetchAccessToken(CLIENT_ID, CLIENT_SECRET);

  // createContact({
  //   projectId,
  //   accessToken,
  //   contactName: 'stiffepiff',
  //   contactIdentities: [
  //     {
  //       channel: 'TELEGRAM',
  //       identity: '46768720573',
  //     },
  //   ],
  // });

  // deleteContact({
  //   projectId,
  //   accessToken,
  //   contactId: '01G2A83HGMT9EWZPQZ5R9WYS2H',
  // });

  const contacts = await listContacts({
    projectId: PROJECT_ID,
    accessToken,
  });
  console.log(contacts);

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
