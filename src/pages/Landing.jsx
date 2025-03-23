import React from 'react';
import HeroSection from '../components/sections/HeroSectionLanding';
import InteractiveImage from '../components/sections/InteractiveImageLanding';
import FeaturesSection from '../components/sections/FeaturesSectionLanding';
import WorkSection from '../components/sections/WorkSectionLanding';
import ExploreCommunities from '../components/sections/ExploreSectionLanding';
import WhyBondBridge from '../components/sections/WhyBondLanding';
import TestimonialSection from '../components/sections/TestimonialSectionLanding';
import ActiveUsersSection from '../components/sections/ActiveUsersSectionLanding';
import SecondaryCTA from '../components/sections/SecondaryCTA';

const Landing = () => {
	return (
		<>
			<HeroSection />
			<InteractiveImage />
			<FeaturesSection />
			<WorkSection />
			<ExploreCommunities />
			<WhyBondBridge />
			<TestimonialSection />
			<ActiveUsersSection />
			<SecondaryCTA />
		</>
	);
};

export default Landing;
