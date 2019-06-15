db.empresas.aggregate([
    {$match: {nome: "Bradesco"}},
    {$lookup: 
        {
            from: "estados",
            localField: "estadoId",
            foreignField: "_id",
            as: "estado"
        }
    },
]).pretty()

db.empresas.aggregate([
    {$match: {nome: "Bradesco"}},
    {$lookup: {
        from: "estados",
        localField: "estadoId",
        foreignField: "_id",
        as: "estado"
    }},
    {$unwind: "$estado"}
]).pretty()

db.empresas.aggregate([
    {$match: {nome:"Vale"}},
    {$lookup: {
        from: "estados",
        localField: "cidadeId",
        foreignField: "cidades._id",
        as: "estado"
    }},
    {$unwind: "$estado"},
    {$unwind: "$estado.cidades"},
    {$addFields: { mesmaCidade: {$cmp: ["$estado.cidades._id", "$cidadeId"] } } },
    {$match: {mesmaCidade:0}}
]).pretty()
//{$match: {"estado.cidade._id": "$cidadeId"}}

db.empresas.update(
    {nome: "Vale"},
    {$set: {
        cidadeId: ObjectId("5cf2ba98a15634fff061de60")
    }})