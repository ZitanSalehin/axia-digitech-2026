const ServiceProvidedBrands = () => {
	const logoTexts = [
		'Digital Marketing',
		'Website Development',
		'Graphics Design',
		'Social Media Management',
		'SEO Optimization',
		'Brand Strategy',
	];

	return (
		<section className="py-2 bg-slate-900 text-white overflow-hidden">
			<div className="flex animate-scroll whitespace-nowrap">
				{/* FIRST SET */}
				<div className="flex flex-shrink-0">
					{logoTexts.map((text, index) => (
						<div key={index} className="inline-flex items-center px-8 mx-4">
							<span className="text-xl font-medium">{text}</span>
						</div>
					))}
				</div>

				{/* SECOND SET (CLONE) */}
				<div className="flex flex-shrink-0">
					{logoTexts.map((text, index) => (
						<div
							key={`clone-${index}`}
							className="inline-flex items-center px-8 mx-4"
						>
							<span className="text-lg font-medium">{text}</span>
						</div>
					))}
				</div>
			</div>

			<style>{`
				@keyframes scroll {
					0% {
						transform: translateX(0);
					}
					100% {
						transform: translateX(-100%);
					}
				}

				.animate-scroll {
					animation: scroll 12s linear infinite;
					will-change: transform;
				}
			`}</style>
		</section>
	);
};

export default ServiceProvidedBrands;
