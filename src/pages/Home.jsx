import React from 'react';
import DropdownCard from '../components/DropdownCard';

const Home = () => {
    return (
        <div className="px-4 md:px-8">
            <section className="flex flex-col md:flex-row items-center p-8 md:p-16">
                <div className="md:w-1/3 flex justify-center">
                    <img src="https://bpb-us-e1.wpmucdn.com/sites.harvard.edu/dist/6/480/files/2023/10/230919-0505-1-edited.jpg" alt="Profile" className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover" />
                </div>
                <div className="md:w-2/3 md:ml-8 text-center md:text-left mt-8 md:mt-0">
                    <h2 className="text-2xl font-bold mb-2">PhD Candidate, Public Policy (Economics Track)</h2>
                    <h3 className="text-xl mb-4">Harvard University</h3>
                    <p className="mb-4">
                        I use tools from international economics and industrial organization to study environmental issues in developing countries.
                        I am on the 2023-24 economics job market.
                    </p>
                    <p>
                        You can find my CV <a href="https://hu-my.sharepoint.com/personal/mbarrozo_g_harvard_edu/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fmbarrozo%5Fg%5Fharvard%5Fedu%2FDocuments%2FResearch%2Fbarrozo%5Fcv%2Epdf&parent=%2Fpersonal%2Fmbarrozo%5Fg%5Fharvard%5Fedu%2FDocuments%2FResearch&ga=1" className="underline hover:text-cyan-600">here</a> and my job market paper <a href="https://hu-my.sharepoint.com/personal/mbarrozo_g_harvard_edu/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fmbarrozo%5Fg%5Fharvard%5Fedu%2FDocuments%2FResearch%2Fbarrozo%5Fjmp%2Epdf&parent=%2Fpersonal%2Fmbarrozo%5Fg%5Fharvard%5Fedu%2FDocuments%2FResearch&ga=1" className="underline hover:text-cyan-600">here</a>.
                    </p>
                </div>
            </section>
            <DropdownCard
                title="Abstract"
                description="The beef cattle sector is the leading driver of deforestation worldwide and a major source of carbon emissions. In this paper, I study how market power in the cattle supply chain shapes production and emissions in the Brazilian Amazon. Intermediaries exert buyer (monopsony) power over farmers, but market structure varies geographically. Using rich transaction-level data, I find that large intermediaries extract monopsony markdowns on farmer prices in core regions, but the deforestation frontier is largely competitive. I estimate a quantitative spatial model of the cattle supply chain and find that monopsony power distorts output downward. This affects farmers negatively, but the greatest sources of emissions along the frontier remain unaffected. In counterfactual analysis, policies that target the largest firms or exporters are ineffective because they miss deforestation hotspots and burden farmers that already face market power. However, a combination of targeted production subsidies and a carbon tax can reallocate production away from the frontier and reduce emissions by a third while keeping beef production constant."
            />
        </div>
    );
};

export default Home;