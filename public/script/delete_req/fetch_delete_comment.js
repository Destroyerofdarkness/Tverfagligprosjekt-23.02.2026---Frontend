document.addEventListener("click", async function (e) {
  if (e.target.classList.contains("deleteComment")) {
    const commentId = e.target.dataset.id;
    const res = await fetch("http://10.12.14.239:6001/comment/delete", {
      method: "DELETE",
      body: JSON.stringify({commentId}),
        headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
  if(data.success){
    window.location.reload() 
  }
  }
});