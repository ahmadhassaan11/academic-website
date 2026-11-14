import React from 'react';

const Teaching = () => {
  return (
    <section id="teaching" className="content-section" aria-labelledby="teaching-heading" tabIndex={-1}>
        <h2 id="teaching-heading" className="section-heading">Teaching</h2>
        {/* eslint-disable-next-line jsx-a11y/no-redundant-roles -- Preserve Safari/VoiceOver list semantics when list markers are hidden. */}
        <ul className="course-list" role="list">
          <li>Environmental Economics (DePaul, 2026-)</li>
          <li>Empirical Industrial Organization (DePaul MS, 2025-)</li>
          <li>Principles of Microeconomics (DePaul, 2024–)</li>
          <li>Environmental Economics in the Developing World (Harvard, 2021 and 2022)</li>
          <li>Political Economy of Globalization (Teaching Fellow at Harvard, 2020 and 2021)</li>
        </ul>
    </section>
  );
};

export default Teaching;
