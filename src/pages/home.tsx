import Support from "../sections/Support";
import Security from "../sections/Security";
import Resources from "../sections/Resources";
import Partners from "../sections/Partners";

export default function Home() {
  const sections = [
    { section: "home", Component: Support },
    { section: "about", Component: Security },
    { section: "sevices", Component: Resources },
    { section: "research", Component: Partners },
  ];

  return (
    <div className="h-full w-full overflow-x-hidden overflow-y-auto">
      {sections.map(({ section, Component }) => (
        <div key={section} id={section}>
          <Component />
        </div>
      ))}
    </div>
  );
}
