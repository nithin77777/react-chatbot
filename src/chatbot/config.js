import { createChatBotMessage } from 'react-chatbot-kit';

export const botName = 'Infinity Bot';
const config = {
  botName: botName,
  initialMessages: [
    createChatBotMessage(
      `Welcome, You are talking to ${botName}.`
    ),
  ],
  customStyles: {
    
  },
};

export default config;
