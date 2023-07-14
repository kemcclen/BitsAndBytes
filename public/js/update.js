

const updateButtonHandler = async (event) => {
        event.preventDefault();
        try {
          const id = event.target.getAttribute('data-id');
          const blog_title = document.querySelector('#blog_title').value.trim();
        const blog_post = document.querySelector('#blog_post').value.trim();
      
          // Check if blog title and body exist
          if (blog_title && blog_post) {
            const response = await fetch(`/api/posts/update/${id}`, {
              method: 'PUT',
              body: JSON.stringify({ blog_title, blog_post }),
              headers: { 'Content-Type': 'application/json' },
            });
  
            //   Check the response status
            if (response.status === 200) {
              return document.location.replace('/profile');
            } else {
              console.log(response);
              alert('Failed to update project');
            }
          }
        } catch (err) {
          console.error(err);
        }
      };

      // document.querySelectorAll('.BtnUpdate').forEach(item => item.addEventListener('submit', updateButtonHandler));

    // make sure i pass the blog posts specific id im updating so when i get to that page i have a function that fetches that blogpost 

    function updateForm() {
      
      let updateForm = document.querySelector('.update-container');
      let postList = document.querySelector('.container-fluid');
      let postBtn = document.querySelector('#newBlogpostBtn');
    
      postList.classList.add('hidden');
      postBtn.classList.add('hidden');
      updateForm.classList.remove('hidden');
  
    };

    document.querySelector('.BtnUpdate').addEventListener('click', updateForm);
   
  
