import { NavigateFunction } from "react-router-dom";


const redirectToGame = (navigate: NavigateFunction) => navigate('/game', {
    replace: true
}) 


export default redirectToGame 