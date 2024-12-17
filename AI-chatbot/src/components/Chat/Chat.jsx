import Markdown from "react-markdown";
import styles from "./Chat.module.css";
import { useRef, useEffect, useMemo } from "react";

const WELCOME_MESSAGE_GROUP = [
  {
    role: "assistant",
    content: "Hello! How can I assist you right now",
  },
];

export function Chat({ messages }) {
  const messagesEndRef = useRef(null);
  const messageGroups = useMemo(
    () =>
      messages.reduce((groups, message) => {
        if (message.role === "user") groups.push([]);
        groups[groups.length - 1].push(message);
        return groups;
      }, []),
    [messages]
  );

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <div className={styles.Chat}>
      {[WELCOME_MESSAGE_GROUP, ...messageGroups].map((messages, groupIndex) => (
        <div key={groupIndex} className={styles.Group}>
          {messages.map(({ role, content }, index) => (
            //Message
            <div key={index} data-role={role} className={styles.Message}>
              <Markdown>{content}</Markdown>
            </div>
          ))}
        </div>
      ))}

      <div ref={messagesEndRef} />
    </div>
  );
}
