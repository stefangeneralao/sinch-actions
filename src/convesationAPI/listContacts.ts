import axios from 'axios';

interface Props {
  projectId: string;
  accessToken: string;
}

export const listContacts = async ({ projectId, accessToken }: Props) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const resp = await axios.get(
      `https://us.conversation.api.sinch.com/v1/projects/${projectId}/contacts`,
      config
    );
    return resp.data.contacts;
  } catch (e) {
    console.log(e.message);
  }
};
