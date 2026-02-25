
const checkAdmin = (req,res,next)=>{
    const user = res.locals.user
    if(user.role === "admin"){
        next()
    }else{
        res.redirect("/")
    }
}

module.exports = {checkAdmin}