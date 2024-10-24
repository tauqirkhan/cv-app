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
      <h1>Education Qualification</h1>
      <div className="school">
        <h2>{schoolName}</h2>
        <div className="schoolYears">
          <p>
            {schoolStartDate} &mdash; {schoolEndDate}
          </p>
        </div>
      </div>
      <div className="college">
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
