import { ConnectButton } from "@rainbow-me/rainbowkit";
import "./ButtonComponents.css";

export const ButtonComponents = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");
        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button
                    onClick={openConnectModal}
                    type="button"
                    className="magic-button"
                  >
                    <span className="magic-border" />
                    <span className="magic-button-content">Connect Wallet</span>
                  </button>
                );
              }
              if (chain.unsupported) {
                return (
                  <button
                    onClick={openChainModal}
                    type="button"
                    className="magic-button"
                  >
                    <span className="magic-border" />
                    <span className="magic-button-content">Wrong network</span>
                  </button>
                );
              }
              return (
                <div style={{ display: "flex", gap: 12 }}>
                  <button
                    onClick={openChainModal}
                    className="magic-button"
                    type="button"
                  >
                    <span className="magic-border" />
                    <span className="magic-button-content">{chain.name}</span>
                  </button>
                  <button
                    onClick={openAccountModal}
                    className="magic-button"
                    type="button"
                  >
                    <span className="magic-border" />
                    <span className="magic-button-content">
                      {account.displayName}
                      {account.displayBalance
                        ? ` (${account.displayBalance})`
                        : ""}
                    </span>
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};
