import React from 'react';

const Research = () => {
  return (
    <div className="p-8">
      {/* <h1 className="text-xl text-maincolor font-bold mb-4">Research</h1> */}
      <section className="mb-8">
        <h2 className="text-lg font-bold mb-2">Working Papers:</h2>
        <div className="mb-4">
          <a className="text-lg font-semibold underline hover:text-maincolor" href="https://hu-my.sharepoint.com/personal/mbarrozo_g_harvard_edu/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fmbarrozo%5Fg%5Fharvard%5Fedu%2FDocuments%2FResearch%2Fbarrozo%5Fjmp%2Epdf&parent=%2Fpersonal%2Fmbarrozo%5Fg%5Fharvard%5Fedu%2FDocuments%2FResearch&ga=1">Market Power and Carbon Emissions in the Amazon [JOB MARKET PAPER]</a>
          <p>
            The beef cattle sector is the leading driver of deforestation worldwide and a major source of carbon emissions.
            In this paper, I study how market power in the cattle supply chain shapes production and emissions in the Brazilian Amazon.
            Intermediaries exert buyer (monopsony) power over farmers, but market structure varies geographically.
            Using rich transaction-level data, I find that large intermediaries extract monopsony markdowns on farmer prices in core regions,
            but the deforestation frontier is largely competitive. I estimate a quantitative spatial model of the cattle supply chain and find that
            monopsony power distorts output downward. This affects farmers negatively, but the greatest sources of emissions along the frontier remain unaffected.
            In counterfactual analysis, policies that target the largest firms or exporters are ineffective because they miss deforestation hotspots and burden farmers
            that already face market power. However, a combination of targeted production subsidies and a carbon tax can reallocate production away from the frontier and
            reduce emissions by a third while keeping beef production constant.
          </p>
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-lg font-bold mb-2">In Progress:</h2>
        <div className="mb-4">
          <h3 className="text-lg font-semibold hover:text-maincolor">Fidelity in Zero-Deforestation Supply Chains (joint with M. Skidmore, H. Gibbs, L. Rausch)</h3>
          <p className="italic">[Draft coming soon!]</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold hover:text-maincolor">Property Rights and the Dynamics of Deforestation</h3>
        </div>
      </section>
    </div>
  );
};

export default Research;