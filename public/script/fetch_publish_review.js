const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
    const title = form.title.value
    const content = form.content.value
    const link = form.link.value
    const user  = form.user.value

  const res = await fetch("http://10.12.14.239:6001/review/publish", {
    method: "POST",
    body: JSON.stringify({title,content,link,user }),
    headers: { "Content-Type": "application/json" },
  });

  const data = await res.json();
  if(data.success){
    window.location.href = "/"
  }
});
