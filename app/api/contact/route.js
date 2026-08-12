import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { name, email, mobile, message } = await request.json();

    // Basic validation
    if (!name?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name and message are required." },
        { status: 400 }
      );
    }

    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
    if (!webhookUrl) {
      return NextResponse.json(
        { error: "Server configuration error." },
        { status: 500 }
      );
    }

    const now = new Date();
    const timestamp = now.toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    });

    const embed = {
      title: "📬 New Contact Form Submission",
      color: 0xffffff,
      fields: [
        {
          name: "👤 Name",
          value: name.trim(),
          inline: true,
        },
        {
          name: "📧 Email",
          value: email?.trim() || "—",
          inline: true,
        },
        {
          name: "📱 Mobile",
          value: mobile?.trim() || "—",
          inline: true,
        },
        {
          name: "💬 Message",
          value: message.trim(),
          inline: false,
        },
      ],
      footer: {
        text: `Submitted on ${timestamp} IST`,
      },
    };

    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ embeds: [embed] }),
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to send message. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
