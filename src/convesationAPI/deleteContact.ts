import axios from 'axios';

interface Props {
  projectId: string;
  accessToken: string;
  contactId: string;
}

export const deleteContact = async ({
  projectId,
  accessToken,
  contactId,
}: Props) => {
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  try {
    await axios.delete(
      `https://us.conversation.api.sinch.com/v1/projects/${projectId}/contacts/${contactId}`,
      config
    );
  } catch (e) {
    console.log('Failed to delete contact:', e.response.data);
  }
};
