const Education = ({
  schoolName,
  schoolStartDate,
  schoolEndDate,
  collegeName,
  collegeStartDate,
  collegeEndDate,
}) => {
  return (
    <section className="Education">
      <div className="school">
        <h1>Education Qualification</h1>
        <h2>{schoolName}</h2>
        <div className="schoolYears">
          <p>
            {schoolStartDate} &mdash; {schoolEndDate}
          </p>
        </div>
      </div>
      <div className="college">
        <h1>College Qualification</h1>
        <h2>{collegeName}</h2>
        <div className="collegeYears">
          <p>
            {collegeStartDate} &mdash; {collegeEndDate}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
