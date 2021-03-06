export function avatar(size){
    return `
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="${size}px" height="${size}px" viewBox="0 0 199.999 200.001" enable-background="new 0 0 199.999 200.001"
	 xml:space="preserve">

<path id="face" d="M195.565,195.566c5.912,5.912-197.043,5.912-191.132,0c-5.911,5.912-5.911-197.044,0-191.133
	c-5.911-5.911,197.044-5.911,191.132,0C201.478-1.478,201.478,201.479,195.565,195.566z"/>
	<g id='eyes'>
		<path id="eye-r" fill="#389ED6" d="M97.333,94.52c0,2.843-2.305,5.147-5.147,5.147H54.48c-2.843,0-5.147-2.305-5.147-5.147V56.814
			c0-2.843,2.305-5.147,5.147-5.147h37.705c2.843,0,5.147,2.305,5.147,5.147V94.52z"/>
		<path id="eye-l" fill="#389ED6" d="M151.333,94.52c0,2.843-2.305,5.147-5.147,5.147H108.48c-2.843,0-5.147-2.305-5.147-5.147V56.814
			c0-2.843,2.305-5.147,5.147-5.147h37.705c2.843,0,5.147,2.305,5.147,5.147V94.52z"/>
	</g>
</svg>
`
}