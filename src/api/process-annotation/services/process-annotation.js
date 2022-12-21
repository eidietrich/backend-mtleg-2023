'use strict';

/**
 * process-annotation service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::process-annotation.process-annotation');
