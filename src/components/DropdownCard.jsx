import React, { useId, useState } from 'react';

const DropdownCard = ({ heading, acceptance, titles = [], description }) => {
    const [isOpen, setIsOpen] = useState(false);
    const abstractId = useId();

    return (
        <article className="paper">
            <h3 className="paper-title">{heading}</h3>
            {acceptance && <p className="paper-acceptance">{acceptance}</p>}
            {(description || titles.length > 0) && (
                <div className="paper-actions">
                    <span aria-hidden="true">[</span>
                    {description && (
                        <button
                            type="button"
                            aria-expanded={isOpen}
                            aria-controls={abstractId}
                            aria-label={`Abstract: ${heading}`}
                            onClick={() => setIsOpen(open => !open)}
                        >
                            abstract
                        </button>
                    )}
                    {titles.map((title, index) => (
                        <React.Fragment key={`${title.link}-${index}`}>
                            {(description || index > 0) && <span className="paper-separator" aria-hidden="true">{' | '}</span>}
                            <a href={title.link} aria-label={`${title.text}: ${heading}`}>
                                {title.text}
                            </a>
                        </React.Fragment>
                    ))}
                    <span aria-hidden="true">]</span>
                </div>
            )}
            {description && (
                <div id={abstractId} className="paper-abstract" hidden={!isOpen}>
                    <p>{description}</p>
                </div>
            )}
        </article>
    );
};

export default DropdownCard;
