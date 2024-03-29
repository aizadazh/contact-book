import React from "react";
import { shallow, mount } from "enzyme";
import { AddContact } from "../components/containers/AddContact";


function setup() {
    const props = {
        newContact: {
            name: "Aizada",
            address: "Bishkek",
            phone: "0552440028",
        },
        addContact: jest.fn() 
    }
    const wrapper = shallow(<AddContact {...props} />)
        return {
            props,
            wrapper
        }
}

describe("Testing AddContact component", () => {    
    it("renders correctly", () => {
        const { wrapper } = setup()
        expect(wrapper.find('.card-header').text()).toBe('Добавить контакт')        
        expect(wrapper.find('TextGroupInput')).toBeDefined()
    })
    it('should check something', ()=> {
        const { wrapper } = setup()        
        expect(wrapper.find('value')).toEqual({})
    })
   
})

describe("Testing setState", () => {
    it('expect to call something', ()=> {
        const wrapper = mount(<AddContact />);       
        wrapper.instance().setState = jest.fn();  
    })
})

