import Building from '../../../models/Building';

export default {
    Query: {
        building: (root, args) => {
            return new Promise((resolve, reject) => {
                Building.findOne(args).exec((err, res) => {
                    err ? reject(err) : resolve(res);
                }) 
            })
        },
        buildings: () => {
            return new Promise((resolve, reject) => {
                Building.find({}).populate().exec((err, res) => {
                    err ? reject(err) : resolve(res);
                })
            })
        }
    },
    Mutation: {
        addBuilding: (root, {buildingname, title, area, price, description, location}) => {
            const newBuilding = new Building({buildingname, title, area, price, description, location});

            return new Promise((resolve, reject) => {
                newBuilding.save((err, res) => {
                    err ? reject(err) : resolve(res);
                })
            })
        },
        editBuilding: (root, {_id, buildingname, title, area, price, description, location}) => {
            return new Promise((resolve, reject) => {
                Building.findOneAndUpdate({_id}, {$set: {buildingname, title, area, price, description, location}}, { new: true})
                .exec((err, res) => {
                    err ? reject(err) : resolve(res);
                })
            })
        },
        deleteBuilding: (root, {_id}) => {
            return new Promise((resolve, reject) => {
                Building.findOneAndRemove({_id}).exec((err, res)=>{
                    err ? reject(err) : resolve(res);
                })
            });
        }
    }
}
