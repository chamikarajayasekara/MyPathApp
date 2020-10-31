import React, { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Avatar from '@material-ui/core/Avatar';

const ScrollToTop = () => {
    const { y: pageYOffset } = useWindowScroll();
    const [visible, setVisiblity] = useState(false);

    useEffect(() => {
        if (pageYOffset >130) {
            setVisiblity(true);
        } else {
            setVisiblity(false);
        }
    }, [pageYOffset]);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    if (!visible) {
        return false;
    }

    return (
        <div
            className="scroll-to-top cursor-pointer text-center "
            style={{width:"50",height:"50"}}
            onClick={scrollToTop}
        >
            <Avatar className="bg-info float-right">
                <ExpandLessIcon/>
            </Avatar>
        </div>
    );
};

export default ScrollToTop;
