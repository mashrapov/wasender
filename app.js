import 'dotenv/config'
import express from 'express'
import nodeCleanup from 'node-cleanup'
import routes from './routes.js'
import { init, cleanup } from './whatsapp.js'
import cors from 'cors'

const app = express()

const host = process.env.WA_SERVER_HOST || undefined
const port = parseInt(process.env.WA_SERVER_PORT ?? 8000)

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/', routes)

const onListening = () => {
    init()
    console.log(`Server is listening on http://${host ? host : 'localhost'}:${port}`)
}

const server = host ? app.listen(port, host) : app.listen(port)

server.ref()
server.on('listening', onListening)
server.on('close', () => {
    console.warn('[Server] HTTP server closed.')
})
server.on('error', (error) => {
    console.error('[Server] Failed to start or keep listening:', error)
})

nodeCleanup(cleanup)

export default app
