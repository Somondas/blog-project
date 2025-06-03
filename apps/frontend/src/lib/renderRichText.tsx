// ! This is just a quick fix for the rich text issues, pasted from ChatGPT, but there should be better ways to render richText....

import React from "react";

export const renderRichText = (nodes: any[]) => {
  const renderNode = (node: any, index: number): React.ReactNode => {
    if (node.text !== undefined) {
      let text = node.text;
      if (node.bold) text = <strong key={index}>{text}</strong>;
      if (node.italic) text = <em key={index}>{text}</em>;
      if (node.underline) text = <u key={index}>{text}</u>;
      if (node.code) text = <code key={index}>{text}</code>;
      return text;
    }

    const children = node.children?.map(renderNode) ?? [];

    switch (node.type) {
      case "h1":
        return <h1 key={index}>{children}</h1>;
      case "h2":
        return <h2 key={index}>{children}</h2>;
      case "h3":
        return <h3 key={index}>{children}</h3>;
      case "ul":
        return (
          <ul key={index} className="list-disc ml-6">
            {children}
          </ul>
        );
      case "ol":
        return (
          <ol key={index} className="list-decimal ml-6">
            {children}
          </ol>
        );
      case "li":
        return <li key={index}>{children}</li>;
      case "blockquote":
        return (
          <blockquote
            key={index}
            className="border-l-4 pl-4 italic text-gray-600"
          >
            {children}
          </blockquote>
        );
      case "link":
        return (
          <a key={index} href={node.url} className="text-blue-600 underline">
            {children}
          </a>
        );
      case "paragraph":
      default:
        return <p key={index}>{children}</p>;
    }
  };

  return nodes.map((node, index) => (
    <React.Fragment key={index}>{renderNode(node, index)}</React.Fragment>
  ));
};
