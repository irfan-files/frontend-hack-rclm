import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import abi from "../abiMintingAccount.json"; // Adjust the path if necessary

const DisplayNFT = ({ tokenId, imageURL }) => {
  const [metadata, setMetadata] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMetadata = async () => {
      try {
        if (!window.ethereum) {
          alert("MetaMask is not installed!");
          return;
        }

        const provider = new ethers.BrowserProvider(window.ethereum);
        const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
        const contract = new ethers.Contract(
          contractAddress,
          abi.abi,
          provider
        );

        // Fetch tokenURI from the contract
        const tokenURI = await contract.tokenURI(tokenId);
        console.log("Token URI:", tokenURI);

        let metadataURL = tokenURI;

        // If using IPFS gateway
        if (tokenURI.startsWith("ipfs://")) {
          metadataURL = `https://gateway.pinata.cloud/ipfs/${
            tokenURI.split("ipfs://")[1]
          }`;
        }

        const response = await fetch(metadataURL);
        const data = await response.json();
        setMetadata(data);
      } catch (err) {
        console.error("Error fetching metadata:", err);
        setError("Failed to fetch NFT metadata.");
      }
    };

    fetchMetadata();
  }, [tokenId]);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!metadata) {
    return <div>Loading NFT details...</div>;
  }

  return (
    <div className="mt-6 p-4 border rounded shadow">
      <h3 className="text-xl font-bold mb-2">Your NFT</h3>
      {metadata.image && (
        <img
          src={metadata.image}
          alt={metadata.name}
          className="w-64 h-64 object-cover mb-4"
        />
      )}
      <p>
        <strong>Name:</strong> {metadata.name}
      </p>
      <p>
        <strong>Description:</strong> {metadata.description}
      </p>
      {metadata.attributes && (
        <div className="mt-2">
          <strong>Attributes:</strong>
          <ul>
            {metadata.attributes.map((attr, index) => (
              <li key={index}>
                {attr.trait_type}: {attr.value}
              </li>
            ))}
          </ul>
        </div>
      )}
      <p className="mt-2">
        <strong>Token ID:</strong> {tokenId}
      </p>
    </div>
  );
};

export default DisplayNFT;
