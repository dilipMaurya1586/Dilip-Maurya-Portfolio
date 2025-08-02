import { motion } from 'framer-motion';
import ExperienceCard from '../components/ExperienceCard';
import { experienceData } from '../constants/experience.jsx'

const Experience = ({ id, selectedColor, isDarkMode }) => {
    return (
        <section id={id} className="">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className={`absolute inset-0 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`} />
                <div
                    className="absolute top-0 left-0 w-full h-full opacity-5"
                    style={{
                        backgroundImage: `radial-gradient(${selectedColor.value} 1px, transparent 1px)`,
                        backgroundSize: '20px 20px'
                    }}
                />
            </div>

            <div className=" px-5 sm:px-6 lg:px-8 py-20 md:py-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="mx-auto max-w-4xl text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 ">
                        Work <span style={{ color: selectedColor.value }}>Experience</span>
                    </h2>

                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ staggerChildren: 0.1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 px-0 sm:px-5 ml-10 mr-10"
                >
                    {experienceData.map((experience, index) => (
                        <motion.div
                            key={experience.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: index * 0.1,
                                duration: 0.6,
                                type: 'spring',
                                stiffness: 100
                            }}
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            <ExperienceCard
                                experience={experience}
                                selectedColor={selectedColor}
                                isDarkMode={isDarkMode}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
