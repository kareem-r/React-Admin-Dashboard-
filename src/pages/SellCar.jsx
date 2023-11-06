import React from 'react'
import "../styles/sell_car.css"
import sellCar from "../assets/images/sell-car.png"
import Trackingchart from '../charts/Trackingchart'
import { CircularProgressbar , buildStyles } from 'react-circular-progressbar';
const SellCar = () => {
  const percentage=55;
  const percentage02=45;
  return (
    <div className="sell_car">
      <div className="sell_car-wrapper">

        <h2 className='sell_car-title'>Sell Car</h2>
        <div className="sell_car-top">
          <div className="sell_car-img">
            <h2>2022 Mercedes Benz</h2>
            <img src={sellCar} alt="" />
          </div>
          <div className="tracking_history">
            <h3>Tracking History</h3>
            <Trackingchart/>

          </div>
        </div>

        <div className="offer_wrapper">
          <div className="offer_top">
          <h2 className='sell_car-title'>Offers</h2>
          <div className="filter_widget-02">
            <select>
              <option value="toyota">Toyota</option>
              <option value="bmw">Bmw</option>
              <option value="audi">Audi</option>
            </select>
          </div>

          </div>

          <div className="offer_list">
            <div className="offer_item">
              <div className="box_01">
                <h3 className="client_name">
                  Killian James
                </h3>
                <h6 className="avg_price">$16,605 <span>average price</span></h6>
                <h6 className="market_price">Market average is $16,244
                </h6>
                <span className="arrow_key"><i class="ri-arrow-right-line"></i></span>

              </div>
              <div className='circle_wrapper'>
              <div className="box_02">
              <CircularProgressbar value={percentage} text={`${percentage}%`}  styles={buildStyles({
 
    pathColor: `#10d293`,
    textColor: '#fff',
    trailColor: '#0b0c28',
    textSize:'18px'
  })} />
  

              </div>
              <h4>Impression Share</h4>
              </div>
              <div className="box_03">
                <span className="model_spend-icon"><i class="ri-car-line"></i>
                </span>
                <h6 className="spend_amount">$1174</h6>
                <p className="spend_title">Model Spend</p>
              </div>
              <div className="box_04">
                <span className="model_spend-icon"><i class="ri-share-forward-line"></i>
                </span>
                <h6 className="spend_amount">$1174</h6>
                <p className="spend_title">Model Spend</p>
              </div>
              <div className="box_05">
                <span className="model_spend-icon"><i class="ri-money-dollar-circle-line"></i>
                </span>
                <h6 className="spend_amount">$811</h6>
                <p className="spend_title">Spend Per Unit Turned</p>
              </div>
            </div>
            <div className="offer_item">
              <div className="box_01">
                <h3 className="client_name">
                  John Doe
                </h3>
                <h6 className="avg_price">$11,605 <span>average price</span></h6>
                <h6 className="market_price">Market average is $11,244
                </h6>
                <span className="arrow_key"><i class="ri-arrow-right-line"></i></span>

              </div>
              <div className='circle_wrapper'>
              <div className="box_02">
              <CircularProgressbar value={percentage02} text={`${percentage02}%`}  styles={buildStyles({
 
    pathColor: `#10d293`,
    textColor: '#fff',
    trailColor: '#0b0c28',
    textSize:'18px'
  })} />
  

              </div>
              <h4>Impression Share</h4>
              </div>
              <div className="box_03">
                <span className="model_spend-icon"><i class="ri-car-line"></i>
                </span>
                <h6 className="spend_amount">$1174</h6>
                <p className="spend_title">Model Spend</p>
              </div>
              <div className="box_04">
                <span className="model_spend-icon"><i class="ri-share-forward-line"></i>
                </span>
                <h6 className="spend_amount">$1174</h6>
                <p className="spend_title">Model Spend</p>
              </div>
              <div className="box_05">
                <span className="model_spend-icon"><i class="ri-money-dollar-circle-line"></i>
                </span>
                <h6 className="spend_amount">$811</h6>
                <p className="spend_title">Spend Per Unit Turned</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SellCar