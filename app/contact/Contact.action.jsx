"use server";

import { db } from "@/config/db";

export const contactAction = async (formdata) => {
  // const fullName = formdata.get("fullname");

  const { fullname, email, subject, message } = Object.fromEntries(
    formdata.entries()
  );
  await db.execute(
    `INSERT INTO contact_form (full_name, subject, email, message) value (?, ?, ?, ?)`, [fullname, subject, email, message]
  );
  console.log("Contact form data added to your database");
  
};
