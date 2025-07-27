import Image from 'next/image';

export const Hello = () => {
    return (
        <div
            className="elementor-element elementor-element-52d5136 e-flex e-con-boxed e-con e-parent"
            data-id="52d5136"
            data-element_type="container"
            id="home"
        >
            <div className="e-con-inner">
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
                            className="elementor-element elementor-element-ad88893 section-title at-heading-animation at-animation-heading-none  elementor-widget elementor-widget-heading"
                            data-id="ad88893"
                            data-element_type="widget"
                            data-settings='{"_animation":"fadeInUp","ekit_we_effect_on":"none"}'
                            data-widget_type="heading.default"
                        >
                            <h2 className="elementor-heading-title elementor-size-default">
                                Your Vision, My Engineering Expertise
                            </h2>
                        </div>
                        <div
                            className="elementor-element elementor-element-ac22246 at-heading-animation at-animation-heading-none  elementor-widget elementor-widget-heading"
                            data-id="ac22246"
                            data-element_type="widget"
                            data-settings='{"_animation":"fadeInUp","_animation_delay":100,"ekit_we_effect_on":"none"}'
                            data-widget_type="heading.default"
                        >
                            <h1 className="elementor-heading-title elementor-size-default">
                                <span>I&apos;m Muhammad Umair Moosani,</span> Software Engineer
                                Crafting Reliable Solutions
                            </h1>
                        </div>
                        <div
                            className="elementor-element elementor-element-4ae798e  elementor-widget elementor-widget-text-editor"
                            data-id="4ae798e"
                            data-element_type="widget"
                            data-settings='{"_animation":"fadeInUp","_animation_delay":200,"ekit_we_effect_on":"none"}'
                            data-widget_type="text-editor.default"
                        >
                            <p>
                                Hi, I’m Umair, a passionate Software Engineer. I specialize in
                                building robust, scalable applications that prioritize both
                                performance and user experience, with a focus on creating
                                seamless digital solutions.
                            </p>
                        </div>
                    </div>
                    <div
                        className="elementor-element elementor-element-abb0875 e-con-full e-flex  e-con e-child"
                        data-id="abb0875"
                        data-element_type="container"
                        data-settings='{"animation":"fadeInUp","animation_delay":300}'
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
                            >
                                <span className="elementor-button-content-wrapper">
                                    <span className="elementor-button-text">Contact</span>
                                </span>
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
                    >
                        <Image
                            fetchPriority="high"
                            decoding="async"
                            width="634"
                            height="766"
                            src="/profile.png"
                            className="attachment-full size-full wp-image-906"
                            alt="hero-img"
                            sizes="(max-width: 634px) 100vw, 634px"
                        />
                    </div>
                    <div
                        className="elementor-element elementor-element-0899128 elementor-widget__width-initial elementor-absolute experience-counter-box elementor-widget elementor-widget-counter"
                        data-id="0899128"
                        data-element_type="widget"
                        data-settings='{"_position":"absolute","ekit_we_effect_on":"none"}'
                        data-widget_type="counter.default"
                    >
                        <div className="elementor-counter">
                            <div className="elementor-counter-title">Years Experience</div>
                            <div className="elementor-counter-number-wrapper">
                                <span
                                    className="elementor-counter-number"
                                    data-duration="2000"
                                    data-to-value="8"
                                    data-from-value="0"
                                    data-delimiter=","
                                >
                                    7
                                </span>{" "}
                                <span className="elementor-counter-number-suffix">+</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}