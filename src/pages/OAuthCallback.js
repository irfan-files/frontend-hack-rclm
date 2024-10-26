import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MintNFTButton from "../components/MintNFTButton";
import DisplayNFT from "../components/DisplayNFT";
import ProfileCard from "../components/basicComponents/ProfileCard";
import { Basenames } from "../components/GetBasenameMint";
import { useAccount } from "wagmi";
import { motion } from "framer-motion";

const OAuthCallback = () => {
  const [channelInfo, setChannelInfo] = useState({});
  const [tokenURI, setTokenURI] = useState(null);
  const [proofDataObject, setProofDataObject] = useState(null);
  const [error, setError] = useState(null);
  const [mintedTokenId, setMintedTokenId] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const location = useLocation();
  const { isConnected } = useAccount();
  const account = useAccount();
  const [channelSubs, setChannelSubs] = useState(null);
  const [channelViews, setChannelViews] = useState(null);
  const [channelVideo, setChannelVideos] = useState(null);
  const [channelPublishedAt, setChannelPublishedAt] = useState(null);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);

    const channelData = {
      channelId: queryParams.get("channel_id"),
      channelTitle: queryParams.get("channel_title"),
      channelSubs: queryParams.get("channel_subscriber"),
      channelViews: queryParams.get("channel_view_count"),
      channelVideo: queryParams.get("channel_total_video"),
      channelPublishedAt: queryParams.get("channel_published_at"),
      tokenURI: queryParams.get("token_uri"),
      imageURL: queryParams.get("image_url"),
    };

    const proofData = queryParams.get("proofData");
    const proofSend = proofData && JSON.parse(decodeURIComponent(proofData));

    const formattedDate = channelData.channelPublishedAt
      ? new Date(channelData.channelPublishedAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })
      : "N/A";

    if (channelData.channelId && channelData.channelTitle) {
      setChannelInfo(channelData);
      setTokenURI(channelData.tokenURI);
      setProofDataObject(proofSend);
      setImageURL(channelData.imageURL);
      setChannelSubs(channelData.channelSubs);
      setChannelVideos(channelData.channelVideo);
      setChannelViews(channelData.channelViews);
      setChannelPublishedAt(formattedDate);
    } else {
      setError("Some required channel data is missing.");
    }
  }, [location]);

  return (
    <div>
      {error && <div className="text-red-500">{error}</div>}
      <section className="flex flex-col px-16 pt-14 pb-28 max-md:px-5 max-md:pb-24 bg-gray-100">
        <header className="flex overflow-hidden flex-col justify-center py-6 w-full text-black border-b-2 border-stone-300 max-md:max-w-full">
          <div className="flex gap-6 items-end w-full max-md:max-w-full">
            <div className="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px] max-md:max-w-full">
              <h1 className="text-2xl font-bold leading-snug max-md:max-w-full">
                Channel Detail
              </h1>
              <p className="mt-2 text-base max-md:max-w-full">
                Review your channel status here! <br />
                The information below is just for your reference and not part of
                the NFT attributes.
              </p>
            </div>
          </div>
        </header>
        <main className="flex overflow-hidden flex-wrap gap-10 px-8 py-12 w-full max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col gap-12 items-center self-start bg-gray-100 rounded-lg min-w-[240px] w-[375px]">
            <ProfileCard
              channelName={channelInfo.channelTitle || "N/A"}
              channelId={channelInfo.channelId || "N/A"}
              channelSubs={channelSubs || "N/A"}
              videoCount={channelVideo || "N/A"}
              videoViews={channelViews || "N/A"}
              accountCreated={channelPublishedAt || "N/A"}
              imageURL={imageURL}
            />
          </div>
          <div className="flex flex-col flex-1 shrink justify-center basis-0 min-w-[240px] max-md:max-w-full">
            <div className="flex flex-col w-full max-md:max-w-full">
              <div className="flex flex-row gap-2 text-white">
                <Basenames address={account.addresses?.[0] || "N/A"} />
              </div>
              <hr className="mt-5 w-full h-px bg-gray-300 min-h-[1px] max-md:max-w-full" />
              {!mintedTokenId ? (
                <MintNFTButton
                  proofData={proofDataObject}
                  tokenURI={tokenURI}
                />
              ) : (
                <DisplayNFT tokenId={mintedTokenId} imageURL={imageURL} />
              )}
            </div>
          </div>
        </main>
      </section>
      {!isConnected && (
        <motion.div
          className="flex justify-center items-center mt-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="text-center p-10 bg-gray-100 rounded-lg shadow-lg"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
          >
            <h2 className="text-2xl font-bold mb-4">Connect Your Wallet!</h2>
            <p className="text-gray-700">
              Connect your wallet to mint NFTs or interact further.
            </p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default OAuthCallback;
