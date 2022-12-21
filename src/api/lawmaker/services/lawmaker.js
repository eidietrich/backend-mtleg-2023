'use strict';

/**
 * lawmaker service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::lawmaker.lawmaker');
