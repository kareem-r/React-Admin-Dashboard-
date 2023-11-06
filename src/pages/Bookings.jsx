import React from 'react'
import "../styles/bookings.css"
import CarItem from '../Components/UI/CarItem'
import carData from "../assets/dummy-data/booking-cars"
const Bookings = () => {
  return (
    <div className="bookings">
      <div className="booking_wrapper">
        <h2 className='booking_title'>Booking</h2>

        <div className="filter_widget-wrapper">
          <div className="filter_widget-01">
            <select>
              <option value="New">New</option>
              <option value="Popular">Popular</option>
              <option value="Upcoming">Upcoming</option>
            </select>
          </div>
          <div className="filter_widget-02">
            <select>
              <option value="toyota">Toyota</option>
              <option value="bmw">Bmw</option>
              <option value="audi">Audi</option>
            </select>
          </div>

        </div>

        <div className="booking_car-list">
          {
            carData.map((item)=> <CarItem item={item} key={item.id} />)
          }
          
        </div>
      </div>
    </div>
  )
}

export default Bookings