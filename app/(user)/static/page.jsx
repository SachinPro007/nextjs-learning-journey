import { db } from "@/config/db";

const page = async () => {
  const [doctors] = await db.execute(`SELECT * FROM doctors`);

  return (
    <ul>
      {doctors.map(doctor => (
        <li key={doctor.doctor_id}>{doctor.doctor_id} {doctor.first_name} {doctor.last_name}</li>
      ))}
    </ul>
  );
};

export default page;
