
import React from 'react';

interface TableOfContentsProps {
  toc: { url: string; value: string }[];
}



const TableOfContents: React.FC<TableOfContentsProps> = ({ toc }) => {
  if (!toc) return null;

  return (
    <nav className="table-of-contents">
      <h3>Table des matières</h3>
      <ul>
        {toc.map((item, index) => (
          <li key={index}>
            <a href={`#${item.url}`}>{item.value}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
