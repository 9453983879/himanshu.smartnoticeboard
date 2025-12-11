 document.addEventListener("DOMContentLoaded", () => {
  const user = localStorage.getItem("loggedInUser");
  document.getElementById("welcomeUser").textContent =
    "Welcome, " + user + " 👋";

  const addBtn = document.getElementById("addNoticeBtn");
  const noticeInput = document.getElementById("noticeInput");
  const noticeList = document.getElementById("noticeList");

  addBtn.addEventListener("click", () => {
    const text = noticeInput.value.trim();
    if (text === "") {
      alert("Please enter a notice");
      return;
    }

    const li = document.createElement("li");
    li.textContent = text;
    noticeList.appendChild(li);
    noticeInput.value = "";
  });

  document.getElementById("logoutBtn").addEventListener("click", () => {
    localStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
  });
});