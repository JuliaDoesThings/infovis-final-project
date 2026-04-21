

export const loadData = () => {

    //load the data
    const unformattedData = require("../data/Anonymized_Student_Data.csv");
    // const jsonData = JSON.stringify(unformattedData);

    console.log("csvData", unformattedData);

    //select just the information needed & return
    return unformattedData;

};