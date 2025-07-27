import Image from 'next/image';

export const MyPortfolioWeb = () => {
    return (
        <div
            className="elementor-element elementor-element-94dbfa2 elementor-grid-1 elementor-grid-tablet-1 elementor-grid-mobile-1 awaiken-portfolio-gutter-30 elementor-widget elementor-widget-pixion-portfolio-grid"
            data-id="94dbfa2"
            data-element_type="widget"
            data-settings='{"grid_layout":"grid","columns":"1","columns_tablet":"1","columns_mobile":"1","ekit_we_effect_on":"none"}'
            data-widget_type="pixion-portfolio-grid.default"
        >
            <div className="elementor-widget-container">
                <div
                    id="awaiken-portfolio-94dbfa2"
                    className="awaiken-portfolio-widget"
                    data-config='{"rtl":false,"id":"94dbfa2","item_spacing":"30","show_filter_bar":""}'
                >
                    <div
                        className="awaiken-portfolio-grid elementor-grid awaiken-portfolio-layout-grid awaiken-portfolio-item-design-1"
                        style={{ display: 'grid', gridTemplateColumns: '1fr' }}
                    >
                        <article className="awaiken-portfolio-grid-item portfolio-filter-12 post-9352 awaiken-portfolio type-awaiken-portfolio status-publish has-post-thumbnail hentry awaiken-portfolio-category-web-development">
                            <div className="awaiken-portfolio-grid-item__wrapper">
                                <div className="awaiken-portfolio-grid-item__image">
                                    <Image
                                        loading="lazy"
                                        decoding="async"
                                        width="900"
                                        height="100"
                                        src="/syncora.png"
                                        className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                                        alt="portfolio-3"
                                        sizes="(max-width: 1200px) 100vw, 1200px"
                                    />
                                </div>
                                <div className="awaiken-portfolio-grid-item__content" style={{ marginRight: '10%', marginLeft: '10%' }}>
                                    <h4 className="elementor-heading-title elementor-size-default">
                                        <a href="https://syncora.com/" target="_blank" rel="noopener noreferrer">
                                            <span>Syncora</span>
                                        </a>
                                    </h4>
                                    <br />
                                    <h4 className="awaiken-portfolio-grid-item__title">
                                        Digital Insurance & Risk Management Platform (Next.js, NestJS, AWS)
                                    </h4>
                                    <div>
                                        <span className="awaiken-portfolio-grid-item__categories__category">
                                            I developed Syncora, a full‑stack web platform for digital insurance and risk management, leveraging Next.js for a fast and SEO‑friendly front‑end and NestJS for a secure, scalable back‑end. The project was fully containerized using Docker and deployed on AWS to ensure high availability and performance. My responsibilities included architecting the API layer, implementing dynamic dashboards, integrating secure authentication flows, and optimizing the platform for enterprise‑grade performance. This project strengthened my expertise in cloud‑native web development, microservices architecture, and end‑to‑end deployment pipelines.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </article>
                        <article className="awaiken-portfolio-grid-item portfolio-filter-12 post-9352 awaiken-portfolio type-awaiken-portfolio status-publish has-post-thumbnail hentry awaiken-portfolio-category-web-development">
                            <div className="awaiken-portfolio-grid-item__wrapper">
                                <div
                                    className="awaiken-portfolio-grid-item__image"
                                    style={{ display: 'flex', marginRight: '15%', marginLeft: '15%', marginTop: '15%' }} // wrap added for responsiveness
                                >
                                    <Image
                                        loading="lazy"
                                        decoding="async"
                                        width="300"
                                        height="100"
                                        src="/learningwithparents1.png"
                                        className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                                        alt="portfolio-1"
                                        sizes="(max-width: 1200px) 100vw, 1200px"
                                        style={{ flex: '1 1 0', maxWidth: '48%', }}
                                    />
                                    <Image
                                        loading="lazy"
                                        decoding="async"
                                        width="300"
                                        height="100"
                                        src="/learningwithparents2.png"
                                        className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                                        alt="portfolio-2"
                                        sizes="(max-width: 1200px) 100vw, 1200px"
                                        style={{ flex: '1 1 0', maxWidth: '48%' }}
                                    />
                                </div>

                                <div className="awaiken-portfolio-grid-item__content" style={{ marginRight: '10%', marginLeft: '10%' }}>
                                    <h4 className="elementor-heading-title elementor-size-default">
                                        <a href="https://learningwithparents.com/" target="_blank" rel="noopener noreferrer">
                                            <span>Learning with Parents</span>
                                        </a>
                                    </h4>
                                    <br />
                                    <h4 className="awaiken-portfolio-grid-item__title">
                                        Learning With Parents – Educational Engagement Platform (Next.js, Node.js)
                                    </h4>
                                    <div>
                                        <span className="awaiken-portfolio-grid-item__categories__category">
                                            I contributed to the development of Learning With Parents, an interactive web platform designed to help parents actively support their children’s learning at home. Built with Next.js for a performant and SEO‑friendly front‑end and Node.js for a scalable back‑end, the platform delivers personalized learning resources, activity tracking, and progress insights. My role included implementing dynamic content modules, optimizing user experience for parents and educators, and ensuring seamless integration with external education tools. This project strengthened my expertise in building user‑centric educational platforms with a focus on scalability, accessibility, and performance.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    );
}