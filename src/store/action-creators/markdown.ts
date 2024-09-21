import { marked } from "marked";
import { MarkDownTypes } from "../../types/markdown";


export const renderMarkdown = (markdown: string) => {
  const parsedMarkdown = marked.parse(markdown); 
  return {
    type: MarkDownTypes.PARSEMARKDOWN,
    payload: parsedMarkdown, 
  };
};

