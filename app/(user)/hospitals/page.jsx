import { db } from "@/config/db";
import HospitalForm from "./HospitalForm";


const AddHospital = async () => {
  const [hospitals] = await db.execute(`SELECT * FROM hospitals_list;`);


  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Hospital Management
          </h1>
          <p className="text-gray-600">Add and manage hospital records</p>
        </div>

        {/* Add New Hospital Form */}
        <HospitalForm />

        {/* Existing Hospitals List */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">
              Existing Hospitals
            </h2>
          </div>

          {/* Hospital List Header */}
          <div className="px-6 py-3 bg-gray-50 border-b border-gray-200">
            <div className="grid grid-cols-6 gap-4 text-sm font-medium text-gray-700">
              <div>ID</div>
              <div>Hospital Name</div>
              <div>Start Year</div>
              <div>City</div>
              <div>State</div>
              <div>Actions</div>
            </div>
          </div>

          {/* Sample Hospital Records */}
          <div className="divide-y divide-gray-200">
            {hospitals.map((hospital) => (
              <div
                className="px-6 py-4 hover:bg-gray-50"
                key={hospital.hospital_id}
              >
                <div className="grid grid-cols-6 gap-4 items-center">
                  <div className="text-sm text-gray-900">
                    {hospital.hospital_id}
                  </div>
                  <div className="text-sm font-medium text-gray-900">
                    {hospital.name}
                  </div>
                  <div className="text-sm text-gray-900">
                    {hospital.start_year}
                  </div>
                  <div className="text-sm text-gray-900">{hospital.city}</div>
                  <div className="text-sm text-gray-900">{hospital.state}</div>
                  <div className="flex space-x-2">
                    <button className="text-red-600 hover:text-red-800 text-sm">Delete</button>
                  </div>
                </div>
              </div>
            ))}

            {/* Empty State (if no hospitals) - Hidden by default */}
            <div className="hidden px-6 py-8 text-center text-gray-500">
              <p>No hospitals found. Add your first hospital above.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddHospital;


