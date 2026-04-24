import { select, selectAll } from "d3-selection";
import { tempFilters, filters } from "./shared-constants";
import { easeLinear } from "d3";
import { binGenerator } from "./shared-constants";
import { transition } from "d3";

//create and populate filters
export const populateFilters = (data) => {

const filterTemplates = tempFilters;
const filterButtons = select("#filters");
const bins = binGenerator(data);

filterButtons                                     
    .selectAll(".filter")                                          
    .data(filterTemplates)                                                
    .join("button")                                             
    .attr("class", d => `filter ${d.isActive ? "active" : ""}`)
    .text(d => d.label)
    .on("click", (e, d) => {
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

const updateTreemap = (selectedFilter, data) => { //lol this doesnt match the book, which uses filterId isntead of selectedFilter
  
  // Update the treemap here
  const updatedData = selectedFilter === "all" ? data                                                       
    : data.filter(respondent => respondent.gender                 
        === selectedFilter);                  //filter the data to make sure respodent gender matches selected filter            

  const updatedBins = binGenerator(updatedData);                  

  const treemapRects = select("#treemap rect")
  
  treemapRects                               
    .data(updatedBins)                                           
    .transition()
      .duration(500)
      .ease(easeLinear)
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