import React from 'react';

const Teaching = () => {
  return (
    <div className="p-8">
      {/* <h1 className="text-xl text-maincolor font-bold mb-4">Teaching</h1> */}
      <section className="mb-8">
        <h2 className="text-[19px] font-bold mb-2">Courses taught:</h2>
        <div className="mb-4">
          <h3 className="text-lg font-bold">
            The Environmental Economics of Developing Countries (Spring 2021 and 2022)
          </h3>
          <ul className="list-disc list-inside ml-5">
            <li>Sophomore tutorial at Harvard’s economics department.</li>
            <li>Led the entire course, including syllabus, assignments, and bi-weekly discussions.</li>
            <li>5/5 teaching ratings both semesters.</li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-bold">
            The Political Economy of Globalization (Fall 2020 and 2021)
          </h3>
          <ul className="list-disc list-inside ml-5">
            <li>Undergraduate General Education course at Harvard.</li>
            <li>Served as Teaching Fellow for Lawrence Summers and Robert Lawrence.</li>
            <li>Prepared and led two weekly discussion sections.</li>
          </ul>
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-lg font-bold mb-2">Teaching evaluations available upon request. Some quotes from the reports:</h2>
        <ul className="list-disc list-inside ml-5">
          <li className="mb-4">
            “Marcos’s patience and willingness to work with students after class showed me that he really cared about how his students learned the material and what they were thinking about. His overall demeanor helped generate excitement for the topic as well as emphasize the implications of the findings on overall economic policy or global environmental health. Truly one of the best TF teachers I’ve had while I am at Harvard.”
          </li>
          <li>
            “Marcos was an absolutely amazing instructor! He cultivated such an amazing classroom culture from the very beginning and was incredibly helpful in guiding discussions and asking thought-provoking questions. […] The writing assignments gave a step-up approach to learning how to write economically and the econometric lessons sprinkled in were incredibly helpful. His feedback for both the problem sets and the writing assignments was also incredibly helpful. In terms of the problem sets, he read every line of code and gave really great alternatives and shortcuts for conducting data analysis which really helped me in my final paper. The writing assignment feedback really balanced feedback on how well I was writing as well as feedback on the economic aspects of it as well. To top it all off he was incredibly available outside of class. He was an amazing TF!”
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Teaching;