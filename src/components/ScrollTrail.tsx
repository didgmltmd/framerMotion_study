import {motion} from "framer-motion"
import { useState } from "react";

export default function ScrollTrail(){
    const buttonVariants = {
            // function으로 정의하는 모습
            hover: (clicked) => ({
            // 클릭된 버튼은 scale이 커지지 않는다.
            scale: clicked ? 1 : 1.5,
            }),
            pressed: {
                scale: 0.5,
            },
            rest: {
                scale: 0.5,
            },
        };

    const [clicked, setClicked] = useState(false);
    return(
            <motion.button
            initial="rest"
            whileHover="hover" // hover상태 일 때 hover animation발생
            whileTap="pressed" 
            variants={buttonVariants}
            custom={clicked} // custom을 통해 값을 전달 할 수 있다. 
            onClick={() => setClicked(true)}
            >
            Click me!
            </motion.button>
    )

}