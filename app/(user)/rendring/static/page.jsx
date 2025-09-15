import { db } from "@/config/db";
export const revalidate = 30

const StaticPage = async () => {
  const [doctors] = await db.execute(`SELECT * FROM doctors`);
  console.log("Static Page"); 
  

  return (
    <ul>
      {doctors.map(doctor => (
        <li key={doctor.doctor_id}>{doctor.doctor_id} {doctor.first_name} {doctor.last_name}</li>
      ))}
    </ul>
  );
};

export default StaticPage;
