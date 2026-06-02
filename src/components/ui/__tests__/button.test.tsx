import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Button } from "@/src/components/ui/button";

describe("Button", () => {
  it("renders a native button with default variants", () => {
    render(<Button>Click me</Button>);

    const button = screen.getByRole("button", { name: "Click me" });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-main");
    expect(button).toHaveClass("h-10");
  });

  it("supports asChild rendering", () => {
    render(
      <Button asChild variant="neutral" size="sm">
        <a href="#contact">Contact</a>
      </Button>
    );

    const link = screen.getByRole("link", { name: "Contact" });
    expect(link).toHaveAttribute("href", "#contact");
    expect(link.tagName).toBe("A");
    expect(link).toHaveClass("bg-secondary-background");
    expect(link).toHaveClass("h-9");
  });
});
