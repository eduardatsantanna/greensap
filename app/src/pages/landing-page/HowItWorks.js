import { cards } from "@/helpers";
import useMeasure from "react-use-measure";
import { animated, useSpring, useTrail, config, useSpringRef, useChain } from "react-spring";
import { useEffect, useState } from "react";
import { useScrollTop } from "@/hooks";
import { memo } from "react";

export const HowItWorks = memo(() => {

    const [open, setOpen] = useState(false);
    const [ref, bounds] = useMeasure();
    const scrollTop = useScrollTop();
    const animationRef = useSpringRef()
    const animation = useSpring({
        ref: animationRef,
        config: config.slow,
        delay: 100,
        opacity: open ? 1 : 0,
        transform: open ? "translateY(0%)" : "translateY(-10%)",

    })

    const cardRef = useSpringRef()
    const cardAnimation = useTrail(cards.length, {
        ref: cardRef,
        from: { opacity: 0, transform: "translateY(10%)" },
        opacity: open ? 1 : 0,
        transform: open ? "translateY(0%)" : "translateY(10%)",
        config: config.slow,
        delay: 100,

    });

    useChain([animationRef, cardRef], [0, 0.5]);



    useEffect(() => {
        const { top: topSection } = bounds;
        if (!open && topSection > 0 && scrollTop > topSection - 750) {
            setOpen(true);
        }

        return ()=>{

        }
    }, [bounds, open, scrollTop]);


    return (

        <div className="how">

            < h1 className="title"> How it works?</h1 >
            <animated.section  ref={ref} style={animation}>



                <div className="cards">

                    {cardAnimation && cardAnimation.map(({ ...style }, index, array) =>
                    (
                        <animated.div key={cards[index].step} style={style} className="card">

                            <h2>{cards[index].step}</h2>

                            <div className="card-content">
                                <div className="card-text">
                                    <p>
                                        {cards[index].description}
                                    </p>

                                </div>
                                <div className="card-image">
                                    <img src={cards[index].image} alt={cards[index].step}></img>
                                </div>
                            </div>

                        </animated.div>
                    )

                    )}
                </div>

            </animated.section>
        </div>

    );
});
