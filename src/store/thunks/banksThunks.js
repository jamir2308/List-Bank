import { setBanks } from "../slices/banksSlice";


export const getBanks = () => async (dispach, state) => {
    try {
        const result = await fetch('https://dev.obtenmas.com/catom/api/challenge/banks', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors',
        });
        if (!result.ok) {
            throw new Error("Error al obtener la información")
        }
        const response = await result.json()
        dispach(setBanks(response));
    } catch (error) {
        dispach(setBanks(null));
    }
}