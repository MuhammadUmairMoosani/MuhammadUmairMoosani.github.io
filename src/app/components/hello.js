"use client";

import Image from "next/image";

export const Hello = () => {
  return (
    <div
      className="elementor-element elementor-element-52d5136 e-flex e-con-boxed e-con e-parent"
      data-id="52d5136"
      data-element_type="container"
      id="home"
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative gradient background */}
      <div
        style={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(111, 243, 181, 0.08) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-15%",
          left: "-10%",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(240, 255, 108, 0.06) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div className="e-con-inner" style={{ position: "relative", zIndex: 1 }}>
        <div
          className="elementor-element elementor-element-cff8374 e-con-full e-flex e-con e-child"
          data-id="cff8374"
          data-element_type="container"
        >
          <div
            className="elementor-element elementor-element-0781194 e-con-full section-heading e-flex e-con e-child"
            data-id="0781194"
            data-element_type="container"
          >
            <div
              className="elementor-element elementor-element-27d386f e-con-full section-heading e-flex e-con e-child"
              data-id="27d386f"
              data-element_type="container"
            >
              <div
                className="elementor-element elementor-element-0262ab9 elementor-widget elementor-widget-text-editor"
                data-id="0262ab9"
                data-element_type="widget"
                data-settings='{"ekit_we_effect_on":"none"}'
                data-widget_type="text-editor.default"
                style={{
                  marginBottom: "15px",
                  opacity: 0.9,
                }}
              >
                <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
                  Elevate your business with innovative, scalable, and
                  high-performance digital solutions.
                  <strong>
                    <a
                      href="#my-specialization"
                      style={{
                        background:
                          "linear-gradient(90deg, #6FF3B5 0%, #F0FF6C 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        textDecoration: "none",
                        fontWeight: "600",
                      }}
                    >
                      &nbsp;Let&apos;s turn your vision into reality today!
                    </a>
                  </strong>
                </p>
              </div>
              <div
                className="elementor-element elementor-element-cab2ac0 at-heading-animation at-animation-heading-none  elementor-widget elementor-widget-heading"
                data-id="cab2ac0"
                data-element_type="widget"
                data-settings='{"_animation":"fadeInUp","_animation_delay":100,"ekit_we_effect_on":"none"}'
                data-widget_type="heading.default"
                style={{ marginBottom: "20px" }}
              >
                <h2 className="elementor-heading-title elementor-size-default">
                  <span
                    style={{
                      fontSize: "clamp(2rem, 5vw, 3.5rem)",
                      fontWeight: "700",
                      lineHeight: "1.2",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    I&apos;m{" "}
                    <span
                      style={{
                        background:
                          "linear-gradient(135deg, #6FF3B5 0%, #F0FF6C 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      Muhammad Umair
                    </span>{" "}
                    Moosani
                  </span>
                </h2>
              </div>
              <div
                className="elementor-element elementor-element-88ae754 elementor-widget elementor-widget-text-editor"
                data-id="88ae754"
                data-element_type="widget"
                data-settings='{"_animation":"fadeInUp","_animation_delay":300,"ekit_we_effect_on":"none"}'
                data-widget_type="text-editor.default"
              >
                <p id="about-me-description">
                  A{" "}
                  <strong>
                    <a href="#about">Senior Software Engineer</a>
                  </strong>{" "}
                  with
                  <strong>
                    {" "}
                    <a href="#about">7+ years of experience</a>{" "}
                  </strong>{" "}
                  building scalable mobile and web applications using{" "}
                  <strong>React Native, Flutter, React.js, Next.js</strong>, and
                  the <strong>MERN stack</strong>.
                </p>
                <p>
                  I&apos;ve delivered impactful solutions in industries like
                  <strong>
                    {" "}
                    healthcare, finance, transportation, food delivery,
                  </strong>{" "}
                  and
                  <strong> e-commerce</strong>. My expertise includes
                  <strong> JavaScript, TypeScript, Dart, Node.js,</strong> and
                  state management libraries like
                  <strong> Redux</strong>.
                </p>
                <p>
                  I hold a{" "}
                  <strong>Bachelor's degree in Computer Science</strong> from
                  Virtual University and certifications in{" "}
                  <strong>React</strong> and{" "}
                  <strong>Frontend Development</strong> from Udacity.
                </p>
                <div
                  className="elementor-element elementor-element-e62a178 at-heading-animation at-animation-heading-none elementor-widget elementor-widget-heading"
                  data-id="e62a178"
                  data-element_type="widget"
                  data-settings='{"_animation":"fadeInUp","_animation_delay":200,"ekit_we_effect_on":"none"}'
                  data-widget_type="heading.default"
                  style={{ marginTop: "30px", marginBottom: "15px" }}
                >
                  <h2
                    className="elementor-heading-title elementor-size-default"
                    style={{
                      fontSize: "clamp(1.5rem, 3vw, 2rem)",
                      fontWeight: "600",
                      position: "relative",
                      display: "inline-block",
                    }}
                  >
                    Core Tech Stack
                    <span
                      style={{
                        position: "absolute",
                        bottom: "-5px",
                        left: 0,
                        width: "60px",
                        height: "3px",
                        background:
                          "linear-gradient(90deg, #6FF3B5 0%, #F0FF6C 100%)",
                        borderRadius: "2px",
                      }}
                    />
                  </h2>
                </div>
                <ul
                  style={{
                    display: "grid",
                    gap: "12px",
                    listStyle: "none",
                    padding: 0,
                  }}
                >
                  <li
                    style={{
                      background: "rgba(111, 243, 181, 0.05)",
                      padding: "10px 15px",
                      borderRadius: "8px",
                      borderLeft: "3px solid #6FF3B5",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <strong style={{ color: "#6FF3B5" }}>Frontend:</strong>{" "}
                    React Native, Flutter, React.js, Next.js, Redux, Tailwind
                    CSS, Ant Design, Material UI
                  </li>
                  <li
                    style={{
                      background: "rgba(111, 243, 181, 0.05)",
                      padding: "10px 15px",
                      borderRadius: "8px",
                      borderLeft: "3px solid #6FF3B5",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <strong style={{ color: "#6FF3B5" }}>Backend:</strong>{" "}
                    Node.js, Express.js, NestJS, MongoDB, GraphQL, Apollo,
                    Firebase
                  </li>
                  <li
                    style={{
                      background: "rgba(111, 243, 181, 0.05)",
                      padding: "10px 15px",
                      borderRadius: "8px",
                      borderLeft: "3px solid #6FF3B5",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <strong style={{ color: "#6FF3B5" }}>Testing:</strong> Jest,
                    Cypress, TDD, Unit Testing, Integration Testing
                  </li>
                  <li
                    style={{
                      background: "rgba(111, 243, 181, 0.05)",
                      padding: "10px 15px",
                      borderRadius: "8px",
                      borderLeft: "3px solid #6FF3B5",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <strong style={{ color: "#6FF3B5" }}>
                      DevOps & Tools:
                    </strong>{" "}
                    GitHub Actions, Docker, CI/CD Pipelines, AWS, Azure,
                    Firebase Hosting
                  </li>
                  <li
                    style={{
                      background: "rgba(111, 243, 181, 0.05)",
                      padding: "10px 15px",
                      borderRadius: "8px",
                      borderLeft: "3px solid #6FF3B5",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <strong style={{ color: "#6FF3B5" }}>Mobile:</strong> React
                    Native, Flutter, Dart, Android Studio, Xcode, Apple
                    HealthKit, Google Health Connect
                  </li>
                  <li
                    style={{
                      background: "rgba(111, 243, 181, 0.05)",
                      padding: "10px 15px",
                      borderRadius: "8px",
                      borderLeft: "3px solid #6FF3B5",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <strong style={{ color: "#6FF3B5" }}>Practices:</strong>{" "}
                    Agile (Scrum), Clean Architecture, HIPAA Compliance,
                    Performance Optimization
                  </li>
                </ul>

                <p style={{ marginTop: "20px" }}>
                  I thrive in fast-paced, collaborative environments and am
                  always eager to take on new challenges. Let&apos;s connect and
                  build something meaningful together.
                </p>
              </div>
            </div>
          </div>
          <div
            className="elementor-element elementor-element-abb0875 e-con-full e-flex  e-con e-child"
            data-id="abb0875"
            data-element_type="container"
            data-settings='{"animation":"fadeInUp","animation_delay":300}'
            style={{
              display: "flex",
              gap: "15px",
              flexWrap: "wrap",
              marginTop: "25px",
            }}
          >
            <div
              className="elementor-element elementor-element-9e27659 elementor-widget elementor-widget-button"
              data-id="9e27659"
              data-element_type="widget"
              data-settings='{"ekit_we_effect_on":"none"}'
              data-widget_type="button.default"
            >
              <a
                className="elementor-button elementor-button-link elementor-size-sm"
                href="#contact"
                style={{
                  background:
                    "linear-gradient(135deg, #6FF3B5 0%, #F0FF6C 100%)",
                  padding: "14px 32px",
                  borderRadius: "30px",
                  color: "#0A2E2A",
                  fontWeight: "600",
                  fontSize: "16px",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 15px rgba(111, 243, 181, 0.3)",
                  border: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 20px rgba(111, 243, 181, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 15px rgba(111, 243, 181, 0.3)";
                }}
              >
                <span className="elementor-button-content-wrapper">
                  <span className="elementor-button-text">Get In Touch</span>
                </span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 15L12.5 10L7.5 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
            <div
              className="elementor-widget elementor-widget-button"
              data-widget_type="button.default"
            >
              <a
                href="https://drive.google.com/uc?export=download&id=1C6ffTvn1J05AuXLT3s4DyRuVmwU4tuOx"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "transparent",
                  padding: "14px 32px",
                  borderRadius: "30px",
                  color: "#6FF3B5",
                  fontWeight: "600",
                  fontSize: "16px",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  transition: "all 0.3s ease",
                  border: "2px solid #6FF3B5",
                  boxShadow: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(111, 243, 181, 0.1)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 3V13M10 13L6 9M10 13L14 9M3 17H17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Download CV</span>
              </a>
            </div>
            {/* <div
                            className="elementor-element elementor-element-7b84d76 hero-video-play-button elementor-widget elementor-widget-elementskit-video"
                            data-id="7b84d76"
                            data-element_type="widget"
                            data-settings='{"ekit_we_effect_on":"none"}'
                            data-widget_type="elementskit-video.default"
                        >
                            <div className="elementor-widget-container">
                                <div className="ekit-wid-con">
                                    <div
                                        className="video-content"
                                        data-video-player="[]"
                                        data-video-setting='{"videoVolume":"horizontal","startVolume":0.8000000000000000444089209850062616169452667236328125,"videoType":"iframe","videoClass":"mfp-fade"}'
                                    >
                                        <a
                                            className="ekit-video-popup ekit-video-popup-btn"
                                            href="https://www.youtube.com/embed/Y-x0efG1seA?feature=oembed?playlist=Y-x0efG1seA&amp;mute=0&amp;autoplay=0&amp;loop=1&amp;controls=0&amp;start=0&amp;end="
                                            aria-label="video-popup"
                                        >
                                            <span>Watch Intro</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div> */}
          </div>
        </div>
        <div
          className="elementor-element elementor-element-2b17256 e-con-full e-flex e-con e-child"
          data-id="2b17256"
          data-element_type="container"
          data-settings='{"background_background":"classic"}'
        >
          <div
            className="elementor-element elementor-element-aacf331 hero-img at-image-animation at-animation-image-none at-none elementor-widget elementor-widget-image"
            data-id="aacf331"
            data-element_type="widget"
            data-settings='{"ekit_we_effect_on":"none"}'
            data-widget_type="image.default"
            style={{
              maxWidth: "450px",
              position: "relative",
            }}
          >
            {/* Glow effect behind image */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "90%",
                height: "90%",
                background:
                  "linear-gradient(135deg, rgba(111, 243, 181, 0.2) 0%, rgba(240, 255, 108, 0.2) 100%)",
                filter: "blur(40px)",
                borderRadius: "50%",
                zIndex: -1,
                animation: "pulse 3s ease-in-out infinite",
              }}
            />
            <Image
              loading="lazy"
              decoding="async"
              width="400"
              height="400"
              src="/profile.png"
              className="attachment-full size-full wp-image-1231"
              alt="about-us-img"
              sizes="(max-width: 400px) 100vw, 400px"
              style={{
                maxWidth: "100%",
                height: "auto",
                position: "relative",
                zIndex: 1,
              }}
            />
          </div>
          <div
            className="elementor-element elementor-element-0899128 elementor-widget__width-initial elementor-absolute experience-counter-box elementor-widget elementor-widget-counter"
            data-id="0899128"
            data-element_type="widget"
            data-settings='{"_position":"absolute","ekit_we_effect_on":"none"}'
            data-widget_type="counter.default"
            style={{
              background:
                "linear-gradient(135deg, rgba(111, 243, 181, 0.15) 0%, rgba(240, 255, 108, 0.15) 100%)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              border: "1px solid rgba(111, 243, 181, 0.2)",
              borderRadius: "20px",
              padding: "20px 30px",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="elementor-counter">
              <div
                className="elementor-counter-title"
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  marginBottom: "5px",
                  opacity: 0.9,
                }}
              >
                Years Experience
              </div>
              <div className="elementor-counter-number-wrapper">
                <span
                  className="elementor-counter-number"
                  data-duration="2000"
                  data-to-value="8"
                  data-from-value="0"
                  data-delimiter=","
                  style={{
                    fontSize: "3rem",
                    fontWeight: "700",
                    background:
                      "linear-gradient(135deg, #6FF3B5 0%, #F0FF6C 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  7
                </span>{" "}
                <span
                  className="elementor-counter-number-suffix"
                  style={{
                    fontSize: "3rem",
                    fontWeight: "700",
                    background:
                      "linear-gradient(135deg, #6FF3B5 0%, #F0FF6C 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  +
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
