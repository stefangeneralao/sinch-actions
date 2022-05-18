import axios from 'axios';

interface ContactIdentity {
  channel: string;
  identity: string;
}

interface Props {
  projectId: string;
  accessToken: string;
  contactName: string;
  contactIdentities: ContactIdentity[];
}

export const createContact = async ({
  projectId,
  accessToken,
  contactName,
  contactIdentities,
}: Props) => {
  const data = {
    channel_identities: contactIdentities,
    display_name: contactName,
  };

  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  try {
    await axios.post(
      `https://us.conversation.api.sinch.com/v1/projects/${projectId}/contacts`,
      data,
      config
    );
  } catch (e) {
    console.log('Failed to create contact:', e.response.data.error);
  }
};
