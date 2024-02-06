
const useHistory = (initialState) => {
    // You'd need some state to manage
    const [state, setStateDefault] = React.useState([initialState]);
    const [currId, setCurrId] = React.useState(0);

    const setState = (newState) => {
        // How would you do it?
        setStateDefault((prev)=>{
            const newStates = [...prev.slice(0, currId + 1), newState];
            setCurrId(newStates.length - 1 );
            return newStates;
        })
    };

    const undo = () => {
        // How would you do it?
        if(currId > 0){
            setCurrId((prevId)=> prevId - 1);
        }
    
    };

    const redo = () => {
        // How would you do it?
        if(currId<state.length -1){
            setCurrId((prevId)=>prevId + 1);
        }
    };

    const clearHistory = () => {
        // How would you do it?
        setStateDefault([initialState]);
        setCurrId(0);
    };

    return { state:state[currId], setState, undo, redo, clearHistory };
};
