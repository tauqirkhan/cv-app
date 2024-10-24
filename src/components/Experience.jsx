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
      <div>
        <h2>{companyTitle}</h2>
        <h3>{companyName}</h3>
        <div className="years">
          <p>
            {companyStartDate} &mdash; {companyEndDate}
          </p>
        </div>
        <p>{companyDescription}</p>
      </div>
    </section>
  );
};

export default Experience;
