import { NavigateFunction } from "react-router-dom";


const redirectToGame = (navigate: NavigateFunction): void => navigate('/game', {
    replace: true
}) 


export default redirectToGame 