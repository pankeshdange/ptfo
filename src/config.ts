export const config = {
    developer: {
        name: "Pankesh",
        fullName: "Pankesh Dange",
        title: "DevOps Engineer",
        description: "DevOps Engineer with 8+ years of experience specializing in cloud infrastructure, CI/CD pipelines, containerization, and infrastructure automation. Expert in AWS, Kubernetes, Jenkins, Docker, and building highly available, scalable systems. Passionate about automating deployments, optimizing performance, and implementing DevOps best practices."
    },
    social: {
        github: "pankeshdange",
        email: "pankeshdange1992@gmail.com",
        location: "Bengaluru, India"
    },
    about: {
        title: "About Me",
        description: "I'm a results-driven IT professional with over 4.5 years of experience in IT operations, system support, and infrastructure management, specializing in cloud and DevOps technologies. I have hands-on expertise across AWS, Azure, and GCP, with a strong focus on building scalable, secure, and cost-efficient cloud environments.\n\nMy core strengths lie in container orchestration using Kubernetes, Infrastructure as Code (Terraform and CloudFormation), and designing robust CI/CD pipelines with Docker, Jenkins, and Git-based workflows. I leverage Python and Shell scripting to automate infrastructure provisioning, streamline deployments, and improve system reliability.\n\nI have a proven track record of optimizing cloud costs—achieving 20–30% savings in AWS environments through proactive monitoring, automation, and performance tuning. I'm also experienced in configuration management with Ansible, and monitoring and observability using Prometheus and Grafana.\n\nWith a solid foundation in Linux system administration and a deep understanding of DevOps practices, microservices architecture, and cloud-native deployments, I focus on delivering efficient, automated, and resilient solutions that drive operational excellence."
    },
    experiences: [
        {
            position: "DevOps Engineer",
            company: "Genie US Tech",
            period: "Aug 2024 - Present",
            location: "Bengaluru, Remote",
            description: "Leading DevOps initiatives and maintaining enterprise-scale cloud infrastructure. Designed and implemented CI/CD pipelines, managed containerized applications, and optimized infrastructure performance across AWS environments.",
            responsibilities: [
                "Maintained high availability and reliability of cloud infrastructure through continuous monitoring and proactive issue resolution",
                "Provisioned and managed AWS resources (EC2, S3, RDS, VPC, IAM) using Infrastructure as Code (Terraform) following best practices",
                "Built and maintained CI/CD pipelines using Jenkins to automate build, test, and deployment workflows",
                "Troubleshot and resolved complex issues across system, network, and application layers to reduce downtime",
                "Utilized Docker for containerization of applications to ensure consistency across development and production environments",
                "Managed source code repositories using Git and GitHub, enabling version control and collaborative development",
                "Implemented monitoring and logging solutions to improve performance visibility and system reliability",
                "Handled incident management processes, including root cause analysis and implementation of preventive measures",
                "Configured and managed secure access controls, roles, and permissions in cloud environments"
            ],
            technologies: ["AWS", "Terraform", "Docker", "Kubernetes", "Jenkins", "Git", "GitHub", "Linux", "Monitoring"]
        },
        {
            position: "Associate IT Engineer",
            company: "ICICI Securities",
            period: "Aug 2017 - Oct 2019",
            location: "Mumbai, On-site",
            description: "Administered and maintained Linux servers, managed AWS services, and implemented CI/CD pipelines. Reduced manual deployment effort and improved infrastructure reliability through automation.",
            responsibilities: [
                "Administered and maintained Linux servers (Ubuntu/CentOS/RHEL) including installation, configuration, patching, and performance optimization",
                "Managed AWS services (EC2, S3, IAM, VPC) to ensure scalable, secure, and highly available infrastructure",
                "Built and maintained CI/CD pipelines using Jenkins, reducing manual deployment effort and release time",
                "Used Git & GitHub for version control, branching, and collaboration across teams",
                "Containerized applications using Docker, ensuring consistent environments and faster deployments",
                "Deployed and managed applications on Apache Tomcat, supporting Java-based services",
                "Automated build processes using Maven for efficient dependency management",
                "Provisioned infrastructure using Terraform, enabling automated and repeatable deployments",
                "Applied Kubernetes concepts for container orchestration and scalability",
                "Implemented monitoring solutions using AWS CloudWatch to track system health and uptime",
                "Automated repetitive tasks using Bash/Shell scripting, improving operational efficiency"
            ],
            technologies: ["Linux", "AWS", "Jenkins", "Git", "GitHub", "Docker", "Tomcat", "Maven", "Terraform", "Kubernetes", "Bash"]
        },
        {
            position: "Product Development Engineer",
            company: "Angel One",
            period: "Feb 2015 - Jun 2017",
            location: "Mumbai, On-site",
            description: "Managed Linux-based servers and application environments, provided technical support, and implemented automation scripts for operational efficiency.",
            responsibilities: [
                "Managed and maintained Linux-based servers and application environments, ensuring high availability, system performance, and security",
                "Provided technical support to clients, troubleshooting application, server, and infrastructure-related issues to ensure minimal downtime",
                "Monitored system performance and resolved production incidents, bugs, and deployment issues in a timely manner",
                "Assisted in application deployment, configuration, and server maintenance across development and production environments",
                "Collaborated with development and operations teams to improve system reliability and optimize application performance",
                "Implemented automation scripts using Python/Bash to streamline routine operational and maintenance tasks",
                "Supported CI/CD pipeline processes and version control using Git to facilitate efficient software delivery",
                "Performed system monitoring and log analysis to identify issues and ensure stable application performance"
            ],
            technologies: ["Linux", "Python", "Bash", "Git", "Networking", "System Administration"]
        }
    ],
    projects: [
        {
            id: 1,
            title: "AWS 3-Tier Web Architecture Deployment",
            category: "Cloud Infrastructure",
            technologies: "AWS (EC2, RDS, ELB), Terraform, Jenkins, Docker",
            image: "/images/project-1.webp",
            description: "Designed and deployed a highly available 3-tier web architecture on AWS using Infrastructure as Code with Terraform. Implemented load balancing, auto-scaling, and multi-AZ deployment for enterprise applications ensuring 99.9% uptime."
        },
        {
            id: 2,
            title: "CI/CD Pipeline Automation",
            category: "DevOps Automation",
            technologies: "Jenkins, GitHub Actions, Git, Docker, Maven, SonarQube",
            image: "/images/project-2.webp",
            description: "Built comprehensive CI/CD pipelines using Jenkins and GitHub Actions, automating build, test, and deployment workflows. Reduced manual deployment effort by 70% and improved release frequency to daily deployments with zero-downtime deployment strategies."
        },
        {
            id: 3,
            title: "Kubernetes Microservices Deployment",
            category: "Container Orchestration",
            technologies: "Kubernetes, Docker, Helm, GitLab CI, Prometheus, Grafana",
            image: "/images/project-3.webp",
            description: "Orchestrated containerized microservices using Kubernetes with Helm charts for package management. Implemented auto-scaling, self-healing, and rolling updates with comprehensive monitoring using Prometheus and Grafana dashboards."
        },
        {
            id: 4,
            title: "Infrastructure Monitoring & Logging Stack",
            category: "Observability",
            technologies: "Prometheus, Grafana, ELK Stack, Datadog, AWS CloudWatch",
            image: "/images/project-4.webp",
            description: "Implemented enterprise-grade monitoring and centralized logging infrastructure with real-time alerts and custom dashboards. Integrated multiple data sources including AWS CloudWatch, application metrics, and log aggregation for complete visibility."
        },
        {
            id: 5,
            title: "Infrastructure as Code Repository Management",
            category: "IaC Management",
            technologies: "Terraform, Ansible, AWS, GitHub, GitLab, Python",
            image: "/images/project-5.webp",
            description: "Built comprehensive Infrastructure as Code framework using Terraform and Ansible for AWS resource management. Implemented version control integration, policy enforcement, and automated testing ensuring infrastructure consistency across environments."
        }
    ],
    contact: {
        email: "pankeshdange1992@gmail.com",
        github: "https://github.com/pankeshdange",
        linkedin: "https://www.linkedin.com/in/pankeshd/",
        twitter: "https://x.com/pankeshdange",
        facebook: "https://www.facebook.com/pankesh.dange",
        instagram: "https://www.instagram.com/pankeshdange"
    },
    skills: {
        develop: {
            title: "CLOUD PLATFORMS & AWS",
            description: "Multi-cloud infrastructure expertise",
            details: "Expert in AWS cloud services including EC2, S3, RDS, VPC, IAM, CloudFormation, CloudWatch, Lambda, and Route53. Proficient in multi-cloud strategies with Azure and GCP. Infrastructure design, security, network configuration, and cost optimization.",
            tools: ["AWS", "Azure", "GCP", "EC2", "RDS", "S3", "VPC", "IAM", "CloudFormation", "CloudWatch", "Lambda", "Route53"]
        },
        design: {
            title: "DEVOPS TOOLS & AUTOMATION",
            description: "Complete DevOps & Infrastructure automation toolchain",
            details: "Expertise in containerization, orchestration, CI/CD pipelines, infrastructure automation, and monitoring. Proficient in Jenkins, Docker, Kubernetes, Terraform, Ansible, and monitoring solutions. Version control mastery with Git, GitHub, and GitLab.",
            tools: ["Jenkins", "Docker", "Kubernetes", "Terraform", "Ansible", "Git", "GitHub", "GitLab", "GitHub Actions", "Maven", "Tomcat", "Prometheus", "Grafana", "Python", "Bash"]
        }
    }
};
