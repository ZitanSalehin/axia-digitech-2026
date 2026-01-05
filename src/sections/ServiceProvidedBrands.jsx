import { useTranslation } from 'react-i18next';

const ServiceProvidedBrands = () => {
	const { t } = useTranslation();

	const logoTexts = [
		t('services.digitalMarketing'),
		t('services.websiteDevelopment'),
		t('services.graphicsDesign'),
		t('services.socialMediaManagement'),
		// t('services.seo')
	];

	const duplicatedTexts = [...logoTexts, ...logoTexts];

	return (
		<div className="overflow-hidden">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Scrolling container */}
				<div className="slider text-gray-600 dark:text-gray-300">
					<div className="slide-track">
						{duplicatedTexts.map((text, index) => (
							<div className="slide" key={index}>
								<div className="text-logo">{text}</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServiceProvidedBrands;
