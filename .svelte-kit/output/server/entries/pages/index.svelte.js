import { c as create_ssr_component, e as escape, v as validate_component } from "../../chunks/index-f651982d.js";
const info = [
  {
    title: "Machine Learning",
    gendesc: "A basic machine learning projectI created in my data science 2010 class. This project provided an overview of machine learning, and the differences between various machine learning models",
    tabs: [
      {
        name: "Data Overview",
        img: "url",
        description: `
            Our dataset is a collection of samples of different wines, and the rating given to them by a professional wine taster in a range from zero to ten. The predictor variables given to us in our dataset were: Fixed Acidity, Volatile Acidity, Citric  Acid, Residual Sugar, Free Sugar Dioxide, Chlorides, Total Sulfur Dioxide, Density, pH, Sulphates, Alcohol`
      },
      {
        name: "Unfiltered Linear Model",
        img: "url2",
        data: {
          coefficients: [
            {
              intercept: {
                value: 14.21,
                pval: 0.5422
              }
            },
            {
              "fixed acidity": {
                value: 0.03356,
                pval: 0.23
              }
            },
            {
              "volatile acidity": {
                value: -1.207,
                pval: 2e-16
              }
            },
            {
              "citric acid": {
                value: 0.3306,
                pval: 0.041518
              }
            },
            {
              "residual sugar": {
                value: 6166e-6,
                pval: 0.715
              }
            },
            {
              chlorides: {
                value: -1.771,
                pval: 127e-6
              }
            },
            {
              "free sulfur dioxide": {
                value: 4714e-6,
                pval: 0.052831
              }
            },
            {
              "total sulfur dioxide": {
                value: -3252e-6,
                pval: 507e-7
              }
            },
            {
              density: {
                value: -10.28,
                pval: 0.665376
              }
            },
            {
              pH: {
                value: -0.3732,
                pval: 0.0774993
              }
            },
            {
              sulphates: {
                value: 0.9249,
                pval: 496e-15
              }
            },
            {
              alcohol: {
                value: 0.2833,
                pval: 2e-16
              }
            }
          ],
          rse: "0.6413, 1267 degrees of freedom"
        },
        description: `
                dfdsf
                
                `
      }
    ]
  }
];
var SampleProject_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".cont.svelte-hyv0q6{user-select:none;width:85%;margin-inline:auto;border:1px dotted;border-color:var(--col);margin-bottom:1em;padding:1em;border-radius:5px}")();
var Interest_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".interest.svelte-1bdsqe5.svelte-1bdsqe5{border:1px dashed var(--col);border-radius:10px;margin-top:5em;color:var(--col);background-color:var(--bgc) ;padding:1em}button.svelte-1bdsqe5.svelte-1bdsqe5{cursor:pointer}.interest.svelte-1bdsqe5>button.svelte-1bdsqe5{margin-inline:50%;margin-bottom:2.5em;background-color:green;padding:1em;border:1px solid var(--col);border-radius:5px}.tabviewer.svelte-1bdsqe5.svelte-1bdsqe5{display:flex;align-items:center;justify-content:space-between}.tabviewer.svelte-1bdsqe5>p.svelte-1bdsqe5{cursor:pointer;border:1px solid var(--col);border-radius:100%;padding:1em;aspect-ratio:1;transition:all .5s ease-in;user-select:none}.tabviewer.svelte-1bdsqe5>p.svelte-1bdsqe5:hover{background-color:lightblue}")();
const css = {
  code: ".interest.svelte-1bdsqe5.svelte-1bdsqe5{border:1px dashed var(--col);border-radius:10px;margin-top:5em;color:var(--col);background-color:var(--bgc) ;padding:1em}button.svelte-1bdsqe5.svelte-1bdsqe5{cursor:pointer}.interest.svelte-1bdsqe5>button.svelte-1bdsqe5{margin-inline:50%;margin-bottom:2.5em;background-color:green;padding:1em;border:1px solid var(--col);border-radius:5px}.tabviewer.svelte-1bdsqe5.svelte-1bdsqe5{display:flex;align-items:center;justify-content:space-between}.tabviewer.svelte-1bdsqe5>p.svelte-1bdsqe5{cursor:pointer;border:1px solid var(--col);border-radius:100%;padding:1em;aspect-ratio:1;transition:all .5s ease-in;user-select:none}.tabviewer.svelte-1bdsqe5>p.svelte-1bdsqe5:hover{background-color:lightblue}",
  map: null
};
const Interest = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { cat } = $$props;
  if ($$props.cat === void 0 && $$bindings.cat && cat !== void 0)
    $$bindings.cat(cat);
  $$result.css.add(css);
  return `

    <div class="${"interest svelte-1bdsqe5"}"><h1>${escape(cat.title)}</h1>
        <p>${escape(cat.gendesc)}</p>
        <button class="${"svelte-1bdsqe5"}">${escape("Expand")}</button>

${``}</div>





${``}`;
});
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Interest, "Interest").$$render($$result, { cat: info[0] }, {}, {})}`;
});
export { Routes as default };
