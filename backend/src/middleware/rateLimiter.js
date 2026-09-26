import rateLimit from "../config/upstash.js"

const ratelimiter = async (req,res,next) => {
    try{
        
        const {success} = await rateLimit.limit("id_user")

        if(!success){
            console.log("déffal nank")
            return res.status(429).json({
                message : 'trop de requette, essayez plus tard'
            })
        }
        next();
    }
    catch(error){
        console.log("message d'erreur", error);
        next(error);
    }
}

export default ratelimiter;