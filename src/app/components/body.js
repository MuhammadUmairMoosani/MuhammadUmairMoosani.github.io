import { AboutMe } from "./aboutMe";
import { Contact } from "./contact";
import { EducationAndWork } from "./educationAndWork";
import { Hello } from "./hello";
import { LanguagesAndTools } from "./languagesAndTools";
import { MyPortfolioMobile } from "./myPortfolioMobile";
import { MyPortfolioWeb } from "./myPortfolioWeb";
import { MySpecialization } from "./mySpecialization";

export const Body = () => {
    return (
        <div
            data-elementor-type="wp-page"
            data-elementor-id="14"
            className="elementor elementor-14"
        >
            <Hello />
            <MySpecialization />
            <AboutMe />
            <LanguagesAndTools />
            <MyPortfolioMobile />
            <MyPortfolioWeb />
            <EducationAndWork />
            <Contact />
        </div>
    );
};
