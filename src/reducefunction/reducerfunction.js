const mobileReducer=(currentState,action)=>{
    if(currentState){
        console.log(currentState,"currentState");
        console.log(action,"action")
        return {...currentState,userName:"jeginilokesh"}
    }
}