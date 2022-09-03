var express = require('express');
const client = require('nodemon/lib/cli');
var router = express.Router();
const {dbUrl,mongodb,MongoClient,dbName} = require('../dbConfig')


/* GET home page. */
router.get('/', async(req, res, next)=>{
  const client = await MongoClient.connect(dbUrl)
  try {
    const db = await client.db(dbName)
    let project = await db.collection('project').find().toArray()
     res.json({
       statusCode:200,
       message:"Project data Fetched Sucessfully",
       data: project
     })

  } catch (error) {
    console.log(error)
    res.json({
      statusCode:500,
      message:"Internal Server Error" 
    })
  }
  finally{
    client.close()
  }

});

router.get('/Issues', async(req, res, next)=>{
  const client = await MongoClient.connect(dbUrl)
  try {
    const db = await client.db(dbName)
    let Issues = await db.collection('Issues').find().toArray()
     res.json({
       statusCode:200,
       message:"Issues data Fetched Sucessfully",
       data: Issues
     })

  } catch (error) {
    console.log(error)
    res.json({
      statusCode:500,
      message:"Internal Server Error" 
    })
  }
  finally{
    client.close()
  }

});

router.get('/Get-Requirement', async(req, res, next)=>{
  const client = await MongoClient.connect(dbUrl)
  try {
    const db = await client.db(dbName)
    let Issues = await db.collection('Requirement').find().toArray()
     res.json({
       statusCode:200,
       message:"Issues data Fetched Sucessfully",
       data: Issues
     })

  } catch (error) {
    console.log(error)
    res.json({
      statusCode:500,
      message:"Internal Server Error" 
    })
  }
  finally{
    client.close()
  }

});

router.get('/Label', async(req, res, next)=>{
  const client = await MongoClient.connect(dbUrl)
  try {
    const db = await client.db(dbName)
    let project = await db.collection('Label').find().toArray()
     res.json({
       statusCode:200,
       message:"Label data Fetched Sucessfully",
       data: project
     })

  } catch (error) {
    console.log(error)
    res.json({
      statusCode:500,
      message:"Internal Server Error" 
    })
  }
  finally{
    client.close()
  }

});



router.get('/project/:id', async(req, res, next)=>{
  const client = await MongoClient.connect(dbUrl)
  try {
    const db = await client.db(dbName)
    let project = await db.collection('project').find({_id:mongodb.ObjectId(req.params.id)}).toArray()
    if(project){
      res.json({
        statusCode:200,
        message:"project data Fetched Sucessfully",
        data: project
      })
    }
    else{
      res.json({
        statusCode:500,
        message:"project is not available",
      })
    }
    

  } catch (error) {
    console.log(error)
    res.json({
      statusCode:500,
      message:"Internal Server Error" 
    })
  }
  finally{
    client.close()
  }

});

router.get('/Issues/:id', async(req, res, next)=>{
  const client = await MongoClient.connect(dbUrl)
  try {
    const db = await client.db(dbName)
    let project = await db.collection('Issues').find({_id:mongodb.ObjectId(req.params.id)}).toArray()
    if(project){
      res.json({
        statusCode:200,
        message:"project data Fetched Sucessfully",
        data: project
      })
    }
    else{
      res.json({
        statusCode:500,
        message:"project is not available",
      })
    }
    

  } catch (error) {
    console.log(error)
    res.json({
      statusCode:500,
      message:"Internal Server Error" 
    })
  }
  finally{
    client.close()
  }

});

router.get('/Requirement/:id', async(req, res, next)=>{
  const client = await MongoClient.connect(dbUrl)
  try {
    const db = await client.db(dbName)
    let project = await db.collection('Requirement').find({_id:mongodb.ObjectId(req.params.id)}).toArray()
    if(project){
      res.json({
        statusCode:200,
        message:"project data Fetched Sucessfully",
        data: project
      })
    }
    else{
      res.json({
        statusCode:500,
        message:"project is not available",
      })
    }
    

  } catch (error) {
    console.log(error)
    res.json({
      statusCode:500,
      message:"Internal Server Error" 
    })
  }
  finally{
    client.close()
  }

});

router.get('/Label/:id', async(req, res, next)=>{
  const client = await MongoClient.connect(dbUrl)
  try {
    const db = await client.db(dbName)
    let project = await db.collection('Label').find({_id:mongodb.ObjectId(req.params.id)}).toArray()
    if(project){
      res.json({
        statusCode:200,
        message:"Label data Fetched Sucessfully",
        data: project
      })
    }
    else{
      res.json({
        statusCode:500,
        message:"project is not available",
      })
    }
    

  } catch (error) {
    console.log(error)
    res.json({
      statusCode:500,
      message:"Internal Server Error" 
    })
  }
  finally{
    client.close()
  }

});

router.get('/user', async(req, res, next)=>{
  const client = await MongoClient.connect(dbUrl)
  try {
    const db = await client.db(dbName)
    let user = await db.collection('auth').find().toArray()
     res.json({
       statusCode:200,
       message:"Userdata Fetched Sucessfully",
       data: user
     })

  } catch (error) {
    console.log(error)
    res.json({
      statusCode:500,
      message:"Internal Server Error" 
    })
  }
  finally{
    client.close()
  }

});

// Get Request with ID

router.post('/addproject',async(req, res)=>{
  const client = await MongoClient.connect(dbUrl)

  try {
    const db = await client.db(dbName)
      const project =await db.collection('project').insertOne(req.body)
      res.json({
        statusCode:200,
        message:"project Added Sucessfully",
        data:project
      })

    
  } catch (error) {
    console.log(error)
    res.json({
      statusCode:500,
      message:"Internal Server Error" 
    })
    
  }
  finally{
client.close()

  }
})

router.post('/Add-Requirement',async(req, res)=>{
  const client = await MongoClient.connect(dbUrl)

  try {
    const db = await client.db(dbName)
      const project =await db.collection('Requirement').insertOne(req.body)
      res.json({
        statusCode:200,
        message:"project Added Sucessfully",
        data:project
      })

    
  } catch (error) {
    console.log(error)
    res.json({
      statusCode:500,
      message:"Internal Server Error" 
    })
    
  }
  finally{
client.close()

  }
})

// Put Request with ID
router.put('/edit-project/:id',async(req, res)=>{
  const client = await MongoClient.connect(dbUrl)

  try {
    const db = await client.db(dbName)
    
    let project = await db.collection('project').findOneAndReplace({_id:mongodb.ObjectId(req.params.id)},req.body
    )
    res.json({
      statusCode:200,
      message:"project Edited Successfully"
    })
    
   
    
  } catch (error) {
    console.log(error)
    res.json({
      statusCode:500,
      message:"Internal Server Error" 
    })
    
  }
  finally{
client.close()

  }
})

router.put('/update-Issues/:id',async(req, res)=>{
  const client = await MongoClient.connect(dbUrl)

  try {
    const db = await client.db(dbName)
    
    let project = await db.collection('Issues').findOneAndReplace({_id:mongodb.ObjectId(req.params.id)},req.body
    )
    res.json({
      statusCode:200,
      message:"project Edited Successfully"
    })
    
   
    
  } catch (error) {
    console.log(error)
    res.json({
      statusCode:500,
      message:"Internal Server Error" 
    })
    
  }
  finally{
client.close()

  }
})

router.put('/update-Requirement/:id',async(req, res)=>{
  const client = await MongoClient.connect(dbUrl)

  try {
    const db = await client.db(dbName)
    
    let project = await db.collection('Requirement').findOneAndReplace({_id:mongodb.ObjectId(req.params.id)},req.body
    )
    res.json({
      statusCode:200,
      message:"project Edited Successfully"
    })
    
   
    
  } catch (error) {
    console.log(error)
    res.json({
      statusCode:500,
      message:"Internal Server Error" 
    })
    
  }
  finally{
client.close()

  }
})

router.put('/Edit-Issues/:id',async(req, res)=>{
  const client = await MongoClient.connect(dbUrl)

  try {
    const db = await client.db(dbName)
    
    let project = await db.collection('Issues').findOneAndReplace({_id:mongodb.ObjectId(req.params.id)},req.body
    )
    res.json({
      statusCode:200,
      message:"project Edited Successfully"
    })
    
   
    
  } catch (error) {
    console.log(error)
    res.json({
      statusCode:500,
      message:"Internal Server Error" 
    })
    
  }
  finally{
client.close()

  }
})


// Delete Request with ID
router.delete('/delete/:id', async(req, res, next)=>{
  const client = await MongoClient.connect(dbUrl)
  try {
    const db = await client.db(dbName)
    let project = await db.collection('project').deleteOne({_id:mongodb.ObjectId(req.params.id)})
     res.json({
       statusCode:200,
       message:"project Deleted Sucessfully",
     })

  } catch (error) {
    console.log(error)
    res.json({
      statusCode:500,
      message:"Internal Server Error" 
    })
  }
  finally{
    client.close()
  }

});

router.delete('/delete_Issues/:id', async(req, res, next)=>{
  const client = await MongoClient.connect(dbUrl)
  try {
    const db = await client.db(dbName)
    let project = await db.collection('Issues').deleteOne({_id:mongodb.ObjectId(req.params.id)})
     res.json({
       statusCode:200,
       message:"Issues Deleted Sucessfully",
     })

  } catch (error) {
    console.log(error)
    res.json({
      statusCode:500,
      message:"Internal Server Error" 
    })
  }
  finally{
    client.close()
  }

});

router.delete('/Delete_Requirement/:id', async(req, res, next)=>{
  const client = await MongoClient.connect(dbUrl)
  try {
    const db = await client.db(dbName)
    let project = await db.collection('Requirement').deleteOne({_id:mongodb.ObjectId(req.params.id)})
     res.json({
       statusCode:200,
       message:"Requirement Deleted Sucessfully",
     })

  } catch (error) {
    console.log(error)
    res.json({
      statusCode:500,
      message:"Internal Server Error" 
    })
  }
  finally{
    client.close()
  }

});

//Issues
router.post('/addIssues',async(req, res)=>{
  const client = await MongoClient.connect(dbUrl)

  try {
    const db = await client.db(dbName)
      const project =await db.collection('Issues').insertOne(req.body)
      res.json({
        statusCode:200,
        message:"Issues Added Sucessfully",
        data:project
      })

    
  } catch (error) {
    console.log(error)
    res.json({
      statusCode:500,
      message:"Internal Server Error" 
    })
    
  }
  finally{
client.close()

  }
})

// Delete Request with ID
router.post('/Delete-Issues/:title', async(req, res, next)=>{
  const client = await MongoClient.connect(dbUrl)
  try {
    const db = await client.db(dbName)
    // let project = await db.collection('project').findOne({ProjectName:req.params.ProjectName})
    
    let data = await db.collection('project').updateOne({
      
    }, {
      $pull: {
        Issues: {
          IssueTitle: req.params.title
        }
      }
    });


    res.json({
       statusCode:200,
       message:"project Deletedss Sucessfully",
      
     })

  } catch (error) {
    console.log(error)
    res.json({
      statusCode:500,
      message:"Internal Server Error" 
    })
  }
  finally{
    client.close()
  }

});

//Labels
router.post('/addLabel',async(req, res)=>{
  const client = await MongoClient.connect(dbUrl)

  try {
    const db = await client.db(dbName)
      const project =await db.collection('Label').insertOne(req.body)
      res.json({
        statusCode:200,
        message:"Label Added Sucessfully",
        data:project
      })

    
  } catch (error) {
    console.log(error)
    res.json({
      statusCode:500,
      message:"Internal Server Error" 
    })
    
  }
  finally{
client.close()

  }
})
// Put Request with ID
router.put('/edit-Label/:id',async(req, res)=>{
  const client = await MongoClient.connect(dbUrl)

  try {
    const db = await client.db(dbName)
    
    let Label = await db.collection('Label').findOneAndReplace({_id:mongodb.ObjectId(req.params.id)},req.body
    )
    res.json({
      statusCode:200,
      message:"Label Edited Successfully"
    })
    
   
    
  } catch (error) {
    console.log(error)
    res.json({
      statusCode:500,
      message:"Internal Server Error" 
    })
    
  }
  finally{
client.close()

  }
})
// Delete Request with ID
router.delete('/delete-Label/:id', async(req, res, next)=>{
  const client = await MongoClient.connect(dbUrl)
  try {
    const db = await client.db(dbName)
    let project = await db.collection('Label').deleteOne({_id:mongodb.ObjectId(req.params.id)})
     res.json({
       statusCode:200,
       message:"project Deleted Sucessfully",
     })

  } catch (error) {
    console.log(error)
    res.json({
      statusCode:500,
      message:"Internal Server Error" 
    })
  }
  finally{
    client.close()
  }

});


// });

module.exports = router;