import { useEffect, useState } from "react";
import "./styles/Loading.css";
import { useLoading } from "../context/LoadingProvider";

import Marquee from "react-fast-marquee";

const Loading = ({ percent }: { percent: number }) => {
  const { setIsLoading } = useLoading();
  const [loaded, setLoaded] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [clicked, setClicked] = useState(false);

  if (percent >= 100) {
    setTimeout(() => {
      setLoaded(true);
      setTimeout(() => {
        setIsLoaded(true);
      }, 1000);
    }, 600);
  }

  useEffect(() => {
    import("./utils/initialFX").then((module) => {
      if (isLoaded) {
        setClicked(true);
        setTimeout(() => {
          if (module.initialFX) {
            module.initialFX();
          }
          setIsLoading(false);
        }, 900);
      }
    });
  }, [isLoaded]);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  }

  return (
    <>
      <div className="loading-header">
        <a href="/#" className="loader-title" data-cursor="disable">
          Logo
        </a>
        <div className={`loaderGame ${clicked && "loader-out"}`}>
          <div className="loaderGame-container">
            <div className="loaderGame-in">
              {[...Array(27)].map((_, index) => (
                <div className="loaderGame-line" key={index}></div>
              ))}
            </div>
            <div className="loaderGame-ball"></div>
          </div>
        </div>
      </div>
      <div className="loading-screen">
        <div className="devops-tools-container">
          <div className="devops-tool docker-tool">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path fill="#0099E5" d="M95 55h-9V42h-7.5V31.5h-7.5V24h-15V31.5h-7.5V42h-9V55h-7.5v11.5h7.5V78h60V66.5h7.5V55z"/>
            </svg>
            <span>Docker</span>
          </div>
          <div className="devops-tool kubernetes-tool">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path fill="#326CE5" d="M50 10l8 15-5 8h10l-6 10 10 5-8 6 15 8-15 8 8 6-10 5 6 10h-10l5 8-8 15-8-15 5-8h-10l6-10-10-5 8-6-15-8 15-8-8-6 10-5-6-10h10l-5-8 8-15z"/>
            </svg>
            <span>Kubernetes</span>
          </div>
          <div className="devops-tool jenkins-tool">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="30" r="12" fill="#E74C3C"/>
              <circle cx="35" cy="55" r="12" fill="#E74C3C"/>
              <circle cx="65" cy="55" r="12" fill="#E74C3C"/>
              <circle cx="35" cy="80" r="12" fill="#E74C3C"/>
              <circle cx="65" cy="80" r="12" fill="#E74C3C"/>
              <line x1="50" y1="42" x2="35" y2="43" stroke="#E74C3C" strokeWidth="2"/>
              <line x1="50" y1="42" x2="65" y2="43" stroke="#E74C3C" strokeWidth="2"/>
              <line x1="35" y1="67" x2="35" y2="68" stroke="#E74C3C" strokeWidth="2"/>
              <line x1="65" y1="67" x2="65" y2="68" stroke="#E74C3C" strokeWidth="2"/>
            </svg>
            <span>Jenkins</span>
          </div>
          <div className="devops-tool aws-tool">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path fill="#FF9900" d="M30 35h40c3 0 5 2 5 5v25c0 3-2 5-5 5H30c-3 0-5-2-5-5V40c0-3 2-5 5-5z"/>
              <text x="50" y="55" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">AWS</text>
            </svg>
            <span>AWS</span>
          </div>
          <div className="devops-tool gitlab-tool">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path fill="#E24329" d="M50 85L15 45l9-28h52l9 28z"/>
              <path fill="#FC6D26" d="M50 85L35 45h30z"/>
              <circle cx="50" cy="50" r="5" fill="#FCA121"/>
            </svg>
            <span>GitLab CI</span>
          </div>
          <div className="devops-tool terraform-tool">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path fill="#623CE4" d="M20 25h30v30H20z"/>
              <path fill="#623CE4" d="M50 25h30v30H50z"/>
              <path fill="#623CE4" d="M50 55h30v30H50z"/>
            </svg>
            <span>Terraform</span>
          </div>
        </div>
        <div className="loading-marquee">
          <Marquee>
            <span>&nbsp; AI Engineer &nbsp;</span> <span>&nbsp; DevOps Engineer &nbsp;</span>
            <span>&nbsp; Cloud Engineer &nbsp;</span> <span>&nbsp; AI Engineer &nbsp;</span> 
            <span>&nbsp; DevOps Engineer &nbsp;</span> <span>&nbsp; Cloud Engineer &nbsp;</span>
          </Marquee>
        </div>
        <div
          className={`loading-wrap ${clicked && "loading-clicked"}`}
          onMouseMove={(e) => handleMouseMove(e)}
        >
          <div className="loading-hover"></div>
          <div className={`loading-button ${loaded && "loading-complete"}`}>
            <div className="loading-container">
              <div className="loading-content">
                <div className="loading-content-in">
                  Loading <span>{percent}%</span>
                </div>
              </div>
              <div className="loading-box"></div>
            </div>
            <div className="loading-content2">
              <span>Welcome</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;

export const setProgress = (setLoading: (value: number) => void) => {
  let percent: number = 0;

  let interval = setInterval(() => {
    if (percent <= 50) {
      let rand = Math.round(Math.random() * 5);
      percent = percent + rand;
      setLoading(percent);
    } else {
      clearInterval(interval);
      interval = setInterval(() => {
        percent = percent + Math.round(Math.random());
        setLoading(percent);
        if (percent > 91) {
          clearInterval(interval);
        }
      }, 2000);
    }
  }, 100);

  function clear() {
    clearInterval(interval);
    setLoading(100);
  }

  function loaded() {
    return new Promise<number>((resolve) => {
      clearInterval(interval);
      interval = setInterval(() => {
        if (percent < 100) {
          percent++;
          setLoading(percent);
        } else {
          resolve(percent);
          clearInterval(interval);
        }
      }, 2);
    });
  }
  return { loaded, percent, clear };
};
