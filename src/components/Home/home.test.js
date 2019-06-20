import React from 'react';
import { shallow, mount } from "enzyme";

import { Home } from '../Home';



describe("<Card/>", () => {

	it("Debe ejecutar render correctamente", () => {
		const component = shallow(<Home />)
		expect(component).toMatchSnapshot();
	})

	it("Debe crear cards", () => {

		const posts = [
			{ title: "prueba 1", image: "imagen prueba" },
			{ title: "prueba 2", image: "imagen prueba" },
			{ title: "prueba 3", image: "imagen prueba" }

		]
		const component = mount(<Home />);
		component.setState({ posts });
		expect(component.state().posts).toHaveLength(3)

	})

})
