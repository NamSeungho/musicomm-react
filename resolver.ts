import database from './database';

interface musicTitle {
    title: string
}

export default {
    music: async ({ title }: musicTitle) => {
        const db = await database();
        const query = { title: title };
        const artistLookup = {
            from: "artist",
            localField: "singer._id",
            foreignField: "_id",
            as: "artist"
        };

        const music = await db.collection('music').aggregate([
            { $match: query },
            { $lookup: artistLookup }
        ]).toArray();

        return music[0];
    }
};