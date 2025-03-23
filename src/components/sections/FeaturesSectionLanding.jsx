import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import SectionHeading from '../SectionHeadingBranded';

const FeatureItem = ({
  image,
  title,
  highlightedText,
  badgeText,
  description,
  reverse,
  mobile,
  bg,
}) => {
  const controls = useAnimation();
  const featureRef = useRef(null);
  const isInView = useInView(featureRef, { once: false, amount: 0.5 });
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);
  
  const wiggleVariants = {
    hidden: { scale: 0.95, opacity: 0.8 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        bounce: 0.5,
        when: "beforeChildren",
      }
    }
  };
  
  const imageVariants = {
    hidden: { y: 0 },
    visible: {
      y: [0, -10, 0, 10, 0],
      transition: {
        delay: 0.3,
        duration: 1.5,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
      }
    }
  };

  return (
    <motion.div
      ref={featureRef}
      initial="hidden"
      animate={controls}
      variants={wiggleVariants}
      className={`flex flex-col-reverse md:flex-row items-center gap-12 md:gap-24 max-w-6xl mx-auto ${
        reverse ? 'md:flex-row-reverse' : ''
      } text-center md:text-justify`}
    >
      {/* Feature Image */}
      <div className='relative w-full max-w-sm md:max-w-md flex justify-center'>
        {/* Mobile Screenshot Frame */}
        {mobile ? (
          <div className='relative z-2 w-[180px] h-[350px] border-2 border-indigo-800 rounded-lg shadow-lg overflow-hidden'>
            {/* Inner Scrollable Image */}
            <motion.div 
              variants={imageVariants}
              className='h-full overflow-y-auto no-scrollbar'
            >
              <img src={image} alt={title} className='w-full h-auto' />
            </motion.div>
          </div>
        ) : (
          <motion.img
            variants={imageVariants}
            src={image}
            alt={title}
            className='w-full h-auto object-contain'
          />
        )}

        {/* Background Element (for floating effect) */}
        {bg && (
          <img
            src={bg}
            alt='Background'
            className='absolute -right-10 top-0 w-full h-auto opacity-80'
          />
        )}
      </div>

      {/* Feature Text */}
      <div className='w-full px-4'>
        <SectionHeading
          text={title}
          highlightedText={highlightedText}
          badgeText={badgeText}
          size='text-3xl'
        />
        <p className='text-gray-600 text-lg md:text-xl lg:text-2xl mt-4'>
          {description}
        </p>
      </div>
    </motion.div>
  );
};

// 🟣 Main Features Section
const FeaturesSection = () => {
  const features = [
    {
      image: '/screenshots/mobile-communities-scroll.png',
      bg: '/screenshots/mobile-communities-bg.png',
      title: 'Explore different',
      highlightedText: 'Communities',
      badgeText: 'BondChat',
      description:
        'Join BondBridge communities to connect anonymously, share ideas, and build genuine relationships effortlessly.',
      reverse: false,
      mobile: true,
    },
    {
      image: '/screenshots/anonimity-scroll.png',
      bg: '/screenshots/anonimity-bg.png',
      title: 'Anonymity',
      highlightedText: 'Guaranteed',
      badgeText: 'BondChat',
      description:
        'BondBridge ensures complete anonymity, allowing you to connect, share, and engage freely without identity concerns.',
      reverse: true,
      mobile: true,
    },
    {
      image: 'landing/web-mode.png',
      mobile: false,
      title: 'Available on',
      highlightedText: 'Web Mode',
      badgeText: 'BondChat',
      description:
        'Access BondBridge easily on web mode for seamless anonymous connections anywhere.',
      reverse: false,
    },
  ];

  return (
    <section className='py-16 bg-gray-50 flex flex-col items-center text-center px-6 md:px-20'>
      <h2 className='text-4xl font-bold text-gray-900 mb-12'>
        Features
        <span className='block w-16 h-2 bg-indigo-300 rounded-full mx-auto mt-2'></span>
      </h2>

      {/* Feature Items */}
      <div className='flex flex-col gap-24 md:gap-32 w-full mt-8'>
        {features.map((feature, index) => (
          <FeatureItem key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;