import { useSearchParams } from "react-router-dom";
import CamperForm from "../camperForm/CamperForm";

const Features = () => {
    const [searchParams] = useSearchParams();
    return (
        <div>
            <h2>Vehicle details</h2>
            <CamperForm />
        </div>
    )
}

export default Features;