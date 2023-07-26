import {React, useState} from 'react';
import { Button, Container } from 'react-bootstrap';

export default function Imageshow() {
    const [show, setShow] = useState(true);
    const url = "https://images.pexels.com/photos/3293148/pexels-photo-3293148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

    const hanelChange = ()=>{
        setShow(!show);
    }

    return (
        <div style={{display : "flex", flexDirection : "column" ,justifyContent:"center"}}>
            {
                show ? (<Button onClick={hanelChange} variant='primary'>show image</Button>) : (<Button onClick={hanelChange} variant='danger'>hide image</Button>)
            }
            {
                !show ? (<Container style={{border : "2px solid black", marginTop : "5px", textAlign : "center"}}>
                            <img src={url} alt='not load'></img>
                        </Container>) : ""
            }
        </div>
    )
}