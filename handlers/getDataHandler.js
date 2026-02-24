
const getData = async(URL)=>{
    const res = await fetch(`${process.env.API}${URL}`,{
        method:"GET",
        headers:{"Content-Type":"application/json"}
    })

    const data = await res.json()
    return data;
}

module.exports = getData