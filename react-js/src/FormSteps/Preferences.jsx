import React from 'react'

const Preferences = ({ formData, setFormData }) => {

   return (
      <>


         <div className="col-span-6 flex">
            <input className={'w-16'} type="checkbox" id="notifications" onChange={(e) => setFormData({ ...formData, notifications: e.target.checked })} value={formData.notifications} required />
            <label for="notifications" className="">Send Notifications</label>
         </div>

         <div className="col-span-6 flex">

            <input className={'w-16'} type="checkbox" id="shareInfo" onChange={(e) => setFormData({ ...formData, shareInfo: e.target.checked })} value={formData.shareInfo} required />
            <label for="shareInfo">Share information with related marketer</label>
         </div>

         <div className="col-span-6">

            <label for="country">Notification Preferences </label>
            <select id="country" placeholder="
               Enter a Country" onChange={(e) => setFormData({ ...formData, country: e.target.value })} value={formData.country} required >
               <option value="email">Email</option>
               <option value="text">Text</option>
            </select>
         </div>





      </>
   )
}

export default Preferences