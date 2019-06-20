import React from 'react';
import {shallow} from "enzyme";

import {Card} from '../Card';



describe("<Card/>", () => {

    it("Debe ejecutar render correctamente",() => {
        const component =  shallow(<Card title="prueba"/>)
        expect(component).toMatchSnapshot();
    })

    it("Debe pintar props",() => {
        const post = {
            
            title:"test",
            image:"image test"
        }

         const component =  shallow(<Card 
                title={post.title}
                image={post.image}
             />)
        
        expect(component.find(".card-title").text()).toBe(post.title);
   })

})
