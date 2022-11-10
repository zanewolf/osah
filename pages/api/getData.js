import { tableData } from "./utils/Airtable";

export default async (_req, res) => {
    try {
        const records = await tableData.select({}).all();
        res.status(200).json(records);
    } catch (error) {
        console.error(err);
        res.status(500).json({ msg: "Something went wrong! 😕" });
    }
};