import React from 'react';
import { motion } from 'framer-motion';
import { AiOutlineArrowUp } from 'react-icons/ai';

const Scroll_top = () => (
    <div className="scroll_top">
        <a href='#home' rel="noreferrer">
            <motion.div
                whileInView={{ scale: [0, 1] }}
                whileHover={{ scale: [1, 0.90] }}
                transition={{ duration: 0.20 }}
                //className="scroll_top bx"
                >
                <AiOutlineArrowUp />
            </motion.div>
        </a>
    </div>
);

export default Scroll_top;

