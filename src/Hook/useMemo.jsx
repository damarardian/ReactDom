import { render } from '@testing-library/react';
import React from 'react'
import { Fragment } from 'react';

const BelajaruseMemo = (props) => {
    let [menu, setMenu] = React.useState([])
    let DaftarMakanan = function(){
        return ["nasdang", "nasduk", "nasdeg"];
    };

    React.useMemo(() => {
        if (props.wilayah === "jabar") return setMenu([...menu,"petis"]);
        return setMenu(DaftarMakanan());
    }, [props.wilayah]);
    return (
        <Fragment>
            <h3>DaftarMakanan</h3>
            <ol>
                {menu.map((makanan) => (
                    <li>{makanan}</li>
                ))}
            </ol>
        </Fragment>
    );
};
export default BelajaruseMemo;;