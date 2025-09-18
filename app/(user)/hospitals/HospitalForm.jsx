"use client"

// import { useRouter } from "next/navigation";
import { addHospitalAction } from "./hospital.action";



const HospitalForm = () => {
  // const router = useRouter()

  const handleCreateHospital = async (formdata) => {
    const data = Object.fromEntries(formdata)
    await addHospitalAction(data)
    // router.refresh()
        
  }
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Add New Hospital
      </h2>

      <form
        action={handleCreateHospital}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4"
      >
        {/* Name Input */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Hospital Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Sachin Hospital"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-400"
          />
        </div>

        {/* Start Year Input */}
        <div>
          <label
            htmlFor="start_year"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Start Year
          </label>
          <input
            id="start_year"
            name="start_year"
            type="text"
            placeholder="2008"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-400"
          />
        </div>

        {/* City Input */}
        <div>
          <label
            htmlFor="city"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            City
          </label>
          <input
            id="city"
            name="city"
            type="text"
            placeholder="Palwal"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-400"
          />
        </div>

        {/* State Input */}
        <div>
          <label
            htmlFor="state"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            State
          </label>
          <input
            id="state"
            name="state"
            type="text"
            placeholder="Haryana"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-400"
          />
        </div>

        {/* Add Button */}
        <div className="mt-4">
          <button
            type="submit"
            className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition duration-200"
          >
            Add Hospital
          </button>
        </div>
      </form>
    </div>
  );
};


export default HospitalForm