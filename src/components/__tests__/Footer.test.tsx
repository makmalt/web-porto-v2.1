import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Footer from "@/src/components/Footer";

describe("Footer", () => {
  it("shows current year and social links", () => {
    render(<Footer />);

    const year = new Date().getFullYear();
    expect(screen.getByText(`© ${year} makmalt`)).toBeInTheDocument();

    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(4);

    expect(screen.getByRole("link", { name: /github/i })).toHaveAttribute(
      "href",
      "https://github.com/makmalt"
    );
    expect(screen.getByRole("link", { name: /linkedin/i })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/mochammad-akmal-thoriq/"
    );
    expect(screen.getByRole("link", { name: /instagram/i })).toHaveAttribute(
      "href",
      "https://www.instagram.com/makmalt_"
    );
    expect(screen.getByRole("link", { name: /envelope/i })).toHaveAttribute(
      "href",
      "mailto:makmalthoriq31@gmail.com"
    );
  });
});
