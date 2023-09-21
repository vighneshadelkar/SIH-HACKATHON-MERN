import React from "react";
import "./Home.css";
import Navbar2 from "../../components/Navbar/Navbar2";
import Img1 from "../../images/home-img.jpg";
import home2 from "../../images/home2.jpg";
import Person1 from "../../images/person1.jpg";
import Person2 from "../../images/person2.jpg";
import Person3 from "../../images/person3.jpg";
import Blogcard from "../../components/Cards/Blogcard";

export default function Home() {
  return (
    <div className="home">
      <Navbar2 />
      <div className="homeWrapper">
        {/* main home page content */}
        <section className="homeSection1">
          <div className="homeText">
            <h2>Best way to learn from anywhere.</h2>
            <h1 className="homeTitle">Learn with fun on any schedule</h1>
            <p>
              A global knowlege platform for kids between 8-16 to make them
              aware of their rights.
            </p>
            <div className="btn">
              <button className="explore">Explore More</button>
            </div>
          </div>
          <div className="imgDiv">
            <img src={Img1} alt="home img" className="homeimg" />
          </div>
        </section>
        <div className="imgDiv">{/* <img src={Arrow} alt="" /> */}</div>

        {/* home page cards */}
        <section className="homeSection2" data-aos="zoom-in">
          <div className="wrapper">
            <div className="cdWrapper">
              <div className="cdWrapper2">
                <div className="cd">
                  <h2>High Quality Learning</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry. Lorem Ipsum is simply
                    dummy text of the printing and typesetting industry. Lorem
                    Ipsum is simply dummy text of the printing and typesetting
                    industry.
                  </p>
                  <div className="btnWrapper">
                    <button className="btn-2">Read More</button>
                  </div>
                </div>
                <div className="cd">
                  <h2>Friendly Teachers</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry. Lorem Ipsum is simply
                    dummy text of the printing and typesetting industry. Lorem
                    Ipsum is simply dummy text of the printing and typesetting
                    industry.
                  </p>
                  <div className="btnWrapper">
                    <button className="btn-2">Read More</button>
                  </div>
                </div>
                <div className="cd">
                  <h2>Best Support Ever</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry. Lorem Ipsum is simply
                    dummy text of the printing and typesetting industry. Lorem
                    Ipsum is simply dummy text of the printing and typesetting
                    industry.
                  </p>
                  <div className="btnWrapper">
                    <button className="btn-2">Read More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="homeSection3" data-aos="zoom-in">
          <div className="cdWrapper">
            <h1 className="homeTitle">About Us</h1>
            <div className="cdWrapper3">
              <div className="imgDiv">
                <img src={home2} alt="home img" className="homeimg" />
              </div>
              <div className="homeText3">
                <h2>Our Mission</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* blogs section */}
        <section className="homeSection3" data-aos="zoom-in">
          <div className="cdWrapper">
            <h1 className="homeTitle">Blogs</h1>
            <div className="cdWrapper2">
              <Blogcard image={Person2} name={"Priya"} />
              <Blogcard image={Person1} name={"Vighnesh"} />
              <Blogcard image={Person3} name={"Abuzaid"} />
            </div>
          </div>
        </section>
        <footer>{/* <Footer /> */}</footer>
      </div>
    </div>
  );
}
