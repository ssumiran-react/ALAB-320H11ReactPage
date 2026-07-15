import EmployeeList from "./EmployeeList";
import Header from "./Header";
import SearchBar from "./SearchBar";

export default function HomePage (){
    return (
      <div>
        <Header headerName = "Employee Directory"/>
        <SearchBar />
        
        <EmployeeList />
      </div>
    )
}