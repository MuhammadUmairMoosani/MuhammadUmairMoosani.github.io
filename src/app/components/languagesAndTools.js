import Image from 'next/image';
import { skills } from '../content';

export const LanguagesAndTools = () => {
  return (
    <div
      className="elementor-element elementor-element-3953adf e-flex e-con-boxed e-con e-parent"
      data-id="3953adf"
      data-element_type="container"
    >
      <div className="e-con-inner">
        <div
          className="elementor-element elementor-element-aba61a8 e-con-full section-heading e-flex e-con e-child"
          data-id="aba61a8"
          data-element_type="container"
        >
          <div
            className="elementor-element elementor-element-5d45399 section-title at-heading-animation at-animation-heading-none  elementor-widget elementor-widget-heading"
            data-id="5d45399"
            data-element_type="widget"
            data-settings='{"_animation":"fadeInUp","ekit_we_effect_on":"none"}'
            data-widget_type="heading.default"
          >
            <h3 className="elementor-heading-title elementor-size-default">
              My Tools
            </h3>
          </div>
          <div
            className="elementor-element elementor-element-366aff8 at-heading-animation at-animation-heading-none  elementor-widget elementor-widget-heading"
            data-id="366aff8"
            data-element_type="widget"
            data-settings='{"_animation":"fadeInUp","_animation_delay":100,"ekit_we_effect_on":"none"}'
            data-widget_type="heading.default"
          >
            <h3 className="elementor-heading-title elementor-size-default">
              Architect, develop, deliver: <span>Languages & Tools</span>
            </h3>
          </div>
        </div>
        <div
          className="elementor-element elementor-element-f07aed3 e-con-full tool-item e-flex e-con e-child"
          data-id="f07aed3"
          data-element_type="container"
        >
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="elementor-element elementor-element-05cd358 e-con-full tool-item e-flex e-con e-child"
              data-id="05cd358"
              data-element_type="container"
              data-settings='{"background_background":"classic"}'
            >
              <div
                className="elementor-element elementor-element-b503c48 ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box"
                data-id="b503c48"
                data-element_type="widget"
                data-settings='{"ekit_we_effect_on":"none"}'
                data-widget_type="elementskit-icon-box.default"
              >
                <div className="ekit-wid-con">
                  <div className="elementskit-infobox text-left text-left icon-lef-right-aligin elementor-animation- media">
                    <div className="elementskit-box-header elementor-animation-">
                      <div className="elementskit-info-box-icon text-center">
                        <Image
                          src={skill.image}
                          alt={skill.name}
                          width={30}
                          height={30}
                        />
                      </div>
                    </div>
                    <div className="box-body">
                      <h3 className="elementskit-info-box-title">
                        {skill.name}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
