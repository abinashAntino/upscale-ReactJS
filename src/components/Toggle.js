import {React, useState} from 'react';
import { Form } from 'react-bootstrap';

export default function Toggle() {
    const[toggle, setToggle] = useState(true);

    const handelToggle = ()=>{
        if(toggle)
        {
            console.log("toggle value", toggle);
            setToggle(false);
        }
        else
        {
            console.log("toggle value", toggle);
            setToggle(true);
        }
    }

    return (
        <div style={{ display : "flex", justifyContent : "center"}}>
            <Form>
                <Form.Check // prettier-ignore
                    type="switch"
                    checked = {toggle}
                    id="custom-switch"
                    label="on off switch"
                    onChange={handelToggle}
                />
            </Form>
        </div>
    )
}
