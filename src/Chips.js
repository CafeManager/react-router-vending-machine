import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import img from "./static/lays.jpg";
import "./VendingMachine.css";

function Chips() {
    const [loaded, setLoaded] = useState(false);
    const [imageData, setImageData] = useState(null);
    const [count, setCount] = useState(0);
    const [locations, setLocations] = useState([]);
    const canvasRef = useRef();

    function addBag() {
        setLocations((locations) => {
            const x = Math.random() * canvasRef.current.width;
            const y = Math.random() * canvasRef.current.height;

            return [...locations, [x, y]];
        });
        setCount((count) => count + 1);
    }
    useEffect(() => {
        if (loaded) {
            const canvas = canvasRef.current;
            const context = canvas.getContext("2d");
            const scale = 0.1;
            for (let location of locations) {
                context.drawImage(
                    imageData.element,
                    location[0],
                    location[1],
                    imageData.element.width * scale,
                    imageData.element.height * scale
                );
            }
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
    }, [loaded, count, locations, imageData]);
    return (
        <>
            {imageData ? (
                <canvas
                    className="canvas-frame canvas-absolute"
                    width={window.innerWidth - 100}
                    height={window.innerHeight - 100}
                    ref={canvasRef}
                ></canvas>
            ) : null}
            <div className="grid-menu-frame">
                <div className=""></div>
                <div className=" grid-flex">
                    <div className="grid-menu-background">
                        <h1>Bags eaten: {count} </h1>
                        <button onClick={addBag}> NOM </button>
                        <Link className="grid-menu-item" to="/">
                            Go back
                        </Link>
                    </div>
                </div>
                <div className=""></div>
            </div>
        </>
    );
}

export default Chips;
