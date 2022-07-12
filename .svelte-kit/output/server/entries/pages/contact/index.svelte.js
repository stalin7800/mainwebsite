import { c as create_ssr_component } from "../../../chunks/index-f651982d.js";
var index_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".cont.svelte-wakl6p.svelte-wakl6p{margin-top:2em}h1.svelte-wakl6p.svelte-wakl6p{text-align:center}form.svelte-wakl6p.svelte-wakl6p{width:85%;margin-inline:auto;border-radius:5px;border:1px solid var(--col)}form.svelte-wakl6p>.svelte-wakl6p{margin-left:10%}form.svelte-wakl6p>p.svelte-wakl6p{cursor:default}textarea.svelte-wakl6p.svelte-wakl6p{resize:none;width:80%}button.svelte-wakl6p.svelte-wakl6p{display:block;margin-top:2em;margin-bottom:2em;margin-inline:auto;background-color:deepskyblue;width:25%;height:3em}")();
const css = {
  code: ".cont.svelte-wakl6p.svelte-wakl6p{margin-top:2em}h1.svelte-wakl6p.svelte-wakl6p{text-align:center}form.svelte-wakl6p.svelte-wakl6p{width:85%;margin-inline:auto;border-radius:5px;border:1px solid var(--col)}form.svelte-wakl6p>.svelte-wakl6p{margin-left:10%}form.svelte-wakl6p>p.svelte-wakl6p{cursor:default}textarea.svelte-wakl6p.svelte-wakl6p{resize:none;width:80%}button.svelte-wakl6p.svelte-wakl6p{display:block;margin-top:2em;margin-bottom:2em;margin-inline:auto;background-color:deepskyblue;width:25%;height:3em}",
  map: null
};
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"cont svelte-wakl6p"}"><h1 class="${"svelte-wakl6p"}">Contact Form</h1>
    <form class="${"svelte-wakl6p"}"><p class="${"svelte-wakl6p"}">Your name</p>
        <input type="${"text"}" name="${"name"}" placeholder="${"Your name"}" class="${"svelte-wakl6p"}">
        <p class="${"svelte-wakl6p"}">Your message</p>
        <textarea name="${"message"}" id="${""}" rows="${"10"}" class="${"svelte-wakl6p"}"></textarea>
        <br class="${"svelte-wakl6p"}">
        <button type="${"submit"}" class="${"svelte-wakl6p"}">Submit</button></form>
</div>`;
});
export { Contact as default };
