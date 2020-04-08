const graphql = require('graphql');
const PaintingType = require('./PaintingType');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema
} = graphql;

const RootQuery = new GraphQLObjectType ({
    name: 'RooQueryType',
    fields: {
        painting: {
            type: PaintingType,
            args: { id:{ type: GraphQLString } },
            resolve(parent, args) {
                //logica para os dados do server
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
});