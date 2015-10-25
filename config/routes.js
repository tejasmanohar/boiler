
/**
 * Module dependencies
 */

// import middleware
import resError from '../app/middleware/res_error'
import resSuccess from '../app/middleware/res_success'


/**
 * Routes
 */

export default function(router) {
  // middleware
  applyMiddleware(router)
}

function applyMiddleware(router) {
  router.use(resError)
  router.use(resSuccess)
}
