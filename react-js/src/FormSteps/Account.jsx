import React from 'react'

const Account = ({ formData, setFormData }) => {


   return (
      <>


         <div className="col-span-3">
            <label for="firstName" className="">First Name
            </label>
            <input type="text" id="firstName" placeholder="
               Enter your First Name"onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} value={formData.firstName} />
         </div>

         <div className="col-span-3 ">

            <label for="lastName">Last Name
            </label>
            <input type="text" id="lastName" placeholder="
               Enter your Last Name"onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} value={formData.lastName} />
         </div>
         <div className="col-span-6">

            <label for="username">Username</label>
            <input type="text" id="username" placeholder="
               Enter a Username"onChange={(e) => setFormData({ ...formData, username: e.target.value })} value={formData.username} required />
         </div>

         <div className="col-span-6">

            <label for="email">Email</label>
            <input type="email" id="email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} value={formData.email} placeholder="
               Enter your Email" required />
         </div>

         <div className="col-span-6">

            <label for="psw">Password</label>
            <input type="password" id="psw" onChange={(e) => setFormData({ ...formData, password: e.target.value })} value={formData.password} placeholder="
               Enter a Password" required />
         </div>
         <div className="col-span-6">

            <label for="confirm">Confirm Password</label>
            <input type="password" id="confirm" onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })} value={formData.confirmPassword} placeholder="
               Confirm a Password" required />
         </div>



      </>
   )
}

export default Account