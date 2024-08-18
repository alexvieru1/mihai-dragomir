import styles from './style.module.scss';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { slide, scale } from '../../anim';
import { FC } from 'react';

interface IndexProps {
    data: any;
    isActive: boolean;
    setSelectedIndicator: (href: string) => void;
}

const Index: FC<IndexProps> = ({ data, isActive, setSelectedIndicator }) => {
    const { title, href, index } = data;

    return (
        <motion.div
            className={styles.link}
            onMouseEnter={() => { setSelectedIndicator(href); }}
            custom={index}
            variants={slide}
            initial="initial"
            animate="enter"
            exit="exit"
        >
            <motion.div
                variants={scale}
                animate={isActive ? "open" : "closed"}
                className={styles.indicator}
            ></motion.div>
            <Link href={href}>{title}</Link>
        </motion.div>
    );
};

export default Index;
