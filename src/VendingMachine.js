import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import img from "./static/vendingmachine-1.jpg";
import "./VendingMachine.css";

function VendingMachine() {
    const [loaded, setLoaded] = useState(false);
    const [imageData, setImageData] = useState(null);
    const canvasRef = useRef();

    useEffect(() => {
        if (loaded) {
            const canvas = canvasRef.current;
            const context = canvas.getContext("2d");
            context.drawImage(imageData.element, 0, 0);
        } else {
            const image = new Image();
            image.src = img;
            image.onload = () => {
                setImageData({
                    element: image,
                });
                setLoaded(true);
            };
        }
    }, [loaded]);
    return (
        <>
            {imageData ? (
                <canvas
                    className="canvas-frame"
                    width={window.innerWidth - 100}
                    height={window.innerHeight - 100}
                    ref={canvasRef}
                ></canvas>
            ) : null}
            <div className="grid-menu-frame">
                <div className="grid-menu-background">
                    <span className="grid-menu-item">
                        Hello. I am a vending machine. What would you like?{" "}
                    </span>
                </div>
                <div className="">
                    <span> </span>
                </div>
                <div className="grid-menu-background">
                    <Link className="grid-menu-item" to="/soda">
                        Soda
                    </Link>
                    <Link className="grid-menu-item" to="/chips">
                        Chips
                    </Link>
                    <Link className="grid-menu-item" to="/sardines">
                        Fresh Sardines
                    </Link>
                </div>
            </div>
        </>
    );
}

export default VendingMachine;
