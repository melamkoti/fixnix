import Link from "next/link";

export default function About() {
  return (
    <>
      {/*About One Start*/}
      <section className="about-one">
        <div
          className="about-one__bg float-bob-y"
          style={{
            backgroundImage:
              "url(assets/images/backgrounds/about-one-bg-img-1.jpg)",
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="about-one__left">
                <div
                  className="about-one__img wow slideInLeft"
                  data-wow-delay="100ms"
                  data-wow-duration="2500ms"
                >
                  <img src="assets/images/resources/about-1-1.jpg" alt="" />
                  <div className="about-one__our-goal">
                    <p className="about-one__our-goal-sub-title">Lorem:</p>
                    <h3 className="about-one__our-goal-title">
                      "Lorem ipsum dolor sit amet"
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="about-one__right">
                <div className="section-title text-left">
                  <span className="section-title__tagline">About us</span>
                  <h2 className="section-title__title">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </h2>
                </div>
                <p className="about-one__right-text-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  non risus. Suspendisse lectus tortor, dignissim sit amet,
                  adipiscing nec, ultricies sed, dolor. Cras elementum ultrices
                  diam. Maecenas ligula massa, varius a, semper congue, euismod
                  non, mi.
                </p>
                <ul className="about-one__points list-unstyled">
                  <li>
                    <div className="about-one__points-single">
                      <div className="about-one__points-icon">
                        <span className="icon-repair"></span>
                      </div>
                      <div className="about-one__points-text">
                        <h3 className="about-one__points-title">
                          <Link href="services">Lorem</Link>
                        </h3>
                        <p className="about-one__points-subtitle">
                          Lorem ipsum dolor sit amet at labore consectetur
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="about-one__points-single">
                      <div className="about-one__points-icon">
                        <span className="icon-phone"></span>
                      </div>
                      <div className="about-one__points-text">
                        <h3 className="about-one__points-title">
                          <Link href="services">Lorem</Link>
                        </h3>
                        <p className="about-one__points-subtitle">
                          Lorem ipsum dolor sit amet at labore consectetur
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
                <Link href="contact" className="thm-btn">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*About One End*/}
    </>
  );
}
