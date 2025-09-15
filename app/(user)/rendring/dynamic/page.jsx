import { db } from "@/config/db";
export const dynamic = "force-dynamic";
import { cache } from "react";

const DynamicPage = async () => {
  const doctors = await getAllDoctors()

  return (
    <>
      <h1>Totol Doctors: {doctors.length}</h1>
      <DoctorList doctors={doctors} />
    </>
  );
};

export default DynamicPage;

const DoctorList = async () => {
  const doctors = await getAllDoctors()
  const doctors1 = await getAllDoctors()
  const doctors2 = await getAllDoctors()
  const doctors3 = await getAllDoctors()
  const doctors4 = await getAllDoctors()
  const doctors5 = await getAllDoctors()
  const doctors6 = await getAllDoctors()

  return (
    <ul>
      {doctors?.map((doctor) => (
        <li key={doctor.doctor_id}>
          {doctor.doctor_id} {doctor.first_name} {doctor.last_name}
        </li>
      ))}
    </ul>
  );
};

const getAllDoctors = cache(async () => {
  const [doctors] = await db.execute(`SELECT * FROM doctors`);
  console.log("Fetching Doctors");
  return doctors;
});
