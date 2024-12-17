import { useState } from "react";
import styles from "./App.module.css";
import { Chat } from "./components/Chat";

function App() {
  const [messages, setMessages] = useState(MESSSAGES);

  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <img className={styles.Logo} src="/chat-bot.png" />
        <h2 className={styles.Title}>AI chatbot</h2>
      </header>
      <div className={styles.ChatContainer}>
        <Chat messages={messages} />
      </div>
    </div>
  );
}

const MESSSAGES = [
  {
    role: "user",
    content: "Lorem ipsum dolor",
  },
  {
    role: "assistant",
    content: "Lorem ipsum dolor",
  },
  {
    role: "user",
    content: "Lorem ipsum dolor",
  },
  {
    role: "assistant",
    content: "Lorem ipsum dolor",
  },
  {
    role: "user",
    content: "Lorem ipsum dolor",
  },
  {
    role: "assistant",
    content: "Lorem ipsum dolor",
  },
  {
    role: "user",
    content: "Lorem ipsum dolor",
  },
  {
    role: "assistant",
    content: "Lorem ipsum dolor",
  },
];

export default App;
