
const authenticate =async(req,res, next)=>{
    const token = req.cookies.jwt
        if(token){
            const res = await fetch(`http://10.12.14.239:6001/verifyJwt/${token}`,{
                method: "GET",
                headers: {"Content-Type": "application/json"}
            })

            const data = await res.json()
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