import React from "react";
import MessageList from "./MessageList";

function HomePage() {
  return (
    <main className="">
      {/* MessageList */}
      <MessageList />
      {/* ChatInput */}
      <h1>Welcome to the chat!</h1>
    </main>
  );
}

export default HomePage;
