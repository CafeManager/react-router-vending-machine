import { Link } from "react-router-dom";
import img from "./static/sardines.gif";
import "./Sardines.css";

function Sardines() {
    return (
        <>
            <img
                className="absolute-sardines"
                src={img}
                alt="a pack of sardines swimming"
            />
            <div className="grid-menu-frame">
                <div className=""></div>
                <div className=" grid-flex">
                    <div className="grid-menu-background">
                        <h1>
                            YOU DON'T EAT THE SARDINES. THE SARDINES, THEY EAT
                            YOU.
                        </h1>

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

export default Sardines;
