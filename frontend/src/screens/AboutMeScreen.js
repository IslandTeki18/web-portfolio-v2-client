import React from "react";

const AboutMeScreen = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-0 col-xl-6">
          <div className="d-flex align-items-center p-5">
            <div className="">
              <h6 className="text-uppercase text-primary mb-2">About Me</h6>
              <h1 className="display-4 font-weight-bold mb-3">Landon McKell</h1>
              <div className="row">
                <div className="col-lx-6">
                  <p className="text-lg text-muted mb-lg-2">
                    Born in Western Samoa on a tiny little island called Apia, I
                    was adopted and brought to the states. My story begins in
                    the great state of Utah. It here where I found, not only the
                    love of my life but also my love for technology.
                  </p>
                </div>
                <div className="col-lx-6">
                  <p className="text-lg text-muted mb-0">
                    After working sales for a few years, I decided to take my
                    chance in the tech industry and took a 12 week coding
                    bootcamp in Salt Lake City for iOS app development. It here
                    where I found that I love to build things and have people
                    interact with them. The market was tough in the app industry
                    and I soon picked up web development and started to apply
                    for web dev jobs. At last I landed a job in Provo UT, close
                    to my home.
                  </p>
                </div>
              </div>
              <hr className="my-3" style={{ backgroundColor: "white" }} />
              <div className="row">
                <div className="col-lx-6">
                  <p className="text-lg text-muted mb-lg-2">
                    After my first web developer job I decided to take my web
                    development skills to the next level and learned to become a
                    full stack developer.
                  </p>
                </div>
                <div className="col-lx-6">
                  <p className="text-lg text-muted mb-0">
                    My beautiful wife and I married in 2016, and we have a
                    beautiful little girl named Ensley.
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
  );
};

export default AboutMeScreen;
