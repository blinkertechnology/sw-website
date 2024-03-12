"use server"
export const contactus = async () => {
  "use server";
  await new Promise((res) => setTimeout(res, 3000));
  console.log("hey");
};
