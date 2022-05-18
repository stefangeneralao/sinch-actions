import axios from 'axios';

interface Props {
  accessToken: string;
  message: any;
  contactId: string;
  projectId: string;
  appId: string;
}

export const sendMessage = async ({
  accessToken,
  message,
  contactId,
  projectId,
  appId,
}: Props) => {
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const data = {
    app_id: appId,
    recipient: {
      contact_id: contactId,
    },
    message,
  };

  try {
    await axios.post(
      `https://us.conversation.api.sinch.com/v1/projects/${projectId}/messages:send`,
      data,
      config
    );
  } catch (e) {
    console.log('Failed to send message:', e.response.data.error.details[0]);
  }
};
