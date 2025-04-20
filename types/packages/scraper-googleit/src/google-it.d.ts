export default function googleit(query: string, page?: number): Promise<{
    related: string[];
    articles: {
        title: string;
        description: string;
        header: string;
        url: string;
        iconBase64?: string | undefined;
        thumbnail?: string | undefined;
        gif?: string | undefined;
        footer?: string | undefined;
    }[];
    type?: string | undefined;
    title?: string | undefined;
    description?: string | undefined;
}>;
