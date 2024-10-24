import React from "react";
import { Link } from "react-router-dom";
import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit"; // Import RainbowKit's ConnectButton
import { ButtonComponents } from "./basicComponents/ButtonComponents";

const Header = () => {
  const { address, isConnected } = useAccount(); // Access the account and connection status

  return (
    <header className="w-full bg-gray-900 border-b border-neutral-200 p-4 font-coinbase">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left side - Logo */}
        <Link to="/">
          <img
            src="https://i.postimg.cc/3R2bSY2N/logo-creatorhub.png"
            alt="Creator Beam"
            className="h-12 w-auto"
          />
        </Link>

        {/* Right side - Wallet and Profile */}
        <div className="ml-auto flex items-center gap-4">
          {/* RainbowKit's ConnectButton will handle wallet connections */}
          <ButtonComponents />
        </div>
      </div>
    </header>
  );
};

export default Header;
