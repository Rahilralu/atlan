"use client";
import React, { useState } from 'react';
import ChatInput from './ChatInput';

const InteractiveAIAgent = () => {
  const [userMessage, setUserMessage] = useState("How do i connect SnowFlakes to atlan");
  const [botMessage, setBotMessage] = useState("To connect to SnowFlake to atlan,you needprovide the necessary mission and credentials on SnowFlake side");
  const [followUpMessage, setFollowUpMessage] = useState("What are the permissions ?");

  const handleSendMessage = (messageText) => {
    setUserMessage(messageText);
    setTimeout(() => {
      setBotMessage("I understand your question. Let me help you with that information.");
    }, 1000);
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap"
        rel="stylesheet"
      />
      <main className="relative mx-auto max-w-none bg-white rounded-xl border border-black border-solid shadow-lg h-[600px] w-[420px] max-md:mx-auto max-md:my-0 max-md:max-w-[420px] max-md:w-[90%] max-sm:max-w-screen-sm max-sm:h-auto max-sm:min-h-[600px] max-sm:w-[95%]">
        <header className="absolute text-3xl font-medium text-blue-800 h-[34px] left-[26px] top-[27px] w-[367px] max-md:text-2xl max-md:left-[5%] max-md:w-[90%] max-sm:text-xl max-sm:text-center max-sm:left-[5%] max-sm:w-[90%]">
          <h1>Interactive AI Agent</h1>
        </header>

        <section
          className="absolute bg-white rounded-xl border border-black border-solid shadow-lg h-[400px] left-[35px] top-[122px] w-[350px] max-md:left-[5%] max-md:w-[90%] max-sm:h-auto max-sm:left-[2.5%] max-sm:min-h-[350px] max-sm:w-[95%]"
          aria-label="Chat conversation"
        >
          <article className="inline-flex absolute justify-end items-center pt-2 pr-1 pb-1.5 pl-2 bg-blue-600 rounded-xl h-[47px] left-[116px] top-[34px] w-[227px] max-md:right-[5%] max-md:w-[70%] max-sm:p-1.5 max-sm:w-4/5 max-sm:text-xs">
            <p className="absolute text-sm text-white h-[34px] left-[7px] top-[7px] w-[217px]">
              {userMessage}
            </p>
          </article>

          <article className="inline-flex absolute justify-center items-center pt-2 pr-2 pb-0 pl-2.5 w-56 bg-white rounded-xl border border-black border-solid shadow-lg h-[82px] left-[11px] top-[101px] max-md:left-[5%] max-md:w-[70%] max-sm:p-1.5 max-sm:w-4/5 max-sm:text-xs">
            <p className="absolute left-2.5 text-xs text-black h-[75px] top-[7px] w-[206px]">
              {botMessage}
            </p>
          </article>
          <article className="inline-flex absolute justify-end items-center py-2 pr-0 pl-2 bg-blue-600 rounded-xl h-[31px] left-[143px] top-[203px] w-[197px] max-md:right-[5%] max-md:w-[70%] max-sm:p-1.5 max-sm:w-4/5 max-sm:text-xs">
            <p className="absolute text-sm text-white h-[17px] left-[7px] top-[7px] w-[217px]">
              {followUpMessage}
            </p>
          </article>
        </section>

        <ChatInput
          onSendMessage={handleSendMessage}
          placeholder="Type your Message"
        />
      </main>
    </>
  );
};

export default InteractiveAIAgent;
