import ProjectDetailPage from "@/features/project-details";

export default async function Page({ params }: { params: { id: string } }) {
    return (
        <ProjectDetailPage params={params} />
    );
}
