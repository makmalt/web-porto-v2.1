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
    const hrefs = links.map((link) => link.getAttribute("href"));
    expect(hrefs).toEqual([
      "https://github.com/makmalt",
      "https://www.linkedin.com/in/mochammad-akmal-thoriq/",
      "https://www.instagram.com/makmalt_",
      "mailto:makmalthoriq31@gmail.com",
    ]);
  });
});
