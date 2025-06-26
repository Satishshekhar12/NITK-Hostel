import Representatives from "../components/people/PeopleHolder.jsx";
import axios from "../api/axios";
import { useEffect, useState } from "react";

function People() {
    const [wardens, setWardens] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/api/people");
                const data = response.data;
                const wardenData = data.filter((it) => it.role === "warden");
                setWardens(wardenData);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    return ( <>
        <Representatives wardens={wardens} loading={loading}/>
        {/* <HostelStaff/> */}
        {/* <SuperVisors/> */}
        </>
     );
}

export default People;