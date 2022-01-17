import React from "react";
import "./MoneyLadder.css";

function MoneyLadder() {
  return (
    <div className="money-ladder">
      <div className="life-lines">
        <div className="fifty-fifty">50:50</div>
        <div className="phone-a-friend">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        </div>
        <div className="audience-poll">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </div>
      </div>
      <ul className="prize-list">
        <div className="prize-list-item">
          <div className="arrow-left"></div>
          <div className="rectangle">$ 100</div>
          <div className="arrow-right"></div>
        </div>
        <div className="prize-list-item">
          <div className="arrow-left"></div>
          <div className="rectangle">$ 200</div>
          <div className="arrow-right"></div>
        </div>
        <div className="prize-list-item">
          <div className="arrow-left"></div>
          <div className="rectangle">$ 500</div>
          <div className="arrow-right"></div>
        </div>
        <div className="prize-list-item">
          <div className="arrow-left"></div>
          <div className="rectangle">$ 1000</div>
          <div className="arrow-right"></div>
        </div>
        <div className="prize-list-item">
          <div className="arrow-left"></div>
          <div className="rectangle">$ 2000</div>
          <div className="arrow-right"></div>
        </div>
        <div className="prize-list-item">
          <div className="arrow-left"></div>
          <div className="rectangle">$ 4000</div>
          <div className="arrow-right"></div>
        </div>
        <div className="prize-list-item">
          <div className="arrow-left"></div>
          <div className="rectangle">$ 8000</div>
          <div className="arrow-right"></div>
        </div>
        <div className="prize-list-item">
          <div className="arrow-left"></div>
          <div className="rectangle">$ 16000</div>
          <div className="arrow-right"></div>
        </div>
        <div className="prize-list-item">
          <div className="arrow-left"></div>
          <div className="rectangle">$ 32000</div>
          <div className="arrow-right"></div>
        </div>
        <div className="prize-list-item">
          <div className="arrow-left"></div>
          <div className="rectangle">$ 64000</div>
          <div className="arrow-right"></div>
        </div>
        <div className="prize-list-item">
          <div className="arrow-left"></div>
          <div className="rectangle">$ 125000</div>
          <div className="arrow-right"></div>
        </div>
        <div className="prize-list-item">
          <div className="arrow-left"></div>
          <div className="rectangle">$ 250000</div>
          <div className="arrow-right"></div>
        </div>
        <div className="prize-list-item">
          <div className="arrow-left"></div>
          <div className="rectangle">$ 500000</div>
          <div className="arrow-right"></div>
        </div>
        <div className="prize-list-item">
          <div className="arrow-left"></div>
          <div className="rectangle">$ 1000000</div>
          <div className="arrow-right"></div>
        </div>

        {/* <li className="prize">$ 200</li>
          <li className="prize">$ 200</li>
          <li className="prize">$ 200</li>
          <li className="prize">$ 200</li>
          <li className="prize">$ 200</li>
          <li className="prize">$ 200</li>
          <li className="prize">$ 200</li>
          <li className="prize">$ 200</li>
          <li className="prize">$ 200</li>
          <li className="prize">$ 200</li>
          <li className="prize">$ 200</li>
          <li className="prize">$ 200</li> */}
      </ul>
    </div>
  );
}

export default MoneyLadder;
