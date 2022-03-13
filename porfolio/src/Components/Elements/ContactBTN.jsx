import { motion } from "framer-motion";

const ContactBTN = ({ addClass }) => {
  return (
    <motion.div
      href="mailto:totogalha@gmail.com"
      className={addClass}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      Contact me
    </motion.div>
  );
};

export default ContactBTN;
