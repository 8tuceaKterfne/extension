import React, { ReactElement, useState } from "react"
import AmountBanner from "./AmountBanner"
import SharedPanelSwitcher from "../Shared/SharedPanelSwitcher"
import SharedButton from "../Shared/SharedButton"

const delegates = [
  {
    image: "./images/uniswap@2x.png",
    name: "Justin Sun",
    address: "0x0b8A87B2eBa3339cE6234e13F52b28677c8E123D",
  },
  {
    image: "./images/uniswap@2x.png",
    name: "Justin Sun",
    address: "0x0b8A87B2eBa3339cE6234e13F52b28677c8E123D",
  },
  {
    image: "./images/uniswap@2x.png",
    name: "Justin Sun",
    address: "0x0b8A87B2eBa3339cE6234e13F52b28677c8E123D",
  },
  {
    image: "./images/uniswap@2x.png",
    name: "Justin Sun",
    address: "0x0b8A87B2eBa3339cE6234e13F52b28677c8E123D",
  },
]
export default function Delegate(): ReactElement {
  const [panelNumber, setPanelNumber] = useState(0)

  return (
    <div>
      <AmountBanner />
      <div className="claim standard_width">
        <div className="title">Choose a delegate!</div>
        <div className="description">
          Delegates are your north-star, you trust them to represent you in a
          DAO voting.
        </div>
        <div className="switcher_wrap">
          {" "}
          <SharedPanelSwitcher
            setPanelNumber={setPanelNumber}
            panelNumber={panelNumber}
            panelNames={["List of delegates", "Custom delegation"]}
          />
        </div>
        {panelNumber === 0 ? (
          <>
            {delegates.map((delegate) => {
              return (
                <div className="delegate">
                  <input type="radio" name="delegate" className="radio" />
                  <div className="delegate_details">
                    <div className="icon" />
                    <div className="delegate_info">
                      <div className="name">
                        {delegate.name}
                        <span className="count">123 Votes</span>
                      </div>
                      <div className="pitch">
                        <SharedButton type="tertiaryGray" size="small">
                          See pitch
                        </SharedButton>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </>
        ) : (
          <></>
        )}
      </div>
      <style jsx>
        {`
          .switcher_wrap {
            width: 100vw;
            margin-left: -17px;
          }
          .title {
            height: 32px;
            color: #fff;
            font-size: 22px;
            font-weight: 500;
            line-height: 32px;
            text-align: left;
            margin-top: 25px;
            margin-bottom: 11px;
          }
          .description {
            font-size: 16px;
            line-height: 24px;
            color: var(--green-40);
            margin-bottom: 30px;
          }
          .claim {
            display: flex;
            flex-flow: column;
            flex-grow: 1;
          }
          .delegate {
            display: flex;
            align-items: center;
            width: 100%;
            margin-bottom: 20px;
            padding-top: 20px;
          }
          .delegate_details {
            display: flex;
            align-items: center;
            width: 100%;
          }
          .delegate_info {
            display: flex;
            width: 100%;
            justify-content: space-between;
            margin-left: 12px;
          }
          .radio {
            all: revert;
          }
          .name {
            color: var(--green-20);
            font-size: 16px;
            font-weight: 500;
            text-align: left;
            display: flex;
            flex-direction: column;
          }
          .count {
            color: var(--green-60);
            font-size: 16px;
            font-weight: 500;
            text-align: left;
          }
          .icon {
            width: 40px;
            height: 40px;
            margin-left: 10px;
            background-color: #006ae3;
            border-radius: 999px;
            flex-shrink: 0;
          }
        `}
      </style>
    </div>
  )
}
