import React from "react";
import useScrollToTop from "../../customHooks/useScrollToTop";

const AboutMePage = () => {
  useScrollToTop();
  return (
    <div className="dkAboutMePage">
      <div className="container">
        <div className="row">
          <div className="col-lg-0 col-xl-6">
            <div className="d-flex align-items-center p-5">
              <div className="">
                <h6 className="text-uppercase mb-2 text-white">About Me</h6>
                <h1 className="display-4 font-weight-bold mb-3 text-white">
                  Landon McKell
                </h1>
                <div className="row">
                  <div className="col-lx-6">
                    <p className="text-lg text-muted mb-lg-2">
                      Born from the great state of Utah. My adopted mother was a
                      successful business woman and gave me a life full of
                      adventure and fun. We've lived in other various places as
                      well - Hawaii, Jackson Hole Wyoming, and the Cayman
                      Islands to name a few. Because we visited all of these
                      places my siblings and I were homeschool till my seventh
                      grade year when my mom decided to offically settle back
                      down in Utah.
                    </p>
                  </div>
                  <div className="col-lx-6">
                    <p className="text-lg text-muted mb-0">
                      I met my beautiful wife over snapchat, which is a long
                      story but to keep it short, we dated for a year and then
                      decided to tie the knot. If you haven't noticed our little
                      booger Ensley from the photo, we have one little girl of
                      our own.
                    </p>
                  </div>
                </div>
                <hr className="my-3" style={{ backgroundColor: "#a8bed4" }} />
                <div className="row">
                  <div className="col-lx-6">
                    <p className="text-lg text-muted mb-lg-2">
                      After working in sales for a few years, I realized that I
                      was drawn to tech. My brother was running a mobile app
                      agency at the time and told me that the tech industry was
                      the way to go. I left my sales job, went to coding
                      bootcamp for mobile development.
                    </p>
                  </div>
                  <div className="col-lx-6">
                    <p className="text-lg text-muted mb-0">
                      After the bootcamp, the market for Mid Level iOS
                      Developers here in Utah was a tough and competetive
                      market. Needing a job I learned basic web development and
                      started applying for entry level jobs and eventually
                      landed a small gig in Provo, Utah. The rest is history...
                      and on my resume page.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-xl-6 text-center">
            <img
              className="img-fluid mt-3"
              src="./images/IMG_1423.png"
              alt="familyphoto"
              width="400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;
