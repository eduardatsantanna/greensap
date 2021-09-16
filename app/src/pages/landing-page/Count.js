import "@/scss/components/Count.scss";
import { animated, useSpring, config } from "react-spring";

export const Count = ({ ...props }) => {

	const [numSpring] = useSpring(() => ({
		from: { value: 0 },
		value: props.number,
		delay: props.delay,
		config: config.slow
	}));

	return (
		<animated.div style={props.animated} className={`count ${props.open ? "open" : ""}`}>
			<animated.h3 className="count-number">
				{numSpring.value.to(n => parseInt(n).toLocaleString("EN-us"))}
			</animated.h3>
			<p className="count-text">{props.text}</p>
		</animated.div>
	);
};