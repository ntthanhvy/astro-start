export async function get({ params }: { params: { id: string } }) {
	const { id } = params;
	var base_api = import.meta.env.BASE_API_URL ?? "";
	console.log({ base_api });
	let url = new URL(`${base_api}/api/products/${id}`, base_api);
	var productRes = await fetch(url.toString());
	url.pathname = `/api/products/${id}/images`;
	var productImagesRes = await fetch(url.toString());

	var product = (await productRes.json()).data[0];
	var productImages = (await productImagesRes.json()).data;
	product = Object.assign(product, { images: productImages });

	return new Response(JSON.stringify(product), { status: 200 });
}
