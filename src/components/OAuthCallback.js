import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import MintNFTButton from "./MintNFTButton";
import DisplayNFT from "./DisplayNFT";

const OAuthCallback = () => {
  const [channelInfo, setChannelInfo] = useState(null);
  const [tokenURI, setTokenURI] = useState(null);
  const [error, setError] = useState(null);
  const [mintedTokenId, setMintedTokenId] = useState(null);
  const location = useLocation();

  // Function to extract query parameters from the URL
  const getQueryParams = (queryString) => {
    return new URLSearchParams(queryString);
  };

  useEffect(() => {
    const queryParams = getQueryParams(location.search);
    const code = queryParams.get("code");

    if (code) {
      // Send the authorization code to the backend for verification and proof generation
      axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/oauth2callback`, {
          params: { code },
        })
        .then((response) => {
          const { channelId, channelTitle, tokenURI } = response.data;

          // Send the parameters to the backend for metadata creation
          axios
            .post(`${process.env.REACT_APP_BACKEND_URL}/createmetadata`, {
              channelId,
              channelTitle,
              tokenURI,
            })
            .then((res) => {
              setChannelInfo({
                channelId: res.data.channelId,
                channelTitle: res.data.channelTitle,
              });
              setTokenURI(res.data.tokenURI);
              console.log("Channel Info and Token URI:", res.data);
            })
            .catch((err) => {
              setError("Failed to create metadata.");
              console.error("Error during metadata creation:", err);
            });
        })
        .catch((err) => {
          setError("Failed to fetch channel information or generate proof.");
          console.error(err);
        });
    } else {
      setError("No authorization code provided.");
    }
  }, [location]);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!channelInfo || !tokenURI) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Authenticated YouTube Account</h2>
      <p>
        <strong>Channel ID:</strong> {channelInfo.channelId}
      </p>
      <p>
        <strong>Channel Name:</strong> {channelInfo.channelTitle}
      </p>

      {!mintedTokenId ? (
        <MintNFTButton
          channelId={channelInfo.channelId}
          channelTitle={channelInfo.channelTitle}
          tokenURI={tokenURI}
          onMinted={(tokenId) => setMintedTokenId(tokenId)} // Capture the minted tokenId
        />
      ) : (
        <DisplayNFT tokenId={mintedTokenId} />
      )}
    </div>
  );
};

export default OAuthCallback;
