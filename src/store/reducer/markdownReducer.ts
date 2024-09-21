import { MarkDown, MarkDownAction, MarkDownTypes } from "../../types/markdown";


const initialState: MarkDown = {
  renderedMarkdown: "", 
};

export const markdownReducer = (
  state: MarkDown = initialState,
  action: MarkDownAction
): MarkDown => {
  switch (action.type) {
    case MarkDownTypes.PARSEMARKDOWN:
      return { ...state, renderedMarkdown: action.payload }; 

    default:
      return state; 
  }
};
