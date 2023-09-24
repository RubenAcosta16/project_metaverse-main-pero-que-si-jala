'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Metaversus" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia neque tempora earum dolore in, rerum magni, doloremque placeat similique maxime aperiam harum repellendus facere voluptate sit, enim tempore culpa sed.
        Consequuntur repellat nobis similique quasi nesciunt eius porro dolorem sint, ea, animi quo fugit laboriosam, saepe nihil quidem ducimus quisquam. Eveniet qui velit quibusdam voluptatem fugiat facere unde atque non.
        Necessitatibus tempore quidem natus autem atque repudiandae quis quod ullam ratione velit modi asperiores temporibus exercitationem iusto fugiat minus omnis qui doloribus itaque ipsum quam, veniam fugit suscipit! Laborum, delectus.
        Aliquid doloribus minus, sint ea similique commodi quo laborum blanditiis beatae sit assumenda veniam earum ullam quas eveniet ipsam? Minus quisquam blanditiis laboriosam architecto aut esse repellat laudantium voluptatum voluptate!
        Accusamus asperiores rerum delectus magnam natus illum nobis quae debitis itaque labore vel iste pariatur, cum porro dolorem inventore sed, vitae ullam libero deleniti magni blanditiis iure repudiandae! Quos, itaque.5d
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
