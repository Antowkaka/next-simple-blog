import axios from "axios";
import {NextApiRequest, NextApiResponse} from "next";

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    try {
        const response = await axios.get('https://simple-blog-api.crew.red/posts');

        res.status(200).json({
            message: 'success',
            body: response.data
        });
    } catch (err) {
        console.log(err);
    }
};