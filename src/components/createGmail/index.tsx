import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
export default function CreateGmail() {
    const [ProfileId, setProfileId] = useState<string>("");
    function handleClick() {
        axios
            .post("http://localhost:4000/", {
                ProfileId: ProfileId,
            })
            .then((res) => {
                console.log(res);
            });
    }
    return (
        <div>
            <Input type="text" value={ProfileId} onChange={(e) => setProfileId(e.target.value)} />
            <Button variant="contained" onClick={handleClick}>
                Create Gmail
            </Button>
        </div>
    );
}
