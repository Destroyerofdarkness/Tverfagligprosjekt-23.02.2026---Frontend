const form = document.querySelector("form")

form.addEventListener("submit", async(e)=>{
    e.preventDefault();
    const user = form.username.value
    const passwd = form.passwd.value
    const conPass = form.conPass.value
    const res = await fetch("http://localhost:6001/registrer",{
        method: "POST",
        body: JSON.stringify({user, passwd, conPass}),
        headers: {"Content-Type": "application/json"}
    })

    const data = await res.json()

    if(data.token){
        window.location.href = `/createCookie/${data.token}`
    }
})