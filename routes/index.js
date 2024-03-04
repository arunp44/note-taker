const router = require('express').Router();
const store = require('../db/store')
// GET Route for retrieving all the notes
router.get('/notes', (req, res) => {
    store.getNotes()
    .then((notes)=>{
        console.log(notes)
        return res.json(notes)
    })
    .catch((error)=>res.status(500).json(error))
});

// GET Route for a specific tip
// tips.get('/:tip_id', (req, res) => {
//   const tipId = req.params.tip_id;
//   readFromFile('./db/tips.json')
//     .then((data) => JSON.parse(data))
//     .then((json) => {
//       const result = json.filter((tip) => tip.tip_id === tipId);
//       return result.length > 0
//         ? res.json(result)
//         : res.json('No tip with that ID');
//     });
// });

router.post('/notes', (req,res) => {
    store.postNote(req.body)
    .then((notes)=>{
        console.log(notes)
        return res.json(notes)
    })
    .catch((error)=>res.status(500).json(error))
})


// DELETE Route for a specific tip
router.delete('/notes/:id', (req, res) => {
  store.delete(req.params.id)
  .then(()=>{
    res.json({ok:true})
})
.catch((error)=>res.status(500).json(error))
});

// // POST Route for a new UX/UI tip
// tips.post('/', (req, res) => {
//   console.log(req.body);

//   const { username, topic, tip } = req.body;

//   if (req.body) {
//     const newTip = {
//       username,
//       tip,
//       topic,
//       tip_id: uuidv4(),
//     };

//     readAndAppend(newTip, './db/tips.json');
//     res.json(`Tip added successfully`);
//   } else {
//     res.error('Error in adding tip');
//   }
// });

module.exports = router;
