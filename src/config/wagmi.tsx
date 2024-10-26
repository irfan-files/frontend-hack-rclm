import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { http } from "wagmi";
import { sepolia } from "wagmi/chains";
export const config = getDefaultConfig({
  appName: "Creator Hub",
  projectId: "001",
  chains: [sepolia],
  transports: {
    [sepolia.id]: http(
      "https://eth-sepolia.g.alchemy.com/v2/FGE7dw4IyA3IcrGDZG-7bpDWpclk61H4"
    ),
  },
});
