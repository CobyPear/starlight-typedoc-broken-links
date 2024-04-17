import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightTypeDoc, { typeDocSidebarGroup} from "starlight-typedoc";
// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      plugins: [
        starlightTypeDoc({
          entryPoints: ["../packages/*"],
          output: "api",
          tsconfig: "../tsconfig.json",
          sidebar: {
            label: "API Reference",
            collapsed: true,
          },
          typeDoc: {
            entryPointStrategy: "packages",
            useCodeBlocks: true,
            navigationLinks: {
              "Project Page": "https://www.example.com",
            },
          },
        }),
      ],
      title: "My broken links reproduction",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", link: "/guides/example/" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
        typeDocSidebarGroup
      ],
    }),
  ],
});
