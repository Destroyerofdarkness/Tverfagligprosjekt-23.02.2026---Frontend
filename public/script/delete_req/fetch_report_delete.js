document.addEventListener("click", async function (e) {
  if (e.target.classList.contains("deleteReport")) {
    const reportId = e.target.dataset.id;
    const res = await fetch("http://10.12.14.239:6001/report/delete", {
      method: "DELETE",
      body: JSON.stringify({reportId}),
        headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
  if(data.success){
    window.location.reload() 
  }
  }
});