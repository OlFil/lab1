const express = require('express');
const cors = require('cors')
const personRouter = require('./routes/person.routes');
const dataRouter = require('./routes/data.routes');
const rolesRouter = require('./routes/roles.routes');
const PORT = process.env.PORT || 3005;

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', personRouter);
app.use('/api', dataRouter);
app.use('/api', rolesRouter);

app.listen(PORT, () => console.log('server started on port: ' + PORT));

