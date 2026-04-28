/*import { select, selectAll, selectorAll } from "d3-selection";
import { tempFilters, filters, binGenerator, treemapLayoutGenerator, width, height} from "./shared-constants";
import { easeLinear } from "d3-ease";
import { transition } from "d3-transition";
import { scaleLinear } from "d3-scale";
import { stratify, hierarchy } from "d3-hierarchy";
import "d3-transition";

//create and populate filters
export const populateFilters = (data) => {

const filterTemplates = tempFilters;
const filterButtons = select("#filters");
const rects = binGenerator(data);
//const treeGenerator = treemapLayoutGenerator(data);

/*const treemapLayoutGenerator = treemap()
    .size(([width, height]))
    .tile(treemapResquarify)
    .paddingInner(1)
    .paddingOuter(1)
    .round(true);
*/
/*
filterButtons                                     
    .selectAll(".filter")                                          
    .data(filterTemplates)                                                
    .join("button")                                             
    .attr("class", d => `filter ${d.isActive ? "active" : ""}`)
    .text(d => d.label)

    .on("click", (e, d) => {
      const svg = select("#treemap") //confirmed - all selected properly
      const leaves = svg.selectAll(".treemap-node")

      console.log("leaves", leaves);
      //svg.selectAll(".treemap-node")
      //  .attr("fill", "#6be8a5");
      console.log("DOM event", e);
      console.log("Attached datum", d);
      if (!d.isActive) {
        filters.forEach(filter => {                                          
            filter.isActive = d.id === filter.id ? true : false;                                                   
        });

        filterButtons.selectAll(".filter")
            .classed("active", filter => filter.id === d.id ? true : false); 
      
        updateTreemap(d.id, data); 
        }
    });                                    

};
*/
/*
const updateTreemap = (selectedFilter, data) => { //lol this doesnt match the book, which uses filterId isntead of selectedFilter
  console.log("selectedFilter", selectedFilter)
  //console.log("test print data", data);

  let newData = [];

  newData.push({
    "child": `${selectedFilter}`,
    "parent": "",
    "native_speakers": 0,
    "total_speakers" : 0
  })

  data.forEach(row => {
    if (row.parent == selectedFilter) 
      {
        newData.push(row)
      }
    //console.log(row.parent)
  });
  console.log("newData", newData);
  newData.forEach(object => 
    {
      console.log(object);
    })

  // Update the treemap here
  const updatedData = selectedFilter === "all" ? data                                                       
    : data.filter(respondent => respondent.parent                 
        === selectedFilter);                  //filter the data to make sure respodent gender matches selected filter            

  //const gens = treemapLayoutGenerator()

  const hierarchyGenerator = stratify()
  const newRoot = hierarchyGenerator(newData)
  console.log("root", newRoot);
  console.log("updatedData", updatedData)
  const bins = binGenerator(updatedData);          
  const xScale = scaleLinear();
  const yScale = scaleLinear();
      

  const treemapRects = selectAll("#treemap rect")
  
  treemapRects                               
    .data(bins)                                           
    .transition()
      .duration(500)
      .attr("y", d => yScale(d.length))
      .attr("height", d => innerHeight - yScale(d.length));    

};


export const populateTestFilters = (data) => {

  // Create the filters here
  const filters = select("#filters")

  filters                                 
    .selectAll(".filter")                                          
    .data(filters)                                                
    .join("button")                                              
      .attr("class", d => `filter ${d.isActive ? "active" : ""}`)   //if isActive, add class active                                      
      .text(d => d.label)  
      .on("click", (e, d) => {
        console.log("DOM event", e);
        //console.log("Attached datum", d);

        if (!d.isActive) {                              //if not isActive                       
          filters.forEach(filter => {                                          
            filter.isActive = d.id === filter.id ? true : false;                                                   
          });                                                                 
        
          filters.selectAll(".filter")                                              
            .classed("active", filter => filter.id === d.id ? true : false); //use classed to swap around active class                                 

          updateHistogram(d.id, data);                                    
        }
      });
}
*/