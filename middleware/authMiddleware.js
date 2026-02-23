
const authenticate =async(req,res, next)=>{
    const token = req.cookies.jwt
        if(token){
            const response = await fetch(`http://localhost:6001/verifyJwt/${token}`,{
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
module.exports = {authenticate}