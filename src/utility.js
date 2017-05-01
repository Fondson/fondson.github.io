const utility = {
    listWithDash(items){
        let parsed = "";
        for (let i = 0; i < items.length; ++i){
            if (i){
                parsed += " - ";
            }
            parsed += items[i];
        }
        return parsed;
    }
}

export default utility