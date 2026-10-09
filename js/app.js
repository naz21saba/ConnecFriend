document.addEventListener("DOMContentLoaded", function () {

  // LOGIN
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      if (username === "" || password === "") {
        alert("Please enter both username and password.");
      } else {
        alert("Login successful.");
        window.location.href = "home.html";
      }
    });
  }

  // SHOW / HIDE PASSWORD
  const togglePassword = document.getElementById("togglePassword");
  const passwordInput = document.getElementById("password");

  if (togglePassword && passwordInput) {
    togglePassword.addEventListener("click", function () {
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePassword.innerText = "Hide";
      } else {
        passwordInput.type = "password";
        togglePassword.innerText = "Show";
      }
    });
  }

  // SHARE NEWS
  const shareForm = document.getElementById("shareForm");

  if (shareForm) {
    shareForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const newsText = document.getElementById("shareText").value;

      if (newsText === "") {
        alert("Please write some news before sharing.");
      } else {
        alert("News shared successfully.");
      }
    });
  }

  // LIKE / DISLIKE
  const reactionButtons = document.querySelectorAll(".reaction-btn");

  reactionButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      if (button.dataset.type === "like") {
        alert("Post liked.");
      } else {
        alert("Post disliked.");
      }
    });
  });

  // FRIEND REQUEST
  const inviteButtons = document.querySelectorAll(".invite-btn");

  inviteButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const personName = button.dataset.name;
      const ignored = button.dataset.ignored;

      if (ignored === "true") {
        alert("Friend request cannot be sent to " + personName + " because you are in their ignore list.");
      } else {
        alert("Friend request sent to " + personName + ".");
      }
    });
  });

  // FRIEND RATING
  const ratingButtons = document.querySelectorAll(".rating-btn");

  ratingButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const rating = button.dataset.rating;

      if (rating === "1") {
        alert("Friend rated as Stupid.");
      } else if (rating === "2") {
        alert("Friend rated as Cool.");
      } else if (rating === "3") {
        alert("Friend rated as Trustworthy.");
      }
    });
  });

  // PRIVATE MESSAGE
  const messageForm = document.getElementById("messageForm");

  if (messageForm) {
    messageForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const recipient = document.getElementById("memberSelect").value;
      const message = document.getElementById("messageInput").value;

      if (recipient === "") {
        alert("Please choose a recipient.");
      } else if (message === "") {
        alert("Please write a message.");
      } else {
        alert("Message sent successfully to " + recipient + ".");
      }
    });
  }

});
