import { createPortal } from "react-dom";
import { motion } from "framer-motion";

export default function Modal({ title, children, onClose }) {
  return createPortal(
    <>
      <div className="backdrop" onClick={onClose} />
      <motion.dialog
        open
        className="modal"
        variants={{
          hidden:{opacity:0, y:30},
          visible:{opacity:1, y:0}
        }}
        initial="hidden"
        animate='visible'
        exit='hidden' //끝날때
        //여기서 그냥 이렇게 하면 그냥 애니메이션이 적용이 안된다.
        // 모달을 컨트롤 하는 값으로 가서 그값을 AnimatePresence해야함
      >
        <h2>{title}</h2>
        {children}
      </motion.dialog>
    </>,
    document.getElementById("modal")
  );
}
