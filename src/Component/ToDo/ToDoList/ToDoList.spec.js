import React from "react";
import { mount } from "enzyme";
import ToDoList from "./ToDoList";
import ToDoFilter from "../ToDoFilter";
import Button from "../../Shared/Button";
import ToDoStatus from "../ToDoStatus";
import CompleteToDoStatus from "../CompleteToDoStatus";
import ToDoElements from "../ToDoElements";
import ToDoAction from "../ToDoAction";
describe(`ToDoList component testing`, () => {
    let wrapper = "";
    beforeAll(() => {
        const props  = {
            toDos: [{todo:"test",status:true,isCompleted:false}]
        }
        wrapper = mount(<ToDoList {...props} />);
    });
    it(`ToDoList component should be render without error`, () => {
        expect(wrapper).toBeTruthy();
    });
    it(`Testing ToDoFilter button class click on that button class should be there`, () => {
        //console.log(wrapper.debug());
        wrapper
        .find(ToDoFilter)
        .find(`button`)
        .at(1)
        .simulate(`click`);
        expect(
            wrapper
            .find(ToDoFilter)
            .find(`button`)
            .at(0)
            .hasClass(`statusButton`)            
        ).toEqual(true);
        expect(            
            wrapper
            .find(ToDoFilter)
            .find(`button`)
            .at(1)
            .hasClass(`isCompletedButton`)            
        ).toEqual(true);
        expect(
            wrapper
            .find(ToDoFilter)
            .find(`button`)
            .at(2)
            .hasClass(`statusButton`)
        ).toEqual(true);        
    });
    it(`Testing table th mock data`, () => {
        expect(
            wrapper
            .find(`table`)
            .find(`thead`)
            .find(`tr`)
            .find(`th`)
            .at(0)
            .text()
        ).toEqual(`Todo`);
        expect(
            wrapper
            .find(`table`)
            .find(`thead`)
            .find(`tr`)
            .find(`th`)
            .at(1)
            .text()
        ).toEqual(`Status`);
        expect(
            wrapper
            .find(`table`)
            .find(`thead`)
            .find(`tr`)
            .find(`th`)
            .at(2)
            .text()
        ).toEqual(`Is Completed`);
        expect(
            wrapper
            .find(`table`)
            .find(`thead`)
            .find(`tr`)
            .find(`th`)
            .at(3)
            .text()
        ).toEqual(`Action`);
    });
    it(`testing on click to do status button class should be change`, () => {        
        wrapper
        .find(ToDoStatus)
        .find(`button`)
        .simulate(`click`);
        expect(
            wrapper
            .find(ToDoStatus)
            .find(`button`)
            .hasClass(`declineButton`)
        ).toEqual(true);
        wrapper
        .setState({
            toDos: [{todo:"test",status:true,isCompleted:false}]
        });
        expect(
            wrapper
            .find(ToDoElements)            
        ).toHaveLength(1);
    });
    it(`testing on click to do complete status button class should be change`, () => {         
        wrapper
        .find(ToDoFilter)
        .find(`button`)
        .at(2)
        .simulate(`click`);
        expect(
            wrapper
            .find(ToDoFilter)
            .find(`button`)
            .at(2)
            .hasClass(`isCompletedButton`)
        ).toEqual(true);        
    });
    it(`testing all on click change button class should`, () => {
        wrapper
        .find(ToDoFilter)
        .find(`button`)
        .at(0)
        .simulate(`click`)
        expect(
            wrapper
            .find(ToDoFilter)
            .find(`button`)
            .at(0)
            .props()  
            .disabled          
        ).toEqual(true);
        expect(
            wrapper
            .find(ToDoFilter)
            .find(`button`)
            .at(0)
            .hasClass(`isCompletedButton`)
        ).toEqual(true);
    });
    it(`testing Active on click change button class should`, () => {
        wrapper
        .find(ToDoFilter)
        .find(`button`)
        .at(1)
        .simulate(`click`)
        expect(
            wrapper
            .find(ToDoFilter)
            .find(`button`)
            .at(1)
            .props()  
            .disabled          
        ).toEqual(true);
        expect(
            wrapper
            .find(ToDoFilter)
            .find(`button`)
            .at(1)
            .hasClass(`isCompletedButton`)
        ).toEqual(true);
    });
    it(`testing is completed on click change button class should`, () => {
        wrapper
        .find(ToDoFilter)
        .find(`button`)
        .at(2)
        .simulate(`click`)
        expect(
            wrapper
            .find(ToDoFilter)
            .find(`button`)
            .at(2)
            .props()  
            .disabled          
        ).toEqual(true);
        expect(
            wrapper
            .find(ToDoFilter)
            .find(`button`)
            .at(2)
            .hasClass(`isCompletedButton`)
        ).toEqual(true);
    });
    it(`SnapShot Testing`, () => {
        expect(wrapper).toMatchSnapshot();
    });
});