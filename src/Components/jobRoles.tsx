import { useState } from 'react';

function JobRoles() {
  const [showDataScientistSkills, setShowDataScientistSkills] = useState(false);
  const [showFullStackDeveloperSkills, setShowFullStackDeveloperSkills] = useState(false);
  const [showAssociateSoftwareEngineerSkills, setShowAssociateSoftwareEngineerSkills] = useState(false);

  const handleDataScientistClick = () => {
    setShowDataScientistSkills(true);
    setShowFullStackDeveloperSkills(false);
    setShowAssociateSoftwareEngineerSkills(false);
  };

  const handleFullStackDeveloperClick = () => {
    setShowDataScientistSkills(false);
    setShowFullStackDeveloperSkills(true);
    setShowAssociateSoftwareEngineerSkills(false);
  };

  const handleAssociateSoftwareEngineerClick = () => {
    setShowDataScientistSkills(false);
    setShowFullStackDeveloperSkills(false);
    setShowAssociateSoftwareEngineerSkills(true);
  };

  return (
    <>
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Bootstrap demo</title>
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
            crossOrigin="anonymous"
          />
          <style>
            {`.card {
              margin-bottom: 1rem;
            }`}
          </style>
        </head>
        <body>
          <div style={{ backgroundImage: 'url(cssfiles.css/2.jpg)' }}>
            <h1 className="text-danger text-center">Job Roles</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <div className="card" style={{ width: '18rem', height: '18rem' }}>
                  <img src="https://blog.cloudfactory.com/hs-fs/hubfs/04-blog-img/life-of-data-scientist.png?width=1584&name=life-of-data-scientist.png" className="card-img-top" style={{ width: '18rem', height: '18rem' }} alt="..." />
                  <div className="card-body" style={{ width: '18rem', height: '18rem' }}>
                    <h5 className="card-title">Data Scientist</h5>
                    <button onClick={handleDataScientistClick} className="btn btn-primary">Know About Data Scientist</button>
                    {showDataScientistSkills && (
                      <div>
                        <h6>Skills of a Data Scientist:</h6>
                        <ul>
                          <li>Data Analysis</li>
                          <li>Machine Learning</li>
                          <li>Statistics</li>
                          <li>Data Visualization</li>
                          <li>Programming (Python, R, etc.)</li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card" >
                  <img src="https://th.bing.com/th/id/OIP.9HDtbx1q0CBmsWHbc3HmcgHaDk?w=279&h=168&c=7&r=0&o=5&dpr=1.1&pid=1.7" className="card-img-top" style={{ width: '18rem', height: '18rem' }} alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Full Stack Developer</h5>
                     
                    <button onClick={handleFullStackDeveloperClick} className="btn btn-primary">Know About Full Stack Developer</button>
                    {showFullStackDeveloperSkills && (
                      <div>
                        <h6>Skills of a Full Stack Developer:</h6>
                        <ul>
                          <li>Frontend Development (HTML, CSS, JavaScript)</li>
                          <li>Backend Development (Node.js, Python, Ruby on Rails, etc.)</li>
                          <li>Database Management</li>
                          <li>Version Control (Git, SVN, etc.)</li>
                          <li>Web Servers</li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img src="https://th.bing.com/th/id/OIP.Qyhv0nvq7xHLZ4zSFZRXtwHaEo?w=260&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" className="card-img-top" style={{ width: '18rem', height: '18rem' }} alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Associate Software Engineer</h5>
                    <button onClick={handleAssociateSoftwareEngineerClick} className="btn btn-primary">Know About Associate Software Engineer</button>
                    {showAssociateSoftwareEngineerSkills && (
                      <div>
                        <h6>Skills of an Associate Software Engineer:</h6>
                        <ul>
                          <li>Programming (Java, C++, Python, etc.)</li>
                          <li>Problem Solving</li>
                          <li>Basic Understanding of Software Development Lifecycle</li>
                          <li>Testing</li>
                          <li>Debugging</li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
            crossOrigin="anonymous"
          ></script>
        </body>
      </html>
    </>
  );
}

export default JobRoles;
