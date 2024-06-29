/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { message } from 'antd';
import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = message => {
    if (message.toLowerCase().includes('hello')) {
      actions.forHello();
    } else if (message.toLowerCase().startsWith('my name is')) {
      // var name = message.split('my name is')[1].trim();
      const name = message.slice(10).trim();
      actions.forName(name);
    } else if (message.toLowerCase().startsWith('my github id is')) {
      
      const Id = message.slice(15).trim();
      actions.forId(Id);
    }
  };

  return (
    <div>
      {React.Children.map(children, child => {
        return React.cloneElement(child, {
          parse: parse,
          actions: {},
        });
      })}
    </div>
  );
};

export default MessageParser;
