const Node = require('../model/node.model');
const fs = require('fs');
const NodeHelper = require('../model/node.helper');
const expect = require('chai').expect;

describe('This should work', () => {
    it('at least we hope it does', () => {
        const sourceJsonNodes = JSON.parse(fs.readFileSync('./model/nodes.mock.json', {
            encoding: 'utf-8'
        }));
        const result = NodeHelper.build(sourceJsonNodes);
        // assertations
        expect(result instanceof Array).to.be.true;
        expect(result).to.have.lengthOf(2);
        result.forEach(n => {
            if(result.id===1) {
                expect(r.childrens['c_2']).to.not.be.undefined;
                expect(r.childrens['c_2'].childrens['c_3']).to.not.be.undefined;
                expect(r.childrens['c_2'].childrens['c_3'].childrens['c_4']).to.not.be.undefined;
            }
        });
    });
});