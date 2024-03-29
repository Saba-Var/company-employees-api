import SwaggerUI from 'swagger-ui-express'
import YAML from 'yamljs'

const swaggerMiddleware = () => {
  const options = {
    customCss: '.swagger-ui .topbar { display: none }',
    customSiteTitle: 'Admin Panel API Specs',
  }

  const swaggerDocument = YAML.load('./src/config/swagger.yaml')
  return [SwaggerUI.serve, SwaggerUI.setup(swaggerDocument, options)]
}

export default swaggerMiddleware
