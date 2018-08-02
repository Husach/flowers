import {data} from "../data/Data";

export const getDescription = (id) => {
    return new Promise((resolve, reject) => {
        let item = data.find(itm => itm.id === id);
        if(item) return resolve(item);
        reject(new Error("not found"))
    })
};
