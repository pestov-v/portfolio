import { FC, useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';
import styles from './MermaidDiagram.module.scss';

interface MermaidDiagramProps {
  chart: string;
  caption?: string;
}

let mermaidInitialized = false;

export const MermaidDiagram: FC<MermaidDiagramProps> = ({ chart, caption }) => {
  const chartRef = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>('');

  useEffect(() => {
    const renderDiagram = async () => {
      if (!mermaidInitialized) {
        mermaid.initialize({
          startOnLoad: false,
          theme: 'default',
          securityLevel: 'loose',
          fontFamily: 'inherit',
        });
        mermaidInitialized = true;
      }

      try {
        const { svg } = await mermaid.render(`mermaid-${Math.random().toString(36).substr(2, 9)}`, chart);
        setSvg(svg);
      } catch (error) {
        console.error('Error rendering mermaid diagram:', error);
      }
    };

    renderDiagram();
  }, [chart]);

  return (
    <div className={styles.diagramContainer}>
      <div className={styles.diagram} ref={chartRef} dangerouslySetInnerHTML={{ __html: svg }} />
      {caption && <p className={styles.caption}>{caption}</p>}
    </div>
  );
};
