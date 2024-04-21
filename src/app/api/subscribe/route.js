// // api/subscribe

// import connectDB from "@/app/lib/mongodb"
// import Contact from "@/app/model/subscribe";
// import { NextResponse } from "next/server";
// import mongoose from "mongoose";

// export async function POST(req) {
//   const {email} = await req.json();



//   try {
//     await connectDB();
//     await Contact.create({email});
   
//     return NextResponse.json({
//       msg: ["Subscription successful"], 
//       success: true,
//      });
//   } catch (error) {
//     if (error instanceof mongoose.Error.ValidationError) {
//       let errorList = [];
//       for (let e in error.errors) {
//         errorList.push(error.errors[e].message);
//       }

//     return NextResponse.json({ msg: errorList });
//     } 
//     else {
//         return NextResponse.json({ msg: "Unable to send message." }); 
//     }
//   }
// }


// api/subscribe
import connectDB from "@/app/lib/mongodb";
import Contact from "@/app/model/subscribe";
import nodemailer from 'nodemailer';
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import 'dotenv/config';

export async function POST(req) {
  // การตรวจสอบว่าคำขอเป็น POST
  if (req.method !== 'POST') {
    return NextResponse.json({ msg: "Method not allowed", success: false });
  }

  const { email } = await req.json();  // รับข้อมูลจาก body ของคำขอ

  try {
    await connectDB();
    const newContact = await Contact.create({ email });

    // ส่งอีเมลต้อนรับทันทีหลังจากการสมัครสมาชิก
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS
      }
    });

    const mailOptions = {
      from: `"Leaperway" <${process.env.EMAIL}>`,
      to: email,
      subject: "Welcome to Our Service",
      text: "Hello, thank you for registering.",
      html: "<b>Hello, thank you for registering.</b>"
    };

    const sendEmail = await transporter.sendMail(mailOptions);
    console.log('Email sent to:', email);

    return NextResponse.json({
      msg: ["Subscription successful!"], 
      success: true,
    });
    
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      return NextResponse.json({ msg: errorList, success: false });
    } else {
      console.error('Error in subscription process:', error);
      return NextResponse.json({ msg: "Unable to complete subscription.", success: false }); 
    }
  }
}
