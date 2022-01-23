import {LitElement, html} from './lit.mjs';

class El extends LitElement {
	static properties = {
		prodigy: { type: Object },
		has_child: { type: Boolean },
	};

	render() {
		const el = this;
		if( !el.prodigy ) el.prodigy = { contents: 0 }

		const legacy = { ... el.prodigy };
		
		legacy.contents ++;

		const html_child = html`<my-child .prodigy=${legacy}></my-child>`;
		
		return html`			
<div style="margin-left:2em">
	A child: ${ el.prodigy.contents}
	<button @click=${() => { el.has_child = !el.has_child }}>cklick me</button>
	${ el.has_child ? html_child : null }
</div>
		`;
	}
}
customElements.define('my-child', El );
