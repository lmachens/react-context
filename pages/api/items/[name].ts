// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import db from "../../../server/db.json";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { name } = req.query;
  const item = db.items.find((item) => item.name === name);
  if (!item) {
    return res.status(404).end();
  }
  res.status(200).json(item);
};
