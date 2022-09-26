import React from 'react'

const Address = ({ formData, setFormData }) => {

   return (
      <>


         <div className="col-span-3">
            <label for="address" className="">Address
            </label>
            <input type="text" id="address" placeholder="
               Enter your Address"onChange={(e) => setFormData({ ...formData, address: e.target.value })} value={formData.address} required />
         </div>

         <div className="col-span-3">

            <label for="apartment">Apartment, Suite, etc.
            </label>
            <input type="text" id="apartment" placeholder="
               Apartment #"onChange={(e) => setFormData({ ...formData, apartment: e.target.value })} value={formData.apartment} />
         </div>

         <div className="col-span-2">

            <label for="country">Country</label>
            <select id="country" placeholder="
               Enter a Country" onChange={(e) => setFormData({ ...formData, country: e.target.value })} value={formData.country} required >
               <option value="USA">USA</option>
            </select>
         </div>

         <div className="col-span-2">

            <label for="city">City</label>
            <input placeholder="
               Enter a City" type="text" id="city" onChange={(e) => setFormData({ ...formData, city: e.target.value })} value={formData.city} required />
         </div>

         <div className="col-span-2">

            <label for="zip">Zipcode</label>
            <input placeholder="
               Enter Zipcode" type="text" id="zip" onChange={(e) => setFormData({ ...formData, zip: e.target.value })} value={formData.zip} required />
         </div>
         <div className="col-span-6">

            <label for="company">Company</label>
            <input type="text" id="company" placeholder="
               Enter Company" onChange={(e) => setFormData({ ...formData, company: e.target.value })} value={formData.company} />
         </div>
         <div className="col-span-6">

            <label for="phone">Phone Number</label>
            <input placeholder="
               Enter Phone Number" type="tel" id="phone" onChange={(e) => setFormData({ ...formData, phone: e.target.value })} value={formData.phone} />
         </div>
      </>
   )
}

export default Address