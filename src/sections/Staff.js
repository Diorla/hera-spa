import React from "react";
import "./staff.css";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import tayo from "./staff/tayo.jpg";
import enitan from "./staff/enitan.jpg";
import adorn from "./staff/adorn.jpg";
import kola from "./staff/kola.jpg";
//@ts-check
const Facebook = ({ href }) => (
  <a href={href}>
    <FaFacebook className="facebook icon" />
  </a>
);

const Twitter = ({ href }) => (
  <a href={href}>
    <FaTwitter className="twitter icon" />
  </a>
);

const Linkedin = ({ href }) => (
  <a href={href}>
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
        {linkedin && <Linkedin href={linkedin} />}
        {twitter && <Twitter href={twitter} />}
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
          facebook="https://www.facebook.com/"
          twitter="https://www.twitter.com/"
          description="Et nostrud laboris laborum adipisicing ad nisi magna sint ex officia
        Lorem irure."
        />
        <Member
          src={enitan}
          name="Kolapo Enitan"
          job="Massage therapist"
          linkedin="https://www.linkedin.com/"
          twitter="https://www.twitter.com/"
          description="Et nostrud laboris laborum adipisicing ad nisi magna sint ex officia
        Lorem irure."
        />
      </div>
      <div className="staff-bottom">
        <Member
          src={adorn}
          name="Adorn Vasark"
          job="Massage therapist"
          facebook="https://www.facebook.com/"
          description="Et nostrud laboris laborum adipisicing ad nisi magna sint ex officia
        Lorem irure."
        />
        <Member
          src={kola}
          name="Adekola Origbamila"
          job="Spa therapist"
          twitter="https://www.twitter.com/"
          description="Et nostrud laboris laborum adipisicing ad nisi magna sint ex officia
      Lorem irure."
        />
      </div>
    </section>
  );
}
