import React from "react";
import './container.css';

export default function Leftcontainer(){
    return(<div className="container">
                <div className="container-sm">
                    <article>
                    <h1>
                        Hola :)
                    </h1>
                    </article>
                </div>
                <div className="container-sm">
                    <h1>I am Gandolf the Great...!!</h1>
                </div>
                <div className="container-sm" id="container-ms">
                    <div>
                        <h1>Notice</h1>
                        <div>
                            <ul>
                            <li>notice 1</li>
                            <li>notice 1</li>
                            <li>notice 1</li>
                            <li>notice 1</li>
                            <li>notice 1</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
    );
}