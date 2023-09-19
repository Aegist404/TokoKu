import { Typography } from "@material-tailwind/react";

const SITEMAP = [
  {
    title: "Company",
    links: ["About Us", "Careers", "Our Team", "Projects"],
  },
  {
    title: "Help Center",
    links: ["Discord", "Twitter", "GitHub", "Contact Us"],
  },
  {
    title: "Resources",
    links: ["Blog", "Newsletter", "Free Products", "Affiliate Program"],
  },
  {
    title: "Products",
    links: ["Templates", "UI Kits", "Icons", "Mockups"],
  },
];

const currentYear = new Date().getFullYear();

export function MainFooter() {
  return (
    <>
      <footer className="relative w-full border-t-2">
        <div className="mx-auto w-full max-w-7xl px-8">
          <div className="flex flex-row">
            <div className="mx-auto grid w-full grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
              {SITEMAP.map(({ title, links }, key) => (
                <div key={key} className="w-full">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-4 font-bold uppercase opacity-50"
                  >
                    {title}
                  </Typography>
                  <ul className="space-y-1">
                    {links.map((link, key) => (
                      <Typography key={key} as="li" color="blue-gray" className="font-normal">
                        <a
                          href="#"
                          className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                        >
                          {link}
                        </a>
                      </Typography>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="my-12">
              <img
                src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                alt="Banner"
                className="h-[10em] w-full object-cover rounded-md"
              />
            </div>
          </div>

          <div className="flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
            <Typography
              variant="small"
              className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
            >
              &copy; {currentYear} <a href="https://material-tailwind.com/">Material Tailwind</a>. All
              Rights Reserved.
            </Typography>
          </div>
        </div>
      </footer>
    </>
  );
}