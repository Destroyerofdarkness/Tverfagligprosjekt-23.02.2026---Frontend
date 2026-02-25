const form = document.querySelector("form");


form.addEventListener("submit", async (e) => {
  e.preventDefault();   
    const content = form.content.value
    const user  = form.user.value
    const connection = form.connection.value
    
  const res = await fetch("http://10.12.14.239:6001/comment/publish", {
    method: "POST",
    body: JSON.stringify({content, user, connection}),
    headers: { "Content-Type": "application/json" },
  });

  const data = await res.json();
  if(data.success){
    window.location.reload()
  }
});
