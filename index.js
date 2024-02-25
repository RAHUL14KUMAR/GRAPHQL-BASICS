import dotenv from 'dotenv'
dotenv.config()
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';

const port=process.env.PORT

import db from './_db.js'

// typeDefs
import { typeDefs } from './schema.js';

// resolvers
const resolvers={
    Query:{
        games(){
            return db.games
        },
        reviews(){
            return db.reviews
        },
        authors() {
            return db.authors
        }
    }
}


// server setup
// APOLLO SERVER TAKES TWO PROPERTY 
// typedefs->schema,resolvers
const server= new ApolloServer({
    typeDefs, 
    resolvers
})

const {url}=await startStandaloneServer(server,{
    listen:{port:port}
});

console.log("server is running at port",port);