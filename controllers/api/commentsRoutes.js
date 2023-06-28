const router = require('express').Router();
const { Comments } = require('../../models');
const withAuth = require('../../utils/auth');


router.post('/', async (req, res) => {
    
    try {
      const newComment = await Comments.create({
        blog_comment,
        blogpost_id: req.session.blogpost_id,
        user_id: req.session.user_id,
      });
      
      console.log(newComment);
  
      res.status(200).json(newComment);
      // res.status(200).json(searchResult);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  });


  router.delete('/:id', async (req, res) => {
    try {
      const commentData = await Comments.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!commentData) {
        res.status(404).json({ message: 'No Comment found with this id!' });
        return;
      }
  
      res.status(200).json(commentData);
    } catch (err) {
      res.status(500).json(err);
    }
  });



module.exports = router;