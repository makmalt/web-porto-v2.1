import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";

describe("Card primitives", () => {
  it("renders all card slots with custom classes", () => {
    render(
      <Card className="custom-card">
        <CardHeader className="custom-header">
          <CardTitle className="custom-title">Project title</CardTitle>
          <CardDescription className="custom-description">
            Project description
          </CardDescription>
          <CardAction className="custom-action">Action</CardAction>
        </CardHeader>
        <CardContent className="custom-content">Body</CardContent>
        <CardFooter className="custom-footer">Footer</CardFooter>
      </Card>
    );

    expect(screen.getByText("Project title")).toHaveClass("custom-title");
    expect(screen.getByText("Project description")).toHaveClass(
      "custom-description"
    );
    expect(screen.getByText("Action")).toHaveClass("custom-action");
    expect(screen.getByText("Body")).toHaveClass("custom-content");
    expect(screen.getByText("Footer")).toHaveClass("custom-footer");

    const card = screen.getByText("Project title").closest("[data-slot='card']");
    expect(card).toHaveClass("custom-card");
  });
});
