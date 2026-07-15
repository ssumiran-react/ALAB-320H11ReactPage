
export default function EmployeeListItem({fullName, title}) {
  return (
    <div className="item">
      {fullName}
      <br />
      {title}
    </div>
  );
}