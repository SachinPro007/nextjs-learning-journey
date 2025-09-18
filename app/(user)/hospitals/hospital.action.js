"use server"

import { db } from "@/config/db";
import { revalidatePath } from "next/cache";

export const addHospitalAction = async (formdata) => {

  try {
    const { name, start_year, city, state } = formdata;
    await db.execute(`INSERT INTO hospitals_list (name, city, state, start_year) values (?, ?, ?, ?);`, [name, city, state, start_year])

    revalidatePath("/hospitals")
    return { success: true, message: "Hospital data submitted successfully" }


  } catch (error) {
    console.log(error);
    return { success: false, message: "Error while submitting hospital data" }


  }
}