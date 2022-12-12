import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("renders correctly the app", () => {
  render(<App />);
  const title = screen.getByRole("heading", { level: 1 });
  expect(title).toContainHTML("T9 Phone Keypad");
  const keyboard = screen.getAllByRole("button");
  expect(keyboard.length).toBe(9);
});

test("keyboard click resolves with the expected digits and words", async () => {
  render(<App />);
  await userEvent.click(screen.getByText("ABC"));
  await userEvent.click(screen.getByText("DEF"));
  expect(screen.getByText("23")).toBeInTheDocument();
  expect(screen.getByText("ad")).toBeInTheDocument();
  expect(screen.getByText("ae")).toBeInTheDocument();
  expect(screen.getByText("af")).toBeInTheDocument();
  expect(screen.getByText("bd")).toBeInTheDocument();
  expect(screen.getByText("be")).toBeInTheDocument();
  expect(screen.getByText("bf")).toBeInTheDocument();
  expect(screen.getByText("cd")).toBeInTheDocument();
  expect(screen.getByText("ce")).toBeInTheDocument();
  expect(screen.getByText("cf")).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "[X]" })).toBeInTheDocument();
});

test("clear button removes previous digits and words", async () => {
  render(<App />);
  await userEvent.click(screen.getByText("ABC"));
  await userEvent.click(screen.getByText("DEF"));
  await userEvent.click(screen.getByRole("button", { name: "[X]" }));
  expect(screen.queryByText("23")).not.toBeInTheDocument();
  expect(screen.queryByText("ad")).not.toBeInTheDocument();
  expect(screen.queryByText("ae")).not.toBeInTheDocument();
  expect(screen.queryByText("af")).not.toBeInTheDocument();
  expect(screen.queryByText("bd")).not.toBeInTheDocument();
  expect(screen.queryByText("be")).not.toBeInTheDocument();
  expect(screen.queryByText("bf")).not.toBeInTheDocument();
  expect(screen.queryByText("cd")).not.toBeInTheDocument();
  expect(screen.queryByText("ce")).not.toBeInTheDocument();
  expect(screen.queryByText("cf")).not.toBeInTheDocument();
});
