
function JobOpenings() {
  // Define job openings data with random company names
  const jobOpenings = [
    { role: 'Data Scientist', openings: 20, avgCTC: '$120,000', companies: ['Tech Innovations', 'Global Solutions', 'Data Wizards'] },
    { role: 'Full Stack Developer', openings: 30, avgCTC: '$100,000', companies: ['Code Masters', 'Web Creators', 'Digital Solutions'] },
    { role: 'Software Engineer', openings: 25, avgCTC: '$90,000', companies: ['TechGenius', 'SoftWorks', 'Digital Solutions'] },
    { role: 'Product Manager', openings: 15, avgCTC: '$130,000', companies: ['Productive Solutions', 'TechSavvy', 'Innovation Hub'] },
    { role: 'Business Analyst', openings: 10, avgCTC: '$110,000', companies: ['Business Insights', 'Analysis Pros', 'Data Gurus'] },
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Job Openings</h1>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {jobOpenings.map((job, index) => (
          <div key={index} className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{job.role}</h5>
                <p className="card-text">No of Openings: <span style={{ color: '#007bff', fontStyle: 'italic', fontWeight: 'bold' }}>{job.openings}</span></p>
                <p className="card-text">Average CTC: {job.avgCTC}</p>
                <p className="card-text">Companies: {job.companies.join(', ')}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobOpenings;
