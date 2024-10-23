const Experience = ({
  companyName,
  companyStartDate,
  companyEndDate,
  companyTitle,
  companyDescription,
}) => {
  return (
    <section className="Experience">
      <h1>Practical Experience</h1>
      <h2>{companyName}</h2>
      <div className="schoolYears">
        <p>
          {companyStartDate} &mdash; {companyEndDate}
        </p>
      </div>
      <h3>{companyTitle}</h3>
      <p>{companyDescription}</p>
    </section>
  );
};

export default Experience;
