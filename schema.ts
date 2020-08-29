import { buildSchema } from 'graphql';

export default buildSchema(`
    type Query {
        music(title: String!): Music
    }
    type Music {
        _id: String,
        title: String,
        artist: [Artist!],
        video: String,
        release: String
    }
    type Artist {
        _id: String,
        title: String,
        title_en: String,
        type: String,
        debut: String
    }
`);