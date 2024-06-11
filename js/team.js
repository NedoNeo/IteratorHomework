export class Team {
    constructor() {
    }

    add(charecter) {
        this[charecter.name] = charecter;
    }

    [Symbol.iterator]() {
        let i =0;
        return {
            next: () => {
                if(i < Object.keys(this).length) {
                    return {
                        value: this[Object.keys(this)[i++]],
                        done: false
                    }
                } else {
                    return {
                        // value: this[Object.keys(this)[i]],
                        done: true
                    }
                }
            }
        }
    }
}