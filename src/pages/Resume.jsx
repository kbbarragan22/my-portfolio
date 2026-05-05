import { Link } from 'react-router-dom';
import resumePDF from '../assets/resume.pdf';

function Resume() {
  return (
    <main className="resume-page">
      <div className="resume-toolbar">
        <Link to="/" className="btn btn-ghost">← Back to Portfolio</Link>
        <a href={resumePDF} download className="btn btn-primary">Download PDF</a>
      </div>
      <iframe
        src={resumePDF}
        title="Kevin Barragan Resume"
        className="resume-iframe"
      />
    </main>
  );
}

export default Resume;