"use client";
import { useState } from "react";
import Link from "next/link";
export default function Faq() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      {/*FAQ One Start*/}
      <section className="faq-one">
        <div
          className="faq-one-shape-1 shapeMover"
          style={{
            backgroundImage: "url(assets/images/shapes/faq-one-shape.png)",
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="faq-one__left">
                <div className="section-title text-left">
                  <span className="section-title__tagline">Have Question?</span>
                  <h2 className="section-title__title">
                    Frequently Asked Question
                  </h2>
                </div>
                <p className="faq-one__text-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  non risus. Suspendisse lectus tortor, dignissim sit amet,
                  adipiscing nec, ultricies sed, dolor. Cras elementum ultrices
                  diam. Maecenas ligula massa, varius a, semper congue, euismod
                  non, mi. Proin porttitor, orci nec nonummy molestie, enim est
                  eleifend mi, non fermentum diam nisl sit amet erat. Donec
                  mollis hendrerit risus.
                </p>
                <p className="faq-one__text-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  non risus. Suspendisse lectus tortor, dignissim sit amet,
                  adipiscing nec, ultricies sed, dolor. Cras elementum ultrices
                  diam. Maecenas ligula massa, varius a, semper congue, euismod
                  non, mi. Proin porttitor, orci nec nonummy molestie, enim est
                  eleifend mi, non fermentum diam nisl sit amet erat. Donec
                  mollis hendrerit risus.
                </p>
                <div className="faq-one__btn-box">
                  <Link href="#" className=" thm-btn faq-one__btn">
                    Ask Questions Here
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="faq-one__right">
                <div
                  className="accrodion-grp faq-one-accrodion"
                  data-grp-name="faq-one-accrodion"
                >
                  <div
                    className={
                      isActive.key == 1 ? "accrodion active" : "accrodion"
                    }
                    onClick={() => handleToggle(1)}
                  >
                    <div className="accrodion-title">
                      <h4>Can you clean my phone or device?</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed non risus. Suspendisse lectus tortor,
                          dignissim sit amet, adipiscing nec, ultricies sed,
                          dolor. Cras elementum ultrices diam.
                        </p>
                      </div>
                      {/* /.inner */}
                    </div>
                  </div>
                  <div
                    className={
                      isActive.key == 2 ? "accrodion active" : "accrodion"
                    }
                    onClick={() => handleToggle(2)}
                  >
                    <div className="accrodion-title">
                      <h4>Do you offer a warranty?</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed non risus. Suspendisse lectus tortor,
                          dignissim sit amet, adipiscing nec, ultricies sed,
                          dolor. Cras elementum ultrices diam.
                        </p>
                      </div>
                      {/* /.inner */}
                    </div>
                  </div>
                  <div
                    className={
                      isActive.key == 3 ? "accrodion active" : "accrodion"
                    }
                    onClick={() => handleToggle(3)}
                  >
                    <div className="accrodion-title">
                      <h4>How Many Locations Do You Have?</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed non risus. Suspendisse lectus tortor,
                          dignissim sit amet, adipiscing nec, ultricies sed,
                          dolor. Cras elementum ultrices diam.
                        </p>
                      </div>
                      {/* /.inner */}
                    </div>
                  </div>
                  <div
                    className={
                      isActive.key == 4 ? "accrodion active" : "accrodion"
                    }
                    onClick={() => handleToggle(4)}
                  >
                    <div className="accrodion-title">
                      <h4>Is there a charge for the loaner phone service?</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed non risus. Suspendisse lectus tortor,
                          dignissim sit amet, adipiscing nec, ultricies sed,
                          dolor. Cras elementum ultrices diam.
                        </p>
                      </div>
                      {/* /.inner */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*FAQ One End*/}
    </>
  );
}
