export const loadTestData = () => {
  
  // Load data into the project
  const csvData = require("../data/flat_data.csv"); // We need to use require to tell Parcel that flat_data.csv is an external, required file, and it needs to be includes in the dist/ folder.
  console.log("csvData", csvData);

  // Format numbers
  csvData.forEach(d => {
    d.total_speakers = +d.total_speakers;
    d.native_speakers = +d.native_speakers;
  });

  return csvData;

};

//issue: throws error "Uncaught Error: missing: Enrollment by Race"
export const loadRealData = () => {

    //load the data
    const unformattedData = require("../data/Compiled_Student_Data.csv");
    // const jsonData = JSON.stringify(unformattedData);

    console.log("csvData", unformattedData);
    unformattedData.forEach(d => {
        d.enrolled = +d.enrolled;
    })
    //const formattedData = formatData(unformattedData);

    console.log("unformattedData", unformattedData);

    //select just the information needed & return
    //console.log("formatted",formattedData )
    //const jsonData = JSON.stringify(formattedData)
    return unformattedData;

};

const formatData = (data) => {
    data.forEach(row => {
        row.enrolled = Number(row.enrolled);
        //console.log(row.enrolled)
    })

    return data;
}


//load the student_data json = issue: not correctly generating x1, x0 and so forth

export const loadJSONData = () => {
    const jsonData = require("../data/Student_Data.json");
    return jsonData;
}

//build JSON from csv file
/*
//convert Compiled_Student_Data into a json 
const formatToJSON = (unformattedData) => {
    let compliedData = {
        "name": "Programs by Race",
        "children": []
    };
    let formatted = compliedData.children;
    let addedRaces = [];
    let programLog = [];

    unformattedData.forEach(student => {
        let rPosition = -1;
        let pPosition = -1;

        //make sure the race is added
        if (addedRaces.includes(student.Race_1) == false) 
        {
            formatted.push({
                "name": student.Race_1,
                "children": []
            });
            addedRaces.push(student.Race_1);
            rPosition = addedRaces.length - 1;
        }
        else 
        {
            for (let i = 0; i < addedRaces.length; i++) 
            {
                if (student.Race_1 == addedRaces[i]) 
                {
                    rPosition = i;
                }
            }
        } 
        
        let rPograms = formatted[rPosition].children;
        //handle program1
        if (programLog.includes(`${student.Race_1}, ${student.Programs1}`) == false && student.Programs1 != "")
        {
            rPograms.push({
                "name": student.Programs1,
                "enrolled": 0
            });
            programLog.push(`${student.Race_1}, ${student.Programs1}`);
            pPosition = rPograms.length - 1;
        }
        else 
        {
            for (let i = 0; i < rPograms.length; i++) 
            {
                //console.log("rPograms i", rPograms[i].name)
                if (student.Programs1 == rPograms[i].name) 
                {
                    pPosition = i;
                }
            }
        };
        if (pPosition != -1) 
        {
            //console.log("check ", student.Programs1,"found ", rPograms[pPosition].name, rPograms[pPosition].enrolled);
            rPograms[pPosition].enrolled += 1;
        }

        //handle Program2
        if (programLog.includes(`${student.Race_1}, ${student.Programs2}`) == false && student.Programs2 != "")
        {
            rPograms.push({
                "name": student.Programs2,
                "enrolled": 0
            });
            programLog.push(`${student.Race_1}, ${student.Programs2}`);
            pPosition = rPograms.length - 1;
        }
        else 
        {
            for (let i = 0; i < rPograms.length; i++) 
            {
                if (student.Programs2 == rPograms[i]) 
                {
                    pPosition = i;
                }
            }
        }
        if (pPosition != -1 && student.Programs2 != "") 
        {
            //console.log("check ", student.Programs1,"found ", rPograms[pPosition].name, rPograms[pPosition].enrolled);
            rPograms[pPosition].enrolled += 1;
        }

        //handle Program3
        if (programLog.includes(`${student.Race_1}, ${student.Programs3}`) == false && student.Programs3 != "")
        {
            rPograms.push({
                "name": student.Programs3,
                "enrolled": 0
            });
            programLog.push(`${student.Race_1}, ${student.Programs3}`);
            pPosition = rPograms.length - 1;
        }
        else 
        {
            for (let i = 0; i < rPograms.length; i++) 
            {
                if (student.Programs3 == rPograms[i]) 
                {
                    pPosition = i;
                }
            }
        }
        if (pPosition != -1 && student.Programs3 != "") 
        {
            //console.log("check ", student.Programs1,"found ", rPograms[pPosition].name, rPograms[pPosition].enrolled);
            rPograms[pPosition].enrolled += 1;
        }


        //handle Program4
        if (programLog.includes(`${student.Race_1}, ${student.Programs4}`) == false && student.Programs4 != "")
        {
            rPograms.push({
                "name": student.Programs4,
                "enrolled": 0
            });
            programLog.push(`${student.Race_1}, ${student.Programs4}`);
            pPosition = rPograms.length - 1;
        }
        else 
        {
            for (let i = 0; i < rPograms.length; i++) 
            {
                if (student.Programs4 == rPograms[i]) 
                {
                    pPosition = i;
                }
            }
        }
        if (pPosition != -1 && student.Programs4 != "") 
        {
            //console.log("check ", student.Programs1,"found ", rPograms[pPosition].name, rPograms[pPosition].enrolled);
            rPograms[pPosition].enrolled += 1;
        }

        });
    //console.log("programLog", programLog)
    //console.log("addedRaces", addedRaces)
    return formatted;
}*/

