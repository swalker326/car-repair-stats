import { Button } from "~/components/shadcn-components/ui/button";

export function UploadReceipt() {
	return (
		<div>
			<input
				type="file"
				name="receipt"
				accept=".pdf, image/*"
				multiple
				className="hidden"
			/>
			<Button type="submit">Select File</Button>
		</div>
	);
}
