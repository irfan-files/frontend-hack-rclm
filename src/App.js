import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiConfig } from "wagmi";
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
import Preloader from "./components/Preloader"; // Import the preloader component

// Create a QueryClient instance
const queryClient = new QueryClient();

function App() {
  const [loading, setLoading] = useState(true); // Manage preloader state
  const [preloaderClass, setPreloaderClass] = useState("bounce-in");

  useEffect(() => {
    // Disable scroll when preloader is active
    document.body.style.overflow = "hidden";

    // Simulate a delay for preloader, replace with actual loading logic if needed
    const timer = setTimeout(() => {
      setPreloaderClass("slide-down"); // Trigger slide down and fade out for the entire preloader

      // Restore scrolling after the preloader disappears
      setTimeout(() => {
        document.body.style.overflow = "auto"; // Enable scroll again
        setLoading(false); // Hide preloader after slide-down animation completes
      }, 1000); // Allow time for slide-down to complete
    }, 2000); // Adjust the duration as needed

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader animationClass={preloaderClass} />; // Show preloader while loading
  }

  return (
    <QueryClientProvider client={queryClient}>
      <WagmiConfig config={config}>
        <RainbowKitProvider
          modalSize="wide"
          theme={darkTheme()}
          chains={config.chains}
        >
          <Router>
            <Header />
            <div className="flex flex-col min-h-screen">
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<OAuthLoginButton />} />
                <Route path="/oauth2callback" element={<OAuthCallback />} />
                <Route path="/channel-detail" element={<ChannelDetail />} />
                <Route path="/show-nft" element={<ShowNFT />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsOfService />} />
              </Routes>
            </div>
            <Footer />
          </Router>
        </RainbowKitProvider>
      </WagmiConfig>
    </QueryClientProvider>
  );
}

export default App;
