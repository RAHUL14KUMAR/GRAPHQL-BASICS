export const typeDefs=`#graphql
    type Game{
        id:ID!
        title:String!
        platform:[String!]!
    }
    type Review{
        id:ID!
        rating:Int!
        content:String!
    }
    type Author{
        id:ID!
        name:String!
        verified:Boolean!
    }

    type Query{
        reviews:[Review]
        review(id:ID!):Review
        # give review by id

        games:[Game]
        game(id:ID!):Game
        # give game by id

        authors:[Author]
    }
`

// int fLoat,string boolean ID
// for fields to be require we use ! marks