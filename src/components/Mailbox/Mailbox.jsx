export const Mailbox = ({ username = 'Anonymous', messages }) => {
  return (
    <>
      <p>Hello {username}</p>
      {messages.length > 0 ? (
        <p>You have {messages.length} unread messages</p>
      ) : (
        <p>You do not have messages</p>
      )}
    </>
  );
};
import { View, Text } from 'react-native';
import React from 'react';
