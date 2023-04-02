import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import EmojiResults from "./EmojiResults";
import SearchInput from "./SearchInput";

let containerDOM, input;

describe("Emoji list tests", () => {
  beforeEach(() => {
    const { container } = render(<EmojiResults />);
    containerDOM = container;
  });
  test("should length of emojiList matches with emojiList.json", async () => {
    expect(
      containerDOM.getElementsByClassName("component-emoji-results")[0]
    ).toBeInTheDocument();
  });

  test("Filter effect works properly", async () => {
    // render(<SearchInput/>);
    
  });
});
