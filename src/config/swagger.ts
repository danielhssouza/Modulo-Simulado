import { type Express, type Request, type Response } from 'express'
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import { version } from '../../package.json'

const option: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Simulado Vcnafacul',
      version
    }
  },
  apis: ['./src/routes/routes.ts', './src/schemas/*.ts']
}

const swaggerSpec = swaggerJSDoc(option)

function swaggerDocs (app: Express, port: number): void {
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

  app.get('docs.json', (req: Request, res: Response) => {
    res.setHeader('Content-Type', 'application/json')
    res.send(swaggerSpec)
  })

  console.log(`Docs disponivel em http://localhost:${port}/docs`)
}

export default swaggerDocs
