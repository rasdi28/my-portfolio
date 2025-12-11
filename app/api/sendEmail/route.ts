// app/api/sendEmail/route.ts
import type { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const body = {
    from: "hello@rasdi.dev",
    to: "hello@rasdi.dev",
    subject: `Contact from ${data.name}: ${data.subject}`,
    text: `${data.message}\n\nEmail: ${data.email}`,
  };

  // Resend API: use process.env.RESEND_API_KEY
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Basic ${Buffer.from(`:${process.env.RESEND_API_KEY}`).toString("base64")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: body.from,
      to: [body.to],
      subject: body.subject,
      text: body.text,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    return new Response(JSON.stringify({ ok: false, err: text }), { status: 500 });
  }
  return new Response(JSON.stringify({ ok: true }), { status: 200 });
}
