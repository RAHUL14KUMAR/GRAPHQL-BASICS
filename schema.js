export const typeDefs=`#graphql
    type Game{
        id:ID!
        title:String!
        platform:[String!]!

        # make a relation of game with review
        reviews:[Review!]
    }
    type Review{
        id:ID!
        rating:Int!
        content:String!

        # make a relation with database
        game:Game!
        author:Author!

    }
    type Author{
        id:ID!
        name:String!
        verified:Boolean!

        # make a relatio with reviews
        # database

        reviews:[Review!]
    }

    type Query{
        reviews: [Review]
        review(id: ID!): Review
        # give review by id

        games: [Game]
        game(id: ID!): Game
        # give game by id

        authors: [Author]
        author(id: ID!): Author
    }
`

// int fLoat,string boolean ID
// for fields to be require we use ! marks