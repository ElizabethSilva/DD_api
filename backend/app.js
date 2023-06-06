const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors'); //ADICIONEI ISSO É NOVO

const app = express();
const port = 3000;

// Configure body-parser to handle JSON data
app.use(bodyParser.json());

// Habilitar o CORS ISSO TBM É NOVO 
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb+srv://DD_API:itsQl4ZPxqd9D6MS@cluster0.baej0jh.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a Mongoose model for Doenca
const Doenca = require('./models/doenca');

// Create a Mongoose model for Defensivo
const Defensivo = require('./models/defensivo');

// Define routes for Doenca CRUD operations
app.get('/doencas', (req, res) => {
  Doenca.find({})
    .then((doencas) => {
      res.json(doencas);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

app.post('/doencas', (req, res) => {
  const doenca = new Doenca(req.body);
  doenca
    .save()
    .then((newDoenca) => {
      res.json(newDoenca);
    })
    .catch((err) => {
      res.status(400).json({ error: err.message });
    });
});

app.get('/doencas/:id', (req, res) => {
  Doenca.findById(req.params.id)
    .then((doenca) => {
      if (!doenca) {
        throw new Error('Doenca not found');
      }
      res.json(doenca);
    })
    .catch((err) => {
      res.status(404).json({ error: err.message });
    });
});

app.put('/doencas/:id', (req, res) => {
  Doenca.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedDoenca) => {
      if (!updatedDoenca) {
        throw new Error('Doenca not found');
      }
      res.json(updatedDoenca);
    })
    .catch((err) => {
      res.status(404).json({ error: err.message });
    });
});

app.delete('/doencas/:id', (req, res) => {
  Doenca.findByIdAndRemove(req.params.id)
    .then((removedDoenca) => {
      if (!removedDoenca) {
        throw new Error('Doenca not found');
      }
      res.json(removedDoenca);
    })
    .catch((err) => {
      res.status(404).json({ error: err.message });
    });
});

// Define routes for Defensivo CRUD operations
app.get('/defensivos', (req, res) => {
  Defensivo.find({})
    .then((defensivos) => {
      res.json(defensivos);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

app.post('/defensivos', (req, res) => {
  const defensivo = new Defensivo(req.body);
  defensivo
    .save()
    .then((newDefensivo) => {
      res.json(newDefensivo);
    })
    .catch((err) => {
      res.status(400).json({ error: err.message });
    });
});

app.get('/defensivos/:id', (req, res) => {
  Defensivo.findById(req.params.id)
    .then((defensivo) => {
      if (!defensivo) {
        throw new Error('Defensivo not found');
      }
      res.json(defensivo);
    })
    .catch((err) => {
      res.status(404).json({ error: err.message });
    });
});

app.put('/defensivos/:id', (req, res) => {
  Defensivo.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedDefensivo) => {
      if (!updatedDefensivo) {
        throw new Error('Defensivo not found');
      }
      res.json(updatedDefensivo);
    })
    .catch((err) => {
      res.status(404).json({ error: err.message });
    });
});

app.delete('/defensivos/:id', (req, res) => {
  Defensivo.findByIdAndRemove(req.params.id)
    .then((removedDefensivo) => {
      if (!removedDefensivo) {
        throw new Error('Defensivo not found');
      }
      res.json(removedDefensivo);
    })
    .catch((err) => {
      res.status(404).json({ error: err.message });
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
