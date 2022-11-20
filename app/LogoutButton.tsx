"use client";

function LogoutButton() {
  return (
    <button
      onClick={() => console.log("hello")}
      className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded"
    >
      Sign Out
    </button>
  );
}

export default LogoutButton;
