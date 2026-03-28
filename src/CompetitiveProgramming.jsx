import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faStar, faBullseye } from "@fortawesome/free-solid-svg-icons";

export default function CompetitiveProgramming() {
  const cpData = [
    {
      platform: "LeetCode",
      icon: faCode,
      mainStat: "340+",
      subStat: "PROBLEMS SOLVED",
      footer: "Rating: 1744 | 46 Contests"
    },
    {
      platform: "CodeChef",
      icon: faStar,
      mainStat: "2-Star",
      subStat: "COMPETITOR",
      footer: "Max Rating: 1423 | 32 Contests"
    },
    {
      platform: "Codeforces",
      icon: faBullseye,
      mainStat: "1037",
      subStat: "MAX RATING",
      footer: "Active Participant"
    }
  ];

  return (
    <section className="cp-stats" id="competitive">
      <div className="cp-header-container">
         <h2 className="cp-section-title"><span className="cp-dash">—</span> Competitive Programming Highlights</h2>
      </div>
      
      <div className="cp-grid">
        {cpData.map((item, index) => (
          <div key={index} className="cp-card glass-effect">
            <div className="cp-card-header">
              <FontAwesomeIcon icon={item.icon} className="cp-icon" />
              <h4>{item.platform}</h4>
            </div>
            <div className="cp-main-stat">{item.mainStat}</div>
            <div className="cp-sub-stat">{item.subStat}</div>
            <hr className="cp-divider" />
            <div className="cp-footer">{item.footer}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
