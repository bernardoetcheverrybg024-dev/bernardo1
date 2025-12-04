import express from 'express'
const app = express();
import Celular from "./models/celular.js";
import Perifericos from "./models/perifericos.js";
import Upgrade from "./models/kitUpgrade.js";
import Video from "./models/video.js";
import multer from 'multer';

const storage = multer.memoryStorage();
const upload = multer({ storage });

app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs')


//Liberar acesso a pasta public
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import perifericos from './models/perifericos.js';

// Converte o caminho do arquivo atual
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(__dirname + '/public'))

//rotas




app.get('/celular/lst', async(req, res) => {
    const celular= await Celular.find()
    res.render("celular/lst",{Celular:celular})
})

app.get('/celular/add', (req, res) => {
    res.render("celular/add")
})

app.post('/celular/add/ok', async(req, res) => {
    await Celular.create (req.body)
    res.render("celular/addok")
})


app.get('/placaVideo/lst', async(req, res) => {
    const video= await Video.find()
    res.render("placaVideo/lst",{Video:video})
})

app.get('/placaVideo/add', (req, res) => {
    res.render("placaVideo/add")
})

app.post('/placaVideo/add/ok', async (req, res) => {
    await Video.create (req.body)
    res.render("placaVideo/addok")
})

app.get('/kitUpgrade/lst', async(req, res) => {
    const upgrade= await Upgrade.find()
    res.render("kitUpgrade/lst",{Upgrade:upgrade})
})

app.get('/kitUpgrade/add', (req, res) => {
    res.render("kitUpgrade/add")
})

app.post('/kitUpgrade/add/ok', upload.single("foto"), async(req, res) => {
    //await Upgrade.create (req.body)
    //res.render("kitUpgrade/addok")

    await Upgrade.create({
        nome:req.body.nome,
        foto:req.file.buffer
    })

    res.render("kitUpgrade/addok")

})

app.get('/perifericos/lst', async(req, res) => {
  const perifericos= await Perifericos.find()
    res.render("perifericos/lst",{Perifericos:perifericos})
})

app.get('/perifericos/add', (req, res) => {
    res.render("perifericos/add")
})

app.post('/perifericos/add/ok', async (req, res) => {
    await Perifericos.create (req.body)
    res.render("perifericos/addok")
})




app.get('/', (req, res) => {
    res.render("index")
})

app.listen(3001)