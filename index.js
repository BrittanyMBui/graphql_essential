import express from 'express';
import schema from './schema';
import { graphqlHTTP } from 'express-graphql';
import resolvers from './resolvers';

const app = express();
const PORT = 8000;


app.get('/', (req, res) => {
    res.send('Graphql')
});

const root = resolvers;

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(PORT, () =>{
    console.log(`Listening at ${PORT}`);
});