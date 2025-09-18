"use server";

import { db } from "@/config/db";
import { redirect } from "next/navigation";

export const contactAction = async (fullname, email, subject, message) => {
  // const fullName = formdata.get("fullname");

  try {
    // console.log(formdata);
    
    // const { fullname, email, subject, message } = Object.fromEntries(formdata.entries());
    await db.execute(
      `INSERT INTO contact_form (full_name, subject, email, message) value (?, ?, ?, ?)`,
      [fullname, subject, email, message]
    );

    // redirect("/")
    return {success: true, message: "Form sumitted successfull"}
  } catch (error) {    
    console.log("server action: ", error);
    if(error.message === "NEXT_REDIRECT") throw error;
    
    return {success: false, message: "Error while submitting"}
  }
};
