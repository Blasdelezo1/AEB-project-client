import { useContext, useState, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import { AuthContext } from "./../Context/Auth.context";

const PrivateRoute = () => {
    const { user, isLoading } = useContext(AuthContext);
    const [showWarning, setShowWarning] = useState(false);

    useEffect(() => {
        if (!user && !isLoading) {
            setShowWarning(true);  // Muestra el mensaje de advertencia
            // Oculta el mensaje de advertencia después de 3 segundos
            const timer = setTimeout(() => {
                setShowWarning(false);
            }, 3000);
            return () => clearTimeout(timer); // Limpia el temporizador cuando se desmonta el componente
        }
    }, [user, isLoading]);

    if (isLoading) {
        return <Loader />;
    }

    if (!user) {
        return (
            <>
                {showWarning && <p className="warning-message">Es necesario hacer login para usar esta funcionalidad.</p>}
                <Navigate to="/" />
            </>
        );
    }

    return <Outlet />;
};

export default PrivateRoute;
