import Object from '../../../models/Object';

export default {
    Query: {
        object: (root, args) => {
            return new Promise((resolve, reject) => {
                Object.findOne(args).exec((err, res) => {
                    err ? reject(err) : resolve(res);
                }) 
            })
        },
        objects: () => {
            return new Promise((resolve, reject) => {
                Object.find({}).populate().exec((err, res) => {
                    err ? reject(err) : resolve(res);
                })
            })
        }
    },
    Mutation: {
        addObject: (root, {objectname, title, area, price, description, location}) => {
            const newObject = new Object({objectname, title, area, price, description, location});

            return new Promise((resolve, reject) => {
                newObject.save((err, res) => {
                    err ? reject(err) : resolve(res);
                })
            })
        },
        editObject: (root, {_id, uobjectname, title, area, price, description, location}) => {
            return new Promise((resolve, reject) => {
                Object.findOneAndUpdate({_id}, {$set: {objectname, title, area, price, description, location}}, { new: true})
                .exec((err, res) => {
                    err ? reject(err) : resolve(res);
                })
            })
        },
        deleteObject: (root, {_id}) => {
            return new Promise((resolve, reject) => {
                User.findOneAndRemove({_id}).exec((err, res)=>{
                    err ? reject(err) : resolve(res);
                })
            });
        }
    }
}
