import {Count} from "./";
import { animated, config, useSpring, useTrail } from "react-spring";
import { RegisterButton } from "@/pages/auth";
import  {projectsService} from "@/services/projects.service";


export const Header = () => {

	const [animation] = useSpring(() => ({
		from: { value: 0, opacity: 0, transform: "translateY(-20%)" },
		delay: 500,
		opacity: 1,
		transform: "translateY(0%)",
		config: config.slow
	}));

	const titles = [{ num: 1334034, title: "planted trees", delay: 700 }, { num: 4590, title: "projects", delay: 1400 }, { num: 654, title: "investors", delay: 2100 }];

	const [countSpring] = useTrail(titles.length, () => ({
		from: { value: 0, opacity: 0, transform: "translateY(-0%)" },
		delay: 300,
		opacity: 1,
		transform: "translateY(30%)",
		config: config.stiff
	}));

	return (
		<header className={`masthead`}>
			<animated.div style={animation} >
				<h1 className="masthead-title">
					<span className="title1">PLANT TREES</span>
				</h1>

				<h1 className="masthead-title">
					<span className="title2">TRACK YOUR INVESTMENT </span>
				</h1>

				<div className="masthead-subtitle">
					<h2 className="masthead-description">
						As an organization our goal is to turn your donations into invesments.
					</h2>
					<h2 className="masthead-description">Through the powers of blockchain, satellite imaging and IoT, everyone can track their own donations from the wallet to the tree.
						Investing in a greener future has never been so easy.
					</h2>
				</div>

				<div className="masthead-button">
					<RegisterButton/>
				</div>

				<div className="counters">
					{countSpring && countSpring.map((element, index) => (
						<Count key={titles[index].title} animated={element} delay={titles[index].delay} number={titles[index].num} text={titles[index].title} />
					))
					}
				</div>
			</animated.div>
		</header>
	);
};