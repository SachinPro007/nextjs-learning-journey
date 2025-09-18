import { db } from "@/config/db";
import { Calendar, MapPin, Phone, Mail, Award, Activity } from "lucide-react";
import { notFound } from "next/navigation";

// export async function generateStaticParams(){
//   const [doctors] = await db.execute(`select doctor_id from doctors`)    
//   return doctors.map(doctor => ({id: doctor.doctor_id.toString()}));
// }

export default async function DoctorCard({ params }) {
  const param = await params;

  const [[doctor]] = await db.execute(
    `SELECT * FROM doctors WHERE doctor_id = ${param.id};`
  );

  // Format date of birth and joining date for better display
  const formatDate = (dateString) => {
    if (!dateString) return "Not specified";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };  

  if(!doctor) notFound()

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="max-w-2xl w-full rounded-3xl shadow-xl border border-gray-100 bg-white dark:bg-gray-800 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-2xl">
        {/* Header with gradient background */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold">
                {doctor.first_name[0]}
                {doctor.last_name[0]}
              </div>
              <div>
                <h2 className="text-2xl font-bold">
                  Dr. {doctor.first_name} {doctor.last_name}
                </h2>
                <p className="text-blue-100">{doctor.specialization}</p>
              </div>
            </div>
            <span
              className={`px-4 py-2 text-sm rounded-full flex items-center ${
                doctor.is_active
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              <Activity size={14} className="mr-1" />
              {doctor.is_active ? "Active" : "Inactive"}
            </span>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white border-b pb-2">
                Contact Information
              </h3>

              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <Mail size={18} className="mr-3 text-blue-500" />
                <span>{doctor.email}</span>
              </div>

              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <Phone size={18} className="mr-3 text-blue-500" />
                <span>{doctor.phone}</span>
              </div>

              <div className="flex items-start text-gray-600 dark:text-gray-300">
                <MapPin
                  size={18}
                  className="mr-3 mt-1 text-blue-500 flex-shrink-0"
                />
                <span>
                  {doctor.address}, {doctor.city}, {doctor.state} -{" "}
                  {doctor.postal_code}
                </span>
              </div>
            </div>

            {/* Professional Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white border-b pb-2">
                Professional Details
              </h3>

              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <Award size={18} className="mr-3 text-blue-500" />
                <span>
                  <strong>License:</strong> {doctor.license_number}
                </span>
              </div>

              <div className="text-gray-600 dark:text-gray-300">
                <strong>Experience:</strong> {doctor.experience_years} years
              </div>

              {doctor.date_of_birth && (
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Calendar size={18} className="mr-3 text-blue-500" />
                  <span>
                    <strong>DOB:</strong> {formatDate(doctor.date_of_birth)}
                  </span>
                </div>
              )}

              {doctor.joining_date && (
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Calendar size={18} className="mr-3 text-blue-500" />
                  <span>
                    <strong>Joined:</strong>{" "}
                    {formatDate(doctor.joining_date)}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700 flex space-x-4">
            <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors">
              Book Appointment
            </button>
            <button className="flex-1 border border-blue-500 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 py-2 px-4 rounded-lg transition-colors">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
