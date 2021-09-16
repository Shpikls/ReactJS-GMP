import * as React from "react";
import LogoPng from './react.png';
import LogoSvg from './react.svg';

export const App = () => {
    return (
        <div>
            <h3>React App</h3>
            <a href={LogoPng} target="_blank"><img src={LogoPng} alt="react png logo"/></a>
            <a href={LogoSvg} target="_blank"><img src={LogoSvg} alt="react svg logo"/></a>
        </div>
    )
}