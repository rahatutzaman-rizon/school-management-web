import { motion } from 'framer-motion';

const AboutUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div 
      className="container mx-auto px-4 md:px-8 lg:px-16 py-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 
        className="text-3xl md:text-4xl font-bold text-navy-600 mb-8"
        variants={itemVariants}
      >
        ABOUT US
      </motion.h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <motion.div 
          className="lg:w-1/2"
          variants={itemVariants}
        >
          <motion.img 
            src="https://i.ibb.co/FWkWP9n/about.jpg" 
            alt="Reverie School Students" 
            className="rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        
        <motion.div 
          className="lg:w-1/2"
          variants={itemVariants}
        >
          <motion.h2 
            className="text-2xl md:text-3xl font-bold text-navy-600 mb-4"
            variants={itemVariants}
          >
            Reverie School is admitting students from Playgroup to Grade 7
          </motion.h2>
          
          <motion.p 
            className="mb-4"
            variants={itemVariants}
          >
            Reverie School follows the Pearson Edexcel curriculum and intends to deliver excellent educational programs in the following Key Learning Areas: English, Mathematics, Science, Technology, Global Citizenship, Creative Arts, Personal Development, Health and Physical Education as well as lessons in Quran, Islamic Studies and Arabic Language classes.
          </motion.p>
          
          <motion.p 
            className="mb-6"
            variants={itemVariants}
          >
            Here at Reverie School, we aim to help our precious children to think and act in ways that are truly inspiring.
          </motion.p>
          
          <motion.button 
            className="bg-amber-500 text-white px-6 py-2 rounded-full hover:bg-amber-600 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={itemVariants}
          >
            Know more about us
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutUs;