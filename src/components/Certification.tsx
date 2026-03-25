import "./styles/Certification.css";

interface CertItem {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
}

const certifications: CertItem[] = [
  {
    id: 1,
    title: "AWS Solutions Architect Associate",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialUrl: "#",
  },
  {
    id: 2,
    title: "Kubernetes Administrator (CKA)",
    issuer: "Linux Foundation",
    date: "2023",
    credentialUrl: "#",
  },
  {
    id: 3,
    title: "Docker Certified Associate",
    issuer: "Docker",
    date: "2023",
    credentialUrl: "#",
  },
  {
    id: 4,
    title: "Terraform Associate",
    issuer: "HashiCorp",
    date: "2023",
    credentialUrl: "#",
  },
  {
    id: 5,
    title: "Jenkins Certification",
    issuer: "Cloudbees",
    date: "2022",
    credentialUrl: "#",
  },
  {
    id: 6,
    title: "Linux Foundation Certified",
    issuer: "Linux Foundation",
    date: "2022",
    credentialUrl: "#",
  },
];

const Certification = () => {
  return (
    <section className="certification-section" id="certification">
      <div className="certification-container">
        <div className="certification-header">
          <h2>
            <span className="cert-accent">Certifications</span>
          </h2>
          <p className="cert-subtitle">Professional Credentials & Achievements</p>
        </div>

        <div className="certification-grid">
          {certifications.map((cert) => (
            <div key={cert.id} className="cert-card">
              <div className="cert-card-header">
                <div className="cert-number">{String(cert.id).padStart(2, "0")}</div>
                <div className="cert-icon">🏆</div>
              </div>
              <div className="cert-card-content">
                <h3>{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-date">{cert.date}</p>
              </div>
              {cert.credentialUrl && (
                <a href={cert.credentialUrl} className="cert-link" target="_blank" rel="noopener noreferrer">
                  View Credential →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certification;
