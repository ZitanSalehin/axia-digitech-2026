import { useEffect, useRef, useState } from 'react';

// Animated Number Component
const AnimatedNumber = ({ value, suffix = '', duration = 1.5 }) => {
	const [count, setCount] = useState(0);
	const ref = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					let start = 0;
					const end = Number(value.toString().replace(/\D/g, '')) || 0;
					const stepTime = (duration * 1000) / end;
					const timer = setInterval(() => {
						start += 1;
						if (start > end) {
							clearInterval(timer);
							start = end;
						}
						setCount(start);
					}, stepTime);
					observer.disconnect();
				}
			},
			{ threshold: 0.5 }
		);

		if (ref.current) observer.observe(ref.current);
	}, [value, duration]);

	return (
		<span ref={ref}>
			{count}
			{suffix}
		</span>
	);
};
