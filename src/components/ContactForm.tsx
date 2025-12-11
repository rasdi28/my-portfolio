// src/components/ContactForm.tsx
"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: fd.get("name"),
      email: fd.get("email"),
      subject: fd.get("subject"),
      message: fd.get("message"),
    };

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("send-failed");
      setStatus("success");
      (e.currentTarget as HTMLFormElement).reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3 max-w-md">
      <input name="name" required placeholder="Your name" className="w-full p-3 border rounded" />
      <input name="email" type="email" required placeholder="Email" className="w-full p-3 border rounded" />
      <input name="subject" placeholder="Subject" className="w-full p-3 border rounded" />
      <textarea name="message" required placeholder="Message" rows={5} className="w-full p-3 border rounded" />
      <div className="flex items-center gap-3">
        <button disabled={status === "sending"} className="px-4 py-2 bg-sky-600 text-white rounded">
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>
        {status === "success" && <div className="text-sm text-green-600">Message sent — thank you!</div>}
        {status === "error" && <div className="text-sm text-red-600">Failed to send. Try later.</div>}
      </div>
    </form>
  );
}
