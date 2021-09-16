import Tree from "../../assets/tree.png";
import useMeasure from "react-use-measure";
import { animated, useSpring, config } from "react-spring";
import { useEffect } from "react";
import { useScrollTop } from "@/hooks";

export const About = () => {

    const [ref, bounds] = useMeasure();

    const scrollTop = useScrollTop();

    const [animationTitle, setAnimationTitle] = useSpring(() => ({
        from: { opacity: 0 },
        config: config.slow,
        delay: 100
    }))

    const [animation, setAnimation] = useSpring(() => ({
        from: { opacity: 0, transform: "translateY(10%)" },
        config: config.slow,
        delay: 100
    }))

    useEffect(() => {
        const { top } = bounds;

        if (top > 0 && scrollTop > top - 400) {
            setAnimationTitle.start(
                { opacity: 1 }
            )

            setAnimation.start(
                { opacity: 1, transform: "translateY(0%)" }
            )
        }

    }, [bounds, scrollTop, setAnimation, setAnimationTitle]);


    return (

        <section className="about" ref={ref} >
            <h1>What is it?</h1>
            <animated.div style={animation} className="about-card">
                <div className="about-text">
                    <div className="text">
                        <p>As an organization, we are dedicated to boost confidence and visibility of reforestation projects by granting financial traceability and
                            transparency to the donation process, generating increased funding for those initiatives and reducing the excessive costs involved in
                            the organic certification process preceding taxation benefits. Using SAP technology embedded with carbon compensation and remote satellite
                            imaging, we reach our main goal: create a healthier climate and monitor reforestation progress. GreenSAP was born to empower everyone to
                            hold NGOs and be part of a greener future, while providing, at the same time,visibility and recognition to the process. Investing in a
                            greener future has never been so easy, track your progress by planting with us!</p>
                    </div>
                    <img src={Tree} alt="Tree Vector" />
                </div>
            </animated.div>
        </section>
    );
};
