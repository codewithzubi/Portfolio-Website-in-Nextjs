// import { NextResponse } from "next/server";
// import { Resend } from "resend";
// import React from "react";

// // Define types for the incoming request body
// interface RequestBody {
//   email: string;
//   subject: string;
//   message: string;
// }

// const resend = new Resend(process.env.RESEND_API_KEY);
// const fromEmail = process.env.FROM_EMAIL;

// export async function POST(req: Request) {
//   // Parse the JSON body and type the request body
//   const { email, subject, message }: RequestBody = await req.json();
//   console.log(email, subject, message);

//   try {
//     // Send the email using the Resend API
//     const data = await resend.emails.send({
//       from: fromEmail,
//       to: [fromEmail, email],
//       subject: subject,
//       react: React.createElement(
//         "div",
//         {},
//         React.createElement("h1", {}, subject),
//         React.createElement("p", {}, "Thank you for contacting us!"),
//         React.createElement("p", {}, "New message submitted:"),
//         React.createElement("p", {}, message)
//       ),
//     });
    
//     // Return the response as JSON
//     return NextResponse.json(data);
//   } catch (error) {
//     // Handle errors and return them in the response
//     return NextResponse.json({ error });
//   }
// }
