/* eslint-disable react/prop-types */
import { useSpring, animated, useTransition } from "@react-spring/web";
import { createContext, useContext, useEffect } from "react";
import "./Popups.css";


const PopupsContext = createContext();

const Popups = ({ children, isOpen, onClose }) => {
    const handleEsc = (e) => {
        if (e.key === "Escape") {
            onClose();
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", handleEsc);
        return () => document.removeEventListener("keydown", handleEsc);
    }, []);

    const modalTransition = useTransition(isOpen, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 1 },
        config: {
            duration: 300,
        },
    });

    const springs = useSpring({
        opacity: isOpen ? 1 : 0,
        transform: isOpen ? "translateY(0)" : "translateY(-100%)",
        config: {
            duration: 300,
        },
    });

    return modalTransition(
        (styles, isOpen) =>
            isOpen && (
                <animated.div
                    onClick={onClose}
                    style={styles}
                    className="modal-overlay"
                >
                    <animated.div
                        style={springs}
                        className="modal-wrapper"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="modal-content">
                            <PopupsContext.Provider value={{ onClose }}>
                                {children}
                            </PopupsContext.Provider>
                        </div>
                    </animated.div>
                </animated.div>
            )
    );
};


const DismissButton = ({ children, className }) => {
    const { onClose } = useContext(PopupsContext);
    return (
        <button type="button" onClick={onClose} className={className}>
            {children}
        </button>
    );
};


const ModalHeader = ({ children }) => {
    return (
        <div className="modal-header">
            <div className="modal-title">{children}</div>
            <DismissButton className="btn-close">?</DismissButton>
        </div>
    );
};

const ModalBody = ({ children }) => {
    return <div className="modal-body">
        {children}
    </div>;
};

const ModalFooter = ({ children }) => {
    return <div className="modal-footer">
        {children}
    </div>;
}

Popups.Header = ModalHeader;
Popups.Body = ModalBody;
Popups.Footer = ModalFooter;
Popups.DismissButton = DismissButton;

export default Popups;
