import EmployeeListItem from "./EmployeeListItem.jsx"

const empData = [{
    fullName:"James King",
    title:"President and CEO"
  },{
    fullName:"Julie Tylor",
    title:"VP of Marketing"
  },{
    fullName:"Eugene Lee",
    title:"CFO"
  },{
    fullName:"John Williams",
    title:"VP of Engineering"
  },{
    fullName:"Roy Moore",
    title:"VP of Sales"
  },{
    fullName:"Paul Jones",
    title:"QA Manager"
  }
]

export default function EmployeeList(){ 
    const data = empData.map( (d) =>         
        
        <EmployeeListItem key = {d.fullName.replace(/\s+/g, '')}
            fullName = {d.fullName}
            title = {d.title}
        />       
    );
    return (<div>{data}</div>);
}

