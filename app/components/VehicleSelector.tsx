import React from "react";
import { Form } from "@remix-run/react";
import { z } from "zod";
import { Combobox } from "./Combobox";

export function VehicleSelector() {
	const carMakes = [
		{ value: "nissan", label: "Nissan" },
		{ value: "toyota", label: "Toyota" },
		{ value: "honda", label: "Honda" },
	];
	const [carYears, setCarYears] = React.useState([]);
	return (
		<div>
			<Form>
				<Combobox options={carMakes} />
			</Form>
		</div>
	);
}
