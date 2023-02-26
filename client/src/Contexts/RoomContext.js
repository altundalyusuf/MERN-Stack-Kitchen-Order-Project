import { useState, createContext, useContext, useEffect } from "react";
import axios from "axios";

const RoomContext = createContext();


export const RoomContextProvider = ({ children }) => {

    // Order değişkeni şöyle {roomId: id, order: order} şeklinde bi obje olucak
    const [order, setOrder] = useState([]);
    const [flag, setFlag] = useState(false);


    // Veritabanındaki verileri alıp order state'ine ata
    const getDataFromMongo = () => {
        axios.get('http://localhost:8080/context')
            .then((response) => {
                const res = response.data;
                setOrder(res.data)
                console.log('Veritabanından tüm veriler çekildi!')
            })
            .catch(() => {
                console.log('hata var veritabanından tüm veriler çekilemedi')
            })
    }

    // önemli
    useEffect(() => {
        getDataFromMongo()
    }, [])


    const values = {
        order,
        setOrder,
        getDataFromMongo,
        flag,
        setFlag,
    }

    return (
        <RoomContext.Provider value={values}>
            {children}
        </RoomContext.Provider>
    )
}

export const useRoom = () => {
    const context = useContext(RoomContext);

    if (context === undefined) {
        throw new Error('useRoom must be used within a RoomContextProvider!');
    }

    return context;
};
