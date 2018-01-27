import Config from '../Config';
/**
 * Returns the complete link based on the route
 */
export default function(route) {
    return Config.api.protocol + 
    "://" + Config.api.host +
    ":" + Config.api.port +
    route;
};