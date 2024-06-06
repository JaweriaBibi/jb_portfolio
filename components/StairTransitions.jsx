"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const StairTransitions = () => {
    const pathname = usePathname();
    return (
        <>
            <AnimatePresence mode="wait">
                <div key={pathname}>
                    <motion.div
                        className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
                        initial={{ opacity: 1 }}
                        animate={{
                            opacity: 0,
                            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
                        }}
                    />
                </div>
            </AnimatePresence>
        </>
    );
}

export default StairTransitions;
