// const fs = require('fs');
// const data = fs.readFileSync("Assessment_1_NEOWISE_Dataset.json", "utf8");

// // Now you can use the 'data' variable to access the JSON data in your Node.js project
// console.log(data);
/////////////////////////////////////////////////////////////////////////////////////////////
// const fs = require('fs');

// function getNeoInformation(index) {
//   const data = fs.readFileSync("Assessment_1_NEOWISE_Dataset.json", "utf8");
//   const NEO = JSON.parse(data);

//   return NEO[index] || null;
// }

// // Example: Get NEO information at index 2
// const neoAtIndex2 = getNeoInformation(0);
// console.log(neoAtIndex2);
////////////////////////////////////////////////////////////////////////////////////////////
// const fs = require('fs');

// function getNeoInformation(index) {
//   const data = fs.readFileSync("Assessment_1_NEOWISE_Dataset.json", "utf8");
//   const NEO = JSON.parse(data);

//   return NEO[index]["orbit_class"] || null;
// }

// function getNeoByDesignation(designation) {
//   const data = fs.readFileSync("Assessment_1_NEOWISE_Dataset.json", "utf8");
//   const neos = JSON.parse(data);

//   return neos.find((neo) => neo.designation === designation) || null;
// }

// // Example: Get NEO information at certain index
// const neoAtIndex = getNeoInformation(0);
// console.log("NEO at requested index:", neoAtIndex);

// // Example: Get NEO information with certain designation
// const neoWithDesignation = getNeoByDesignation("419624 (2010 SO16)");
// console.log("NEO with designation:", neoWithDesignation);
///////////////////////////////////////////////////////////////////////////////////////////
// const fs = require('fs');

// function getNeoInformation(index) {
//   const data = fs.readFileSync("Assessment_1_NEOWISE_Dataset.json", "utf8");
//   const NEO = JSON.parse(data);

//   return NEO[index] || null;
// }

// function getNeoByDesignation(designation) {
//   const data = fs.readFileSync("Assessment_1_NEOWISE_Dataset.json", "utf8");
//   const neos = JSON.parse(data);

//   return neos.find((neo) => neo.designation === designation) || null;
// }

// function displayAllNEOs() {
//   const data = fs.readFileSync("Assessment_1_NEOWISE_Dataset.json", "utf8");
//   const neos = JSON.parse(data);

//   neos.forEach((neo, index) => {
//     console.log(`NEO at index ${index}:`, neo);
//   });
// }

// // Example: Get NEO information at certain index
// const neoAtIndex = getNeoInformation(0);
// console.log("NEO at requested index:", neoAtIndex);

// // Example: Get NEO information with certain designation
// const neoWithDesignation = getNeoByDesignation("419624 (2010 SO16)");
// console.log("NEO with designation:", neoWithDesignation);

// // Example: Display information on all NEOs in the dataset
// displayAllNEOs();

const fs = require('fs');

function getNeoInformation(index) {
  const data = fs.readFileSync("Assessment_1_NEOWISE_Dataset.json", "utf8");
  const NEO = JSON.parse(data);

  return NEO[index] || null;
}

function getNeoByDesignation(designation) {
  const data = fs.readFileSync("Assessment_1_NEOWISE_Dataset.json", "utf8");
  const neos = JSON.parse(data);

  return neos.find((neo) => neo.designation === designation) || null;
}

function displayAllNEOs() {
  const data = fs.readFileSync("Assessment_1_NEOWISE_Dataset.json", "utf8");
  const neos = JSON.parse(data);

  const result = neos.map((neo, index) => ({ index, neo }));
  return result;
}

function displayNEOsByPHA(phaValue) {
  const data = fs.readFileSync("Assessment_1_NEOWISE_Dataset.json", "utf8");
  const neos = JSON.parse(data);

  const filteredNEOs = neos.filter((neo) => neo.pha === phaValue);
  const result = filteredNEOs.map((neo, index) => ({ index, neo }));
  return result;
}

function rearrangeDataByOrbitClass(orbitClassValue) {
    const data = fs.readFileSync("Assessment_1_NEOWISE_Dataset.json", "utf8");
    const neos = JSON.parse(data);
  
    const filteredNEOs = neos.filter((neo) => neo.orbit_class === orbitClassValue);
    
    const fileName = `${orbitClassValue}_NEOs.json`;
    fs.writeFileSync(fileName, JSON.stringify(filteredNEOs, null, 2));
  
    return filteredNEOs;
  }

// Example: Get NEO information at certain index /
// const neoAtIndex = getNeoInformation(0);
// console.log("NEO at requested index:", neoAtIndex);

// // Example: Get NEO information with certain designation
// const neoWithDesignation = getNeoByDesignation("419624 (2010 SO16)");
// console.log("NEO with designation:", neoWithDesignation);

// // Example: Display information on all NEOs in the dataset
// const allNEOs = displayAllNEOs();
// console.log("All NEOs:", allNEOs);

// // Example: Display information on NEOs with pha == true
// const phaTrueNEOs = displayNEOsByPHA(false);
// console.log("NEOs with pha == true:", phaTrueNEOs);

// Example: Rearrange data by orbit_class and export to a new JSON file
// const filteredNEOs = rearrangeDataByOrbitClass("Aten");
// console.log(`NEOs with orbit_class "Aten":`, filteredNEOs);

module.exports = {
  getNeoInformation,
  getNeoByDesignation,
};



