

const updateButtonHandler = async (event) => {
  console.log('hi');
        event.preventDefault();
        try {
          const id = event.target.getAttribute('data-id');
          const blog_title = document.querySelector('#update-title').value.trim();
        const blog_post = document.querySelector('#update-content').value.trim();
        const blogId = document.querySelector('#blogpost-id').value;
      
          // Check if blog title and body exist
          console.log(blogId);
          if (blog_title && blog_post) {
            const response = await fetch(`/api/blogpost/${blogId}`, {
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

 
    // make sure i pass the blog posts specific id im updating so when i get to that page i have a function that fetches that blogpost 

    //only works on first one

    function updateForm(event) {
      console.log(event.target.getAttribute('data-id'))
      let updateForm = document.querySelectorAll('#updateContainer');
      let postList = document.querySelector('.blogpost-list-card');
      let postBtn = document.querySelector('#newBlogpostBtn');
      
    
      postList.classList.add('hidden');
      postBtn.classList.add('hidden');
      updateForm[event.target.getAttribute('data-id')].classList.remove('hidden');
  
      document.querySelector('.submitUpdate').addEventListener('click', updateButtonHandler);
      console.log(document.querySelector('.submitUpdate'));
    };



    document.querySelectorAll('.BtnUpdate').forEach(item => item.addEventListener('click', (event)=> { 
updateForm(event)
    }));
   
  




    const cancelPost = () => {
      let updateForm = document.querySelector('#updateContainer');
      let postList = document.querySelector('.blogpost-list');
      let postBtn = document.querySelector('#newBlogpostBtn');
    
      postList.classList.remove('hidden');
      postBtn.classList.remove('hidden');
      updateForm.classList.add('hidden');
    }
    document.querySelector('#cancel-form').addEventListener('click', cancelPost);