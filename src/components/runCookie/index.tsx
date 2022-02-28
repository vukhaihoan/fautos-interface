import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
export default function runCookie() {
    function handleClick() {
        axios.post("http://localhost:4000/").then((res) => {
            console.log(res);
        });
    }
    return (
        <div>
            <Button variant="contained" onClick={handleClick}>
                run Cookie
            </Button>
        </div>
    );
}
