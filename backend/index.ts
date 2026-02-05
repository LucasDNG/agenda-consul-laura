import { app } from '../backend/src/app'

const PORT = 3000

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`)
})