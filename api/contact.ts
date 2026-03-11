import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { z } from "zod";
import { contactMessages, insertContactMessageSchema } from "../shared/schema";

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== "POST") {
    return Response.json({ message: "Method not allowed" }, { status: 405 });
  }

  try {
    const body = await req.json();
    const input = insertContactMessageSchema.parse(body);

    const sql = neon(process.env.DATABASE_URL!);
    const db = drizzle(sql);

    const [message] = await db
      .insert(contactMessages)
      .values(input)
      .returning();

    return Response.json(message, { status: 201 });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return Response.json(
        {
          message: err.errors[0].message,
          field: err.errors[0].path.join("."),
        },
        { status: 400 },
      );
    }
    return Response.json({ message: "Internal server error" }, { status: 500 });
  }
}

export const config = {
  runtime: "edge",
};
