import Image from "next/image";
import XBerry from "./../public/xberry.png";
import ACN from "./../public/acn.png";
import Bm from "./../public/bm.png";
import Oak from "./../public/oak.png";

const Career = (props) => {
  return (
    <div className="career">
      <div className="career-line"></div>
      <div className="career-card-right">
        <div>
          <h2>Flutter / Frontend Developer</h2>
          <h3>xBerry R&D</h3>
          <h4>Full-time</h4>
          <h5>(Feb 2021 - now.)</h5>
          <p>Lorem ipsumd sad sad asd sad asd sad asd sad asd asd sad asd sa</p>
        </div>
        <Image src={XBerry} className="career-card-img" />
      </div>
      <div className="career-card-left">
        <Image src={ACN} className="career-card-img" />
        <div>
          <h2>IT Intern / Application Support</h2>
          <h3>ACN</h3>
          <h4>Full-time</h4>
          <h5>(Jul 2020 - Feb 2021)</h5>{" "}
          <p>Lorem ipsumd sad sad asd sad asd sad asd sad asd asd sad asd sa</p>
        </div>
      </div>
      <div className="career-card-right">
        <div>
          <h2>Database Developer</h2>
          <h3>Biomedical Research Center</h3>
          <h4>Internship</h4>
          <h5>(Jul 2020 - Sep 2020)</h5>
          <p>Lorem ipsumd sad sad asd sad asd sad asd sad asd asd sad asd sa</p>
        </div>
        <Image src={Bm} className="career-card-img" />
      </div>
      <div className="career-card-left">
        <Image src={Oak} className="career-card-img" />
        <div>
          <h2>Java Developer</h2>
          <h3>OAK Fusion</h3>
          <h4>Apprenticeship</h4>
          <h5>(Jul 2019 - Feb 2019)</h5>
          <p>Lorem ipsumd sad sad asd sad asd sad asd sad asd asd sad asd sa</p>
        </div>
      </div>
    </div>
  );
};

export default Career;
