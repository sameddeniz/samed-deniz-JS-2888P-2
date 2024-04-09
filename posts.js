async function fetchUserPosts() {
  const postsFetched = new URLSearchParams(window.location.search);
  const userId = postsFetched.get("id");
  const apiURL = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
  const response = await fetch(apiURL);
  const userPostData = await response.json();
  displayUserPosts(userPostData);
}

function displayUserPosts(users) {
  const postsContainer = document.getElementById("postsContainer");
  users.forEach((user) => {
    const userPostCard = `
    <div class="col-md-12 text-center mb-3 mt-5">
        <div class="card w-100">
            <div class="card-body">
            <h5 class="card-title">${user.id}</h5>
            <div class="card-text">
            <p class="card-text">${user.title}</p>
            <p class="card-text">${user.body}</p>
            </div>
            </div>
        </div>
    </div>
    `;
    postsContainer.innerHTML += userPostCard;
  });
}

fetchUserPosts();

function goBackToUsersButton() {
  const usersPageBtn = `
  <div class="d-flex justify-content-end">
    <a href="/index.html" class="btn btn-primary mt-5"><i class="fa-solid fa-arrow-left"></i> Back to Users</a>
  </div>
  `;
  const goBackToUsersButton = (document.getElementById(
    "goBackToUsersButton"
  ).innerHTML = usersPageBtn);
}

goBackToUsersButton();
