const express = require('express');
const router = express.Router(); //router Module
const Data = require("./Collections/Data")
// const Post = require("./Collections/Post")
// const List = require("./Collections/List")


router.get('/',async(req,res)=>{        //get API

    const posts = await Data.find();
    res.json(posts);
});
router.post('/',(req,res)=>{

    Data({

        title:req.body.title,
        description:req.body.description
    })

    .save().then((data)=>{

        res.json(data)
    })
})

router.put('/:title',(req,res)=>{

    Data.updateOne({

        title:req.params.title
    },
    {

        $set:{

            title:req.body.title,
            description:req.body.description
        }

    }).then((result)=>{

        res.json(result);

    }).catch((err)=>{

        console.log('Your query is unsuccessful !!!');
    })
})

router.delete('/:title',(req,res)=>{

    Data.deleteOne({

        title:req.params.title

    }).then((result)=>{

        res.json(result);
    })
})
module.exports = router;