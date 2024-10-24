import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { http } from "wagmi";
import { sepolia } from "wagmi/chains";
export const config = getDefaultConfig({
  appName: "Creator Hub",
  projectId: "YOUR_PROJECT_ID",
  chains: [sepolia],
  transports: {
    [sepolia.id]: http(
      "https://eth-sepolia.g.alchemy.com/v2/wShy1g0XVLg-h-j1n-COZadp0r4Vlhwz"
    ),
  },
});
