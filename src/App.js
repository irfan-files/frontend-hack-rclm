import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { config } from "./config/wagmi.tsx";
import OAuthCallback from "./pages/OAuthCallback";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import Footer from "./components/Footer";
import OAuthLoginButton from "./pages/OAuthLoginButton";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ChannelDetail from "./pages/ChannelDetail";
import ShowNFT from "./pages/ShowNFT";
import TermsOfService from "./pages/TermsOfService";
import Preloader from "./components/Preloader";
import MainMenu from "./pages/MainMenu.js";

const queryClient = new QueryClient();

function App() {
  const [loading, setLoading] = useState(false);
  const [preloaderClass, setPreloaderClass] = useState("bounce-in");

  const handlePreloader = () => {
    setLoading(true);
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setPreloaderClass("slide-down");
      setTimeout(() => {
        document.body.style.overflow = "auto";
        setLoading(false);
      }, 1000);
    }, 2000);
    return () => clearTimeout(timer);
  };

  if (loading) {
    return <Preloader animationClass={preloaderClass} />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <WagmiProvider config={config}>
        <RainbowKitProvider
          modalSize="wide"
          theme={darkTheme()}
          chains={config.chains}
        >
          <Router>
            <Routes>
              <Route
                path="/"
                element={<LandingPage onMount={handlePreloader} />}
              />
              <Route
                path="/*"
                element={
                  <div className="flex flex-col min-h-screen">
                    <Header />
                    <Routes>
                      <Route path="/main" element={<MainMenu />} />
                      <Route path="/login" element={<OAuthLoginButton />} />
                      <Route
                        path="/oauth2callback"
                        element={<OAuthCallback />}
                      />
                      <Route
                        path="/channel-detail"
                        element={<ChannelDetail />}
                      />
                      <Route path="/show-nft" element={<ShowNFT />} />
                      <Route
                        path="/privacy-policy"
                        element={<PrivacyPolicy />}
                      />
                      <Route path="/terms" element={<TermsOfService />} />
                    </Routes>
                  </div>
                }
              />
            </Routes>
            <Footer />
          </Router>
        </RainbowKitProvider>
      </WagmiProvider>
    </QueryClientProvider>
  );
}
export default App;
