import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const exitAnimation = `
        ২. Exit: অ্যানিমেশন সহ এলিমেন্ট মুছে ফেলা
            exit:
            কোনো কম্পোনেন্ট DOM থেকে সরানোর সময় এটি কিভাবে অ্যানিমেশন করবে তা সংজ্ঞায়িত করে।

            উদাহরণ:
            React-এর AnimatePresence দিয়ে এটি কাজ করে।

`;

const styleDiv = {    width: "100px",
    height: "100px",
    backgroundColor: "tomato",
    margin: "20px auto",}


const boxVariants = {
    hidden: { opacity: 0, x: -100,y:0 },
    visible: { opacity: 1, x: 300 },
    exit: { opacity: 0, x: 200 },
  };


const SimpleAnimation = () => {

    const [show, setShow] = useState(true);

    const [isExpanded,setIsExpanded]=useState(false)
  return (
    <>
      <motion.div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "blue",

          borderRadius: "10px",
        }}
        initial={{ opacity: 0, x: 0, y: -50 }} // Starting state
        animate={{ opacity: 1, x: 0, y:5}} // Animated state
        transition={{ duration: 3 }} // Animation duration
      />

      <p style={{marginTop:"15px"}}>{exitAnimation}</p>
      <button onClick={() => setShow(!show)}>Toggle Box</button>
      <AnimatePresence>
        {show && (
          <motion.div
            key="box"
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: "blue",
              margin: "20px auto",
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5 }}
          />
        )}
      </AnimatePresence>


      <p>
        ৩. Transition: টাইমিং ও কাস্টমাইজেশন
transition প্রপার্টি অ্যানিমেশনের গতি এবং স্টাইল নিয়ন্ত্রণ করে।

প্রধান প্যারামিটার:
duration: অ্যানিমেশন সম্পূর্ণ করতে যে সময় লাগবে।
ease: অ্যানিমেশনের ইজিং টাইপ (যেমন easeIn, easeOut, easeInOut, ইত্যাদি)।
delay: অ্যানিমেশন শুরু হওয়ার আগে যে সময় অপেক্ষা করবে।
type: অ্যানিমেশনের ধরণ।
tween (ডিফল্ট): লিনিয়ার ট্রানজিশন।
spring: স্প্রিং ফিজিক্স ব্যবহার করে।</p>

<motion.div

style={{
    width: "100px",
    height: "100px",
    backgroundColor: "tomato",
    margin: "20px auto",
  }}
  initial={{ y: -100 }}
  animate={{ y: 0 }}
  transition={{
    type: "spring",   // স্প্রিং ফিজিক্স
    stiffness: 50,    // স্প্রিং কতো শক্তিশালী হবে
    damping: 10,      // স্প্রিংয়ের কাঁপুনি কমানো
  }}
/>


<h1>Variants in motion </h1>



<motion.div
  style={styleDiv}
  variants={boxVariants}
  initial="hidden"
  animate="visible"
  exit="exit"
  transition={{ duration: 1 }}
/>

<h1>MouseHover in Motion </h1>

<motion.div
  style={{ width: "100px", height: "100px", backgroundColor: "purple" }}
  whileHover={{ scale: 1.2, rotate: 90 }}
/>

<h1>Mouse Tab (Click or Focus)</h1>

<motion.div
  style={{ width: "100px", height: "100px", backgroundColor: "green" }}
  whileTap={{ scale: 0.8, opacity: 0.7 }}
/>

<h1>Drag Animation </h1>

<motion.div
  drag
  dragConstraints={{ top: -50, left: -50, right: 50, bottom: 50 }}
  style={{
    width: "100px",
    height: "100px",
    backgroundColor: "orange",
    borderRadius: "10px",
  }}
/>

<h1>৬. Keyframes: বিস্তারিত এনিমেশন</h1>
<motion.div
  style={{ width: "100px", height: "100px", backgroundColor: "red" }}
  animate={{
    scale: [1, 1.5, 1, 2, 1], // একাধিক স্টেট
    rotate: [0, 90, -90, 180, 0], // রোটেশন
  }}
  transition={{
    duration: 2,
    ease: "easeInOut",
  }}
/>

<h1>৭. Layout Animations
Dynamic Layout Changes:
যখন কোনো এলিমেন্টের আকার বা অবস্থান পরিবর্তিত হয়, তখন এটি স্মুথ অ্যানিমেট করে।</h1>


<motion.div
  layout
  style={{
    width: isExpanded ? "300px" : "100px",
    height: "100px",
    backgroundColor: "lightblue",
  }}
  onClick={() => setIsExpanded(!isExpanded)}
/>




    </>
  );
};

export default SimpleAnimation;
