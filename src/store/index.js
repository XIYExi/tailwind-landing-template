import {makeObservable, observable} from "mobx";

class Blocks {
    isOpen = 'closed';

    constructor(isOpen = 'closed') {
        makeObservable(this, {
            isOpen: observable,
        })
        this.isOpen = isOpen;
    }

    toggleIsOpen(){
        this.isOpen = (this.isOpen === 'closed') ? 'open' : 'closed';
    }
}

const store = new Blocks();


export default store;
