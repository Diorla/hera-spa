import React from "react";
import "./staff.css";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import tayo from "./staff/tayo.jpg";
import enitan from "./staff/enitan.jpg";
import adorn from "./staff/adorn.jpg";
import kola from "./staff/kola.jpg";
//@ts-check
const Facebook = ({ href }) => (
  <a href={href} className="icon-link">
    <FaFacebook className="facebook icon" />
  </a>
);

const Twitter = ({ href }) => (
  <a href={href} className="icon-link">
    <FaTwitter className="twitter icon" />
  </a>
);

const Linkedin = ({ href }) => (
  <a href={href} className="icon-link">
    <FaLinkedin className="linkedin icon" />
  </a>
);
const Member = ({
  src,
  name,
  job,
  description,
  facebook,
  twitter,
  linkedin,
}) => (
  <div className="staff">
    <img src={src} alt="User profile" />
    <div className="info">
      <h2>{name}</h2>
      <div>{job}</div>
      <div>{description}</div>
      <div>
        {facebook && <Facebook href={facebook} />}
        {twitter && <Twitter href={twitter} />}
        {linkedin && <Linkedin href={linkedin} />}
        {/* <Facebook href="/" />
        <Twitter href="/" />
        <Linkedin href="/" /> */}
      </div>
    </div>
  </div>
);
export default function Staff() {
  return (
    <section id="staff">
      <div className="staff-top">
        <Member
          src={tayo}
          name="Tayo"
          job="Physiotherapist"
          twitter="https://www.twitter.com/@_caphie"
          facebook="https://www.facebook.com/caphie"
          description="Et nostrud laboris laborum adipisicing ad nisi magna sint ex officia
        Lorem irure."
        />
        <Member
          src={enitan}
          name="Kolapo Enitan"
          job="Massage therapist"
          twitter="https://www.twitter.com/@ooklap"
          description="Et nostrud laboris laborum adipisicing ad nisi magna sint ex officia
        Lorem irure."
        />
      </div>
      <div className="staff-bottom">
        <Member
          src={adorn}
          name="Adorn Vasark"
          job="Massage therapist"
          twitter="https://www.twitter.com/@ad_talk"
          description="Et nostrud laboris laborum adipisicing ad nisi magna sint ex officia
        Lorem irure."
        />
        <Member
          src={kola}
          name="Adekola Origbamila"
          job="Spa therapist"
          twitter="https://www.twitter.com/@kolagbamila"
          description="Et nostrud laboris laborum adipisicing ad nisi magna sint ex officia
      Lorem irure."
        />
      </div>
    </section>
  );
}
