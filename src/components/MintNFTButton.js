import * as React from "react";
import {
  useAccount,
  BaseError,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import abi from "../abiMintingAccount.json";
import { useState } from "react";
import { sepolia } from "viem/chains";
import { switchChain } from '@wagmi/core'

const MintNFTButton = ({ proofData, tokenURI }) => {
  const [minting, setMinting] = useState(false);
  const [errorState, setError] = useState(null);
  const [txHash, setTxHash] = useState(null);
  const account = useAccount();
  
  const handleSwitchChain = async () => {
      try {
        // Wagmi switch chain - for smart wallet
        try {
          if (account.chainId !== sepolia.id) {
            await switchChain({ chainId: sepolia.id });
          }
        } catch {
          // Ether switch chain - for coinbase wallet
          if (account.chainId !== 84532) {
                  await window.ethereum.request({
                    method: "wallet_switchEthereumChain",
                    params: [{ chainId: "0x14a34" }],
                  });
                }
        }
      } catch (error) {
        console.error("Failed to switch chain:", error);
        setError("Failed to switch chain. Please try again.");
      }
    };

  const { data: hash, error, isPending, writeContract } = useWriteContract();
  console.log(error)

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  const handleMint = async (e) => {
    e.preventDefault();
    await handleSwitchChain();

    try {
      await writeContract({
        address: '0x7FF8Dfeda2966d9aD058b06900B9181D8d3AF66b',
        abi: abi,
        functionName: "mintAccount",
        args: [proofData, tokenURI],
        chainId: sepolia.id
      });
    } catch (err) {
      console.error("Failed to mint NFT:", err);
    }
  };

  return (
    <form onSubmit={handleMint}>
      <button
        class="overflow-hidden gap-3 self-stretch px-7 py-4 mt-16 max-w-full text-lg font-semibold leading-loose text-white bg-blue-600 rounded-lg border border-violet-500 border-solid shadow-sm w-[164px] max-md:px-5 max-md:mt-10"
        disabled={isPending || isConfirming}
        type="submit"
      >
        {isPending ? "Preparing..." : isConfirming ? "Minting..." : "Mint NFT"}
      </button>
      {hash && <div>Success Minting!</div>}
      {hash && (
        <div>
          Transaction Hash:{" "}
          <a href={`https://sepolia.etherscan.io/tx/${hash}`} class="text-lime-400">
            {`https://sepolia.etherscan.io/tx/${hash}`}
          </a>
        </div>
      )}
      {error && (
        <div className="p-4 border border-red-500 rounded bg-red-100 text-red-600 mb-4 font-bold">
          {error instanceof BaseError 
            ? error.shortMessage.match(/reason:\s*(.*$)/)[1] 
            : error.shortMessage.match(/reason:\s*(.*$)/)[1]}
        </div>
      )}
      
    </form>
  );
};

export default MintNFTButton;
