import React from "react";
import Header from "./components/custom/Header";
import Hero from "./components/custom/Hero";
import ChatView from "./components/custom/ChatView";
// import { MessagesProvider } from "./MessagesContext";
import {MessagesContext} from "./context/MessagesContext"

function App() {
  return (
   <MessagesContext>
      <div className="min-h-screen bg-gray-900 text-white">
        {/* Top Navbar */}
        <Header />

        {/* Hero Section */}
        <Hero />

        {/* Chat Section */}
        <ChatView />
      </div>
    </MessagesContext>
  );
}

export default App;
