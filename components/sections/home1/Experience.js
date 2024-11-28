import Link from "next/link";

export default function Cases() {
  return (
    <>
      {/*Experience One Start*/}
      <section className="experience-one">
        <div
          className="experience-one-shape-1 shapeMover"
          style={{
            backgroundImage:
              "url(assets/images/shapes/experience-one-shape-1.png)",
          }}
        ></div>
        <div className="container">
          <div className="section-title text-center">
            <span className="section-title__tagline">Our Businesses</span>
          </div>
          <div className="row">
            {/*Experience One Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="experience-one__single">
                {/* <div className="experience-one__icon">
                  <span className="icon-service"></span>
                </div> */}
                <div className="experience-one__content">
                  <h3 className="experience-one__title">
                    <Link href="services-details">CaterHealth</Link>
                  </h3>
                  <p className="experience-one__text">"Images To Be Added".</p>
                </div>
              </div>
            </div>
            {/*Experience One Single End*/}
            {/*Experience One Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="experience-one__single">
                {/* <div className="experience-one__icon">
                  <span className="icon-management"></span>
                </div> */}
                <div className="experience-one__content">
                  <h3 className="experience-one__title">
                    <Link href="team">NGO</Link>
                  </h3>
                  <p className="experience-one__text">"Images To Be Added".</p>
                </div>
              </div>
            </div>
            {/*Experience One Single End*/}
            {/*Experience One Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInRight"
              data-wow-delay="300ms"
            >
              <div className="experience-one__single">
                {/* <div className="experience-one__icon">
                  <span className="icon-headphones"></span>
                </div> */}
                <div className="experience-one__content">
                  <h3 className="experience-one__title">
                    <Link href="contact">Mahaanagar</Link>
                  </h3>
                  <p className="experience-one__text">"Images To Be Added".</p>
                </div>
              </div>
            </div>
            {/*Experience One Single End*/}
          </div>
        </div>
      </section>
      {/*Experience One End*/}
    </>
  );
}
