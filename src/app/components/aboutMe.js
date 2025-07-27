import Image from 'next/image';

export const AboutMe = () => {
  return (
    <div
      className="elementor-element elementor-element-f70cdcc e-flex e-con-boxed e-con e-parent"
      data-id="f70cdcc"
      data-element_type="container"
      id="about"
    >
      <div className="e-con-inner">
        <div
          className="elementor-element elementor-element-662470f e-con-full e-flex e-con e-child"
          data-id="662470f"
          data-element_type="container"
        >
          <div
            className="elementor-element elementor-element-6e9019f e-con-full about-us-img e-flex e-con e-child"
            data-id="6e9019f"
            data-element_type="container"
          >
            <div
              className="elementor-element elementor-element-e54069d about-us-img at-image-animation at-animation-image-none at-none elementor-widget elementor-widget-image"
              data-id="e54069d"
              data-element_type="widget"
              data-settings='{"ekit_we_effect_on":"none"}'
              data-widget_type="image.default"
            >
              <Image
                loading="lazy"
                decoding="async"
                width="534"
                height="534"
                src="/profile_half.png"
                className="attachment-full size-full wp-image-1231"
                alt="about-us-img"
                sizes="(max-width: 534px) 100vw, 534px"
              />
            </div>
          </div>
        </div>
        <div
          className="elementor-element elementor-element-be1dfc6 e-con-full e-flex e-con e-child"
          data-id="be1dfc6"
          data-element_type="container"
        >
          <div
            className="elementor-element elementor-element-27d386f e-con-full section-heading e-flex e-con e-child"
            data-id="27d386f"
            data-element_type="container"
          >
            <div
              className="elementor-element elementor-element-ee53eee section-title at-heading-animation at-animation-heading-none  elementor-widget elementor-widget-heading"
              data-id="ee53eee"
              data-element_type="widget"
              data-settings='{"_animation":"fadeInUp","ekit_we_effect_on":"none"}'
              data-widget_type="heading.default"

            >
              <h3 className="elementor-heading-title elementor-size-default" >
                About Me
              </h3>
            </div>
            <div
              className="elementor-element elementor-element-cab2ac0 at-heading-animation at-animation-heading-none  elementor-widget elementor-widget-heading"
              data-id="cab2ac0"
              data-element_type="widget"
              data-settings='{"_animation":"fadeInUp","_animation_delay":100,"ekit_we_effect_on":"none"}'
              data-widget_type="heading.default"
            >
              <h2 className="elementor-heading-title elementor-size-default">
                Who is <span> Umair?</span>
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
                A <strong><a href="#about">Senior Software Engineer</a></strong> with
                <strong> <a href="#about">7+ years of experience</a> </strong> building scalable mobile and web applications
                using <strong>React Native, React.js, Next.js</strong>, and the <strong>MERN stack</strong>.
              </p>
              <p>
                I’ve delivered impactful solutions in industries like
                <strong> healthcare, finance, transportation, food delivery,</strong> and
                <strong> e-commerce</strong>. My expertise includes
                <strong> JavaScript, TypeScript, Node.js,</strong> and state management libraries like
                <strong> Redux</strong>.
              </p>
              <p>
                I hold a <strong>Bachelor’s degree in Computer Science</strong> from Virtual University
                and certifications in <strong>React</strong> and <strong>Frontend Development</strong> from
                Udacity and Codecademy.
              </p>
              <div
                className="elementor-element elementor-element-e62a178 at-heading-animation at-animation-heading-none elementor-widget elementor-widget-heading"
                data-id="e62a178"
                data-element_type="widget"
                data-settings='{"_animation":"fadeInUp","_animation_delay":200,"ekit_we_effect_on":"none"}'
                data-widget_type="heading.default"
              >
                <h2 className="elementor-heading-title elementor-size-default">
                  Core Tech Stack
                </h2>
              </div>
              <ul>
                <li><strong>Frontend:</strong> React Native, React.js, Next.js, Redux, Ant Design, Material UI</li>
                <li><strong>Backend:</strong> Node.js, Express.js, MongoDB, GraphQL, Apollo</li>
                <li><strong>Practices:</strong> TDD, Agile, Clean Architecture</li>
                <li><strong>Tools:</strong> GitHub, Cypress, Jest, REST APIs</li>
              </ul>

              <p style={{ marginTop: '20px' }}>
                I thrive in fast-paced, collaborative environments and am always eager to
                take on new challenges. Let’s connect and build something meaningful together.
              </p>
            </div>

          </div>
          <div
            className="elementor-element elementor-element-330ad55 e-con-full e-flex e-con e-child"
            data-id="330ad55"
            data-element_type="container"
            style={{ width: '30%' }}
          >
            <div
              className="elementor-element elementor-element-01a7034 about-experience-counter elementor-widget elementor-widget-counter"
              data-id="01a7034"
              data-element_type="widget"
              data-settings='{"ekit_we_effect_on":"none"}'
              data-widget_type="counter.default"
            >
              <div className="elementor-counter">
                <div className="elementor-counter-title">
                  Years Experience
                </div>
                <div className="elementor-counter-number-wrapper">
                  <span
                    className="elementor-counter-number"
                    data-duration="2000"
                    data-to-value="12"
                    data-from-value="0"
                    data-delimiter=","
                  >
                    7
                  </span>{' '}
                  <span className="elementor-counter-number-suffix">+</span>
                </div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-f161c38 elementor-align-center about-experience-box-list elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
              data-id="f161c38"
              data-element_type="widget"
              data-settings='{"ekit_we_effect_on":"none"}'
              data-widget_type="icon-list.default"
            >
              <ul className="elementor-icon-list-items">
                <li className="elementor-icon-list-item">
                  <span className="elementor-icon-list-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M17.6142 9.5992L15.3426 8.95004C14.3196 8.66163 13.3877 8.11551 12.6362 7.36395C11.8846 6.61239 11.3385 5.68053 11.0501 4.65754L10.4009 2.38587C10.3683 2.30639 10.3127 2.23841 10.2413 2.19057C10.17 2.14273 10.086 2.11719 10.0001 2.11719C9.91415 2.11719 9.83017 2.14273 9.75879 2.19057C9.68742 2.23841 9.63189 2.30639 9.59924 2.38587L8.95007 4.65754C8.66166 5.68053 8.11555 6.61239 7.36399 7.36395C6.61242 8.11551 5.68056 8.66163 4.65757 8.95004L2.3859 9.5992C2.29868 9.62396 2.22191 9.67649 2.16725 9.74883C2.11258 9.82117 2.08301 9.90937 2.08301 10C2.08301 10.0907 2.11258 10.1789 2.16725 10.2512C2.22191 10.3236 2.29868 10.3761 2.3859 10.4009L4.65757 11.05C5.68056 11.3384 6.61242 11.8846 7.36399 12.6361C8.11555 13.3877 8.66166 14.3195 8.95007 15.3425L9.59924 17.6142C9.62399 17.7014 9.67653 17.7782 9.74887 17.8329C9.82121 17.8875 9.9094 17.9171 10.0001 17.9171C10.0907 17.9171 10.1789 17.8875 10.2513 17.8329C10.3236 17.7782 10.3761 17.7014 10.4009 17.6142L11.0501 15.3425C11.3385 14.3195 11.8846 13.3877 12.6362 12.6361C13.3877 11.8846 14.3196 11.3384 15.3426 11.05L17.6142 10.4009C17.7015 10.3761 17.7782 10.3236 17.8329 10.2512C17.8876 10.1789 17.9171 10.0907 17.9171 10C17.9171 9.90937 17.8876 9.82117 17.8329 9.74883C17.7782 9.67649 17.7015 9.62396 17.6142 9.5992Z"
                        fill="url(#paint0_linear_362_3347)"
                      ></path>
                      <defs>
                        <lineargradient
                          id="paint0_linear_362_3347"
                          x1="17.9131"
                          y1="2.12784"
                          x2="-0.850705"
                          y2="7.32707"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#F0FF6C"></stop>
                          <stop offset="1" stopColor="#6BFDD9"></stop>
                        </lineargradient>
                      </defs>
                    </svg>
                  </span>{' '}
                  <span className="elementor-icon-list-text">
                    <a

                      href="https://drive.google.com/uc?export=download&id=1bKLlh-qQg4WALHBljASagUROncS4Pe00"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      My Resume
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
