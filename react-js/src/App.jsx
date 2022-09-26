import { useState, createContext, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Account from "./FormSteps/Account";
import Address from "./FormSteps/Address";
import Preferences from "./FormSteps/Preferences";
function App() {

  const [page, setPage] = useState(0)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    apartment: "",
    country: "",
    city: "",
    zip: "",
    company: "",
    phone: "",
    notifications: false,
    shareInfo: false,
    notification_preference: "email"
  })
  const renderPage = () => {
    switch (page) {
      default:
        return <Account formData={formData} setFormData={setFormData} page={page} setPage={page} />
      case 1:
        return <Address formData={formData} setFormData={setFormData} page={page} setPage={page} />
      case 2:
        return <Preferences formData={formData} setFormData={setFormData} page={page} setPage={page} />
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (page === 2) {
      for (let data in formData) {
        if (data != null) {
          console.log(`${data}: ${formData[data]}`)
        }
      }
    } else {
      setPage(page + 1)
    }
  }

  return (
    <main className="w-screen h-screen flex justify-center items-center bg-gray-100 px-4">
      <div className="flex justify-center flex-col bg-white rounded-xl px-4">
        <div className="text-center my-2 text-3xl font-bold">

          <h1>{page === 0 && "Account" || page === 1 && "Address" || "Preferences"}</h1>
        </div>
        <div className="flex justify-between w-11/12 mx-auto my-4 bg-zinc-100 px-4 rounded-xl">
          <div className={`rounded-full border ${page === 0 ? "border-yellow-300" : "border-black"} ${page === 0 ? "text-yellow-300" : "text-black"} px-4 py-2 progress`}>
            <p>1</p>
          </div>

          <div className={`rounded-full border border-${page === 1 ? "yellow-300" : "black"} px-4 py-2 progress`}>
            <p>2</p>
          </div>
          <div className={`rounded-full border border-${page === 2 ? "yellow-300" : "black"} px-4 py-2 progress`}>
            <p>3</p>
          </div>

        </div>
        <form className="grid grid-rows-4 grid-cols-6 gap-2 items-center w-full" onSubmit={handleSubmit}>
          {renderPage()}
          <div className="col-span-6">

            <button className={`${page === 0 ? 'hidden' : ""} px-3 rounded float-left bg-gray-500 text-white`}><FontAwesomeIcon icon="fa-solid fa-arrow-left" className="w-3 mx-1" />Back</button>
            <button type="submit" className="px-3 rounded float-right bg-gray-500 text-white">{page === 2 ? "Register" : "Next Step"}<FontAwesomeIcon className="w-3 mx-1" icon="fa-solid fa-arrow-right" /></button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default App;
