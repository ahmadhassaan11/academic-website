import React from 'react';
import DropdownCard from '../components/DropdownCard';

const Research = () => {
  return (
    <div className="p-8">
      {/* <h1 className="text-xl text-maincolor font-bold mb-4">Research</h1> */}
      <section className="mb-8">
        <h2 className="text-lg font-bold mb-2">Working Papers:</h2>
        <div className="mb-4">
          <DropdownCard
            heading="Market Power and Carbon Emissions in the Amazon"
            titles={[{ text: 'paper', link: 'https://hu-my.sharepoint.com/personal/mbarrozo_g_harvard_edu/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fmbarrozo%5Fg%5Fharvard%5Fedu%2FDocuments%2FResearch%2Fbarrozo%5Fjmp%2Epdf&parent=%2Fpersonal%2Fmbarrozo%5Fg%5Fharvard%5Fedu%2FDocuments%2FResearch&ga=1' }]}
            description="The beef cattle sector is the leading driver of deforestation worldwide and a major source of carbon emissions. In this paper, I study how market power in the cattle supply chain shapes production and emissions in the Brazilian Amazon. Intermediaries exert buyer (monopsony) power over farmers, but market structure varies geographically. Using rich transaction-level data, I find that large intermediaries extract monopsony markdowns on farmer prices in core regions, but the deforestation frontier is largely competitive. I estimate a quantitative spatial model of the cattle supply chain and find that monopsony power distorts output downward. This affects farmers negatively, but the greatest sources of emissions along the frontier remain unaffected. In counterfactual analysis, policies that target the largest firms or exporters are ineffective because they miss deforestation hotspots and burden farmers that already face market power. However, a combination of targeted production subsidies and a carbon tax can reallocate production away from the frontier and reduce emissions by a third while keeping beef production constant."
          />
          <DropdownCard
            heading="Property Rights and the Dynamics of Deforestation"
            titles={[{ text: 'paper', link: '/research' }]}
            description="The beef cattle sector is the leading driver of deforestation worldwide and a major source of carbon emissions. In this paper, I study how market power in the cattle supply chain shapes production and emissions in the Brazilian Amazon. Intermediaries exert buyer (monopsony) power over farmers, but market structure varies geographically. Using rich transaction-level data, I find that large intermediaries extract monopsony markdowns on farmer prices in core regions, but the deforestation frontier is largely competitive. I estimate a quantitative spatial model of the cattle supply chain and find that monopsony power distorts output downward. This affects farmers negatively, but the greatest sources of emissions along the frontier remain unaffected. In counterfactual analysis, policies that target the largest firms or exporters are ineffective because they miss deforestation hotspots and burden farmers that already face market power. However, a combination of targeted production subsidies and a carbon tax can reallocate production away from the frontier and reduce emissions by a third while keeping beef production constant."
          />

        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-lg font-bold mb-2">In Progress:</h2>
        <DropdownCard
          heading="Fidelity in Zero-Deforestation Supply Chains (joint with M. Skidmore, H. Gibbs, L. Rausch)"
          titles={[{ text: 'paper', link: '/research' }]}
          description="Draft coming soon!"
        />
        <DropdownCard
          heading="Property Rights and the Dynamics of Deforestation"
          titles={[{ text: 'paper', link: '/research' }]}
          description="Draft coming soon!"
        />
      </section>
    </div>
  );
};

export default Research;