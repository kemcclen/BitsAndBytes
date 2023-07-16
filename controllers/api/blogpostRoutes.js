const router = require('express').Router();
const { Blogpost, User } = require('../../models');
const withAuth = require('../../utils/auth');

//create a new blogpost 
router.post('/', async (req, res) => {
  const { blog_title, blog_post } = req.body;
console.log(blog_title, blog_post);
const blogpostDate = new Date()
  try {
    const newBlogpost = await Blogpost.create({
      blog_title,
      blog_post,
      user_id: req.session.user_id,
      date: blogpostDate
    });
    
    console.log(newBlogpost);

    res.status(200).json(newBlogpost);
    // res.status(200).json(searchResult);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

//??? idealy router.get id for single post -> rnbeing used for comments 
router.put('/:id', async (req, res) => {
  try {
    const putPost = await Blogpost.update(req.body, {
      where: {
        id: req.params.id
      }
    });

    res.status(200).json(putPost);
  } catch (err) {
    res.status(500).json(err);
  }
});


//trouble getting id use same logic as gewtting id for comment 
// router.put('/:id', async (req, res) => {
//   const blogpostDate = new Date();
//   try {
//     const newBlogpost = await Blogpost.create({
//       blog_title: req.body.blog_title,
//       blog_post: req.body.blog_post,
//       date: blogpostDate
//     }, {
//       where: {
//         id: req.params.id
//       }
//     });
    
//     res.status(200).json(newBlogpost);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.put('/:id', async (req, res) => {
 
  try {
    // const blogpostDate = new Date();

    const newBlogpost = await Blogpost.update(
      {
      blog_title: req.body.blog_title,
      blog_post: req.body.blog_post,
      // date: blogpostDate
    },
     {
      where: {
        id: req.params.id
      }
    });
    
    res.status(200).json(newBlogpost);
  } catch (err) {
    res.status(500).json(err);
  }
});


//delete a post
router.delete('/:id', async (req, res) => {
  try {
    const blogpostData = await Blogpost.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!blogpostData) {
      res.status(404).json({ message: 'No Blogpost found with this id!' });
      return;
    }

    res.status(200).json(blogpostData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
