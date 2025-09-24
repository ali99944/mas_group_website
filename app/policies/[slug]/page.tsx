import PolicyPage from "@/features/policies";

export default async function Page({ params }: { params: { slug: string } }) {
    return (
        <PolicyPage params={params} />
    );
}
