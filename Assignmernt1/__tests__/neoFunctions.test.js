const { getNeoInformation, getNeoByDesignation } = require('../app'); // Replace with the correct path

describe('NEO Functions', () => {
  describe('getNeoInformation', () => {
    it('should return NEO information for a given index', () => {
      const neoInfo = getNeoInformation(0);
      // Add your assertions here based on the expected output
    });
  });

  describe('getNeoByDesignation', () => {
    it('should return NEO information for a given designation', () => {
      const neoWithDesignation = getNeoByDesignation('419624 (2010 SO16)');
      // Add your assertions here based on the expected output
    });

    it('should return null for non-existent designation', () => {
      const nonExistentNeo = getNeoByDesignation('NonExistentDesignation');
      // Add an assertion that checks if the returned value is null
    });
  });

  // Add more test cases for other functions if needed
});
