export function Chat({ messages }) {
  return (
    <div>
      {messages.map(({ role, content }, index) => (
        <div key={index} data-role={role}>
          {content}
        </div>
      ))}
    </div>
  );
}
