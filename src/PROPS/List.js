import React from "react";

const List = () => {
  const list = [
    { name: "malik", company: "wipro", empid: 20313123, location: "hyd" },
    { name: "akhil", company: "wipro", empid: 20298178, location: "hyd"},
   { name: "amani", company: "wipro", empid: 203156789, location: "hyd"}
  ];
  return (
    <div>
      {list.map((l,index) => (
        <ol key={index}>
          <li>{l.name}</li>
          <li>{l.company}</li>
          <li>{l.empid}</li>
          <li>{l.location}</li>
        </ol>
      ))}
    </div>
  );
};

export default List;
