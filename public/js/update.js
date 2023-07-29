const updateButtonHandler = async (event, whichBlog) => {
  event.preventDefault();
  //render origonal blog title and post 
  try {
    const blog_title = document
      .querySelectorAll("#update-title")
      [whichBlog].value.trim();
    const blog_post = document
      .querySelectorAll("#update-content")
      [whichBlog].value.trim();
    const blogId = document.querySelectorAll("#blogpost-id")[whichBlog].value;

    // Check if blog title and body exist
    console.log(blogId);
    if (blog_title && blog_post) {
      const response = await fetch(`/api/blogpost/${blogId}`, {
        method: "PUT",
        body: JSON.stringify({ blog_title, blog_post }),
        headers: { "Content-Type": "application/json" },
      });

      //   Check the response status
      if (response.status === 200) {
        return document.location.replace("/profile");
      } else {
        console.log(response);
        alert("Failed to update project");
      }
    }
  } catch (err) {
    console.error(err);
  }
};

//when update button is clicked 
function updateForm(event) {
  let updateForm = document.querySelectorAll("#updateContainer");
  let postList = document.querySelector(".blogpost-list-card");
  
  let postBtn = document.querySelector("#newBlogpostBtn");

  postList.classList.add("hidden");
  postBtn.classList.add("hidden");
  updateForm[event.target.getAttribute("data-id")].classList.remove("hidden");


   //send updated blog info through submit button 
  const whichBlog = event.target.getAttribute("data-id");

  document
    .querySelectorAll(".submitUpdate")
    [event.target.getAttribute("data-id")].addEventListener(
      "click",
      (event) => {
        updateButtonHandler(event, whichBlog);
      }
    );
  console.log(document.querySelector(".submitUpdate"));
}

document.querySelectorAll(".BtnUpdate").forEach((item) =>
  item.addEventListener("click", (event) => {
    updateForm(event);
  })
);

//to cancent the update form
const cancelPost = () => {
  let updateForm = document.querySelector("#updateContainer");
  let postList = document.querySelector(".blogpost-list");
  let postBtn = document.querySelector("#newBlogpostBtn");

  postList.classList.remove("hidden");
  postBtn.classList.remove("hidden");
  updateForm.classList.add("hidden");
};
document.querySelector("#cancel-form").addEventListener("click", cancelPost);
