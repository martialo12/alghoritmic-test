// this model represent a simple node containing some infos
class Node {

    constructor(jsonValue) {
        this._id = jsonValue.id;
        this._value = jsonValue.value;
        this._childrens = {}; //this could be a list, using obj is pretty faster in searching nodes
        // we assert the jsonValue is correct, so
        if(jsonValue.childrens) {
            jsonValue.childrens.forEach(child => this.addChildren(new Node(child)));
        }
    }

    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }

    get value() {
        this._value;
    }
    set value(value) {
        this._value = value;
    }

    addChildren(children) {
        if(!children || !children instanceof Node){
            throw new Error('You adding something invalid, only instanciated Node are accepted');
        } else if(!!this._childrens[`c_${children.id}`]) {
            throw new Error(`Node with id c_${children.id} is present yet!`);
        }
        this._childrens[`c_${children.id}`] = children;
    }

    removeChildren(children) {
        if(!!children && children instanceof Node) {
            const val = this.childrens[children.id];
            delete this._childrens[children.id];
            return val;
        }
    }

    get childrens() {
        return JSON.parse(JSON.stringify(this._childrens));
    }
    get childrensAsList() {
        return Object.keys(this._childrens).map(key => this._childrens[key]);
    }

    equals(node) {
        return node instanceof Node && node!==undefined && node!==null && node.id===this.id; 
    }
}

module.exports = Node;