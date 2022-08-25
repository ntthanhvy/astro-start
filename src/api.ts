export type Product = {
	id: number;
	name: string;
	imageCode: string;
	price: number;
	description: string;
	images: ProductImage[];
};

export type ProductImage = {
	id: number;
	imageCode: string;
	productId: number;
};

function getOrigin(request: Request): string {
	return new URL(request.url).origin;
}

async function get<T>(
	incomingReq: Request,
	endpoint: string,
	cb: (response: Response) => Promise<T>
): Promise<T> {
	const response = await fetch(`${getOrigin(incomingReq)}${endpoint}`, {});
	if (!response.ok) {
		// TODO make this better...
		return {} as any;
	}
	return cb(response);
}

export async function getProduct(
	incomingReq: Request,
	id: number
): Promise<Product> {
	return get<Product>(incomingReq, `/api/products/${id}`, async (response) => {
		const product: Product = await response.json();
		return product;
	});
}
