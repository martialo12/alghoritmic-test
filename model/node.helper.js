const Node = require('./node.model');

class NodeHelper {
    constructor() {
        throw new Error('You shall not instantiate this, Helper is static');
    }
    static build(jsonNodes) {
        /**
         * Given a tree of Nodes as json build objects in correct order.
         * NOTE: we know that, look at nodes.mock.json, the list in json format
         * could contains a "parent" property. It means the node you are building
         * has to be attached as children of Node n, where n.id===jsonNode.id
         */
        var nodes = []
        for (var j = 0; j < jsonNodes.length; j++){

            var node = new Node(jsonNodes[j]);
            if (jsonNodes[j].parent){
                var child = jsonNodes.find(c => c.parent === jsonNodes[j].parent);
                node.addChildren(new Node(child))
            }
            
            if (!jsonNodes[j].parent){
                nodes.push(node);
            }
            
        }
        
        return nodes
    }
}

module.exports = NodeHelper;