import User from '../../../models/User';

export default {
    Query: {
        user: (root, args) => {
            return new Promise((resolve, reject) => {
                User.findOne(args).exec((err, res) => {
                    err ? reject(err) : resolve(res);
                }) 
            })
        },
        users: () => {
            return new Promise((resolve, reject) => {
                User.find({}).populate().exec((err, res) => {
                    err ? reject(err) : resolve(res);
                })
            })
        }
    },
    Mutation: {
        addUser: (root, {username, email, password, games}) => {
            const newUser = new User({username, email, password, games});

            return new Promise((resolve, reject) => {
                newUser.save((err, res) => {
                    err ? reject(err) : resolve(res);
                })
            })
        },
        editUser: (root, {_id, username, email, password, games}) => {
            return new Promise((resolve, reject) => {
                User.findOneAndUpdate({_id}, {$set: {username, email, password, games}}, { new: true})
                .exec((err, res) => {
                    err ? reject(err) : resolve(res);
                })
            })
        },
        deleteUser: (root, {_id}) => {
            return new Promise((resolve, reject) => {
                User.findOneAndRemove({_id}).exec((err, res)=>{
                    err ? reject(err) : resolve(res);
                })
            });
        }
    }
}