import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import NewChallenge from "./NewChallenge.jsx";

export default function Header() {
  const [isCreatingNewChallenge, setIsCreatingNewChallenge] = useState();

  function handleStartAddNewChallenge() {
    setIsCreatingNewChallenge(true);
  }

  function handleDone() {
    setIsCreatingNewChallenge(false);
  }

  return (
    <>
      <AnimatePresence>
        {/*모달을 관리하는 값에 일케 싸준다.
      그러면 이게 false 가 되었을때 즉시 없애지 않고 
      여기 안에 exit 가 있는지 확인후 false 로 만든다.*/}
        {isCreatingNewChallenge && <NewChallenge onDone={handleDone} />}
      </AnimatePresence>

      <header id="main-header">
        <h1>Your Challenges</h1>
        <motion.button
          onClick={handleStartAddNewChallenge}
          className="button"
          whileHover={{ scale: 1.1, backgroundColor:"#8b11f0" }} //후버 이벤트
          transition={{type:"spring", stiffness:500}}// transition은 모든 곳에 적용 animate, whileHover ...
        >
          Add Challenge
        </motion.button>
      </header>
    </>
  );
}
