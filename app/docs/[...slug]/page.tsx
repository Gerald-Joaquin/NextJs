export default async function docsPage ({ params, }:
    {
        params: Promise<{ slug: string[]}>;
    }) {
        const {slug} = await params;
        if (slug?.length === 2) {
            return (
                <main>
                    <h1>Viewing Docs for feature {slug[0]} and concept {slug[1]}</h1>
                </main>
            );
        } else if (slug?.length === 1) {
            return (
                <main>
                    <h1>Viewing docs for feature {slug[0]}</h1>;
                </main>
            );
        } return (
            <main>
                <h1>Docs Home Page!</h1>
            </main>
        );
    }