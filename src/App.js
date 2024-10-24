import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // Ensure this is imported
import { WagmiConfig } from "wagmi";
import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit"; // RainbowKitProvider
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

// Create a QueryClient instance
const queryClient = new QueryClient();

function App() {
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
