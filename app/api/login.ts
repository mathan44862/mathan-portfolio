import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    if (email === "mathan44862@gmail.com") {
      res.status(200).json({ message: `Login`, redirectTo: "/home" });
    } else {
      res.status(401).json({ error: "Invalid email" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
