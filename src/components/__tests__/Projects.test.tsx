import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Projects from "@/src/components/Projects";

vi.mock("next/image", () => ({
  default: ({ alt }: { alt: string }) => <div role="img" aria-label={alt} />,
}));

vi.mock("@iconify/react", () => ({
  Icon: ({ icon }: { icon: string }) => <span>{icon}</span>,
}));

describe("Projects", () => {
  it("fetches and renders project cards", async () => {
    const projects = [
      {
        id: 1,
        title: "Portfolio Site",
        description: "Personal website",
        image: "/portfolio.png",
        linkDemo: "https://demo.example.com",
        link: "https://github.com/example/repo",
        techstack: [
          { id: 1, name: "React" },
          { id: 2, name: "Next" },
        ],
      },
    ];

    const fetchMock = vi
      .spyOn(globalThis, "fetch")
      .mockResolvedValue({ json: async () => projects } as Response);
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});

    render(<Projects id="projects" />);

    await waitFor(() => {
      expect(screen.getByText("Portfolio Site")).toBeInTheDocument();
    });

    expect(fetchMock).toHaveBeenCalledWith("/projects.json");
    expect(screen.getByText("Personal website")).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "Portfolio Site" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "View" })).toHaveAttribute(
      "href",
      "https://demo.example.com"
    );
    expect(screen.getByRole("link", { name: "Link Repo" })).toHaveAttribute(
      "href",
      "https://github.com/example/repo"
    );

    fetchMock.mockRestore();
    logSpy.mockRestore();
  });

  it("handles fetch failures without rendering cards", async () => {
    const fetchMock = vi
      .spyOn(globalThis, "fetch")
      .mockRejectedValue(new Error("network"));
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    render(<Projects />);

    await waitFor(() => {
      expect(errorSpy).toHaveBeenCalledWith(
        "Error fetching projects:",
        expect.any(Error)
      );
    });

    expect(screen.queryByText("Portfolio Site")).not.toBeInTheDocument();

    fetchMock.mockRestore();
    errorSpy.mockRestore();
  });
});
