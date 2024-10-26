import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MintNFTButton from "../components/MintNFTButton";
import DisplayNFT from "../components/DisplayNFT";
import ProfileCard from "../components/basicComponents/ProfileCard";
import { Basenames } from "../components/GetBasenameMint";
import { useAccount } from "wagmi";
import { motion } from "framer-motion";

const OAuthCallback = () => {
  const [channelInfo, setChannelInfo] = useState(null);
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
    const accessToken = queryParams.get("access_token");
    const channelId = queryParams.get("channel_id");
    const tokenURI = queryParams.get("token_uri");
    const channelTitle = queryParams.get("channel_title");

    // Get image url
    const imageURL = queryParams.get("image_url");

    // Proof Reclaim
    const proofData = queryParams.get("proofData");
    const proofSend = JSON.parse(decodeURIComponent(proofData));

    // Information for badge card
    const channelSubs = queryParams.get("channel_subscriber");
    const channelView = queryParams.get("channel_view_count");
    const channelVideo = queryParams.get("channel_total_video");
    const channelPublishedAt = queryParams.get("channel_published_at");

    const date = new Date(channelPublishedAt);
    const options = { year: "numeric", month: "short", day: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);

    if (
      accessToken &&
      channelId &&
      tokenURI &&
      channelTitle &&
      imageURL &&
      channelSubs &&
      channelVideo &&
      channelView &&
      formattedDate
    ) {
      setChannelInfo({ channelId, channelTitle });
      setTokenURI(tokenURI);
      setProofDataObject(proofSend);
      setImageURL(imageURL);
      setChannelSubs(channelSubs);
      setChannelVideos(channelVideo);
      setChannelViews(channelView);
      setChannelPublishedAt(formattedDate);
    } else {
      setError("Required query parameters are missing.");
    }
  }, [location]);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!channelInfo) {
    return <div>Loading...</div>;
  }
  if (isConnected) {
    return (
      <div>
        <section class="flex flex-col px-16 pt-14 pb-28 max-md:px-5 max-md:pb-24 bg-gray-100">
          <header class="flex overflow-hidden flex-col justify-center py-6 w-full text-black border-b-2 border-stone-300 max-md:max-w-full">
            <div class="flex gap-6 items-end w-full max-md:max-w-full">
              <div class="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px] max-md:max-w-full">
                <h1 class="text-2xl font-bold leading-snug max-md:max-w-full">
                  Channel Detail
                </h1>
                <p class="mt-2 text-base max-md:max-w-full">
                  Review your channel status here! <br></br>
                  The attribute bellow is just an information for creator, not
                  include into attribute NFT for transparency!
                </p>
              </div>
            </div>
          </header>
          <main class="flex overflow-hidden flex-wrap gap-10 px-8 py-12 w-full max-md:px-5 max-md:max-w-full">
            <div class="flex flex-col gap-12 items-center self-start bg-gray-100 rounded-lg min-w-[240px] w-[375px]">
              <ProfileCard
                channelName={channelInfo.channelTitle}
                channelId={channelInfo.channelId}
                channelSubs={channelSubs}
                videoCount={channelVideo}
                videoViews={channelViews}
                accountCreated={channelPublishedAt}
                imageURL={imageURL}
              />
            </div>
            <div class="flex flex-col flex-1 shrink justify-center basis-0 min-w-[240px] max-md:max-w-full">
              <div class="flex flex-col w-full max-md:max-w-full">
                {/* <h2 class="text-5xl font-bold tracking-tighter leading-none text-white max-md:max-w-full max-md:text-4xl"> */}
                {}
                <div className="flex flex-row gap-2 text-white">
                  <Basenames address={account.addresses?.[0]} />
                  {/* </h2> */}
                </div>
                <hr class="mt-5 w-full h-px bg-gray-300 min-h-[1px] max-md:max-w-full" />
                <div class="flex flex-col mt-5 w-80 max-w-full text-base">
                  <div class="flex w-full max-w-xs bg-gray-200 rounded border-gray-300 shadow-sm">
                    <label
                      for="channelName"
                      class="self-start py-2.5 pr-3 pl-3.5 w-40 rounded-lg text-slate-600"
                    >
                      Channel Name
                    </label>
                    <input
                      id="channelName"
                      type="text"
                      value={channelInfo.channelTitle}
                      readonly
                      class="overflow-hidden flex-1 shrink gap-2 self-stretch py-2.5 pr-3 pl-3.5 h-full text-black whitespace-nowrap bg-white rounded-none border border-gray-300 border-solid"
                    />
                  </div>
                  <div class="flex mt-3 w-full max-w-xs bg-gray-200 rounded border-gray-300 border-solid shadow-sm border-[length:var(--sds-size-stroke-border)]">
                    <label
                      for="channelId"
                      class="self-start py-2.5 pr-3 pl-3.5 w-40 rounded-lg text-slate-600"
                    >
                      Channel ID
                    </label>
                    <input
                      id="channelId"
                      type="text"
                      value={channelInfo.channelId}
                      readonly
                      class="overflow-hidden flex-1 shrink gap-2 self-stretch py-2.5 pr-3 pl-3.5 h-full text-black whitespace-nowrap bg-white rounded-none border border-gray-300 border-solid"
                    />
                  </div>
                </div>
              </div>
              {!mintedTokenId ? (
                <MintNFTButton
                  proofData={proofDataObject}
                  tokenURI={tokenURI}
                />
              ) : (
                <DisplayNFT tokenId={mintedTokenId} imageURL={imageURL} />
              )}
            </div>
          </main>
        </section>
      </div>
    );
  } else {
    return (
      <section class="flex flex-col px-16 pt-14 pb-28 max-md:px-5 max-md:pb-24 bg-gray-100">
        <div>
          <section class="flex flex-col px-16 pt-14 pb-28 max-md:px-5 max-md:pb-24 bg-gray-100">
            <header class="flex overflow-hidden flex-col justify-center py-6 w-full text-black border-b-2 border-stone-300 max-md:max-w-full">
              <div class="flex gap-6 items-end w-full max-md:max-w-full">
                <div class="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px] max-md:max-w-full">
                  <h1 class="text-2xl font-bold leading-snug max-md:max-w-full">
                    Channel Detail
                  </h1>
                  <p class="mt-2 text-base max-md:max-w-full">
                    Review your channel status here! <br></br>
                    The attribute bellow is just an information for creator, not
                    include into attribute NFT for transparency!
                  </p>
                </div>
              </div>
            </header>
            <main class="flex overflow-hidden flex-wrap gap-10 px-8 py-12 w-full max-md:px-5 max-md:max-w-full">
              <div class="flex flex-col gap-12 items-center self-start bg-gray-100 rounded-lg min-w-[240px] w-[375px]">
                <ProfileCard
                  channelName={channelInfo.channelTitle}
                  channelId={channelInfo.channelId}
                  channelSubs={channelSubs}
                  videoCount={channelVideo}
                  videoViews={channelViews}
                  accountCreated={channelPublishedAt}
                  imageURL={imageURL}
                />
              </div>
              <div class="flex flex-col flex-1 shrink justify-center basis-0 min-w-[240px] max-md:max-w-full">
                <div class="flex flex-col w-full max-md:max-w-full">
                  {/* <h2 class="text-5xl font-bold tracking-tighter leading-none text-white max-md:max-w-full max-md:text-4xl"> */}
                  {}
                  <div className="flex flex-row gap-2 text-white">
                    <Basenames address={account.addresses?.[0]} />
                    {/* </h2> */}
                  </div>
                  <hr class="mt-5 w-full h-px bg-gray-300 min-h-[1px] max-md:max-w-full" />
                  <div class="flex flex-col mt-5 w-80 max-w-full text-base">
                    <div class="flex w-full max-w-xs bg-gray-200 rounded border-gray-300 shadow-sm">
                      <label
                        for="channelName"
                        class="self-start py-2.5 pr-3 pl-3.5 w-40 rounded-lg text-slate-600"
                      >
                        Channel Name
                      </label>
                      <input
                        id="channelName"
                        type="text"
                        value={channelInfo.channelTitle}
                        readonly
                        class="overflow-hidden flex-1 shrink gap-2 self-stretch py-2.5 pr-3 pl-3.5 h-full text-black whitespace-nowrap bg-white rounded-none border border-gray-300 border-solid"
                      />
                    </div>
                    <div class="flex mt-3 w-full max-w-xs bg-gray-200 rounded border-gray-300 border-solid shadow-sm border-[length:var(--sds-size-stroke-border)]">
                      <label
                        for="channelId"
                        class="self-start py-2.5 pr-3 pl-3.5 w-40 rounded-lg text-slate-600"
                      >
                        Channel ID
                      </label>
                      <input
                        id="channelId"
                        type="text"
                        value={channelInfo.channelId}
                        readonly
                        class="overflow-hidden flex-1 shrink gap-2 self-stretch py-2.5 pr-3 pl-3.5 h-full text-black whitespace-nowrap bg-white rounded-none border border-gray-300 border-solid"
                      />
                    </div>
                  </div>
                </div>
                {!mintedTokenId ? (
                  <MintNFTButton
                    proofData={proofDataObject}
                    tokenURI={tokenURI}
                  />
                ) : (
                  <DisplayNFT tokenId={mintedTokenId} imageURL={imageURL} />
                )}
              </div>
            </main>
          </section>
        </div>
        <motion.div
          className="flex justify-center items-center h-screen"
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
              Please connect your wallet to proceed.
            </p>
          </motion.div>
        </motion.div>
      </section>
    );
  }
};
export default OAuthCallback;
