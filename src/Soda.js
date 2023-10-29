import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import img from "./static/coke-can.jpg";
import "./Soda.css";

function Soda() {
    const [loaded, setLoaded] = useState(false);
    const [imageData, setImageData] = useState(null);
    const canvasRef1 = useRef();
    const canvasRef2 = useRef();

    const [rotations, setRotations] = useState([null, null]);

    const radian = (n) => n * (Math.PI / 180);

    useEffect(() => {
        const interval = setInterval(() => {
            setRotations((r) => {
                r[0] = r[0] + radian(1);
                r[1] = r[0] + radian(1);
                return r;
            });
        });
    });
    useEffect(() => {
        if (loaded) {
            const canvas1 = canvasRef1.current;
            const canvas2 = canvasRef2.current;
            drawOncanvas(canvas1);
            drawOncanvas(canvas2);
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

    function drawOncanvas(canvas) {
        const context = canvas.getContext("2d");
        context.drawImage(imageData.element, 0, 0, 346, 217);
    }

    return (
        <>
            <div className="grid-menu-frame">
                <div className="canvas-center">
                    {imageData ? (
                        <canvas
                            className="canvas-frame"
                            width={window.innerWidth / 3 - 100}
                            height={window.innerHeight / 3 - 100}
                            ref={canvasRef1}
                        ></canvas>
                    ) : null}
                </div>
                <div className=" grid-flex">
                    <div className="grid-menu-background">
                        <h1> OMG SUGARRR </h1>
                        <Link className="grid-menu-item" to="/">
                            Go back
                        </Link>
                    </div>
                </div>
                <div className="canvas-center">
                    {imageData ? (
                        <canvas
                            className="canvas-frame"
                            width={window.innerWidth / 3 - 100}
                            height={window.innerHeight / 3 - 100}
                            ref={canvasRef2}
                        ></canvas>
                    ) : null}
                </div>
            </div>
        </>
    );
}

export default Soda;
