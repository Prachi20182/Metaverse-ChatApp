import { useMoralis } from "react-moralis";
import { useState } from "react";

function SendMessage({ endOfMessagesRef }) {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

    if (!message) return;

    const Messages = Moralis.Object.extend("Messages");
    const messages = new Messages();

    messages
      .save({
        message: message,
        username: user.getUsername(),
        ethAddress: user.get("ethAddress"),
      })
      .then(
        (message) => {},
        (error) => {
          console.log(error.message);
        }
      );
    endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    setMessage("");
  };

  return (
    <form
      className="flex fixed bottom-10 bg-gray-200 opacity-80
     w-11/12 px-6 py-4 max-w-2xl shadow-xl rounded-full border-4
     border-blue-400"
    >
      <input
        className="flex-grow outline-none bg-transparent text-gray-700
      placeholder-gray-500 pr-5"
        type="text"
        onChange={(e) => setMessage(e.target.value)}
        placeholder={`Enter a Message ${user.getUsername()}...`}
      />
      <button
        onClick={sendMessage}
        type="submit"
        className="font-bold text-blue-600"
      >
        send
      </button>
    </form>
  );
}

export default SendMessage;
