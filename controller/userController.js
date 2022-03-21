import userModel from '../models/userModels.js';

const register = (req, res, next) => {

    res.status(200).json({ username: 0 });

}

const login = (req, res, next) => {
    
    const user = userModel.getuser()

    if(user){
        res.status(200);
    }else{
        res.status(400);
    }

    res.json(req.body);

}

export default { register,login };