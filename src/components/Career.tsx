import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>Sun Technologies PVT</h5>
              </div>
              <h3>AUG 2015</h3>
            </div>
            <p>
             Developed multiple projects using Java, Node.js, and Angular, including Bradesco and FLLM. Gained expertise in
             quickly learning and implementing new technologies in a fast-paced startup environment, adapting to rapid
             development cycles, and ensuring timely delivery.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>HP</h5>
              </div>
              <h3>AUG 2017</h3>
            </div>
            <p>
              Developed the NPI Matrix project from scratch, implementing a Node.js backend, Angular frontend, and MySQL
database. Deployed it in an on-premises environment with a CI/CD pipeline for seamless automation.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Software Engineer 2</h4>
                <h5>Harman</h5>
              </div>
              <h3>AUG 2018</h3>
            </div>
            <p>
              Worked on Node.js and Java projects, including multiple IoT and application development initiatives across both UI
              and backend. Gained experience in microservices architecture, distributed systems, and cloud-native development on cloud.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Software Engineer 3</h4>
                <h5>Amadeus Labs</h5>
              </div>
              <h3>AUG 2018</h3>
            </div>
            <p>
              Led the migration of an on-premises application to Azure VM, optimizing cost efficiency and reducing infrastructure
overhead.Implemented a CI/CD pipeline to automate code coverage analysis, Software Composition Analysis (SCA), and
security vulnerability detection.Refactored the codebase to enhance readability, maintainability, and overall code quality, making it easier for future
development and troubleshooting.Implemented message queuing (MQ) for seamless communication between different components, improving system
reliability and scalability.Migrated AngularJS to Angular 13, improving performance, security, and maintainability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
