/* eslint-disable react/prop-types */
import React from 'react';
import config from './config';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const forHello = () => {
    const botMessage = createChatBotMessage(
      `${config.botName}:: Hello, User Good Evening!`
    );
    const botMessage1 = createChatBotMessage(
      `${config.botName}::  Can you Input Your Name?`
    );
    setState(prev => ({
      ...prev,
      messages: [...prev.messages, botMessage, botMessage1],
    }));
  };

  const forName = names => {
    const botMessage = createChatBotMessage(
      `Hello ${names} ! let me gather some Info`
    );
    const botMessage1 = createChatBotMessage(
      `${names} Whats your Github Username?`
    );
    setState(prev => ({
      ...prev,
      messages: [...prev.messages, botMessage, botMessage1],
    }));
    // console.log(state);
  };

  const forId = Id => {
    const botMessage = createChatBotMessage(`Thanks, your git is ${Id}`);
    const botMessage1 = createChatBotMessage(`Have a Great Day Nithin!!`);
    setState(prev => ({
      ...prev,
      messages: [...prev.messages, botMessage, botMessage1],
    }));
    // console.log(state);
  };

  return (
    <div>
      {React.Children.map(children, child => {
        return React.cloneElement(child, {
          actions: {
            forHello,
            forName,
            forId,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
