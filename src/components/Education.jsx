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
        <div className="years">
          <p>
            {schoolStartDate} &mdash; {schoolEndDate}
          </p>
        </div>
      </div>
      <div className="college">
        <h2>{collegeName}</h2>
        <div className="years">
          <p>
            {collegeStartDate} &mdash; {collegeEndDate}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
