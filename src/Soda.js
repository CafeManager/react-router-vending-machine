import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import img from "./static/coke-can.jpg";
import "./Soda.css";

function useInterval(callback, delay) {
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

function Soda() {
    const [loaded, setLoaded] = useState(false);
    const [imageData, setImageData] = useState(null);
    const canvasRef1 = useRef();
    const canvasRef2 = useRef();

    const [rotations, setRotations] = useState({ 0: 0, 1: 0 });

    const radian = (n) => {
        return n * (Math.PI / 180);
    };

    useInterval(() => {
        if (loaded) {
            const canvas1 = canvasRef1.current;
            const canvas2 = canvasRef2.current;
            setRotations((r) => {
                r[0] = r[0] + radian(1);
                r[1] = r[0] + radian(1);
                return r;
            });
            draw(canvas1, rotations[0]);
            draw(canvas2, rotations[1]);
        }
    }, 20);

    const rotationJSON = JSON.stringify(rotations);
    useEffect(() => {
        if (loaded) {
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
    }, [rotations, rotationJSON, loaded]);

    function draw(canvas, rotation) {
        const context = canvas.getContext("2d");
        const scale = 0.2;
        let x = canvas.width / 2;
        let y = canvas.height / 2;
        context.translate(x, y);

        context.rotate(rotation);
        context.drawImage(
            imageData.element,
            (-imageData.element.width * scale) / 2,
            (-imageData.element.height * scale) / 2,
            imageData.element.width * scale,
            imageData.element.height * scale
        );
        context.setTransform(1, 0, 0, 1, 0, 0);
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
