import React from 'react'
import "../styles/setting.css"
const Settings = () => {
  return (
    <div className="settings">
      <div className="settings_wrapper">
        <h2 className='settings_title'>
Settings
        </h2>
        <div className="settings_top">
            <button className="setting_btn">My Details</button>
            <button className="setting_btn active_btn">profile</button>
            <button className="setting_btn">Password</button>
            <button className="setting_btn">Email</button>
            <button className="setting_btn">Notification</button>
        </div>
        <div className="details_form">
          <h2 className='profile_title'>Profile</h2>
          <p className='profile_desc'>Update your photo and personal details here</p>
          <form>
            <div className="form_group">
              <div>
                <label >Live in</label>
                <input type="text" placeholder='Sylhet, Bangladesh' />
              </div>
              <div>
                <label >Street</label>
                <input type="text" placeholder='SYL 3108' />
              </div>
            </div>
            <div className="form_group">
              <div>
                <label >Email</label>
                <input type="email" placeholder='example@gmail.com' />
              </div>
              <div>
                <label >Phone Number</label>
                <input type="number" placeholder='+20 15******' />
              </div>
            </div>
            <div className="form_group">
              <div>
                <label >Date of Birth</label>
                <input type="date" placeholder='dd/mm/yyyy' />
              </div>
              <div>
                <label >Gender</label>
                <input type="text" placeholder='Male / Female' />
              </div>
            </div>
            <div className="form_group">
              <div>
                <label >Your Photo</label>
                <p className='profile_img-desc'>This will be displayed in your profile</p>
                <input type="file" placeholder='choose file' />
              </div>
              <div>
                  <div className="profile_img-btns">
                    <button className="dlt_btn">
                      Delete
                    </button>
                    <button className="update_btn">
                      Update
                    </button>
                    </div>          
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Settings