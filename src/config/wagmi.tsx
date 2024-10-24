import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { http } from "wagmi";
import { baseSepolia } from "wagmi/chains";
export const config = getDefaultConfig({
  appName: "Creator Hub",
  projectId: "YOUR_PROJECT_ID",
  chains: [baseSepolia],
  transports: {
    [baseSepolia.id]: http(
      "https://base-sepolia.g.alchemy.com/v2/FGE7dw4IyA3IcrGDZG-7bpDWpclk61H4"
    ),
  },
});
