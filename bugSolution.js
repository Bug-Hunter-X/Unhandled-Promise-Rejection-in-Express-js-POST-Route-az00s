const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', async (req, res) => {
  const user = req.body;
  // Validate user data
  if (!user.name || !user.email) {
    return res.status(400).send({ error: 'Name and email are required' });
  }

  try {
    const newUser = await db.createUser(user);
    res.status(201).send(newUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).send({ error: 'Failed to create user' });
  }
});

// ... other routes ...

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});