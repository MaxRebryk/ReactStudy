export const Mailbox = ({ username = 'Anonymous', messages }) => {
  return (
    <>
      <p>Hello {username}</p>
      {messages.length > 0 && <p>You have {messages.length} unread messages</p>}
    </>
  );
};
