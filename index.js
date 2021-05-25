import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './data/schema';

const app = express();
const PORT = 8000;


app.get('/', (req, res) => {
    res.send('Graphql')
});

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}));

app.listen(PORT, () =>{
    console.log(`Listening at ${PORT}`);
});