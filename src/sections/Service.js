import React from "react";
import "./service.css";
import bed from "./assets/bed.svg"; //massage
import heart from "./assets/heart.svg"; //physio
import leaf from "./assets/leaf.svg"; //spa
import sofa from "./assets/sofa.svg"; //relax

export default function Service() {
  return (
    <section id="service">
      <div>
        <h1>Services</h1>
        <div>Enim magna nisi consequat pariatur ullamco dolore.</div>
      </div>
      <div>
        <article>
          <div>
            <img src={bed} alt="massage" />
            <h3>Massage</h3>
          </div>
          <div>
            Spa dolor eu eu aliquip id incididunt in Lorem. Duis est incididunt
            labore mollit id irure incididunt exercitation ex amet. Consectetur
            aute ullamco excepteur officia fugiat.
          </div>
        </article>
        <article>
          <div>
            <img src={heart} alt="physio" />
            <h3>Physio</h3>
          </div>
          <div>
            Massage dolor eu eu aliquip id incididunt in Lorem. Duis est
            incididunt labore mollit id irure incididunt exercitation ex amet.
          </div>
        </article>
        <article>
          <div>
            <img src={leaf} alt="spa" />
            <h3>Spa</h3>
          </div>
          <div>
            Physio dolor eu eu aliquip id incididunt in Lorem. Duis est
            incididunt labore mollit id irure incididunt exercitation ex amet.
            Lorem anim cupidatat nisi consectetur veniam duis laborum labore
            eiusmod minim exercitation.
          </div>
        </article>
        <article>
          <div>
            <img src={sofa} alt="relax" />
            <h3>Relaxation</h3>
          </div>
          <div>
            Qui deserunt fugiat culpa ad commodo et aute. Sint in nisi mollit
            dolor deserunt velit ea. Deserunt eiusmod eiusmod culpa mollit sit.
          </div>
        </article>
      </div>
    </section>
  );
}
