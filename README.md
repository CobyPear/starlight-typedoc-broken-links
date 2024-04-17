# starlight-typedoc broken links repro

TO RUN:

node lts and pnpm should be installed

```bash
pnpm i
pnpm build
pnpm -F starlight dev
```

1. The link to ClassA from ClassAOptions interface works
2. The link in ClassA to ClassAOptions interface does not work
2. The links in ClassB to PackageA are not rendering as links
