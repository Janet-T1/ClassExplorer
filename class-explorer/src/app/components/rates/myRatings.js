import Course from "./course";
import React from 'react';


function Courses() {
  // Data object for the card
  const data = [
    {
      id: 1,
      title: "CPSC 413",
      description: "Design and analysis of algorithms",
      linkUrl : "../"
    },
    {
      id: 2,
      title: "CPSC 471",
      description: "Database management systems",
      linkUrl : "../"
    },
    {
      id: 3,
      title: "CPSC 441",
      description: "Computer Networks",
      linkUrl: "../"
    },
  ];

  return (
    <div className="flex gap-8 justify-center flex-col  mt-10 mb-20  "> {/* Add mt-50 and mb-50 here */}
      {data.map((item) => (
        <Course
          key={item.id}
          title={item.title}
          description={item.description}
          linkUrl={item.linkUrl}
        />
      ))}
    </div>
  );
}

export default Courses;