
const authenticate =async(req,res, next)=>{
    const token = req.cookies.jwt
        if(token){
            const response = await fetch(`http://10.12.14.239:6001/verifyJwt/${token}`,{
                method: "GET",
                headers: {"Content-Type": "application/json"}
            })

            const data = await response.json()
            if(data.success){
                next()
            }else{
            res.redirect("/loggInn")
            }
        }else{
            res.redirect("/loggInn")
        }
}

const checkUser = async(req,res, next)=>{
    const token = req.cookies.jwt
        if(token){
            const response = await fetch(`http://10.12.14.239:6001/sendBackUser/${token}`,{
                method: "GET",
                headers: {"Content-Type": "application/json"}
            })

            const data = await response.json()
            if(data.user){
                res.locals.user = data.user
                next()
            }else{
            res.locals.user = null
                next()
            }
        }else{
           res.locals.user = null
            next()
        }
}
module.exports = {authenticate, checkUser}