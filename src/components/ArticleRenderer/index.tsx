import React from 'react';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { xcode as theme } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { Container, Loading } from './styles';
import { ArticleRendererI } from '../../utils/types/components';

const ArticleRenderer: React.FC<ArticleRendererI> = ({
  article,
  isLoading,
}) => {
  return (
    <Container>
      {isLoading && <Loading spin={true} />}
      {article && (
        <ReactMarkdown
          components={{
            code({ node, style, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              return style?.display !== 'inline' && match ? (
                <SyntaxHighlighter
                  style={theme}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
            img({ node, alt, ...props }) {
              return (
                <>
                  <img {...props} />
                  <span className="alt-text">{alt}</span>
                </>
              );
            },
          }}
        >
          {article.content}
        </ReactMarkdown>
      )}
    </Container>
  );
};

export default ArticleRenderer;
