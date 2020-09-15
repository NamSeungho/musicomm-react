import React, { useRef, useState } from "react";
import styles from "../Player.module.scss";

interface IProgressParams {
    value: number,
    onChangeValue: (value: number) => void,
    classNames: {
        bar: string,
        activeBar: string
    }
}

export default function PlayerProgressBar ({ value, onChangeValue, classNames }: IProgressParams) {
    const [isMouseDown, setMouseDown] = useState(false);

    const elProgressBar = useRef(null);

    const changeValue = (e: React.MouseEvent) => {
        const elTarget = e.target as HTMLElement;
        const elAside = elProgressBar.current.parentNode.parentNode.parentNode;

        // volume 범위를 구한다.
        const progressBarActiveWidth = e.pageX - (elAside.offsetLeft + elTarget.offsetLeft);
        const progressBarWidth = elProgressBar.current.clientWidth;
        const changedValue = Math.floor(progressBarActiveWidth / progressBarWidth * 100);

        if (changedValue <= 0) {
            onChangeValue(0);
        } else {
            onChangeValue(changedValue);
        }
    };

    const handleMouseDownVolumeBar = (e: React.MouseEvent) => {
        setMouseDown(true);

        changeValue(e);
    };

    const handleMouseUpVolumeBar = () => {
        setMouseDown(false);
    };

    const handleMouseMoveVolumeBar = (e: React.MouseEvent) => {
        if (isMouseDown) {
            changeValue(e);
        }
    };

    return (
        <div className={styles[classNames.bar]}
             onMouseDown={handleMouseDownVolumeBar} onMouseUp={handleMouseUpVolumeBar}
             onMouseMove={handleMouseMoveVolumeBar} ref={elProgressBar}>
            <div className={styles[classNames.activeBar]} style={{ width: value + '%' }}/>
        </div>
    );
}