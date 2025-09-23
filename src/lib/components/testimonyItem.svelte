<script>
	const { testimony, signature } = $props();
</script>

<div class="flex w-full flex-col justify-center rounded-lg p-4 text-justify align-middle">
	<span>"</span>
	<p class="p">{testimony.S}</p>
	<span>"</span>
	<p class="p">{signature.S}</p>
</div>

<style>
	span {
		position: relative;
		height: 20px;
		z-index: 10000;
		color: #fff469;
		font-size: 2.5em;
		font-family: 'akzidenz';
		margin: 0px 8px;
	}
	span:first-child {
		transform: rotateZ(-17deg) translateY(20px);
		align-self: flex-start;
		top: -30px;
		left: -15px;
	}
	span:nth-child(3) {
		transform: rotateZ(17deg) translateY(0px);
		align-self: flex-end;
		top: -10px;
	}
	p {
		text-align: center;
		font-family: 'bukhari';
	}
	p:nth-child(4) {
		margin-right: 20px;
		font-size: 1.5em;
		font-family: 'akzidenz';
		align-self: flex-end;
		text-align: right;
	}

	@media only screen and (min-width: 480px) {
	}

	@media only screen and (min-width: 768px) {
	}
	@media only screen and (min-width: 1024px) {
	}
	@media only screen and (min-width: 1280px) {
	}
</style>
