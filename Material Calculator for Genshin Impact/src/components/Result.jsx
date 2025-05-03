import React from 'react';
import talent_mats from './talent_mats';

function Result({ talent1, talent2, talent3 }) {
    const [greenCount, setGreenCount] = React.useState(0);
    const [blueCount, setBlueCount] = React.useState(0);
    const [purpleCount, setPurpleCount] = React.useState(0);
    const [shouldRender, setShouldRender] = React.useState(false);

    function calculateMaterials(talent1, talent2, talent3) {
        let green = 0;
        let blue = 0;
        let purple = 0;

        for (let i = 0; i < talent_mats.length; i++) {
            if (talent1[i]?.state) {
                green += talent_mats[i].green;
                blue += talent_mats[i].blue;
                purple += talent_mats[i].purple;
            }
            if (talent2[i]?.state) {
                green += talent_mats[i].green;
                blue += talent_mats[i].blue;
                purple += talent_mats[i].purple;
            }
            if (talent3[i]?.state) {
                green += talent_mats[i].green;
                blue += talent_mats[i].blue;
                purple += talent_mats[i].purple;
            }
        }

        setGreenCount(green);
        setBlueCount(blue);
        setPurpleCount(purple);
        setShouldRender(true);
    }

    return (
        <>
            <button className="calc-button" onClick={() => calculateMaterials(talent1, talent2, talent3)}>
                Calculate!
            </button>
            {shouldRender && (
                <div className="result-container">
                    <p>Green: {greenCount}</p>
                    <p>Blue: {blueCount}</p>
                    <p>Purple: {purpleCount}</p>
                </div>
            )}
        </>
    );
}

export default Result;