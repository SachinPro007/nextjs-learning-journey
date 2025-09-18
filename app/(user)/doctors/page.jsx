import Link from "next/link";
import { getAllDoctors } from "../rendring/dynamic/page";


const DoctorList = async () => {
  const doctors = await getAllDoctors();
  return (
    <>
      <h1 className="text-center text-3xl text-blue-700">
        All Doctors : {doctors.length}
      </h1>
      <ul className="grid grid-cols-3 ">
        {doctors.map((doctor) => (
          <Link key={doctor.doctor_id} href={`/doctors/${doctor.doctor_id}`}>
            <li className="hover:text-blue-700 hover:underline cursor-pointer">
              {doctor.doctor_id} {doctor.first_name} {doctor.last_name}
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default DoctorList;
