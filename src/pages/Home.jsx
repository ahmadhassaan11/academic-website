import React from 'react';
import DropdownCard from '../components/DropdownCard';

const Home = () => {
    return (
        <div className="px-4 md:px-8">
            <section className="flex flex-col md:flex-row items-start md:items-center p-8 md:p-16">
                <div className="md:w-1/3 flex flex-col items-center md:items-start mb-8 md:mb-0">
                    <img
                        src="https://bpb-us-e1.wpmucdn.com/sites.harvard.edu/dist/6/480/files/2023/10/230919-0505-1-edited.jpg"
                        alt="Profile Pic"
                        className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover mb-4"
                    />
                    <h2 className="text-3xl font-bold mb-2">Marcos Barrozo</h2>
                    <h3 className="text-xl">Assistant Professor of Economics</h3>
                    <h3 className="text-xl">DePaul University</h3>
                </div>
                <div className="mb-4 md:w-2/3 md:ml-8 text-left md:text-left">
                    <p className="mb-4">
                        I use tools from international economics and industrial organization to study environmental issues in developing countries. I'm a recent graduate of the PhD in Public Policy at Harvard University. I will join DePaul University as an Assistant Professor this coming fall.
                    </p>
                    <p>
                        You can find my CV <a href="https://drive.google.com/file/d/1-vfnzMnCRgfHiwVLFw3jXGmV_L1NxePE/view?usp=sharing" className="underline hover:text-maincolor">here</a> and my job market paper <a href="https://drive.google.com/file/d/1-MYrwK9pabu8YBjLupf5FivzQCzevrwW/view?usp=sharing" className="underline hover:text-maincolor">here</a>.
                    </p>
                    <h2 className="pt-4 text-lg font-bold text-left">Research</h2>
                    <DropdownCard
                        heading="Market Power and Carbon Emissions in the Amazon"
                        titles={[{ text: 'paper', link: 'https://drive.google.com/file/d/1-MYrwK9pabu8YBjLupf5FivzQCzevrwW/view?usp=sharing' }]}
                        description="The beef cattle sector is the leading driver of deforestation worldwide and a major source of carbon emissions. In this paper, I study how market power in the cattle supply chain shapes production and emissions in the Brazilian Amazon. Intermediaries exert buyer (monopsony) power over farmers, but market structure varies geographically. Using rich transaction-level data, I find that large intermediaries extract monopsony markdowns on farmer prices in core regions, but the deforestation frontier is largely competitive. I estimate a quantitative spatial model of the cattle supply chain and find that monopsony power distorts output downward. This affects farmers negatively, but the greatest sources of emissions along the frontier remain unaffected. In counterfactual analysis, policies that target the largest firms or exporters are ineffective because they miss deforestation hotspots and burden farmers that already face market power. However, a combination of targeted production subsidies and a carbon tax can reallocate production away from the frontier and reduce emissions by a third while keeping beef production constant."
                    />
                    <DropdownCard
                        heading="Fidelity in Zero-Deforestation Supply Chains (joint with M. Skidmore, H. Gibbs, L. Rausch, accepted at Environmental Research Letters)"
                        titles={[{ text: 'paper', link: 'https://iopscience.iop.org/article/10.1088/1748-9326/ad7a0d' }]}
                        description="Supply chain governance (SCG) is an increasingly important approach to manage environmental protection and human rights in agricultural systems across the tropics. SCG helps relay the preferences of international consumers to producers and fills environmental policy gaps. Brazil's Zero-Deforestation Cattle Agreements (CA) are one of the longest-standing examples of SCG but shortcomings in implementation have reduced their conservation impacts. Chief among the reasons for their limited effect is that slaughterhouses monitor only the suppliers they buy from directly. This does not account for the complex supply network upstream of the direct sale, whose dynamics are also poorly understood.We provide the first comprehensive characterization of the strength and duration of cattle supply chain relationships based on animal transaction records from across the Brazilian Amazon. Whereas direct supply relationships (from ranchers to slaughterhouses) are relatively few and long-lasting, upstream relationships between ranchers are numerous and short-lived. Expanding monitoring to include these upstream suppliers increases the number of monitored transactions by an order of magnitude. However, 1% of the largest direct suppliers sell nearly half of cattle to CA slaughterhouses. More comprehensive upstream monitoring of only these prolific suppliers could greatly increase coverage at a fraction of the cost. While it may be challenging to monitor the entire supply network, significant advancements are within reach."
                    />
                    <DropdownCard
                        heading="Property Rights and the Dynamics of Deforestation"
                        titles={[]}
                        description="I study how land property rights shape deforestation in the Amazon. Property rights uncertainty has an ex-ante ambiguous effect on resource use, depending on how it changes the shares of costs and benefits internalized by agents. Using novel land tenure data and a rich panel of land use change, I find that deforestation is lower in contested areas. However, contested regions are also more sensitive to fluctuations in cattle prices, creating cycles of deforestation followed by abandonment few years thereafter. These decisions are consistent with a dynamic model of deforestation in which eviction risks decrease expected returns of encroachment on public and disputed private lands. With lower expected returns in the future, contested areas rely more on present returns to base their decisions, thus leading to a higher sensitivity to short-run prices. I then examine the historical record to study the origins of property conflicts today. In the late 19th/early 20th century, a resource boom in natural rubber production had a persistent impact on land tenure, shaping property rights long after the rubber economy collapsed. Today, regions more exposed to the historical rubber boom have more contested land."
                    />

                </div>
            </section>
        </div>
    );
};

export default Home;
