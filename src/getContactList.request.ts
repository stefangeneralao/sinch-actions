import 'dotenv/config';
import { fetchAccessToken } from './fetchAccessToken';
import { listContacts } from './convesationAPI';

(async () => {
  const { CLIENT_ID, CLIENT_SECRET, PROJECT_ID, APP_ID } = process.env;

  const accessToken = await fetchAccessToken(CLIENT_ID, CLIENT_SECRET);

  const contacts = await listContacts({
    projectId: PROJECT_ID,
    accessToken,
  });
  console.log(contacts);
  console.log('::set-output name=FRUIT::banana');
})();
