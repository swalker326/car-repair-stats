import { Form } from "@remix-run/react";
import { Button } from "~/components/shadcn-components/ui/button";
import { UploadReceipt } from "./UploadReceipt";
import { VehicleSelector } from "~/components/VehicleSelector";

export default function RepairCreateRoute() {
	return (
		<div>
			<h2 className="text-xl">Repairs Create Route</h2>
			<Form>
				<VehicleSelector />
				<UploadReceipt />
				<Button type="submit">Add</Button>
			</Form>
		</div>
	);
}
