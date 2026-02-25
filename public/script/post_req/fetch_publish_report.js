const report = document.querySelector("#report");

report.addEventListener("submit", async (e) => {
  e.preventDefault();   
    const content = report.content.value
    const user  = report.user.value
    const connection = report.connection.value
    console.log(connection)
    
  const res = await fetch("http://10.12.14.239:6001/report/publish", {
    method: "POST",
    body: JSON.stringify({content, user, connection}),
    headers: { "Content-Type": "application/json" },
  });

  const data = await res.json();
  if(data.success){
    window.location.reload()
  }
});
