const app = require('./src/app')
const port = 3000

app.listen(port, function() {
    console.log(`Servidor rodando na porta ${port}`)
})