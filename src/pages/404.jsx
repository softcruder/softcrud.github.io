import React from "react";
import Image from "next/image";
import Button from "@/components/Buttons/Button";
import styles from "@/styles/404.module.css";

const NotFound = () => {
  return (
    <div className={styles["utility-container"]}>
        <div className={styles["utility-content"]}>
            <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 15 19" className={styles["utility-icons"]}>
                <g id="no-file" transform="translate(-421.5 55.5)">
                <g id="file" transform="translate(417 -58)">
                    <path id="Path_11" data-name="Path 11" d="M13,3l6,6V21H5V3Z" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                </g>
                <g id="Group_12" data-name="Group 12" transform="translate(0 -1)">
                    <path id="Path_12" data-name="Path 12" d="M12,8v5" transform="translate(417 -57)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                    <line id="Line_14" data-name="Line 14" transform="translate(429 -41)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                </g>
                </g>
            </svg>

            <h1 className={styles["utility-title"]}>Page Not Found</h1>
            <p className={styles["muted-text"]}>
                The page you are looking for might have been removed or is temporarily
                unavailable.
            </p>
            <Button href="/" text="Go Back Home" target="_self" />
        </div>
    </div>
  );
};

export default NotFound;
