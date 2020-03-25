'use strict';

const ResultsService = {
  
  getAllPlants(db, query) {
    return db
      .select('*')
      .from('plants_base')
      .where(query);
  },

};

module.exports = ResultsService;