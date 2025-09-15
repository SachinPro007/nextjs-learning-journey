import { db } from "@/config/db";
export const dynamic = "force-dynamic"

const DynamicPage = async () => {
  const [doctors] = await db.execute(`SELECT * FROM doctors`);
  console.log("Dynamic Page");
  

  return (
    <ul>
      {doctors.map(doctor => (
        <li key={doctor.doctor_id}>{doctor.doctor_id} {doctor.first_name} {doctor.last_name}</li>
      ))}
    </ul>
  );
};

export default DynamicPage;
