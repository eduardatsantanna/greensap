import { animated, useSpring, config } from "react-spring";
import useMeasure from "react-use-measure";
import { prefixNum } from "@/helpers/prefixNum";

export const TotalCount = (props) => {
  const [ref, bounds] = useMeasure();
  const [numSpring] = useSpring(() => ({
		from: { value: 0 },
		value: props.number,
		delay: props.delay,
		config: config.slow
  }));

  const number = (value) => {
    var number = prefixNum(bounds.width, value);
    return number;
  }

  const division = (val1, val2) => (val2 === 0) ? 0 : val1/val2;
  
  return (
    <animated.div style={props.animated} ref={ref}>
      <div className="total">
        <div className="total-count">
          <animated.p className="global-counter">
            {numSpring.value.to(n => parseInt(n).toLocaleString("EN-us"))}
          </animated.p>
          <p className={`global-percent ${props.number > 0 ? "text-success" : "text-danger"}`}>
            {`+${props.simbol}${number(props.number)} (${(division(props.number, props.number) * 100).toFixed(0)}%)`}
          </p>
          <p className="global-title">{props.title}</p>
        </div>
      </div>
    </animated.div>
  );
};